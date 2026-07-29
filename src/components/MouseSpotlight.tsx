import { useEffect, useState } from 'react';

export default function MouseSpotlight() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkDevice = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0)
      );
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Update global CSS variables for stylesheet radial gradients
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

      // Check if user is hovering over interactive elements
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('interactive-element')
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Background Spotlight Layer */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.05), rgba(139, 92, 246, 0.02) 40%, transparent 80%)`
        }}
      />
      
      {/* Custom Glow Cursor */}
      <div
        className={`pointer-events-none fixed left-0 top-0 z-50 rounded-full border border-primary/45 bg-primary/5 will-change-transform ${
          isHoveringClickable ? 'h-10 w-10 border-secondary bg-secondary/10' : 'h-6 w-6'
        }`}
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%) scale(${isHoveringClickable ? 1.5 : 1})`,
          transition: 'transform 0.08s ease-out, width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s'
        }}
      />
    </>
  );
}
