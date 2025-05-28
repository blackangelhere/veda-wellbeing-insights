
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, BookOpen, Target, Clock } from 'lucide-react';

const ProgressTracker = () => {
  const gradeData = [
    { week: 'Week 1', grade: 85, attendance: 95 },
    { week: 'Week 2', grade: 78, attendance: 90 },
    { week: 'Week 3', grade: 92, attendance: 100 },
    { week: 'Week 4', grade: 88, attendance: 85 },
    { week: 'Week 5', grade: 91, attendance: 95 },
    { week: 'Week 6', grade: 84, attendance: 90 },
  ];

  const stats = [
    { icon: BookOpen, label: 'Assignments Completed', value: '12/15', percentage: 80 },
    { icon: Target, label: 'Course Progress', value: '73%', percentage: 73 },
    { icon: Clock, label: 'Attendance Rate', value: '92%', percentage: 92 },
    { icon: TrendingUp, label: 'Grade Average', value: '86.3', percentage: 86 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Academic Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-600">{stat.value}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{stat.label}</p>
                <Progress value={stat.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={gradeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="grade" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Grade Average"
                />
                <Line 
                  type="monotone" 
                  dataKey="attendance" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Attendance %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-green-800">Assignment Submitted</p>
                <p className="text-sm text-green-600">Data Structures Project - Chapter 5</p>
              </div>
              <span className="text-xs text-green-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-blue-800">Quiz Completed</p>
                <p className="text-sm text-blue-600">Statistics Quiz 3 - Score: 92%</p>
              </div>
              <span className="text-xs text-blue-500">1 day ago</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-yellow-800">Upcoming Deadline</p>
                <p className="text-sm text-yellow-600">Research Paper Draft Due</p>
              </div>
              <span className="text-xs text-yellow-500">in 3 days</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracker;
