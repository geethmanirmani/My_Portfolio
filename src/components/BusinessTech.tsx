"use client";
import React from 'react';

export const BusinessTech: React.FC = () => {
  const businessConcepts = [
    { title: 'PROJECT MANAGEMENT', desc: 'Planning, organizing, and executing project milestones effectively from initiation to delivery.' },
    { title: 'BUSINESS ANALYSIS', desc: 'Mapping operations, analyzing business models, and specifying workflows.' },
    { title: 'PROCESS IMPROVEMENT', desc: 'Identifying bottlenecks, optimizing inventory, and reducing cycle times.' },
    { title: 'SUPPLY CHAIN', desc: 'Understanding logistics, procurement flows, and supply chain strategy.' },
    { title: 'LOGISTICS', desc: 'Managing operational logistics and resource coordination.' },
    { title: 'OPERATIONS', desc: 'Evaluating business operations and performance metrics.' },
    { title: 'DIGITAL SOLUTIONS', desc: 'Deploying practical digital platforms, dashboards, and database tools.' }
  ];

  return (
    <section
      id="businesstech"
      style={{
        background: 'var(--bg-secondary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '40px',
        position: 'relative'
      }}
    >
      <div
        className="ambient-glow"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,118,0.05) 0%, transparent 60%)',
          top: '10%',
          left: '10%'
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px' }}>
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-gold)', fontWeight: 700 }}>04 — BUSINESS × TECHNOLOGY</span>
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
          WHERE BUSINESS MEETS TECHNOLOGY
        </h2>
      </div>

      {/* Concepts Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.4rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-primary)'
          }}
        >
          FIELDS OF EXPERTISE
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}
        >
          {businessConcepts.map((concept) => (
            <div
              key={concept.title}
              className="glass"
              style={{
                padding: '24px 28px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                transition: 'all 0.3s ease',
                borderLeft: '3px solid var(--accent-gold)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(201, 168, 118, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--text-primary)'
                  }}
                >
                  {concept.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-secondary)', fontWeight: 300 }}>
                {concept.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
