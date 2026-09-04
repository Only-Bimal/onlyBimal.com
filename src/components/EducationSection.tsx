import React from "react";
import portfolioData from "@/data/portfolioData.json";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  period,
  location,
  description,
}) => {
  return (
    <div className="experience-card">
      <h3 className="text-xl font-semibold text-brand-navy dark:text-slate-100 transition-colors">{degree}</h3>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <p className="text-brand-blue dark:text-blue-400 font-medium transition-colors">{institution}</p>
        <div className="text-sm text-gray-500 dark:text-slate-400 transition-colors">
          <span>{period}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
      </div>
      {description && <p className="text-gray-700 dark:text-slate-300 transition-colors">{description}</p>}
    </div>
  );
};

const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="bg-gray-50 dark:bg-[#182234] content-auto transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">{education.sectionTitle}</h2>

        <h3 className="text-2xl font-semibold text-brand-navy dark:text-slate-100 mb-4 transition-colors">
          {education.educationHeading}
        </h3>
        <div className="mb-8">
          {education.items.map((edu, index) => (
            <EducationItem
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              location={edu.location}
              description={edu.description}
            />
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-brand-navy dark:text-slate-100 mb-4 transition-colors">
          {education.certificationsHeading}
        </h3>
        <div>
          {education.certifications.map((cert, index) => (
            <EducationItem
              key={index}
              degree={cert.degree}
              institution={cert.institution}
              period={cert.period}
              location={cert.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
