
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-navy text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Bimal Bhattarai</h3>
            <p className="text-gray-300">DevOps Engineer & Cloud Architect</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300">&copy; {currentYear} Bimal Bhattarai. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-1">
              Crafted with passion and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
