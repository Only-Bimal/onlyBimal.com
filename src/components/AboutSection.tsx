import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-4">
              I am a proactive professional with over 15 years of experience in
              designing, implementing, and deploying low-code/no-code solutions
              using BPM tools such as Appian. My expertise extends to
              low-code/no-code solutions, hyper-automation, RPA platforms like
              Blue Prism and UiPath, and enterprise solution development across
              diverse industries, including insurance, cloud migration, retail,
              and education. With a strong technical background in .NET, C#,
              VB.NET, and SQL databases, I have successfully led and contributed
              to various high-impact projects, delivering efficiency, cost
              savings, and enhanced solutions. My experience spans across client
              interaction, consulting, designing, development and project
              management.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>
                <strong>Low-Code/No-Code Development</strong>: Solution
                development with Appian to streamline business processes.
              </li>
              <li>
                <strong>Robotic Process Automation (RPA)</strong>: Design and
                implementation of automation solutions using UiPath and Blue
                Prism.
              </li>
              <li>
                <strong>Software Development</strong>: Full-cycle software
                development experience using .NET, C#, and SQL.
              </li>
              <li>
                <strong>Project Management</strong>: Expertise in handling
                projects from conceptualization to deployment.
              </li>
              <li>
                <strong>Agile Methodologies</strong>: Proficient in Scrum and
                Kanban frameworks.
              </li>
              <li>
                <strong>Client Interaction & Consulting</strong>: Strong
                experience in engaging with clients and understanding business
                requirements.
              </li>
            </ul>
            I enjoy solving complex problems and optimizing systems for
            performance, reliability, and cost-effectiveness.
            <p className="text-gray-700">
              Beyond my technical role, I'm committed to knowledge sharing,
              mentoring fellow members, and continuously learning new
              technologies to stay at the forefront to solve challenges.
            </p>
          </div>
          <div className="bg-brand-light rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-navy mb-4">
              Key Areas
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Business Process Management (Appian)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Cloud Infrastructure (AWS)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-brand-blue">•</span>
                <span>Containerization (Docker, Kubernetes)</span>
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
