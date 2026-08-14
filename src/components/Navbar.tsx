"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'CREATIVE', id: 'creative' },
    { label: 'SOFTWARE', id: 'software' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'CONTACT', id: 'contact' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px', // Trigger when section crosses middle third of viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If experience-timeline is visible, treat as experience
          if (entry.target.id === 'experience-timeline') {
            setActiveSection('experience');
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ['home', 'about', 'creative', 'software', 'experience', 'experience-timeline', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleMenuClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header 
        className="glass"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 8%',
          zIndex: 990,
          borderBottom: '1px solid var(--border-glass)',
          background: 'rgba(10, 9, 8, 0.82)'
        }}
      >
        {/* Left Side: Logo */}
        <span 
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.45rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
          onClick={() => handleMenuClick('home')}
        >
          GEETHMA
        </span>

        {/* Center Links - Desktop Only */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}
          className="desktop-links"
        >
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <div key={item.id} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    cursor: 'pointer',
                    padding: '4px 0',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--accent-pink)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = isActive ? 'var(--text-primary)' : 'var(--text-secondary)'}
                >
                  {item.label}
                </button>
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'var(--accent-pink)',
                    boxShadow: '0 0 10px var(--accent-pink)',
                    borderRadius: '2px',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
                    opacity: isActive ? 1 : 0
                  }}
                />
              </div>
            );
          })}
        </nav>

        {/* Right Side: Download CV Button - Desktop Only */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="nav-right">
          <a
            href="/resume.pdf"
            download="Geethma_Nirmani_Resume.pdf"
            style={{
              textDecoration: 'none',
              background: 'var(--accent-pink)',
              color: 'var(--bg-primary)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              padding: '10px 20px',
              borderRadius: '20px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 8px 20px rgba(255, 0, 122, 0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(255, 0, 122, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 0, 122, 0.15)';
            }}
          >
            <Download size={14} /> DOWNLOAD CV
          </a>

          {/* Hamburger trigger - Mobile Only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              padding: '6px'
            }}
            className="mobile-trigger"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Overlay */}
      <div
        className="glass"
        style={{
          position: 'fixed',
          top: isOpen ? '73px' : '-100%',
          left: 0,
          width: '100%',
          zIndex: 980,
          borderBottom: '1px solid var(--border-glass)',
          background: 'rgba(10, 9, 8, 0.95)',
          padding: '30px 8%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          transition: 'top 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuClick(item.id)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              cursor: 'pointer',
              padding: '10px 0'
            }}
          >
            {item.label}
          </button>
        ))}

        <a
          href="/resume.pdf"
          download="Geethma_Nirmani_Resume.pdf"
          onClick={() => setIsOpen(false)}
          style={{
            textDecoration: 'none',
            background: 'var(--accent-pink)',
            color: 'var(--bg-primary)',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            padding: '14px',
            borderRadius: '10px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '10px'
          }}
        >
          <Download size={16} /> DOWNLOAD CV
        </a>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-trigger {
            display: flex !important;
          }
          .nav-right a {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
