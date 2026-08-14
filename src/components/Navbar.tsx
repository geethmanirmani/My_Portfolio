"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '01 — HOME', id: 'home' },
    { label: '02 — ABOUT', id: 'about' },
    { label: '03 — CREATIVE', id: 'creative' },
    { label: '04 — SOFTWARE', id: 'software' },
    { label: '05 — EXPERIENCE', id: 'experience' },
    { label: '06 — CONTACT', id: 'contact' }
  ];

  const handleMenuClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 8%',
          zIndex: 990,
          mixBlendMode: isOpen ? 'normal' : 'difference',
          transition: 'all 0.3s ease'
        }}
      >
        <span 
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
          onClick={() => handleMenuClick('home')}
        >
          GEETHMA
        </span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            padding: '8px 16px',
            borderRadius: '20px',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
          className="glass"
        >
          {isOpen ? (
            <>
              CLOSE <X size={16} />
            </>
          ) : (
            <>
              MENU <Menu size={16} />
            </>
          )}
        </button>
      </header>

      {/* Fullscreen Double Sliding Doors Menu */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 980,
          pointerEvents: isOpen ? 'all' : 'none',
          overflow: 'hidden',
          display: 'flex'
        }}
      >
        {/* Left Shutter Door Panel */}
        <div
          className="door-panel"
          style={{
            left: 0,
            width: '50vw',
            transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
            background: 'linear-gradient(135deg, #050508 0%, #0a0a0f 100%)',
            borderRight: '1px solid rgba(255, 0, 122, 0.1)'
          }}
        />

        {/* Right Shutter Door Panel */}
        <div
          className="door-panel"
          style={{
            right: 0,
            width: '50vw',
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
            background: 'linear-gradient(135deg, #0a0a0f 0%, #050508 100%)',
            borderLeft: '1px solid rgba(0, 240, 255, 0.1)'
          }}
        />

        {/* Menu Content (fades in as doors meet) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 8%',
            opacity: isOpen ? 1 : 0,
            transition: 'opacity 0.5s ease',
            transitionDelay: isOpen ? '0.4s' : '0s',
            pointerEvents: isOpen ? 'all' : 'none'
          }}
        >
          {/* Ambient Glows */}
          <div 
            className="ambient-glow" 
            style={{ 
              background: 'radial-gradient(circle, rgba(189,0,255,0.08) 0%, transparent 60%)',
              top: '20%',
              left: '20%'
            }} 
          />
          <div 
            className="ambient-glow" 
            style={{ 
              background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 60%)',
              bottom: '20%',
              right: '20%'
            }} 
          />

          <nav 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              position: 'relative',
              zIndex: 1
            }}
          >
            {menuItems.map((item, idx) => (
              <div 
                key={item.id}
                style={{
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => handleMenuClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    transitionDelay: isOpen ? `${0.4 + idx * 0.05}s` : '0s'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.paddingLeft = '20px';
                    (e.target as HTMLElement).style.color = 'var(--accent-pink)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.paddingLeft = '0px';
                    (e.target as HTMLElement).style.color = 'var(--text-primary)';
                  }}
                >
                  {item.label}
                </button>
              </div>
            ))}
          </nav>

          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '8%',
              right: '8%',
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid var(--border-glass)',
              paddingTop: '20px',
              fontSize: '0.75rem',
              color: 'var(--text-secondary)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}
          >
            <span>GEETHMA NIRMANI — PORTFOLIO</span>
            <span>© 2026 SRI LANKA</span>
          </div>
        </div>
      </div>
    </>
  );
};
