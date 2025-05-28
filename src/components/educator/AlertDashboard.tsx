
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, TrendingDown, Clock, MessageCircle } from 'lucide-react';

const AlertDashboard = () => {
  const alerts = [
    {
      id: 1,
      studentId: 'STU001',
      studentName: 'Alex Johnson',
      riskLevel: 'high',
      alerts: ['3 consecutive absences', 'Declining grades', 'No recent submissions'],
      lastActivity: '5 days ago',
      trend: 'decreasing'
    },
    {
      id: 2,
      studentId: 'STU002', 
      studentName: 'Sarah Chen',
      riskLevel: 'medium',
      alerts: ['Late submissions', 'Mood check-in shows stress'],
      lastActivity: '2 days ago',
      trend: 'stable'
    },
    {
      id: 3,
      studentId: 'STU003',
      studentName: 'Michael Rodriguez',
      riskLevel: 'low',
      alerts: ['Missed one assignment'],
      lastActivity: '1 day ago',
      trend: 'improving'
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'decreasing': return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'improving': return <TrendingDown className="h-4 w-4 text-green-500 rotate-180" />;
      default: return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-red-600">3</p>
                <p className="text-sm text-gray-600">High Risk Students</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-yellow-600">7</p>
                <p className="text-sm text-gray-600">Medium Risk Students</p>
              </div>
              <TrendingDown className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-sm text-gray-600">Follow-ups Pending</p>
              </div>
              <MessageCircle className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Risk Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-medium">{alert.studentName}</h3>
                    <Badge className={getRiskColor(alert.riskLevel)}>
                      {alert.riskLevel.toUpperCase()} RISK
                    </Badge>
                    {getTrendIcon(alert.trend)}
                  </div>
                  <span className="text-sm text-gray-500">{alert.lastActivity}</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {alert.alerts.map((alertText, index) => (
                    <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {alertText}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    View Profile
                  </Button>
                  <Button size="sm">
                    Schedule Check-in
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertDashboard;
