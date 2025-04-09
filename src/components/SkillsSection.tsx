
import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-brand-navy mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud Platform", "Digital Ocean"]
    },
    {
      title: "Containerization & Orchestration",
      skills: ["Docker", "Kubernetes", "Helm", "ECS", "AKS"]
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "CloudFormation", "Pulumi", "AWS CDK"]
    },
    {
      title: "CI/CD",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI", "ArgoCD"]
    },
    {
      title: "Configuration Management",
      skills: ["Ansible", "Chef", "Puppet"]
    },
    {
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Datadog"]
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Go", "Bash"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Redis"]
    },
    {
      title: "Web Technologies",
      skills: ["Node.js", "Express", "React", "Next.js"]
    }
  ];

  return (
    <section id="skills" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
