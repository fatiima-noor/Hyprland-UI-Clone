import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import HeroBackground from './HeroBackground';
import { useInView } from 'react-intersection-observer';

function Hero({ backgroundData }) {
  const [isMobile, setIsMobile] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[36rem] w-full flex-col items-center justify-center overflow-x-hidden"
    >
      <div className="pointer-events-none z-10 flex h-full min-h-max flex-col items-center justify-center px-5">
        <h1
          className="ani-in title pointer-events-auto mb-4 max-w-[20ch] text-center text-4xl font-bold leading-[1.25] sm:text-6xl md:text-7xl lg:text-8xl lg:tracking-tight animate-in fade-in-0 slide-in-from-bottom-6"
          style={{ animationDelay: '384ms', animationFillMode: 'backwards' }}
        >
          Modern compositor <br />
          <span className="hyprgradient title-gradient">with the looks</span>
        </h1>
        <p
          className="ani-in mb-8 text-center text-base font-medium text-slate-400 sm:mb-12 sm:max-w-lg sm:text-xl md:max-w-lg md:text-2xl lg:max-w-[50ch] animate-in fade-in-0 slide-in-from-bottom-6"
          style={{ animationDelay: '794ms', animationFillMode: 'backwards' }}
        >
          Hyprland provides the latest Wayland features, dynamic tiling, all the eyecandy, powerful
          plugins and much more, while still being lightweight and responsive
        </p>
        <div
          className="pointer-events-auto flex items-center gap-7 animate-in fade-in-0 slide-in-from-bottom-4"
          style={{ animationDelay: '1390ms', animationFillMode: 'backwards', animationDuration: '500ms' }}
        >
          <a href="https://wiki.hypr.land/Getting-Started/Installation/">
            <Button size="xl">Install</Button>
          </a>
          <a href="https://wiki.hypr.land/">
            <Button type="fancyOutline" size="xl">Wiki</Button>
          </a>
        </div>
      </div>
      <div className="absolute inset-0">
        <HeroBackground backgroundData={backgroundData} isVisible={inView} />
      </div>
    </section>
  );
}

export default Hero;