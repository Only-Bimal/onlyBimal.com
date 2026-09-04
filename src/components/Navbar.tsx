
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import portfolioData from '@/data/portfolioData.json';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { brandName, links: navLinks } = portfolioData.navigation;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-slate-700/60' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a 
              href="#hero" 
              className="text-xl font-bold text-brand-navy dark:text-slate-100 hover:text-brand-blue dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-1"
            >
              {brandName}
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="flex items-baseline space-x-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                    activeSection === link.id
                      ? 'bg-brand-blue text-white dark:bg-blue-600 dark:text-white font-semibold shadow-sm ring-1 ring-brand-blue/20 dark:ring-blue-400/30'
                      : 'text-gray-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pl-2 border-l border-gray-200 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        id="mobile-menu" 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 border-b border-gray-200 dark:border-slate-700 shadow-md' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1.5 sm:px-3 bg-white dark:bg-slate-800">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? 'bg-brand-blue text-white dark:bg-blue-600 dark:text-white font-semibold shadow-sm'
                  : 'text-gray-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
