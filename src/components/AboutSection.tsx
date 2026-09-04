import React from "react";
import portfolioData from "@/data/portfolioData.json";

const AboutSection: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="bg-white dark:bg-slate-800 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{about.sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-700 dark:text-slate-300 mb-4 transition-colors">
              {about.intro}
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-slate-300 mb-4 space-y-1 transition-colors">
              {about.highlights.map((highlight, index) => (
                <li key={index}>
                  <strong className="text-gray-900 dark:text-slate-100">{highlight.title}</strong>: {highlight.description}
                </li>
              ))}
            </ul>
            {about.additionalParagraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className={`text-gray-700 dark:text-slate-300 transition-colors ${index < about.additionalParagraphs.length - 1 ? 'mb-4' : ''}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-brand-light dark:bg-slate-700/60 dark:border dark:border-slate-600/50 rounded-lg p-6 shadow-sm h-fit transition-colors">
            <h3 className="text-xl font-semibold text-brand-navy dark:text-slate-100 mb-4 transition-colors">
              {about.keyAreasTitle}
            </h3>
            <ul className="space-y-2 text-gray-800 dark:text-slate-200 transition-colors">
              {about.keyAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-brand-blue dark:text-blue-400">•</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
