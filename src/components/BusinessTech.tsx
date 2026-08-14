"use client";
import React, { useState, useEffect } from 'react';
import { HelpCircle, Compass, Code, ToggleRight, CheckCircle2 } from 'lucide-react';

export const BusinessTech: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const flowSteps = [
    {
      title: 'BUSINESS PROBLEM',
      desc: 'Identifying bottlenecks, supply chain inefficiencies, or database constraints.',
      icon: <HelpCircle size={20} />,
      color: '#f87171'
    },
    {
      title: 'ANALYSIS',
      desc: 'Mapping operations, analyzing business models, and specifying workflows.',
      icon: <Compass size={20} />,
      color: '#fb923c'
    },
    {
      title: 'TECHNOLOGY',
      desc: 'Programming desktop databases (Java/MySQL) or console scripting solutions (C++).',
      icon: <Code size={20} />,
      color: '#22d3ee'
    },
    {
      title: 'SOLUTION',
      desc: 'Deploying practical digital platforms, dashboards, and database tools.',
      icon: <ToggleRight size={20} />,
      color: '#a78bfa'
    },
    {
      title: 'IMPROVED PROCESS',
      desc: 'Reducing cycle times, optimizing inventory, and enabling strategic reports.',
      icon: <CheckCircle2 size={20} />,
      color: '#4ade80'
    }
  ];

  const businessConcepts = [
    'BUSINESS ANALYSIS',
    'PROCESS IMPROVEMENT',
    'SUPPLY CHAIN',
    'LOGISTICS',
    'OPERATIONS',
    'DIGITAL SOLUTIONS'
  ];

  return (
    <section 
      id="experience"
      style={{
        background: 'var(--bg-secondary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '50px',
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
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-gold)', fontWeight: 700 }}>06 — BUSINESS × TECHNOLOGY</span>
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
          WHERE BUSINESS<br />MEETS TECHNOLOGY.
        </h2>
        <p
          style={{
            fontSize: '1.15rem',
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            fontWeight: 300,
            marginTop: '10px'
          }}
        >
          I bridge the gap between organizational strategies and backend technical solutions. I translate processes into clean database logic.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '0.8fr 1.2fr',
          gap: '40px',
          alignItems: 'center'
        }}
        className="flow-grid"
      >
        {/* Concepts List (Left) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-primary)',
              marginBottom: '10px'
            }}
          >
            FIELDS OF EXPERTISE
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {businessConcepts.map((concept) => (
              <div
                key={concept}
                className="glass"
                style={{
                  padding: '16px 24px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-glass)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />
                {concept}
              </div>
            ))}
          </div>
        </div>

        {/* Process Flow Diagram (Right) */}
        <div
          className="glass"
          style={{
            borderRadius: '20px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            position: 'relative'
          }}
        >
          {/* Animated SVG Path Connecting steps */}
          <svg
            style={{
              position: 'absolute',
              top: '58px',
              bottom: '58px',
              left: '58px',
              width: '2px',
              height: 'calc(100% - 116px)',
              zIndex: 0,
              overflow: 'visible'
            }}
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="2"
            />
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="var(--accent-gold)"
              strokeWidth="2"
              className="flow-line-animated"
            />
          </svg>

          {/* Node Items */}
          {flowSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                  zIndex: 1,
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.4,
                  transform: isActive ? 'translateX(10px)' : 'translateX(0)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Node circle */}
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? step.color : 'var(--bg-tertiary)',
                    border: `1.5px solid ${isActive ? step.color : 'var(--border-glass)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    boxShadow: isActive ? `0 0 15px ${step.color}` : 'none',
                    transition: 'all 0.4s ease',
                    flexShrink: 0
                  }}
                >
                  {step.icon}
                </div>

                {/* Node info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.15rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      transition: 'color 0.4s ease'
                    }}
                  >
                    {step.title}
                  </h4>
                  {isActive && (
                    <p
                      style={{
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        color: 'var(--text-secondary)',
                        fontWeight: 300
                      }}
                    >
                      {step.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .flow-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};
