
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-4">
              I'm Bimal Bhattarai, a DevOps Engineer and Cloud Architect with a passion for automation, 
              infrastructure as code, and building resilient cloud systems. With over 7 years of 
              experience in the industry, I've worked with diverse teams to design, implement, and 
              maintain scalable and secure infrastructure solutions.
            </p>
            <p className="text-gray-700 mb-4">
              My expertise spans across multiple cloud platforms including AWS, Azure, and GCP, along 
              with containerization technologies like Docker and Kubernetes. I enjoy solving complex 
              problems and optimizing systems for performance, reliability, and cost-effectiveness.
            </p>
            <p className="text-gray-700">
              Beyond my technical role, I'm committed to knowledge sharing, mentoring junior engineers,
              and continuously learning new technologies to stay at the forefront of cloud computing
              and infrastructure automation trends.
            </p>
          </div>
          <div className="bg-brand-light rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-4">Key Areas</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Cloud Infrastructure (AWS, Azure, GCP)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Containerization (Docker, Kubernetes)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Infrastructure as Code (Terraform, CloudFormation)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>CI/CD Pipelines (Jenkins, GitHub Actions)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Configuration Management (Ansible, Chef)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Monitoring & Observability (Prometheus, Grafana)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Security & Compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
