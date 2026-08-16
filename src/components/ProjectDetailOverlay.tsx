"use client";
import React, { useEffect, useRef, useState } from 'react';
import type { SoftwareProject } from '../data/softwareProjects';
import { X, CheckCircle, Cpu, FileText, Layers, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

interface ProjectDetailOverlayProps {
  project: SoftwareProject | null;
  onClose: () => void;
}

export const ProjectDetailOverlay: React.FC<ProjectDetailOverlayProps> = ({ project, onClose }) => {
  const [animate, setAnimate] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => setAnimate(true), 30);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = 'unset';
      setAnimate(false);
    }
  }, [project]);

  // Direct active wheel scroll handler on the project card container
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
      card.scrollTop += e.deltaY;
    };

    card.addEventListener('wheel', handleWheel, { passive: true });
    return () => card.removeEventListener('wheel', handleWheel);
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
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
        background: 'rgba(5, 5, 8, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        opacity: animate ? 1 : 0,
        transition: 'opacity 0.3s ease',
        padding: '30px 4%'
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

      {/* Glass Project Card with Active Wheel Scroll */}
      <div
        ref={cardRef}
        className="glass hide-scrollbar"
        style={{
          width: '100%',
          maxWidth: '1000px',
          maxHeight: '82vh',
          overflowY: 'auto',
          borderRadius: '24px',
          padding: '40px',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.7)',
          opacity: animate ? 1 : 0,
          transform: animate ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.3s ease',
          WebkitOverflowScrolling: 'touch'
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

            {project.images && project.images.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--text-primary)' }}>
                  <ImageIcon size={16} style={{ color: 'var(--accent-pink)' }} /> SYSTEM PREVIEWS
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px'
                  }}
                >
                  {project.images.map((imgSrc, idx) => (
                    <a
                      key={idx}
                      href={getAssetPath(imgSrc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass"
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid var(--border-glass)',
                        transition: 'all 0.3s ease',
                        display: 'block',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.borderColor = 'var(--accent-pink)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 0, 122, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.borderColor = 'var(--border-glass)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <img
                        src={getAssetPath(imgSrc)}
                        alt={`${project.title} Screenshot ${idx + 1}`}
                        style={{
                          width: '100%',
                          height: '140px',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
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

            {project.githubUrl && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '6px' }}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: 'var(--accent-pink)',
                    color: 'var(--bg-primary)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    letterSpacing: '0.1em',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(255, 0, 122, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(255, 0, 122, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 0, 122, 0.2)';
                  }}
                >
                  <ExternalLink size={16} /> VIEW GITHUB REPOSITORY
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
