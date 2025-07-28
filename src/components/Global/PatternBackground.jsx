import { useEffect, useRef, useState } from 'react';

function PatternBackground({ className }) {
  const wrapperRef = useRef(null);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [gradientSize, setGradientSize] = useState(800);
  const [gradientPos, setGradientPos] = useState([-1000, -1000]);
  const mousePosRef = useRef({ clientX: 0, clientY: 0 });

  const resizeGradient = () => {
    if (wrapperRef.current) {
      setGradientSize(wrapperRef.current.getBoundingClientRect().width * 3);
    }
  };

  const track = (e) => {
    mousePosRef.current = { clientX: e.clientX, clientY: e.clientY };
  };

  const updateGradient = () => {
    if (!isMouseOver || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const { clientX, clientY } = mousePosRef.current;
    const newPos = [
      clientX - rect.x - gradientSize * 0.5,
      clientY - rect.y - gradientSize * 0.5,
    ];
    setGradientPos((prev) => [
      prev[0] + (newPos[0] - prev[0]) * 0.1, // Simulate spring damping
      prev[1] + (newPos[1] - prev[1]) * 0.1,
    ]);
    requestAnimationFrame(updateGradient);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
    document.addEventListener('mousemove', track);
    requestAnimationFrame(updateGradient);
  };

  const handleMouseLeave = (e) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    const isMouseStillOver =
      rect.x <= e.clientX &&
      rect.y <= e.clientY &&
      rect.x + rect.width > e.clientX &&
      rect.y + rect.height > e.clientY;
    if (!isMouseStillOver) {
      setTimeout(() => setIsMouseOver(false), 1500);
      document.removeEventListener('mousemove', track);
    }
  };

  useEffect(() => {
    resizeGradient();
    window.addEventListener('resize', resizeGradient);
    return () => window.removeEventListener('resize', resizeGradient);
  }, []);

  return (
    <>
      <div
        className={`pattern-wrapper ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-hidden="true"
        ref={wrapperRef}
      >
        <div
          className="pattern-gradient"
          style={{
            '--x': `${gradientPos[0]}px`,
            '--y': `${gradientPos[1]}px`,
            '--size': `${gradientSize}px`,
          }}
        ></div>

        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="background-pattern-id"
            x="0"
            y="0"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0.5" y="0.5" width="30" height="30" rx="0" stroke="currentColor" />
          </pattern>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#background-pattern-id)"
          />
        </svg>
      </div>

      <style>{`
        .pattern-wrapper {
          mask-image: linear-gradient(black 75%, transparent);
          contain: strict;
          user-select: none;
        }

        svg {
          background: #000; /* black */
        }

        .pattern-gradient {
          position: absolute;
          top: 0;
          left: 0;
          mix-blend-mode: color-dodge;
          height: var(--size);
          width: var(--size);
          background: radial-gradient(
            closest-side,
            #67e8f9, /* cyan-300 */
            rgba(23, 37, 84, 1) 30%, /* blue-950 */
            transparent
          );
          opacity: 100%;
          transform: translate(var(--x), var(--y));
          z-index: 20;
        }
      `}</style>
    </>
  );
}

export default PatternBackground;