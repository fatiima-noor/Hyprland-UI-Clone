import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Video from './Video';
import videoSrc from '../../assets/end_4_rice_intro.mp4';

function PreviewRiceSlice({ className }) {
  const videoRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.5 });
  const isChrome = navigator.userAgent.toLowerCase().includes('chrome');

  useEffect(() => {
    if (!videoRef.current) {
      console.log('Video ref not set');
      return;
    }

    console.log('In view:', inView, 'Is Chrome:', isChrome);
    if (inView && isChrome) {
      console.log('Attempting to play video on inView');
      videoRef.current.play().catch((err) => console.error('Play error on inView:', err));
    } else {
      console.log('Pausing video');
      videoRef.current.pause();
    }
  }, [inView, isChrome]);

  const handleClick = () => {
    if (videoRef.current && videoRef.current.paused) {
      console.log('Manually triggering play on click');
      videoRef.current.play().catch((err) => console.error('Play error on click:', err));
    }
  };

  return (
    <>
      <section
        ref={ref}
        className={`preview-rice-section relative z-10 -mb-4 w-full max-w-[1400px] px-1 animate-in fade-in-0 slide-in-from-bottom-10 [animation-delay:1700ms] [animation-duration:2000ms] md:-mt-8 lg:px-8 ${inView ? 'isVisible' : ''} ${className}`}
        onClick={handleClick}
      >
        <div className="preview-rice-wrapper mx-3 rounded-xl relative scale-90 bg-cyan-300/70 border-2 border-sky-400 shadow-[0_0_44px_rgba(88,225,255,0.8)] aspect-[16/9]">
          <div className="preview-rice-video overflow-hidden rounded-xl opacity-30 transition-opacity duration-[1060ms] ease-[cubic-bezier(0.9,-1,0.065,1.8)]">
            <Video
              muted
              sources={[videoSrc]}
              videoClass="!rounded-2xl overflow-hidden w-full h-full"
              playButtonClass=""
              ref={videoRef}
            />
          </div>
          <a
            href="https://github.com/end-4/"
            className="absolute -bottom-7 left-0 block max-w-max px-3 pt-2 text-sm font-medium text-slate-100/70 hover:underline"
          >
            Setup by @end_4
          </a>
        </div>
        <div className="preview-rice-bg" aria-hidden="true" />
      </section>

      <style>{`
        .preview-rice-section {
          contain: layout style content;
        }

        .preview-rice-section.isVisible .preview-rice-wrapper {
          scale: 1;
          background: transparent;
          box-shadow: 0 0 24px rgba(88, 225, 255, 0.5);
        }

        .preview-rice-section.isVisible .preview-rice-video {
          opacity: 1;
        }

        .preview-rice-wrapper {
          transition: all cubic-bezier(0.9, -1, 0.065, 1.8) 1060ms;
          position: relative;
        }

        .preview-rice-video {
          height: 100%;
          width: 100%;
        }

        .preview-rice-bg {
          position: absolute;
          z-index: -10;
          pointer-events: none;
          opacity: 0.4;
          min-width: 2800px;
          overflow-x: hidden;
          top: -160px;
          left: 50%;
          transform: translateX(-50%);
          width: 1100px;
          height: 200%;
          background-image: url('/assets/grain.webp'),
                           radial-gradient(closest-side, #0ea5e9, rgba(99, 102, 241, 0));
          mask-image: radial-gradient(closest-side, white, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 90%, transparent);
        }
      `}</style>
    </>
  );
}

export default PreviewRiceSlice;