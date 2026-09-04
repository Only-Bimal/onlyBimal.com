
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolioData from '@/data/portfolioData.json';

const HeroSection: React.FC = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-light to-white dark:from-slate-800 dark:via-[#1a2436] dark:to-[#161f2e] -z-10 transition-colors duration-200"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-up">
            <h1 className="text-5xl font-bold text-brand-navy dark:text-slate-100 mb-4 transition-colors">{hero.name}</h1>
            <h2 className="text-2xl text-brand-blue dark:text-blue-400 font-semibold mb-6 transition-colors">{hero.title}</h2>
            <p className="text-lg text-gray-700 dark:text-slate-300 mb-8 max-w-xl transition-colors">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-brand-blue hover:bg-brand-navy text-white">
                <a href={hero.primaryCta.href}>{hero.primaryCta.text}</a>
              </Button>
              <Button asChild variant="outline" className="border-brand-blue dark:border-blue-400 text-brand-blue dark:text-blue-400 hover:bg-brand-blue hover:text-white dark:hover:bg-brand-blue dark:hover:text-white transition-colors">
                <a href={hero.secondaryCta.href} download>
                  <Download className="mr-2 h-4 w-4" />
                  {hero.secondaryCta.text}
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-navy/20 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-lg transform rotate-3"></div>
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                width={hero.image.width}
                height={hero.image.height}
                loading="eager"
                fetchPriority="high"
                className="rounded-lg shadow-xl relative z-10 transform -rotate-3 transition-transform hover:rotate-0 duration-300 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
