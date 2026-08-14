"use client";
import { useState } from 'react';
import { Loader } from '@/components/Loader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Introduction } from '@/components/Introduction';
import { About } from '@/components/About';
import { CreativeWorld } from '@/components/CreativeWorld';
import { SoftwareWorld } from '@/components/SoftwareWorld';
import { ProjectDetailOverlay } from '@/components/ProjectDetailOverlay';
import { Tools } from '@/components/Tools';
import { BusinessTech } from '@/components/BusinessTech';
import { EducationExperience } from '@/components/EducationExperience';
import { Contact } from '@/components/Contact';
import { CursorFollower } from '@/components/CursorFollower';
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

      {/* Custom lagging cursor follower */}
      <CursorFollower />

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

        {/* 03 - Creative & Videography */}
        <CreativeWorld />

        {/* 04 - Software Projects Track */}
        <SoftwareWorld onSelectProject={setSelectedProject} />

        {/* 05 - Tools interactive display */}
        <Tools />

        {/* 06 - Business meets Technology overlap */}
        <BusinessTech />

        {/* 07 - Education, certifications, and skills timeline */}
        <EducationExperience />

        {/* 08 - Contact Footer */}
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
