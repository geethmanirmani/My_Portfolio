"use client";
import React, { useEffect, useState, useRef } from 'react';

export const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.glass') || 
        target.closest('.project-number') ||
        target.style.cursor === 'pointer';

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    let animationFrameId: number;
    const updatePosition = () => {
      if (!followerRef.current) return;

      const lerpFactor = 0.15;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * lerpFactor;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * lerpFactor;

      followerRef.current.style.left = `${currentPos.current.x}px`;
      followerRef.current.style.top = `${currentPos.current.y}px`;

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={followerRef} 
      className={`cursor-follower ${isHovered ? 'hovered' : ''}`}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999
      }}
    />
  );
};
