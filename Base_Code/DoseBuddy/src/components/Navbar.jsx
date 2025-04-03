
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { X, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-medical-600 font-bold text-xl">Dose<span className="text-medical-500">Buddy</span></span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-600 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">How it Works</a>
              <a href="#features" className="text-gray-600 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-medical-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="pill-button">
              Get Early Access
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-medical-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <a href="#home" className="text-gray-600 hover:text-medical-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-medical-600 block px-3 py-2 rounded-md text-base font-medium">How it Works</a>
          <a href="#features" className="text-gray-600 hover:text-medical-600 block px-3 py-2 rounded-md text-base font-medium">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-medical-600 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-medical-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          <div className="pt-2">
            <Button className="pill-button w-full">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
