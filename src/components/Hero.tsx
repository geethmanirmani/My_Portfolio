"use client";
import React from 'react';
import Image from 'next/image';
import profileImg from '../assets/profile.png';

interface HeroProps {
  onEnter: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onEnter }) => {
  return (
    <section 
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 80% 20%, rgba(189, 0, 255, 0.08) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(0, 240, 255, 0.05) 0%, transparent 65%)',
        paddingTop: '100px'
      }}
    >
      {/* Floating neon animated blobs */}
      <div className="bg-blob-1" style={{ top: '15%', left: '10%' }} />
      <div className="bg-blob-2" style={{ bottom: '20%', right: '10%' }} />
      <div className="bg-blob-3" style={{ top: '55%', left: '35%' }} />

      {/* Decorative subtle neon meshes */}
      <div 
        className="ambient-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(255, 0, 122, 0.06) 0%, transparent 70%)',
          top: '10%',
          right: '5%'
        }} 
      />

      <div 
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: '1.25fr 0.75fr',
          gap: '40px',
          alignItems: 'center',
          zIndex: 2
        }}
      >
        {/* Left Side: Typography and Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(4rem, 9vw, 8.5rem)',
                fontWeight: 500,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}
              className="accent-gradient-text"
            >
              GEETHMA
            </h1>
            <h1 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(4rem, 9vw, 8.5rem)',
                fontWeight: 500,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                paddingLeft: '20px'
              }}
              className="gradient-text"
            >
              NIRMANI
            </h1>
          </div>

          {/* Subheading Identity */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(0.95rem, 2vw, 1.35rem)',
              fontWeight: 500,
              letterSpacing: '0.12em',
              color: 'var(--accent-pink)'
            }}
          >
            <span>CREATIVE</span>
            <span style={{ color: 'var(--accent-cyan)' }}>×</span>
            <span>TECHNOLOGY</span>
            <span style={{ color: 'var(--accent-purple)' }}>×</span>
            <span>BUSINESS</span>
          </div>

          {/* Small undergraduate tag */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              borderLeft: '2px solid var(--accent-cyan)',
              paddingLeft: '16px',
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)'
            }}
          >
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>UNDERGRADUATE</span>
            <span>B.Sc. (HONS) MANAGEMENT & INFORMATION TECHNOLOGY</span>
            <span>UNIVERSITY OF KELANIYA, SRI LANKA</span>
          </div>
        </div>

        {/* Right Side: Portrait */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Neon spinning ring */}
          <div
            style={{
              position: 'absolute',
              width: '410px',
              height: '410px',
              borderRadius: '50%',
              border: '2px dashed rgba(255, 0, 122, 0.4)',
              animation: 'spin 50s linear infinite',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(189, 0, 255, 0.18) 0%, transparent 70%)',
              filter: 'blur(10px)',
              pointerEvents: 'none'
            }}
          />
          <div
            style={{
              width: '360px',
              height: '360px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid rgba(255, 255, 255, 0.08)',
              boxShadow: 'var(--shadow-glow)',
              position: 'relative',
              zIndex: 1,
              transition: 'transform 0.5s ease-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03) rotate(1deg)';
              e.currentTarget.style.borderColor = 'var(--accent-cyan)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            }}
          >
            <Image 
              src={profileImg} 
              alt="Geethma Nirmani Profile Image" 
              placeholder="blur"
              priority
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Button: Enter My World */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          zIndex: 3
        }}
        onClick={onEnter}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-cyan)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          ENTER MY WORLD
        </span>
        <div
          style={{
            width: '24px',
            height: '40px',
            borderRadius: '12px',
            border: '2px solid var(--text-muted)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px'
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              borderRadius: '2px',
              backgroundColor: 'var(--accent-pink)',
              animation: 'bounceWheel 1.5s infinite ease-in-out'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        @keyframes bounceWheel {
          0%, 100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(8px); opacity: 1; }
        }
        @media (max-width: 900px) {
          #home div {
            grid-template-columns: 1fr !important;
            text-align: center;
            justify-content: center;
          }
          #home div div:nth-child(1) {
            order: 2;
          }
          #home div div:nth-child(2) {
            order: 1;
            margin-bottom: 20px;
          }
          #home div div:nth-child(1) div:nth-child(3) {
            border-left: none !important;
            border-top: 2px solid var(--accent-pink);
            padding-left: 0 !important;
            padding-top: 12px;
          }
        }
      `}</style>
    </section>
  );
};
