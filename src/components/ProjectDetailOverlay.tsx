"use client";
import React, { useEffect, useState } from 'react';
import type { SoftwareProject } from '../data/softwareProjects';
import { X, CheckCircle, Cpu, FileText, Layers } from 'lucide-react';

interface ProjectDetailOverlayProps {
  project: SoftwareProject | null;
  onClose: () => void;
}

export const ProjectDetailOverlay: React.FC<ProjectDetailOverlayProps> = ({ project, onClose }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      // Trigger swing-open animation
      const timer = setTimeout(() => setAnimate(true), 30);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
      setAnimate(false);
    }
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 400); // Wait for swing-shut animation to complete
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(5, 5, 8, 0.93)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '40px 8%',
        opacity: animate ? 1 : 0,
        transition: 'opacity 0.4s ease'
      }}
    >
      {/* Dynamic Background Glow */}
      <div 
        style={{
          position: 'absolute',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: project.accentColor,
          opacity: 0.1,
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      {/* 3D Window Card */}
      <div
        className="glass"
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '85vh',
          borderRadius: '24px',
          padding: '48px',
          overflowY: 'auto',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
          transformOrigin: 'top center',
          transform: animate 
            ? 'perspective(1200px) rotateX(0deg) scale(1)' 
            : 'perspective(1200px) rotateX(-75deg) scale(0.85)',
          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent-pink)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              {project.category}
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                textTransform: 'uppercase'
              }}
            >
              {project.title}
            </h2>
          </div>

          <button
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              padding: '10px 18px',
              borderRadius: '30px',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
            className="glass"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-pink)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-glass)')}
          >
            CLOSE <X size={16} />
          </button>
        </div>

        {/* Content Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            marginTop: '10px'
          }}
          className="overlay-grid"
        >
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--text-primary)' }}>
                <FileText size={16} style={{ color: 'var(--accent-cyan)' }} /> ABOUT THE PROJECT
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-secondary)', fontWeight: 300 }}>
                {project.description}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--text-primary)' }}>
                <Layers size={16} style={{ color: 'var(--accent-purple)' }} /> KEY FEATURES
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {project.features.map((feature, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 300
                    }}
                  >
                    <CheckCircle size={14} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--text-primary)' }}>
                <Cpu size={16} style={{ color: 'var(--accent-pink)' }} /> STACK / TOOLS
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="glass"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      padding: '6px 12px',
                      borderRadius: '8px',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--text-primary)' }}>
                PROJECT STATUS
              </h4>
              <div
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px dashed var(--border-glass)',
                  padding: '16px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--accent-pink)',
                  textAlign: 'center',
                  textTransform: 'uppercase'
                }}
              >
                {project.status}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .overlay-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </div>
  );
};
