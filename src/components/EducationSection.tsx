import React from "react";
import { Book } from "lucide-react";

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
      degree: "Master of Computer Applications (MCA)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      period: "2004 - 2008",
      location: "New Delhi, India",
      description:
        "Focused on software development, database management, and web technologies. Developed a live project on 'CyberCafe Management System'.",
    },
    {
      degree: "Post Graduate Diploma in Computer Applications (PGDCA)",
      institution: "Indira Gandhi National Open University (IGNOU)",
      period: "2004 - 2006",
      location: "New Delhi, India",
      description:
        "Completed a comprehensive program covering various aspects of computer applications and programming.",
    },
    {
      degree: "‘A’ Level Certification in Computer Science",
      institution: "DOEACC Society",
      period: "2004",
      location: "New Delhi, India",
      description:
        "Completed a comprehensive program covering various aspects of computer applications and programming.",
    },
  ];

  const certifications = [
    {
      degree: "Appian Foundation Certification",
      institution: "Appian",
      period: "2021",
      location: "Online",
    },
    {
      degree: "Appian Developer Certification",
      institution: "Appian",
      period: "2021",
      location: "Online",
    },
    {
      degree: "AWS Certified Cloud Practitioner ",
      institution: "Amazon Web Services",
      period: "2021",
      location: "Online",
    },
    {
      degree: "UiPath RPA Solution Architect",
      institution: "UiPath",
      period: "2020",
      location: "Online",
    },
    {
      degree: "UiPath RPA Business Analyst",
      institution: "UiPath",
      period: "2020",
      location: "Online",
    },
    {
      degree: "UiPath Developer Foundation ",
      institution: "UiPath",
      period: "2018",
      location: "Online",
    },
  ];

  return (
    <section id="education" className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Education & Certifications</h2>

        <h3 className="text-2xl font-semibold text-brand-navy mb-4">
          Education
        </h3>
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

        <h3 className="text-2xl font-semibold text-brand-navy mb-4">
          Certifications
        </h3>
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
