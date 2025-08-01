import { useAnimateIn } from './helper';

function FameRicePreview({ image, containerClass = '', imageClass = '' }) {
  const ref = useAnimateIn({ slide: 20, duration: 800 });

  return (
    <>
      <div className={`hof-rice ${containerClass}`}>
        <div ref={ref} className="hof-rice-inner">
          <img
            src={image}
            alt="Rice desktop"
            className={`hof-rice-image ${imageClass}`}
          />
          <div className="hof-rice-blurred">
            <img
              src={image}
              alt="Rice blurred"
              aria-hidden="true"
              className="hof-rice-blurred-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hof-rice {
          position: relative;
          height: auto;
          width: 100%;
          max-width: 1100px;
        }
        .hof-rice-inner {
          height: 100%;
          width: 100%;
        }
        .hof-rice-image {
          width: 100%;
          object-fit: cover;
          border-radius: 0.75rem;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          transition: all 540ms cubic-bezier(0.1, -0.81, 0.31, 2);
        }
        .hof-rice-image:hover {
          transform: scale(1.01);
        }
        
        /* Mobile hover refinements */
        @media (max-width: 768px) {
          .hof-rice-image {
            border-radius: 0.5rem;
            box-shadow: 0 15px 35px -8px rgba(0,0,0,0.3);
          }
          .hof-rice-image:hover {
            transform: scale(1.005);
          }
        }
        
        @media (max-width: 480px) {
          .hof-rice-image {
            border-radius: 0.375rem;
            box-shadow: 0 10px 25px -5px rgba(0,0,0,0.35);
          }
          .hof-rice-image:active {
            transform: scale(0.995);
          }
        }
        
        .hof-rice-blurred {
          transform: translate(-50%, 30%);
          position: absolute;
          bottom: -40px;
          left: 50%;
          pointer-events: none;
          width: calc(100% + 120px);
          height: calc(150% + 120px);
          opacity: 0.9;
          z-index: -10;
          mask-image: radial-gradient(50% 50% at 50% 50%, black, transparent);
          contain: content layout size style;
          transition: filter 500ms;
        }
        
        /* Mobile blur refinements */
        @media (max-width: 768px) {
          .hof-rice-blurred {
            bottom: -25px;
            width: calc(100% + 80px);
            height: calc(130% + 80px);
            opacity: 0.7;
            transform: translate(-50%, 25%);
          }
        }
        
        @media (max-width: 480px) {
          .hof-rice-blurred {
            bottom: -15px;
            width: calc(100% + 50px);
            height: calc(120% + 50px);
            opacity: 0.6;
            transform: translate(-50%, 20%);
          }
        }
        
        .hof-rice-blurred-image {
          height: 100%;
          width: 100%;
          object-fit: cover;
          filter: blur(8px);
        }
        
        /* Mobile blur image refinements */
        @media (max-width: 768px) {
          .hof-rice-blurred-image {
            filter: blur(6px);
          }
        }
        
        @media (max-width: 480px) {
          .hof-rice-blurred-image {
            filter: blur(4px);
          }
        }
      `}</style>
    </>
  );
}

export default FameRicePreview;