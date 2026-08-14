"use client";
import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress tick
    const duration = 2000; // 2 seconds
    const intervalTime = 30; // ms
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Wait for shutter door transition
          }, 400); // Hold at 100% briefly
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: isDone ? 'none' : 'all',
        display: 'flex',
        overflow: 'hidden'
      }}
    >
      {/* Left Shutter Panel */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '50vw',
          height: '100%',
          background: '#050508',
          borderRight: '1px solid rgba(255, 0, 122, 0.1)',
          transform: isDone ? 'translateX(-100%)' : 'translateX(0)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Right Shutter Panel */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50vw',
          height: '100%',
          background: '#050508',
          borderLeft: '1px solid rgba(0, 240, 255, 0.1)',
          transform: isDone ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Centered Loader Info */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          zIndex: 3,
          opacity: isDone ? 0 : 1,
          transition: 'opacity 0.4s ease'
        }}
      >
        {/* Glow backdrop */}
        <div 
          className="ambient-glow" 
          style={{ 
            background: 'radial-gradient(circle, rgba(189,0,255,0.08) 0%, transparent 60%)',
            top: '30%',
            left: '30%',
            width: '30vw',
            height: '30vw'
          }} 
        />

        {/* Identity Title */}
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase'
            }}
          >
            GEETHMA NIRMANI
          </h1>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              color: 'var(--accent-pink)',
              textTransform: 'uppercase'
            }}
          >
            CREATIVE × TECHNOLOGY × BUSINESS
          </span>
        </div>

        {/* Custom Progress Bar */}
        <div style={{ width: '260px', display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          {/* Track */}
          <div
            style={{
              width: '100%',
              height: '2px',
              backgroundColor: 'rgba(255,255,255,0.05)',
              position: 'relative',
              borderRadius: '2px',
              overflow: 'hidden'
            }}
          >
            {/* Progress fill */}
            <div
              style={{
                width: `${progress}%`,
                height: '100%',
                background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-purple), var(--accent-pink))',
                boxShadow: '0 0 8px var(--accent-pink)',
                transition: 'width 0.1s ease-out'
              }}
            />
          </div>

          {/* Percentage */}
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: 'var(--text-secondary)'
            }}
          >
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
};
