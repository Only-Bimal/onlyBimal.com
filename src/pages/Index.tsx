
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bimal — DevOps Engineer &amp; Cloud Architect</title>
        <meta
          name="description"
          content="Portfolio of Bimal, a DevOps Engineer and Cloud Architect specializing in resilient systems, automation, web applications, Appian, and infrastructure as code."
        />
        <meta property="og:title" content="Bimal — DevOps Engineer &amp; Cloud Architect" />
        <meta
          property="og:description"
          content="Portfolio of Bimal, a DevOps Engineer and Cloud Architect specializing in resilient systems, automation, web applications, Appian, and infrastructure as code."
        />
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
