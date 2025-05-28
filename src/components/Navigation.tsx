
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Bell, Settings, LogOut, Menu, X } from 'lucide-react';

interface NavigationProps {
  userRole: 'student' | 'educator' | 'admin';
  userName: string;
  onRoleChange: (role: 'student' | 'educator' | 'admin') => void;
}

const Navigation = ({ userRole, userName, onRoleChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">VEDA</h1>
              <p className="text-xs text-gray-500">Void Emotion Detection Analysis</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2">
              <Button
                variant={userRole === 'student' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRoleChange('student')}
              >
                Student
              </Button>
              <Button
                variant={userRole === 'educator' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRoleChange('educator')}
              >
                Educator
              </Button>
              <Button
                variant={userRole === 'admin' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRoleChange('admin')}
              >
                Admin
              </Button>
            </div>
            
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-gray-700">{userName}</span>
            </div>
            
            <Button variant="ghost" size="sm">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Button
                variant={userRole === 'student' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRoleChange('student')}
                className="justify-start"
              >
                Student Portal
              </Button>
              <Button
                variant={userRole === 'educator' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRoleChange('educator')}
                className="justify-start"
              >
                Educator Dashboard
              </Button>
              <Button
                variant={userRole === 'admin' ? 'default' : 'outline'}
                size="sm"
                onClick={() => onRoleChange('admin')}
                className="justify-start"
              >
                Admin Panel
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
