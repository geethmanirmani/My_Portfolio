"use client";
import React from 'react';
import { Mail, ArrowUpRight, Briefcase } from 'lucide-react';

interface ContactProps {
  onScrollToTop: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onScrollToTop }) => {
  const opportunityTags = [
    'CREATIVE PROJECTS',
    'SOFTWARE PROJECTS',
    'COLLABORATIONS',
    'INTERNSHIPS',
    'NEW OPPORTUNITIES'
  ];

  return (
    <section 
      id="contact"
      style={{
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '120px',
        paddingBottom: '40px',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <div 
        className="ambient-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(189,0,255,0.06) 0%, transparent 60%)',
          bottom: '0%',
          left: '25%'
        }} 
      />

      {/* Main CTA */}
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '40px',
          zIndex: 1
        }}
      >
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
          09 — GET IN TOUCH
        </span>

        {/* Large Cinematic Statement */}
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }}
          className="accent-gradient-text"
        >
          LET'S CREATE<br />SOMETHING<br />MEANINGFUL.
        </h2>

        {/* Subtext opportunities */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
          <span 
            style={{ 
              fontSize: '0.75rem', 
              fontWeight: 700, 
              color: 'var(--text-secondary)', 
              letterSpacing: '0.2em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Briefcase size={14} style={{ color: 'var(--accent-pink)' }} /> OPEN TO
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '650px' }}>
            {opportunityTags.map((tag) => (
              <span
                key={tag}
                className="glass"
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  padding: '6px 14px',
                  borderRadius: '30px',
                  color: 'var(--text-secondary)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Giant Email button */}
        <a
          href="mailto:geethmanirmani2601@gmail.com"
          style={{
            marginTop: '20px',
            textDecoration: 'none',
            color: 'var(--bg-primary)',
            background: 'var(--accent-pink)',
            fontWeight: 700,
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            letterSpacing: '0.15em',
            padding: '20px 48px',
            borderRadius: '40px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 30px rgba(255, 0, 122, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 240, 255, 0.35)';
            e.currentTarget.style.background = 'var(--accent-cyan)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 0, 122, 0.2)';
            e.currentTarget.style.background = 'var(--accent-pink)';
          }}
        >
          <Mail size={18} />
          EMAIL ME <ArrowUpRight size={16} />
        </a>
      </div>

      {/* Footer Info */}
      <div
        style={{
          width: '100%',
          borderTop: '1px solid var(--border-glass)',
          marginTop: '80px',
          paddingTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          zIndex: 1
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '0.8rem',
            color: 'var(--text-secondary)'
          }}
          className="footer-row"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>
              GEETHMA NIRMANI
            </span>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
              CREATIVE × TECHNOLOGY × BUSINESS
            </span>
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-pink)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LINKEDIN
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', transition: 'color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> GITHUB
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em'
          }}
        >
          <span>SRI LANKA</span>
          <span>© 2026 GEETHMA NIRMANI. ALL RIGHTS RESERVED.</span>
          <span 
            onClick={onScrollToTop} 
            style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--accent-pink)' }}
          >
            BACK TO TOP ↑
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};
