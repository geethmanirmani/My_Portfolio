"use client";
import React, { useRef, useEffect } from 'react';
import { creativeProjects } from '../data/creativeProjects';
import { Film, Play, Sparkles } from 'lucide-react';

export const CreativeWorld: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    let offset = 0;
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Warped digital grid lines
      ctx.strokeStyle = 'rgba(201, 168, 118, 0.08)'; // Gold grid lines
      ctx.lineWidth = 1;
      const gridSize = 25;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < height; y += 10) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const force = Math.max(0, (160 - dist) / 160);
          
          const rippleX = x + Math.sin(y * 0.05 + offset) * 6 * force;
          if (y === 0) ctx.moveTo(rippleX, y);
          else ctx.lineTo(rippleX, y);
        }
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 10) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const force = Math.max(0, (160 - dist) / 160);
          
          const rippleY = y + Math.cos(x * 0.05 + offset) * 6 * force;
          if (x === 0) ctx.moveTo(x, rippleY);
          else ctx.lineTo(x, rippleY);
        }
        ctx.stroke();
      }

      // Elegant wave lines
      ctx.strokeStyle = 'rgba(201, 168, 118, 0.25)'; // Gold wave line
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i < width; i++) {
        const amplitude = 25 + (mouse.y / height) * 35;
        const frequency = 0.007 + (mouse.x / width) * 0.008;
        const waveY = height / 2 + Math.sin(i * frequency + offset) * amplitude;
        if (i === 0) ctx.moveTo(i, waveY);
        else ctx.lineTo(i, waveY);
      }
      ctx.stroke();

      offset += 0.02;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (canvas) canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheelRaw = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        e.stopPropagation(); // Block scroll bubbling to Lenis
        container.scrollLeft += e.deltaY * 1.2;
      }
    };

    container.addEventListener('wheel', handleWheelRaw, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheelRaw);
    };
  }, []);

  return (
    <section
      id="creative"
      style={{
        background: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        gap: '60px',
        paddingTop: '100px',
        position: 'relative'
      }}
    >
      <div 
        className="ambient-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(201,168,118,0.05) 0%, transparent 60%)',
          bottom: '10%',
          left: '5%'
        }} 
      />

      {/* Title block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <span style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: 'var(--accent-gold)', fontWeight: 700 }}>03 — CREATIVE WORLD</span>
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
          BEYOND<br />THE SCREEN.
        </h2>
        
        {/* Creative identities tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '10px' }}>
          {['VIDEOGRAPHY', 'VISUAL STORYTELLING', 'CREATIVE CONTENT', 'VIDEO EDITING', 'CREATIVE DIRECTION'].map((tag) => (
            <span
              key={tag}
              className="glass"
              style={{
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                padding: '6px 14px',
                borderRadius: '15px',
                color: 'var(--text-secondary)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Showreel Section */}
      <div
        className="glass"
        style={{
          width: '100%',
          borderRadius: '16px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '40px',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        {/* Interactive Showreel Video Player */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0d0d0f 0%, #151518 100%)',
            border: '1px solid var(--border-glass)',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}
          className="video-placeholder"
        >
          {/* Interactive Canvas Grid */}
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          />

          {/* Central Play button */}
          <div
            className="glass"
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              color: 'var(--text-primary)',
              transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <Play fill="white" size={24} style={{ marginLeft: '4px' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              letterSpacing: '0.1em',
              zIndex: 2
            }}
          >
            <Film size={14} />
            <span>PLAY SHOWREEL (PLACEHOLDER)</span>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              fontSize: '0.65rem',
              fontWeight: 500,
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              zIndex: 2
            }}
          >
            MP4 / WEBM
          </div>
        </div>

        {/* Showreel Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textTransform: 'uppercase'
            }}
          >
            SHOWREEL
          </h3>
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              fontWeight: 300
            }}
          >
            A COLLECTION OF MOTION, MOMENTS AND STORIES.
          </p>
          <p
            style={{
              fontSize: '0.85rem',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              fontWeight: 400
            }}
          >
            This cinematic showcase captures editing pacing, color composition, and artistic visual layouts. Full showreel uploads will connect to MP4/WebM hosting.
          </p>
        </div>
      </div>

      {/* Projects Slider Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          CREATIVE PROJECTS
        </h3>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Use Mousewheel / Scroll Horizontally →
        </span>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        data-lenis-prevent
        style={{
          display: 'flex',
          gap: '30px',
          overflowX: 'auto',
          paddingBottom: '20px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        className="hide-scrollbar"
      >
        {creativeProjects.map((project, idx) => (
          <div
            key={project.id}
            style={{
              flex: '0 0 350px',
              height: '420px',
              borderRadius: '12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              cursor: 'pointer',
              background: 'var(--bg-tertiary)',
              border: '1.5px solid var(--border-glass)',
              transition: 'transform 0.1s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              willChange: 'transform'
            }}
            onMouseMove={(e) => {
              const el = e.currentTarget as HTMLElement;
              const rect = el.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const xc = rect.width / 2;
              const yc = rect.height / 2;
              const rotX = (yc - y) / 10;
              const rotY = (x - xc) / 10;
              
              el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.01, 1.01, 1.01)`;
              el.style.borderColor = 'var(--accent-pink)';
              el.style.boxShadow = '0 15px 35px rgba(255, 0, 122, 0.08)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateY(0)';
              el.style.borderColor = 'var(--border-glass)';
              el.style.boxShadow = 'none';
            }}
          >
            {/* Visual Thumbnail */}
            <div
              style={{
                width: '100%',
                height: '200px',
                background: project.thumbnailGradient,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <Sparkles size={24} style={{ opacity: 0.2, color: 'white' }} />
              
              <span
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.15em'
                }}
              >
                {project.year}
              </span>

              <span
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '16px',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'rgba(0,0,0,0.4)',
                  padding: '4px 8px',
                  borderRadius: '4px'
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Description Info */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                  0{idx + 1}
                </span>
                <span style={{ fontSize: '0.7rem', fontWeight: 500, color: 'var(--accent-gold)', letterSpacing: '0.05em' }}>
                  {project.role}
                </span>
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
              >
                {project.title}
              </h4>

              <p style={{ fontSize: '0.85rem', lineHeight: 1.5, color: 'var(--text-secondary)', fontWeight: 300 }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
