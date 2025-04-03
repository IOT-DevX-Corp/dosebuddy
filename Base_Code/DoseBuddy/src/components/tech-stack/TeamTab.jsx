
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Hardware Engineer",
    contribution: "ESP32 programming and servo motor integration"
  },
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    contribution: "React.js application and mobile responsiveness"
  },
  {
    name: "Miguel Rodriguez",
    role: "Backend Developer",
    contribution: "Python backend and Firebase integration"
  },
  {
    name: "Priya Patel",
    role: "UX Designer",
    contribution: "UI/UX design and user research"
  }
];

const TeamTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {teamMembers.map((member, index) => (
        <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-1 text-medical-700">{member.name}</h3>
            <p className="text-medical-500 font-medium mb-3">{member.role}</p>
            <p className="text-gray-600">{member.contribution}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TeamTab;
