import { useEffect, useRef, useState } from 'react';

function Card({ className, color = 'cyan', children }) {
  const cardRef = useRef(null);
  const [gradientPos, setGradientPos] = useState({ x: 0, y: 0 });
  const [borderPos, setBorderPos] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  const mousePosRef = useRef({ clientX: 0, clientY: 0 });

  const updateGradient = () => {
    if (!isMouseOver || !cardRef.current) {
      requestAnimationFrame(updateGradient);
      return;
    }
    const rect = cardRef.current.getBoundingClientRect();
    const { clientX, clientY } = mousePosRef.current;
    const bounceBack = 2;
    const normX = Math.max(bounceBack, Math.min(clientX - rect.left, rect.width - bounceBack));
    const normY = Math.max(bounceBack, Math.min(clientY - rect.top, rect.height - bounceBack));
    setGradientPos((prev) => ({
      x: prev.x + (normX - prev.x) * 0.05, // Match PatternBackground damping
      y: prev.y + (normY - prev.y) * 0.05,
    }));
    setBorderPos((prev) => ({
      x: prev.x + (normX - prev.x) * 0.05,
      y: prev.y + (normY - prev.y) * 0.05,
    }));
    console.log({ normX, normY, gradientPos, borderPos }); // Debug
    requestAnimationFrame(updateGradient);
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (event) => {
      mousePosRef.current = { clientX: event.clientX, clientY: event.clientY };
      console.log('mousemove', event.clientX, event.clientY); // Debug
    };

    const handleMouseEnter = () => {
      setIsMouseOver(true);
      requestAnimationFrame(updateGradient);
    };

    const handleMouseLeave = () => {
      setIsMouseOver(false);
      setGradientPos({ x: 0, y: 0 });
      setBorderPos({ x: 0, y: 0 });
    };

    if (!window.matchMedia('(max-width: 640px)').matches) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMouseOver]);

  return (
    <>
      <div
        className={`card-container group relative flex items-end justify-end rounded-3xl transition-colors duration-300 ${color === 'purple' ? 'purpleGradient' : ''} ${className} ${isMouseOver ? 'isHoverCards' : ''}`}
        style={{
          '--x': `${gradientPos.x}px`,
          '--y': `${gradientPos.y}px`,
          '--borderX': `${borderPos.x}px`,
          '--borderY': `${borderPos.y}px`,
        }}
        ref={cardRef}
        role="contentinfo"
      >
        <div className="card-content z-10 h-full w-full">{children}</div>
        <div className="card-gradient max-sm:hidden" />
        <div className="gradient_black max-sm:hidden" />
        <div className="border-gradient max-sm:hidden" />
      </div>

      <style>{`
        .card-container {
          z-index: 2;
          contain: paint;
          background: radial-gradient(
            100% 100% at 100% 0%,
            #1e3a8a, /* blue-950 */
            #111827 /* neutral-950 */
          );
        }

        @media (min-width: 768px) {
          .card-container {
            background: #1f2937; /* slate-800 */
          }

          .card-container:hover {
            background: #1e40af; /* blue-900 */
          }
        }

        .gradient_black {
          position: absolute;
          inset: 2px;
          z-index: 2;
          border-radius: inherit;
          contain: paint;
          background: black;
        }

        .border-gradient {
          position: absolute;
          z-index: 1;
          border-radius: inherit;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 240ms ease-in-out;
          left: 0;
          top: 0;
          pointer-events: none;
          contain: paint;
          background: radial-gradient(
            620px circle at calc(var(--borderX) * 1px) calc(var(--borderY) * 1px),
            color-mix(in srgb, var(--color1, #06b6d4) 50%, transparent) 0%,
            transparent 100%
          ) !important;
        }

        .isHoverCards .border-gradient {
          opacity: 1;
        }

        .card-gradient {
          position: absolute;
          inset: 0;
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          border-radius: inherit;
          z-index: 20;
          mix-blend-mode: hard-light;
          pointer-events: none;
          contain: paint;
        }

        .card-gradient::before {
          position: absolute;
          z-index: 20;
          border-radius: inherit;
          min-width: 200%;
          min-height: 200%;
          aspect-ratio: 1 / 1;
          transform: translate(-25%, 0);
          transform-origin: top left;
          left: 50%;
          opacity: 0;
          transition: opacity 120ms ease-in-out;
          content: '';
          pointer-events: none;
          contain: paint;
          background: url('/assets/grain.webp'),
                      radial-gradient(
                        ellipse at calc(var(--x) * 1px) calc(var(--y) * 1px),
                        var(--color1, #06b6d4 /* cyan-500 */),
                        var(--color2, rgba(29, 78, 216, 0.4) /* blue-700/40 */),
                        var(--color3, rgba(30, 64, 175, 0.15) /* blue-900/15 */)
                      ) !important;
        }

        .group:hover .card-gradient::before {
          opacity: 0.5;
          transition: opacity 820ms;
        }

        .purpleGradient {
          --color1: rgba(167, 139, 250, 0.9); /* purple-400/90 */
          --color2: rgba(79, 70, 229, 0.9); /* indigo-800/90 */
          --color3: rgba(79, 70, 229, 0.2); /* indigo-800/20 */
        }
      `}</style>
    </>
  );
}

export default Card;