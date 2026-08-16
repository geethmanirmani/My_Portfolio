"use client";
import React, { useRef, useEffect } from 'react';
import { softwareProjects } from '../data/softwareProjects';
import type { SoftwareProject } from '../data/softwareProjects';
import { ArrowRight } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

interface SoftwareWorldProps {
  onSelectProject: (project: SoftwareProject) => void;
}

export const SoftwareWorld: React.FC<SoftwareWorldProps> = ({ onSelectProject }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isMouseDown.current = true;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftPos.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <section
      id="software"
      style={{
        background: 'var(--bg-secondary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '55px',
        paddingTop: '100px',
        position: 'relative'
      }}
    >
      <div
        className="ambient-glow"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,118,0.06) 0%, transparent 60%)',
          top: '20%',
          right: '5%'
        }}
      />

      {/* Header Statement */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-gold)', fontWeight: 700 }}>03 — SOFTWARE DEVELOPMENT</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase'
          }}
        >
          BEYOND THE SCREEN
        </h2>
      </div>

      {/* Horizontal Scroll Track Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          SOFTWARE PROJECTS
        </h3>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll with Mouse Wheel or Drag ← →
        </span>
      </div>

      {/* Software Projects Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{
          display: 'flex',
          gap: '40px',
          overflowX: 'auto',
          paddingBottom: '30px',
          cursor: 'grab'
        }}
        className="hide-scrollbar"
      >
        {softwareProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            style={{
              flex: '0 0 450px',
              maxWidth: '90vw',
              height: '500px',
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
              background: 'var(--bg-tertiary)',
              border: '1.5px solid var(--border-glass)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'transform'
            }}
            onMouseMove={(e) => {
              if (isMouseDown.current) return;
              const el = e.currentTarget as HTMLElement;
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const xc = rect.width / 2;
              const yc = rect.height / 2;
              const rotX = (yc - y) / 10;
              const rotY = (x - xc) / 10;

              el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.01, 1.01, 1.01)`;
              el.style.borderColor = 'var(--accent-pink)';
              el.style.boxShadow = '0 15px 35px rgba(255, 0, 122, 0.08)';

              const numSpan = el.querySelector('.project-number') as HTMLElement;
              if (numSpan) numSpan.style.transform = 'translate(-10px, -10px) scale(1.1)';

              const bgOverlay = el.querySelector('.bg-accent-overlay') as HTMLElement;
              if (bgOverlay) bgOverlay.style.opacity = '0.08';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0)';
              el.style.borderColor = 'var(--border-glass)';
              el.style.boxShadow = 'none';

              const numSpan = el.querySelector('.project-number') as HTMLElement;
              if (numSpan) numSpan.style.transform = 'translate(0, 0) scale(1)';

              const bgOverlay = el.querySelector('.bg-accent-overlay') as HTMLElement;
              if (bgOverlay) bgOverlay.style.opacity = '0.02';
            }}
          >
            <div
              className="bg-accent-overlay"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: project.accentColor,
                opacity: 0.02,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
                zIndex: 0
              }}
            />

            {/* Top Card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 1 }}>
              <span
                className="project-number"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2.5rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-block'
                }}
              >
                0{project.id}
              </span>

              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  padding: '4px 10px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  background: 'rgba(0,0,0,0.2)'
                }}
              >
                {project.status.split('/')[0].trim()}
              </span>
            </div>

            {/* Middle Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 1 }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {project.category}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  color: 'var(--text-secondary)',
                  fontWeight: 300,
                  marginTop: '4px'
                }}
              >
                {project.description.slice(0, 110)}...
              </p>

              {project.images && project.images.length > 0 && (
                <div
                  style={{
                    width: '100%',
                    height: '130px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginTop: '8px',
                    border: '1px solid var(--border-glass)'
                  }}
                >
                  <img
                    src={getAssetPath(project.images[0])}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              )}
            </div>

            {/* Bottom Card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1, borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                {project.technologies.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.1em'
                }}
              >
                VIEW <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
