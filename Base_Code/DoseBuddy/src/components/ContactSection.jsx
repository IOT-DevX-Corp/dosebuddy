
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How many pills can the dispenser hold?",
    answer: "The SmartPillPal can hold up to 30 days worth of medication in 4 separate compartments for different medications."
  },
  {
    question: "Is the SmartPillPal secure from children?",
    answer: "Yes, the dispenser includes child-proof locks and optional biometric security to prevent unauthorized access."
  },
  {
    question: "How are caregivers notified of missed doses?",
    answer: "Caregivers receive real-time notifications through the mobile app, SMS, or email based on their preference settings."
  },
  {
    question: "Can the SmartPillPal be used for multiple users?",
    answer: "Currently, each dispenser is designed for a single user, but multiple dispensers can be managed through one caregiver account."
  },
  {
    question: "What happens during a power outage?",
    answer: "The SmartPillPal includes a backup battery that can last up to 72 hours during a power outage."
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4 text-gray-900">Get Early Access</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our beta testing program and be among the first to experience the future of medication management.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <Label htmlFor="interest">I'm interested as a</Label>
                  <select id="interest" className="w-full rounded-md border border-gray-300 p-2">
                    <option>Patient</option>
                    <option>Caregiver</option>
                    <option>Healthcare Provider</option>
                    <option>Distributor/Partner</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us more about your needs..." />
                </div>
                <Button className="pill-button w-full">Submit Request</Button>
              </form>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-4">Join Our Community</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1">
                    Discord
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Twitter
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Newsletter Subscription</h4>
              <p className="text-gray-600 mb-4">
                Subscribe to receive updates on our launch and early access opportunities.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="your.email@example.com" className="flex-1" />
                <Button className="pill-button">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
