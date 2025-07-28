import { useState, useEffect, useRef } from 'react';
import { GitBranch } from 'lucide-react';
import vaxryImage from '../../assets/vaxry-github.webp';

function GitTile({ lifeSpan, maxSpeed, minSpeed }) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const angle = Math.random() * 2 * Math.PI;
    const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
    const x = speed * Math.cos(angle);
    const y = speed * Math.sin(angle);

    setStyle({
      transform: `translate(${x}px, ${y}px)`,
      opacity: 0,
      transition: `transform ${lifeSpan}ms linear, opacity ${lifeSpan}ms linear`,
    });

    const timeout = setTimeout(() => {
      setStyle((prev) => ({ ...prev, opacity: 0 }));
    }, lifeSpan);

    return () => clearTimeout(timeout);
  }, [lifeSpan, maxSpeed, minSpeed]);

  return (
    <div
      className="absolute w-4 h-4 bg-purple-400 rounded-full"
      style={style}
    />
  );
}

function Hypractive() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [tiles, setTiles] = useState([]);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const clickTimeoutRef = useRef(null);

  const ASCENION_CLICKS = 69;
  const CLICK_EACH_MS = 400;
  const ASCENION_FALLOFF = -ASCENION_CLICKS / 20;
  const MAX_LIFESPAN_TILE = 2500;
  const MIN_LIFESPAN_TILE = 800;
  const MAX_TILES_PER_CLICK = 15;
  const MIN_TILES_PER_CLICK = 2;

  // Linear interpolation
  const lerp = (a, b, t) => a + (b - a) * t;

  // Easing functions
  const cubicInOut = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  const expoInOut = (t) => {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : t < 0.5
      ? Math.pow(2, 20 * t - 10) / 2
      : (2 - Math.pow(2, -20 * t + 10)) / 2;
  };

  const relativeLevel = Math.min(clickCount / ASCENION_CLICKS, 1);
  const cubicRelativeLevel = cubicInOut(relativeLevel);
  const expoRelativeLevel = expoInOut(relativeLevel);
  const hasAscended = relativeLevel >= 1;

  const hue = lerp(200, 130, cubicRelativeLevel);
  const scale = lerp(0.9, 2, cubicRelativeLevel);
  const translateY = lerp(0, 10, cubicRelativeLevel);
  const tileCount = Math.floor(lerp(MIN_TILES_PER_CLICK, MAX_TILES_PER_CLICK, cubicRelativeLevel));
  const lifeSpan = lerp(MIN_LIFESPAN_TILE, MAX_LIFESPAN_TILE, cubicRelativeLevel);
  const maxSpeed = lerp(10, 38, expoRelativeLevel);
  const minSpeed = lerp(1, 9, expoRelativeLevel);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClickTime < CLICK_EACH_MS) {
      setClickCount((prev) => Math.min(prev + 1, ASCENION_CLICKS));
    } else {
      setClickCount((prev) => Math.max(prev + ASCENION_FALLOFF, 0));
    }
    setLastClickTime(now);

    // Add new tiles
    setTiles((prev) => [
      ...prev,
      ...Array.from({ length: tileCount }, () => ({ id: Math.random(), lifeSpan, maxSpeed, minSpeed })),
    ]);

    // Remove tiles after lifespan
    setTimeout(() => {
      setTiles((prev) => prev.slice(tileCount));
    }, lifeSpan);

    // Decrease click count if no new clicks
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      setClickCount((prev) => Math.max(prev + ASCENION_FALLOFF, 0));
    }, CLICK_EACH_MS + 100);
  };

  const handleClickUnlocked = () => {
    window.open('https://github.com/hyprwm/Hyprland/commits/main/', '_blank');
  };

  return (
    <>
      <div className="relative overflow-visible">
        <button
          className="flex items-center gap-3 font-bold text-slate-400 shadow-black drop-shadow-lg transition-colors hover:underline active:scale-95"
          style={{
            color: relativeLevel > 0 ? `hsl(${hue}, 64%, 53%)` : undefined,
            transform: relativeLevel > 0 ? `scale(${scale}) translateY(-${translateY}px)` : undefined,
          }}
          onClick={isAnimationComplete ? handleClickUnlocked : handleClick}
        >
          <GitBranch className="h-8 w-8" fill="currentColor" />
          <span className="transition-colors">Hypractive development</span>
        </button>

        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
          {tiles.map((tile) => (
            <GitTile
              key={tile.id}
              lifeSpan={tile.lifeSpan}
              maxSpeed={tile.maxSpeed}
              minSpeed={tile.minSpeed}
            />
          ))}
        </div>

        <div className="mask">
          {hasAscended && (
            <div
              className="vaxx-wrapper absolute bottom-[240px] left-1/2 z-50 aspect-square -translate-x-[100px] rounded-full animate-[fadeInZoomIn_2.5s_cubic-bezier(0.05,-0.82,0.165,1)]"
              style={{ width: '220px' }}
              onAnimationEnd={() => setIsAnimationComplete(true)}
            >
              <img
                src={vaxryImage}
                alt="Vaxry"
                className="w-full h-full rounded-full outline outline-2 outline-orange-300"
              />
            </div>
          )}

          <div
            className="bg-gradient"
            style={{
              opacity: hasAscended ? 1 : relativeLevel,
              '--relativeLevel': hasAscended ? 1 : expoRelativeLevel - 0.2,
            }}
          />
        </div>
      </div>

      <style>{`
        .bg-gradient {
          position: absolute;
          bottom: -100%;
          left: 50%;
          transform: translate(-50%, calc(var(--relativeLevel) * -60%));
          z-index: -10;
          transition: opacity 550ms, transform 1.5s ease-in;
          background: radial-gradient(
            closest-side,
            #fef9c3, /* yellow-200 */
            rgba(251, 146, 60, 0.5), /* orange-300/50 */
            rgba(153, 27, 27, 0) /* red-800/0 */
          );
          width: 150vw;
          height: 800px;
        }

        .vaxx-wrapper {
          pointer-events: auto;
          filter: drop-shadow(0px 0px 10px #fef9c3) drop-shadow(0px 0px 40px #fb923c);
        }

        .mask {
          position: absolute;
          pointer-events: none;
          bottom: 0;
          z-index: 10;
          left: 50%;
          transform: translate(-50%, 0);
          width: 150vw;
          height: 1000px;
          overflow: hidden;
        }

        @keyframes fadeInZoomIn {
          0% {
            opacity: 0;
            transform: translate(-100px, 500px) scale(0.05);
          }
          100% {
            opacity: 1;
            transform: translate(-100px, 0) scale(1);
          }
        }
      `}</style>
    </>
  );
}

export default Hypractive;