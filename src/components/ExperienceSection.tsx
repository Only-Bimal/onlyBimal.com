import React from "react";
import portfolioData from "@/data/portfolioData.json";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  title,
  company,
  period,
  location,
  description,
}) => {
  return (
    <div className="experience-card">
      <h3 className="text-xl font-semibold text-brand-navy dark:text-slate-100 transition-colors">{title}</h3>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <p className="text-brand-blue dark:text-blue-400 font-medium transition-colors">{company}</p>
        <div className="text-sm text-gray-500 dark:text-slate-400 transition-colors">
          <span>{period}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-slate-300 transition-colors">
        {description.map((item, index) => (
          <li key={index} className="pl-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="bg-gray-50 dark:bg-[#182234] content-auto transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{experience.sectionTitle}</h2>
        <div className="space-y-2">
          {experience.items.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              location={exp.location}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
