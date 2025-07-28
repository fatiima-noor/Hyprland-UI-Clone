import Card from '../Global/Card';
import CardsContainer from '../Global/CardsContainer';
import { Gamepad2, Layout, Keyboard, Radio, Touchpad, PanelTop } from 'lucide-react';
import Hypractive from './Hypractive';
import configDefaultImage from '../../assets/config_default.webp';
import configHoverImage from '../../assets/config_hover.webp';
import smoothDefaultImage from '../../assets/smooth_default.webp';
import smoothHoverImage from '../../assets/smooth_hover.webp';
import tileDefaultImage from '../../assets/tiling_default.webp';
import tileHoverImage from '../../assets/tiling_hover.webp';

function FeaturesSlice() {
  return (
    <>
      <section className="features-container relative flex max-w-screen-xl flex-col items-center px-3 md:px-8">
        <div className="features-title mb-8 text-center">
          <span className="text-sm font-bold uppercase text-slate-400">TLDR</span>
          <h1 className="text-4xl font-bold text-white">Features</h1>
        </div>

        <CardsContainer className="group grid w-full flex-wrap gap-6 text-lg font-medium text-white/70 lg:grid-cols-2 lg:grid-rows-2 lg:gap-4">
          <Card className="row-span-2 min-h-[20rem]" color="purple">
            <div className="flex h-full flex-col justify-end p-8 sm:p-12">
              <h2 className="mb-6 text-5xl font-bold text-white lg:text-8xl">Smooth</h2>
              <p className="max-w-[60ch]">
                Smooth transitions. Eye-pleasing animations. Great performance. Highly responsive.
              </p>
              <div className="feature-wrapper absolute inset-0 select-none" aria-hidden="true">
                <div className="feature-image">
                  <img
                    src={smoothDefaultImage}
                    className="feature-image_inner"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <img
                    src={smoothHoverImage}
                    className="feature-image_inner-hover"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card className="min-h-[20rem]" color="purple">
            <div className="flex h-full flex-col justify-end p-8 sm:p-12">
              <h2 className="mb-6 text-5xl font-bold text-white">Easy to configure</h2>
              <p className="max-w-[60ch]">
                Live reloading config. Easy configuration format. Sensible defaults. Great documentation.
              </p>
              <div className="feature-wrapper absolute inset-0 select-none" aria-hidden="true">
                <div className="feature-image">
                  <img
                    src={configDefaultImage}
                    className="feature-image_inner"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <img
                    src={configHoverImage}
                    className="feature-image_inner-hover"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card className="min-h-[20rem]" color="purple">
            <div className="flex h-full flex-col justify-end p-8 sm:p-12">
              <h2 className="mb-6 text-5xl font-bold text-white">Dynamic tiling</h2>
              <p className="max-w-[60ch]">
                Automatic tiling that just works. Supports multiple fine-tuneable layouts, with even more as plugins.
              </p>
              <div className="feature-wrapper absolute inset-0 select-none" aria-hidden="true">
                <div className="feature-image">
                  <img
                    src={tileDefaultImage}
                    className="feature-image_inner"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                  <img
                    src={tileHoverImage}
                    className="feature-image_inner-hover"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Card>
        </CardsContainer>

        <div className="features-links z-10 mt-14 flex max-w-screen-xl flex-col flex-wrap justify-center gap-8 text-lg sm:flex-row">
          <a
            href="https://wiki.hyprland.org/Configuring/Tearing/"
            target="_blank"
            className="icon-feature hover:underline"
            rel="noopener"
          >
            <Gamepad2 className="h-8 w-8" fill="currentColor" />
            Tearing support
          </a>
          <a
            href="https://wiki.hyprland.org/IPC/"
            target="_blank"
            className="icon-feature hover:underline"
            rel="noopener"
          >
            <Radio className="h-8 w-8" fill="currentColor" />
            Socket-based IPC
          </a>
          <a
            href="https://wiki.hyprland.org/Configuring/Dispatchers/"
            target="_blank"
            className="icon-feature hover:underline"
            rel="noopener"
          >
            <PanelTop className="h-8 w-8" fill="currentColor" />
            Window groups
          </a>
          <a
            href="https://wiki.hyprland.org/Configuring/Dispatchers/#special-workspace"
            target="_blank"
            className="icon-feature hover:underline"
            rel="noopener"
          >
            <Layout className="h-8 w-8" fill="currentColor" />
            Special workspaces
          </a>
          <Hypractive />
          <a
            href="https://wiki.hyprland.org/Configuring/Binds/#global-keybinds"
            target="_blank"
            className="icon-feature hover:underline"
            rel="noopener"
          >
            <Keyboard className="h-8 w-8" fill="currentColor" />
            Global shortcuts for apps
          </a>
          <a
            href="https://wiki.hyprland.org/Configuring/Variables/#gestures"
            target="_blank"
            className="icon-feature hover:underline"
            rel="noopener"
          >
            <Touchpad className="h-8 w-8" fill="currentColor" />
            Touchpad gestures
          </a>
        </div>
      </section>

      <style>{`
        .features-container {
          max-width: 1280px; /* max-w-screen-xl */
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }

        @media (min-width: 768px) {
          .features-container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        .features-title {
          margin-bottom: 2rem;
          text-align: center;
        }

        .features-links {
          z-index: 10;
          margin-top: 3.5rem;
          display: flex;
          max-width: 1280px;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          font-size: 1.125rem;
          line-height: 1.75rem;
        }

        @media (min-width: 640px) {
          .features-links {
            flex-direction: row;
          }
        }

        .icon-feature {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          font-weight: 700;
          color: #94a3b8; /* slate-400 */
        }

        .icon-feature:hover {
          text-decoration: underline;
        }

        .feature-wrapper {
          position: absolute;
          inset: 0;
          user-select: none;
        }

        .feature-image {
          position: absolute;
          inset: 0;
          opacity: 0.5;
          z-index: -10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 180ms ease-in-out;
        }

        .feature-wrapper:hover .feature-image {
          opacity: 1;
        }

        .feature-image img {
          position: absolute;
          transition: opacity 1500ms ease-in-out;
          pointer-events: none;
          width: 400px;
          aspect-ratio: 1;
          right: -80px;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (min-width: 768px) {
          .feature-image img {
            width: 600px;
            right: -80px;
          }
        }

        .feature-image_inner-hover {
          opacity: 0;
        }

        .feature-wrapper:hover .feature-image_inner {
          opacity: 0;
        }

        .feature-wrapper:hover .feature-image_inner-hover {
          opacity: 1 !important;
          filter: saturate(1.3);
        }

        .card-container p {
          word-break: break-word; /* Matches word-break: pretty */
        }
      `}</style>
    </>
  );
}

export default FeaturesSlice;