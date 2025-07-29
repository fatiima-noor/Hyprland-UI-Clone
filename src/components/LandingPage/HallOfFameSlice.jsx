import TitleWrapper from '../Global/TitleWrapper';
import TitlePre from '../Global/TitlePre';
import TitleHeading from '../Global/TitleHeading';
import Button from '../Global/Button';
import FameRicePreview from './FameRicePreview';
import { useAnimateIn } from './helper';
import lauroroImage from '../../assets/lauroro.webp';
import amadeusImage from '../../assets/amadeus.webp';
import flickoImage from '../../assets/flicko.webp';
import grainImage from '../../assets/grain.webp';

function HallOfFameSlice() {
  const sectionRef = useAnimateIn({ fade: 0, slide: 24, duration: 3000, threshold: 0.1 });
  const containerRef = useAnimateIn({ slide: 24, fade: 0.5, duration: 800 });

  return (
    <>
      <section ref={sectionRef} className="hof-section">
        <div className="hof-title-container">
          <TitleWrapper>
            <TitleHeading>Hall of Fame</TitleHeading>
            <TitlePre>Memorials of the ricing legends</TitlePre>
          </TitleWrapper>
        </div>

        <div className="hof-atmosphere" />

        <div ref={containerRef} className="hof-container">
          <a href="/hall_of_fame" className="hof-button">
            <Button size="lg" type="fancyOutline">Go to Hall of Fame</Button>
          </a>

          <FameRicePreview
            image={lauroroImage}
            containerClass="z-[1] translate-z-[-100px] -mb-[30%] hover:translate-z-[-98px]"
            imageClass="opacity-50 hover:opacity-60 mask-[linear-gradient(black,black_45%,transparent_65%)]"
          />
          <FameRicePreview
            image={amadeusImage}
            containerClass="z-[2] translate-z-[-40px] -mb-[30%] hover:translate-z-[-38px]"
            imageClass="opacity-80 hover:opacity-100 mask-[linear-gradient(black,black_10%,transparent_75%)] md:mask-[linear-gradient(black,black_50%,transparent_75%)]"
          />
          <FameRicePreview
            image={flickoImage}
            containerClass="z-[3] -mb-4 sm:-mb-8 md:-mb-24"
            imageClass="rounded-none rounded-t-xl mask-[linear-gradient(black,black_50%,transparent)]"
          />
        </div>

        <div className="hof-glow" />
      </section>

      <style>{`
        .hof-section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          contain: layout style content size;
        }
        .hof-title-container {
          z-index: 20;
          margin-bottom: -10rem;
          padding: 1rem;
        }
        .hof-atmosphere {
          position: absolute;
          z-index: -30;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100vh;
          width: 200vw;
          max-width: 2400px;
          max-height: 1000px;
          background: url('${grainImage}'),
            radial-gradient(closest-side, rgba(59,130,246,0.3), transparent),
            radial-gradient(15% 20%, rgba(6,182,212,0.7), transparent);
          mask-image: radial-gradient(closest-side, white, rgba(0,0,0,0.8) 80%, transparent);
        }
        .hof-container {
          position: relative;
          margin-top: -2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          max-width: 1100px;
          gap: 6rem;
          overflow: hidden;
          perspective: 100px;
          padding-left: 4rem;
          padding-right: 4rem;
        }
        .hof-button {
          position: absolute;
          bottom: 6rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }
        .hof-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 400px;
          opacity: 0.3;
          pointer-events: none;
          background-image: url('${grainImage}'),
            radial-gradient(ellipse at bottom, rgba(244,114,182), rgba(79,70,229,0.5) 50%, rgba(49,46,129,0) 80%);
          mask-image: radial-gradient(ellipse at bottom, white, rgba(0,0,0,1) 90%, transparent);
        }
          
      `}</style>
    </>
  );
}

export default HallOfFameSlice;
