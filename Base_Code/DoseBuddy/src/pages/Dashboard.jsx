
import React from 'react';
import Navbar from '@/components/Navbar';
import MedicationChart from '@/components/MedicationChart';
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [isConnected, setIsConnected] = React.useState(false);
  const [medications, setMedications] = React.useState([
    { id: 1, name: "Aspirin", time: "8:00 AM", dosage: "100mg", status: "Taken" },
    { id: 2, name: "Vitamin D", time: "12:00 PM", dosage: "1000 IU", status: "Scheduled" },
    { id: 3, name: "Metformin", time: "6:00 PM", dosage: "500mg", status: "Scheduled" }
  ]);

  React.useEffect(() => {
    // Simulating a Firebase connection
    setTimeout(() => {
      setIsConnected(true);
      toast({
        title: "Connected to database",
        description: "Successfully connected to Firebase real-time database",
      });
    }, 1500);
    
    // Add event listener for medication updates (simulating Firebase listeners)
    const handleMedicationUpdate = () => {
      console.log("Medication data updated from Firebase");
    };
    
    // Cleanup function
    return () => {
      console.log("Disconnecting from Firebase");
    };
  }, []);

  const sendReminder = (medicationName) => {
    toast({
      title: "SMS Reminder Sent",
      description: `Reminder for ${medicationName} has been sent via Twilio`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Patient Dashboard</h1>
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm text-gray-600">{isConnected ? 'Connected to Firebase' : 'Connecting...'}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Medication Adherence</h2>
                <MedicationChart />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Today's Schedule</h2>
                  <span className="text-sm text-gray-500">Auto-refresh enabled</span>
                </div>
                <div className="space-y-4">
                  {medications.map((med) => (
                    <div key={med.id} className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50">
                      <div>
                        <h3 className="font-medium">{med.name}</h3>
                        <p className="text-sm text-gray-600">{med.time} • {med.dosage}</p>
                      </div>
                      <div className="flex items-center">
                        <span className={`px-2 py-1 rounded text-xs mr-2 ${
                          med.status === 'Taken' ? 'bg-green-100 text-green-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {med.status}
                        </span>
                        <button 
                          onClick={() => sendReminder(med.name)}
                          className="text-xs bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded"
                        >
                          Send SMS
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm mt-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-3">API Status</h2>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Express.js API</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Firebase Realtime DB</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Connected</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Twilio SMS API</span>
                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">Ready</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
