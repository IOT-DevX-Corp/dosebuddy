
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "My grandmother never forgets her medicine now. This has made her life so much easier!",
    name: "Sarah Johnson",
    role: "Granddaughter & Caregiver",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    quote: "As a doctor, I can now ensure my patients take their medicine on time. The remote monitoring feature has improved adherence significantly.",
    name: "Dr. Michael Chen",
    role: "Geriatric Physician",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    quote: "I manage multiple medications for my condition, and this device has eliminated all the confusion. The alerts are a lifesaver!",
    name: "Robert Garcia",
    role: "Patient with Chronic Condition",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    quote: "Even though I live across the country, I can monitor my father's medication schedule. It gives me peace of mind.",
    name: "Jennifer Kim",
    role: "Remote Caregiver",
    image: "/placeholder.svg"
  },
];

const TestimonialCard = ({ testimonial, className }) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg className="h-8 w-8 text-medical-300" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-gray-700 italic flex-grow">{testimonial.quote}</p>
        <div className="mt-6 flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 mb-4 text-gray-900">What People Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            SmartPillPal is making a real difference in people's lives.
            Here's what our users have to say about their experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              className={`transform transition-transform ${
                index % 2 === 0 ? 'hover:translate-y-2' : 'hover:-translate-y-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
