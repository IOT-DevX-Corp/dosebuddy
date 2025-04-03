
import React from 'react';
import MedicationChart from '../MedicationChart';

const AnalyticsTab = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Data Visualization</h3>
        <p className="text-gray-600 mb-4">
          Our application uses Chart.js to visualize medication adherence data, making it easy 
          for users and caregivers to track patterns and ensure medication compliance.
        </p>
      </div>
      
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <MedicationChart />
      </div>
      
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2 text-gray-800">Analytics Features</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <li className="flex items-start gap-2">
            <div className="bg-medical-100 p-2 rounded-md text-medical-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
            </div>
            <div>
              <h5 className="font-medium text-gray-900">History Tracking</h5>
              <p className="text-gray-600 text-sm">View medication history with detailed charts and trends</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-medical-100 p-2 rounded-md text-medical-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-ring"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path></svg>
            </div>
            <div>
              <h5 className="font-medium text-gray-900">Smart Alerts</h5>
              <p className="text-gray-600 text-sm">AI-powered notifications based on adherence patterns</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-medical-100 p-2 rounded-md text-medical-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
            </div>
            <div>
              <h5 className="font-medium text-gray-900">Data Export</h5>
              <p className="text-gray-600 text-sm">Download reports for healthcare providers</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <div className="bg-medical-100 p-2 rounded-md text-medical-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gauge"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
            </div>
            <div>
              <h5 className="font-medium text-gray-900">Performance Metrics</h5>
              <p className="text-gray-600 text-sm">Track dispenser reliability and medication status</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsTab;
