"use client";
import React from 'react';
import Image from 'next/image';
import profileImg from '../assets/profile.jpg';
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
            <div
              className="glowing-frame"
              style={{
                position: 'absolute',
                top: '-12px',
                left: '-12px',
                width: 'calc(100% + 24px)',
                height: 'calc(100% + 24px)',
                border: '2px solid rgba(255, 0, 122, 0.6)',
                borderRadius: '24px',
                zIndex: 0
              }}
            />
            <div
              className="glass"
              style={{
                width: '100%',
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
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Bio text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-cyan)', fontWeight: 700 }}>02 — IDENTITY STORY</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 500, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              THE PERSON BEHIND THE WORK
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
            I’m passionate about understanding how businesses work, identifying real-world challenges, and using technology to create practical solutions.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <Quote size={20} style={{ color: 'var(--accent-pink)', flexShrink: 0 }} />
            <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Where business meets technology, I find opportunities to solve problems, create value, and turn ideas into impact.
            </span>
          </div>
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
