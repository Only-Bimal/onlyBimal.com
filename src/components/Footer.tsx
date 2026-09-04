
import React from 'react';
import portfolioData from '@/data/portfolioData.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { footer } = portfolioData;
  
  return (
    <footer className="bg-brand-navy dark:bg-[#131c2e] dark:border-t dark:border-slate-700/80 text-white py-8 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white dark:text-slate-100">{footer.name}</h3>
            <p className="text-gray-300 dark:text-slate-400">{footer.title}</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-300 dark:text-slate-400">&copy; {currentYear} {footer.name}. {footer.copyrightText}</p>
            <p className="text-sm text-gray-400 dark:text-slate-500 mt-1">
              {footer.tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
