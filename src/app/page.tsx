"use client";
import { useState } from 'react';
import { Loader } from '@/components/Loader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { About } from '@/components/About';
import { SoftwareWorld } from '@/components/SoftwareWorld';
import { ProjectDetailOverlay } from '@/components/ProjectDetailOverlay';
import { BusinessTech } from '@/components/BusinessTech';
import { EducationExperience } from '@/components/EducationExperience';
import { Contact } from '@/components/Contact';
import type { SoftwareProject } from '@/data/softwareProjects';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<SoftwareProject | null>(null);
  const [showLoader, setShowLoader] = useState(true);

  const handleNavigate = (sectionId: string) => {
    let targetId = sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Cinematic Fullscreen Loader */}
      {showLoader && <Loader onComplete={() => setShowLoader(false)} />}

      {/* Global Navbar */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main>
        {/* 01 - Hero Cinematic Panel */}
        <Hero onEnter={() => handleNavigate('about')} />

        {/* Cinematic Text Introduction */}
        <Introduction />

        {/* 02 - Biography & Personality */}
        <About />

        {/* 03 - Software Projects Track */}
        <SoftwareWorld onSelectProject={setSelectedProject} />

        {/* 04 - Business meets Technology overlap */}
        <BusinessTech />

        {/* 05 - Education, certifications, and skills timeline */}
        <EducationExperience />

        {/* 06 - Contact Footer */}
        <Contact onScrollToTop={handleScrollToTop} />
      </main>

      {/* Project Details Modal */}
      <ProjectDetailOverlay 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
