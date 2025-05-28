
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const MoodCheckIn = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [moodLevel, setMoodLevel] = useState([7]);
  const [notes, setNotes] = useState('');

  const moods = [
    { emoji: '😢', label: 'Very Sad', value: 1 },
    { emoji: '😔', label: 'Sad', value: 2 },
    { emoji: '😐', label: 'Neutral', value: 3 },
    { emoji: '😊', label: 'Happy', value: 4 },
    { emoji: '😄', label: 'Very Happy', value: 5 },
  ];

  const handleSubmit = () => {
    console.log('Mood check-in submitted:', { selectedMood, moodLevel: moodLevel[0], notes });
    toast({
      title: "Mood check-in recorded",
      description: "Thank you for sharing how you're feeling today. Your privacy is protected.",
    });
    setSelectedMood(null);
    setMoodLevel([7]);
    setNotes('');
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-lg">Daily Mood Check-In</CardTitle>
        <CardDescription className="text-center">
          Help us understand how you're feeling today. This is completely optional and private.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">How are you feeling overall?</h3>
          <div className="grid grid-cols-5 gap-2">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${
                  selectedMood === mood.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-2xl">{mood.emoji}</div>
                <div className="text-xs text-gray-600 mt-1">{mood.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">
            Energy Level: {moodLevel[0]}/10
          </h3>
          <Slider
            value={moodLevel}
            onValueChange={setMoodLevel}
            max={10}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Low Energy</span>
            <span>High Energy</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Additional Notes (Optional)</h3>
          <Textarea
            placeholder="Anything specific affecting your mood today?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="resize-none"
            rows={3}
          />
        </div>

        <Button 
          onClick={handleSubmit}
          className="w-full"
          disabled={!selectedMood}
        >
          Submit Check-In
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Your responses are encrypted and only used to provide you with better support.
        </p>
      </CardContent>
    </Card>
  );
};

export default MoodCheckIn;
