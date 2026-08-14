import React from 'react';
import { Calendar, Award, BookOpen } from 'lucide-react';

export const EducationExperience: React.FC = () => {
  const educationTimeline = [
    {
      period: '2025 — PRESENT',
      institution: 'UNIVERSITY OF KELANIYA',
      degree: 'B.Sc. (Hons) in Management and Information Technology',
      details: 'Focusing on the intersections of systems analysis, computer programming, web applications, logistics, and operations planning.'
    }
  ];

  const certifications = [
    {
      title: 'Python for Beginners',
      issuer: 'University of Moratuwa'
    },
    {
      title: 'Foundations of Project Management',
      issuer: 'University of Moratuwa'
    }
  ];

  const skillCategories = [
    {
      title: 'TECHNICAL SKILLS',
      skills: ['C++', 'Java', 'Python', 'MySQL', 'MS Office'],
      color: 'var(--accent-cyan)'
    },
    {
      title: 'CREATIVE WORLD',
      skills: ['Videography', 'Visual Storytelling', 'Video Editing', 'Creative Direction'],
      color: 'var(--accent-pink)'
    },
    {
      title: 'SOFT SKILLS',
      skills: ['Teamwork', 'Communication', 'Problem Solving', 'Time Management', 'Collaboration'],
      color: 'var(--accent-purple)'
    }
  ];

  return (
    <section
      id="experience-timeline"
      style={{
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '55px',
        position: 'relative'
      }}
    >
      <div 
        className="ambient-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(189,0,255,0.06) 0%, transparent 60%)',
          bottom: '10%',
          right: '10%'
        }} 
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '50px'
        }}
        className="experience-grid"
      >
        {/* Left Side: Education & Certifications Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-pink)', fontWeight: 700 }}>07 — ACADEMIC PATH</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              EDUCATION
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {educationTimeline.map((edu, idx) => (
              <div 
                key={idx}
                className="glass"
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  borderLeft: '4px solid var(--accent-pink)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: '0 10px 30px rgba(255, 0, 122, 0.03)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent-pink)', letterSpacing: '0.1em' }}>
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 500, letterSpacing: '0.02em', color: 'var(--text-primary)' }}>
                    {edu.institution}
                  </h4>
                  <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                    {edu.degree}
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-muted)', fontWeight: 400 }}>
                  {edu.details}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--text-primary)' }}>
              <Award size={16} style={{ color: 'var(--accent-purple)' }} /> CERTIFICATIONS
            </h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="cert-grid">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="glass"
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  <BookOpen size={16} style={{ color: 'var(--text-muted)' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {cert.title}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
                    {cert.issuer}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-purple)', fontWeight: 700 }}>08 — CAPABILITIES</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              SKILLS MATRIX
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="glass"
                style={{
                  padding: '32px',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <h4 style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em', color: cat.color }}>
                  {cat.title}
                </h4>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(0.95rem, 2vw, 1.35rem)',
                        fontWeight: 500,
                        cursor: 'default',
                        padding: '6px 14px',
                        border: '1px solid var(--border-glass)',
                        borderRadius: '30px',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--text-primary)';
                        e.currentTarget.style.borderColor = cat.color;
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                        e.currentTarget.style.boxShadow = `0 4px 15px rgba(255, 255, 255, 0.05)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'var(--border-glass)';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .experience-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 500px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
