
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              I'm always open to discussing new projects, opportunities, or partnerships.
              Feel free to reach out to me through any of the channels below.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:contact@bimalbhattarai.com" 
                className="flex items-center text-gray-700 hover:text-brand-blue transition-colors"
              >
                <Mail className="mr-3 h-5 w-5" />
                <span>contact@bimalbhattarai.com</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/onlybimal/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-700 hover:text-brand-blue transition-colors"
              >
                <Linkedin className="mr-3 h-5 w-5" />
                <span>linkedin.com/in/onlybimal</span>
              </a>
              
              <a 
                href="https://github.com/onlybimal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-gray-700 hover:text-brand-blue transition-colors"
              >
                <Github className="mr-3 h-5 w-5" />
                <span>github.com/onlybimal</span>
              </a>
            </div>
          </div>
          
          <div className="bg-brand-light rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="w-full bg-brand-blue hover:bg-brand-navy text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
