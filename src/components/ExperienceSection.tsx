
import React from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({ title, company, period, location, description }) => {
  return (
    <div className="experience-card">
      <h3 className="text-xl font-semibold text-brand-navy">{title}</h3>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
        <p className="text-brand-blue font-medium">{company}</p>
        <div className="text-sm text-gray-500">
          <span>{period}</span>
          <span className="mx-2">•</span>
          <span>{location}</span>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {description.map((item, index) => (
          <li key={index} className="pl-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Leapfrog Technology Inc.",
      period: "Jun 2021 - Present",
      location: "Kathmandu, Nepal",
      description: [
        "Led AWS cloud migration for key projects, resulting in 30% reduced infrastructure costs and improved scalability.",
        "Implemented CI/CD pipelines using GitHub Actions, decreasing deployment time by 40% and reducing manual errors.",
        "Managed Kubernetes clusters and deployed microservices using Helm, improving application resilience and scalability.",
        "Automated infrastructure provisioning with Terraform, ensuring consistency across environments.",
        "Collaborated with development teams to enhance application monitoring and alerting using Prometheus and Grafana."
      ]
    },
    {
      title: "Software Engineer",
      company: "Leapfrog Technology Inc.",
      period: "Mar 2018 - Jun 2021",
      location: "Kathmandu, Nepal",
      description: [
        "Developed and maintained backend APIs using Node.js and Express, supporting critical business functions.",
        "Collaborated with cross-functional teams to implement new features and improve existing functionality.",
        "Participated in code reviews, ensuring high code quality and adherence to best practices.",
        "Worked closely with DevOps to streamline deployment processes and troubleshoot production issues."
      ]
    },
    {
      title: "Software Engineer",
      company: "BG SOFT Ltd.",
      period: "Apr 2016 - Feb 2018",
      location: "Kathmandu, Nepal",
      description: [
        "Built and maintained web applications using React and Node.js, delivering products that met client specifications.",
        "Contributed to the design and implementation of database schemas and API architectures.",
        "Worked in an agile development environment, participating in sprint planning, daily standups, and retrospectives.",
        "Collaborated with design team to implement responsive UI components."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-2">
          {experiences.map((exp, index) => (
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
