"use client";
import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface ToolDetail {
  name: string;
  sub: string;
  desc: string;
}

export const Tools: React.FC = () => {
  const toolsData: Record<string, ToolDetail> = {
    'JAVA': {
      name: 'JAVA',
      sub: 'OBJECT-ORIENTED PROGRAMMING',
      desc: 'Used for backend applications, design patterns, and warehouse system implementations.'
    },
    'C++': {
      name: 'C++',
      sub: 'SYSTEMS PROGRAMMING & GAME LOGIC',
      desc: 'Used to build high-performance terminal games, algorithmic logic, and OOP foundations.'
    },
    'PYTHON': {
      name: 'PYTHON',
      sub: 'DATA ANALYSIS & AUTOMATION',
      desc: 'Utilized for scripting, file parsing, task automation, and basic AI experiments.'
    },
    'MYSQL': {
      name: 'MYSQL',
      sub: 'RELATIONAL DATABASES',
      desc: 'Writing optimized SQL queries, designing database schemas, and data integrity constraints.'
    },
    'HTML': {
      name: 'HTML',
      sub: 'SEMANTIC WEB MARKUP',
      desc: 'Building responsive structural layouts using clean standards and SEO best practices.'
    },
    'CSS': {
      name: 'CSS',
      sub: 'PREMIUM INTERACTION DESIGN',
      desc: 'Custom animations, responsive flex/grid viewports, and glassmorphic user styling.'
    },
    'JAVASCRIPT': {
      name: 'JAVASCRIPT',
      sub: 'CLIENT-SIDE BEHAVIOR',
      desc: 'Developing dynamic DOM states, scroll animations, API integration, and modular states.'
    },
    'MS OFFICE': {
      name: 'MS OFFICE',
      sub: 'BUSINESS OPERATIONS & ANALYSIS',
      desc: 'Utilizing Excel spreadsheets for formulas, calculations, formatting, and operations planning.'
    }
  };

  const [activeTool, setActiveTool] = useState<string>('JAVA');

  return (
    <section 
      id="tools"
      style={{
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '48px',
        position: 'relative'
      }}
    >
      <div 
        className="ambient-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(189,0,255,0.06) 0%, transparent 60%)',
          bottom: '20%',
          right: '5%'
        }} 
      />

      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-purple)', fontWeight: 700 }}>05 — TECHNOLOGY SECTION</span>
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
          TOOLS<br />I USE.
        </h2>
      </div>

      {/* Grid Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'center'
        }}
        className="tools-grid"
      >
        {/* Typography Field (Left) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px 24px',
            alignContent: 'center'
          }}
        >
          {Object.keys(toolsData).map((toolKey) => {
            const isActive = activeTool === toolKey;
            return (
              <span
                key={toolKey}
                onMouseEnter={() => setActiveTool(toolKey)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: isActive ? 500 : 300,
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  color: isActive ? 'var(--accent-pink)' : 'var(--text-muted)',
                  textShadow: isActive ? '0 0 25px rgba(255, 0, 122, 0.4)' : 'none',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {toolKey}
              </span>
            );
          })}
        </div>

        {/* Display Panel (Right) */}
        <div
          className="glass"
          style={{
            borderRadius: '16px',
            padding: '40px',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '16px',
            borderLeft: '4px solid var(--accent-pink)',
            boxShadow: '0 10px 30px rgba(255, 0, 122, 0.05)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Cpu size={20} style={{ color: 'var(--accent-pink)' }} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '0.2em' }}>
              TECH SPECIFICATION
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: 'var(--text-primary)'
            }}
          >
            {toolsData[activeTool].name}
          </h3>

          <h4
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent-purple)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}
          >
            {toolsData[activeTool].sub}
          </h4>

          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              fontWeight: 300
            }}
          >
            {toolsData[activeTool].desc}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tools-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};
