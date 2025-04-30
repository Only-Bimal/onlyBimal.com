
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-light to-white -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl font-bold text-brand-navy mb-4">Bimal </h1>
            <h2 className="text-2xl text-brand-blue mb-6">DevOps Engineer & Cloud Architect</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              I'm a seasoned Solutions Architect with over 15 years of experience specializing in
              designing, implementing, and deploying solutions across multiple verticals and for multiple clients. I'm passionate about
              automating processes and building resilient systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-brand-blue hover:bg-brand-navy text-white">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-navy/20 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="DevOps Illustration" 
                className="rounded-lg shadow-xl relative z-10 transform -rotate-3 transition-transform hover:rotate-0 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
