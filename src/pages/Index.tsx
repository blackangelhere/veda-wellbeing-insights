
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MoodCheckIn from '@/components/student/MoodCheckIn';
import ProgressTracker from '@/components/student/ProgressTracker';
import AlertDashboard from '@/components/educator/AlertDashboard';
import SystemOverview from '@/components/admin/SystemOverview';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Heart, Shield, Brain, Users } from 'lucide-react';

const Index = () => {
  const [userRole, setUserRole] = useState<'student' | 'educator' | 'admin'>('student');
  const [userName] = useState('Demo User');

  const renderStudentDashboard = () => (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your Personal Dashboard</h2>
        <p className="text-gray-600">
          Track your progress, check in with your mood, and access resources for your well-being.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <MoodCheckIn />
        </div>
        <div className="lg:col-span-2">
          <ProgressTracker />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Privacy & Settings</CardTitle>
          <CardDescription>
            Control what data you share and how you participate in the VEDA system.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Mood Tracking</p>
              <p className="text-sm text-gray-600">Allow daily mood check-ins</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Academic Progress Sharing</p>
              <p className="text-sm text-gray-600">Share progress with counselors</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">IoT Device Integration</p>
              <p className="text-sm text-gray-600">Connect wearable devices (optional)</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEducatorDashboard = () => (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Educator Dashboard</h2>
        <p className="text-gray-600">
          Monitor student engagement and identify those who may need additional support.
        </p>
      </div>
      <AlertDashboard />
    </div>
  );

  const renderAdminDashboard = () => (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Admin Control Panel</h2>
        <p className="text-gray-600">
          Manage system performance, user access, and monitor overall platform health.
        </p>
      </div>
      <SystemOverview />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation userRole={userRole} userName={userName} onRoleChange={setUserRole} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userRole === 'student' && renderStudentDashboard()}
        {userRole === 'educator' && renderEducatorDashboard()}
        {userRole === 'admin' && renderAdminDashboard()}
      </main>

      {/* Platform Overview Section */}
      <section className="bg-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy-First Mental Health Monitoring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              VEDA combines academic analytics with optional mood tracking to help 
              educators provide timely, supportive interventions while respecting student privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Well-being Focus</h3>
              <p className="text-gray-600">
                Optional mood tracking and mental health resources to support student wellness.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy-First</h3>
              <p className="text-gray-600">
                GDPR and FERPA compliant with end-to-end encryption and consent-driven participation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Analytics</h3>
              <p className="text-gray-600">
                ML-powered pattern recognition to identify early signs of disengagement.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Supportive Community</h3>
              <p className="text-gray-600">
                Connect students with educators and counselors for timely interventions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
