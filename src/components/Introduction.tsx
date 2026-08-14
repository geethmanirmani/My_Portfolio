import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section 
      id="intro"
      style={{
        minHeight: '75vh',
        background: 'var(--bg-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <div 
        className="ambient-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(201,168,118,0.06) 0%, transparent 60%)',
          top: '-10%',
          right: '5%'
        }} 
      />

      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '35px',
          zIndex: 1
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              lineHeight: 1
            }}
          >
            I <span style={{ color: 'var(--accent-pink)', fontWeight: 500 }}>CREATE</span>.
          </h2>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              lineHeight: 1
            }}
          >
            I <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>BUILD</span>.
          </h2>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 300,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              lineHeight: 1
            }}
          >
            I <span style={{ color: 'var(--accent-cyan)', fontWeight: 500 }}>EXPLORE</span>.
          </h2>
        </div>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)',
            lineHeight: 1.6,
            fontWeight: 300,
            color: 'var(--text-secondary)'
          }}
        >
          I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Geethma Nirmani</strong>, an undergraduate exploring the intersection of management, technology and creativity. I enjoy turning ideas into practical digital solutions while exploring visual storytelling and creative work.
        </p>
      </div>
    </section>
  );
};
