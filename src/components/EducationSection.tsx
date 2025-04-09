
import React from 'react';
import { Book } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, period, location, description }) => {
  return (
    <div className="experience-card">
      <h3 className="text-xl font-semibold text-brand-navy">{degree}</h3>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <p className="text-brand-blue font-medium">{institution}</p>
        <div className="text-sm text-gray-500">
          <span>{period}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
      </div>
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
};

const EducationSection: React.FC = () => {
  const educations = [
    {
      degree: "Bachelor of Science in Computer Science and Information Technology",
      institution: "Tribhuvan University",
      period: "2012 - 2016",
      location: "Kathmandu, Nepal",
      description: "Focused on software engineering, data structures, algorithms, and web development. Participated in various hackathons and programming competitions."
    }
  ];

  const certifications = [
    {
      degree: "AWS Certified Solutions Architect - Associate",
      institution: "Amazon Web Services",
      period: "2021",
      location: "Online"
    },
    {
      degree: "Certified Kubernetes Administrator (CKA)",
      institution: "Cloud Native Computing Foundation",
      period: "2022",
      location: "Online"
    },
    {
      degree: "Terraform Associate",
      institution: "HashiCorp",
      period: "2022",
      location: "Online"
    }
  ];

  return (
    <section id="education" className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Education & Certifications</h2>
        
        <h3 className="text-2xl font-semibold text-brand-navy mb-4">Education</h3>
        <div className="mb-8">
          {educations.map((edu, index) => (
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
        
        <h3 className="text-2xl font-semibold text-brand-navy mb-4">Certifications</h3>
        <div>
          {certifications.map((cert, index) => (
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
