"use client";
import React from 'react';
import Image from 'next/image';
import profileImg from '../assets/profile.png';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        background: 'var(--bg-secondary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '60px',
        position: 'relative',
        paddingTop: '100px'
      }}
    >
      <div 
        className="ambient-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(189,0,255,0.06) 0%, transparent 60%)',
          top: '20%',
          right: '10%'
        }} 
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.82fr 1.18fr',
          gap: '50px',
          alignItems: 'center'
        }}
        className="about-grid"
      >
        {/* Left Side: Photo Frame */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              top: '-15px',
              left: '-15px',
              width: '100%',
              height: '100%',
              border: '1.5px solid var(--accent-pink)',
              boxShadow: '0 0 20px rgba(255,0,122,0.15)',
              borderRadius: '24px',
              zIndex: 0
            }}
          />
          <div
            className="glass"
            style={{
              width: '100%',
              maxWidth: '350px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-glow)',
              position: 'relative',
              zIndex: 1
            }}
          >
            <Image 
              src={profileImg} 
              alt="Geethma Nirmani Biography Portrait" 
              placeholder="blur"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'grayscale(10%) contrast(102%)'
              }}
            />
          </div>
        </div>

        {/* Right Side: Bio text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-cyan)', fontWeight: 700 }}>02 — IDENTITY STORY</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              THE PERSON BEHIND THE WORK.
            </h3>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              fontWeight: 300
            }}
          >
            I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Geethma Nirmani</strong>, an undergraduate pursuing a B.Sc. (Hons) in Management and Information Technology at the University of Kelaniya.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              fontWeight: 300
            }}
          >
            I am driven to combine technology, analytical business thinking, and visual storytelling to craft practical digital solutions. From software platforms and databases to videography, editing, and direction, I explore cross-disciplinary paths to bridge corporate strategies with modern developer tools.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <Quote size={20} style={{ color: 'var(--accent-pink)', flexShrink: 0 }} />
            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              "Creativity meets technology. I believe a solution is only as powerful as the strategic business problem it resolves, and the story it communicates."
            </span>
          </div>
        </div>
      </div>

      {/* Section 23: Personality Statement */}
      <div
        className="glass"
        style={{
          width: '100%',
          borderRadius: '20px',
          padding: '50px 8%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '24px',
          marginTop: '30px'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              lineHeight: 1.1
            }}
          >
            CURIOUS <span style={{ color: 'var(--accent-pink)', fontWeight: 500 }}>BY NATURE</span>.
          </h2>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              lineHeight: 1.1
            }}
          >
            CREATIVE <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>BY INSTINCT</span>.
          </h2>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: 'var(--accent-cyan)',
              lineHeight: 1.1
            }}
          >
            TECHNICAL <span style={{ color: 'var(--accent-purple)', fontWeight: 500 }}>BY CHOICE</span>.
          </h2>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};
