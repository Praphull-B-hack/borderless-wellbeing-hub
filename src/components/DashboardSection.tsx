
import React from 'react';
import { Activity, Calendar, Users, Bell, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-poppins mb-4">
            Your Personal Wellness Dashboard
          </h2>
          <div className="w-20 h-1 bg-wellness-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get a comprehensive view of your wellness journey with personalized insights, 
            progress tracking, and easy access to all our services.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, Sarah!</h3>
                <p className="text-gray-600">Here's your wellness overview for today</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center space-x-2 bg-wellness-green-100 px-4 py-2 rounded-lg">
                  <div className="w-3 h-3 bg-wellness-green-500 rounded-full"></div>
                  <span className="text-wellness-green-700 font-medium">All systems healthy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-wellness-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-wellness-blue-200 transition-colors">
                  <Activity className="h-6 w-6 text-wellness-blue-600" />
                </div>
                <p className="font-medium text-gray-900">Wellness Tracker</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-wellness-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-wellness-green-200 transition-colors">
                  <Calendar className="h-6 w-6 text-wellness-green-600" />
                </div>
                <p className="font-medium text-gray-900">Book Consultation</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <p className="font-medium text-gray-900">Join Community</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                  <Bell className="h-6 w-6 text-orange-600" />
                </div>
                <p className="font-medium text-gray-900">Notifications</p>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Health Metrics */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <Heart className="h-5 w-5 text-red-500 mr-2" />
                  Health Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Heart Rate</span>
                    <span className="font-semibold text-gray-900">72 BPM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Steps Today</span>
                    <span className="font-semibold text-gray-900">8,456</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sleep Quality</span>
                    <span className="font-semibold text-wellness-green-600">Good</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Progress */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <TrendingUp className="h-5 w-5 text-wellness-blue-500 mr-2" />
                  Weekly Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">Meditation</span>
                      <span className="text-gray-900 text-sm">5/7 days</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-wellness-blue-500 h-2 rounded-full" style={{ width: '71%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600 text-sm">Exercise</span>
                      <span className="text-gray-900 text-sm">4/5 days</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-wellness-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Activities */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 text-wellness-green-500 mr-2" />
                  Upcoming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-wellness-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Therapy Session</p>
                      <p className="text-xs text-gray-600">Today, 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-wellness-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Yoga Class</p>
                      <p className="text-xs text-gray-600">Tomorrow, 7:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Group Support</p>
                      <p className="text-xs text-gray-600">Friday, 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
