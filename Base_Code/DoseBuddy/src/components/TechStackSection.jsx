
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechStackHeader from './tech-stack/TechStackHeader';
import HardwareTab from './tech-stack/HardwareTab';
import SoftwareTab from './tech-stack/SoftwareTab';
import AnalyticsTab from './tech-stack/AnalyticsTab';
import TeamTab from './tech-stack/TeamTab';

const TechStackSection = () => {
  return (
    <section id="tech" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <TechStackHeader />
        
        <Tabs defaultValue="hardware" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="hardware" className="px-8">Hardware</TabsTrigger>
              <TabsTrigger value="software" className="px-8">Software</TabsTrigger>
              <TabsTrigger value="analytics" className="px-8">Analytics</TabsTrigger>
              <TabsTrigger value="team" className="px-8">Team</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="hardware">
            <HardwareTab />
          </TabsContent>
          
          <TabsContent value="software">
            <SoftwareTab />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsTab />
          </TabsContent>
          
          <TabsContent value="team">
            <TeamTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TechStackSection;
