
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const hardwareComponents = [
  { 
    name: "ESP32", 
    description: "Main microcontroller for processing and connectivity"
  },
  { 
    name: "Servo Motor", 
    description: "For precise pill dispensing mechanism"
  },
  { 
    name: "LED Indicators", 
    description: "Multi-color LEDs for visual alerts"
  },
  { 
    name: "Speaker", 
    description: "For audible reminders and alerts"
  },
  { 
    name: "LCD Display", 
    description: "Shows current status and medication info"
  }
];

const HardwareTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hardwareComponents.map((component, index) => (
        <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-medical-700">{component.name}</h3>
            <p className="text-gray-600">{component.description}</p>
          </CardContent>
        </Card>
      ))}
      
      <div className="lg:col-span-3">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Hardware Schematic</h3>
          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
            <p className="text-gray-500">[Hardware Circuit Diagram Placeholder]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareTab;
