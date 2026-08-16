import React from 'react';
import { Calendar, Award } from 'lucide-react';
import { getAssetPath } from '../utils/assetPath';

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
      issuer: 'University of Moratuwa (CODL)',
      intro: 'Online learning programme in Python programming conducted by the Department of Computer Science & Engineering.',
      image: '/certificates/cert-python.jpg'
    },
    {
      title: 'Web Design for Beginners',
      issuer: 'University of Moratuwa (CODL)',
      intro: 'Online learning programme in web design standards and frontend concepts conducted by the Department of Information Technology.',
      image: '/certificates/cert-webdesign.jpg'
    },
    {
      title: 'Business Analysis & Process Management',
      issuer: 'Coursera',
      intro: 'Professional project certificate focusing on business process modeling, operational workflows, and requirements analysis.',
      image: '/certificates/cert-business-analysis.jpg'
    },
    {
      title: 'Power BI for Data Analysts',
      issuer: 'LinkedIn Learning (Microsoft Press)',
      intro: 'Comprehensive certification covering data analysis, DAX, data modeling, and interactive dashboards in Microsoft Power BI.',
      image: '/certificates/cert-powerbi.jpg'
    },
    {
      title: 'Foundations of Project Management',
      issuer: 'University of Moratuwa (CODL)',
      intro: 'Online programme covering project planning, scheduling, execution, and management principles conducted by the Department of Civil Engineering.',
      image: '/certificates/cert-project-mgmt.jpg'
    }
  ];

  const technicalSkillGroups = [
    { title: 'PROGRAMMING LANGUAGES', skills: ['C++', 'Kotlin', 'TypeScript'] },
    { title: 'WEB DEVELOPMENT', skills: ['HTML', 'CSS', 'React', 'Node.js'] },
    { title: 'DATABASE', skills: ['SQL'] },
    { title: 'SOFTWARE DEVELOPMENT', skills: ['Object-Oriented Programming (OOP)'] },
    { title: 'UI/UX DESIGN', skills: ['Figma'] },
    { title: 'VERSION CONTROL', skills: ['Git & GitHub'] },
    { title: 'PRODUCTIVITY TOOLS', skills: ['Microsoft Office Suite'] }
  ];

  const softSkills = ['Teamwork', 'Communication', 'Problem Solving', 'Time Management', 'Collaboration'];

  return (
    <section
      id="experience"
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
        {/* Left Side: Education & Certifications */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-pink)', fontWeight: 700 }}>05 — ACADEMIC PATH</span>
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

          {/* Certifications Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--text-primary)' }}>
              <Award size={16} style={{ color: 'var(--accent-purple)' }} /> CERTIFICATIONS
            </h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }} className="cert-grid">
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="glass"
                  style={{
                    borderRadius: '14px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border-glass)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'var(--accent-pink)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 0, 122, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-glass)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Certificate Image Preview */}
                  <a 
                    href={getAssetPath(cert.image)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ display: 'block', overflow: 'hidden', height: '145px', background: 'rgba(0,0,0,0.3)', position: 'relative' }}
                  >
                    <img 
                      src={getAssetPath(cert.image)} 
                      alt={cert.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </a>

                  {/* Certificate Info */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {cert.issuer}
                    </span>
                    <h5 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.02em', color: 'var(--text-primary)' }}>
                      {cert.title}
                    </h5>
                    <p style={{ fontSize: '0.8rem', lineHeight: 1.45, color: 'var(--text-muted)', fontWeight: 300, marginTop: '4px' }}>
                      {cert.intro}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-purple)', fontWeight: 700 }}>06 — CAPABILITIES</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              SKILLS MATRIX
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Technical Skills Group Card */}
            <div
              className="glass"
              style={{
                padding: '32px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <h4 style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-cyan)' }}>
                TECHNICAL SKILLS
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {technicalSkillGroups.map((group) => (
                  <div key={group.title} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                      {group.title}
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '0.9rem',
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
                            e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                            e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 240, 255, 0.1)';
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

            {/* Soft Skills Card */}
            <div
              className="glass"
              style={{
                padding: '32px',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <h4 style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-purple)' }}>
                SOFT SKILLS
              </h4>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.9rem',
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
                      e.currentTarget.style.borderColor = 'var(--accent-purple)';
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(189, 0, 255, 0.1)';
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
