
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const softwareComponents = [
  { 
    name: "React.js", 
    description: "Frontend web application development"
  },
  { 
    name: "Python", 
    description: "Backend logic and data processing"
  },
  { 
    name: "Firebase", 
    description: "Real-time database and authentication"
  },
  { 
    name: "Twilio API", 
    description: "SMS alert notifications"
  },
  { 
    name: "AWS IoT", 
    description: "Cloud connectivity for IoT devices"
  },
  {
    name: "Chart.js",
    description: "Data visualization for medication logs"
  },
  {
    name: "Redux Toolkit",
    description: "State management for app-wide data sync"
  }
];

const SoftwareTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {softwareComponents.map((component, index) => (
        <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-medical-700">{component.name}</h3>
            <p className="text-gray-600">{component.description}</p>
          </CardContent>
        </Card>
      ))}
      
      <div className="lg:col-span-3">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">GitHub Repository</h3>
          <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-medium text-gray-900">SmartPillPal</h4>
                <p className="text-sm text-gray-500">Open source medication dispenser project</p>
              </div>
              <button className="pill-button px-4 py-2">View on GitHub</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTab;
