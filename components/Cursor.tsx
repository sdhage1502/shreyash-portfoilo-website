'use client';

import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const followerPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Check for touch device
    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      follower.style.display = 'none';
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.classList.add('opacity-100');
      follower.classList.add('opacity-100');
    };

    const onMouseEnterHoverable = () => {
      cursor.classList.add('scale-[5]', 'bg-white/15');
      follower.classList.add('scale-[1.6]', 'border-white/50');
    };
    
    const onMouseLeaveHoverable = () => {
      cursor.classList.remove('scale-[5]', 'bg-white/15');
      follower.classList.remove('scale-[1.6]', 'border-white/50');
    };

    document.addEventListener('mousemove', onMouseMove);

    // Follower interpolation
    let animId: number;
    const followCursor = () => {
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.12;
      follower.style.left = followerPos.current.x + 'px';
      follower.style.top = followerPos.current.y + 'px';
      animId = requestAnimationFrame(followCursor);
    };
    animId = requestAnimationFrame(followCursor);

    // Attach hover listeners
    const updateHoverables = () => {
      const hoverables = document.querySelectorAll('a, button, .project-title, .cta-button, .magnetic');
      hoverables.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterHoverable);
        el.addEventListener('mouseleave', onMouseLeaveHoverable);
      });
      return hoverables;
    };

    const hvrs = updateHoverables();
    
    // Observer for dynamic content
    const observer = new MutationObserver(() => updateHoverables());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
      hvrs.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterHoverable);
        el.removeEventListener('mouseleave', onMouseLeaveHoverable);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-[var(--accent)] rounded-full pointer-events-none z-[99999] opacity-0 transition-[transform,width,height,opacity,background-color] duration-300 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-[36px] h-[36px] border border-white/30 rounded-full pointer-events-none z-[99998] opacity-0 transition-[transform,width,height,opacity,border-color] duration-500 ease-out -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default Cursor;
