
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Shield, Database, Activity } from 'lucide-react';

const SystemOverview = () => {
  const systemStats = [
    { icon: Users, label: 'Total Active Users', value: '1,247', change: '+12%' },
    { icon: Database, label: 'Data Points Collected', value: '89.2K', change: '+8%' },
    { icon: Shield, label: 'Privacy Compliance', value: '100%', change: '0%' },
    { icon: Activity, label: 'System Uptime', value: '99.9%', change: '+0.1%' },
  ];

  const enrollmentData = [
    { month: 'Jan', students: 980, educators: 45 },
    { month: 'Feb', students: 1020, educators: 48 },
    { month: 'Mar', students: 1100, educators: 52 },
    { month: 'Apr', students: 1180, educators: 55 },
    { month: 'May', students: 1247, educators: 58 },
  ];

  const riskDistribution = [
    { name: 'Low Risk', value: 78, color: '#10b981' },
    { name: 'Medium Risk', value: 18, color: '#f59e0b' },
    { name: 'High Risk', value: 4, color: '#ef4444' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-xs text-green-600 mt-1">{stat.change} this month</p>
                </div>
                <stat.icon className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Growth Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={enrollmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="students" fill="#3b82f6" name="Students" />
                  <Bar dataKey="educators" fill="#10b981" name="Educators" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Level Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Health Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Database Performance</span>
                <span className="text-sm text-gray-600">94%</span>
              </div>
              <Progress value={94} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">API Response Time</span>
                <span className="text-sm text-gray-600">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Data Processing Efficiency</span>
                <span className="text-sm text-gray-600">91%</span>
              </div>
              <Progress value={91} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Security Compliance</span>
                <span className="text-sm text-gray-600">100%</span>
              </div>
              <Progress value={100} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SystemOverview;
