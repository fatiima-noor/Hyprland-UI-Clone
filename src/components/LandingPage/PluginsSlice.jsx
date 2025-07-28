import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Plug, Hexagon, ExternalLink, ArrowLeft } from 'lucide-react';
import PatternBackground from '../Global/PatternBackground';
import Video from './Video';
import Button from '../Global/Button';

function PluginsSlice() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [isVideoCropped, setIsVideoCropped] = useState(false);
  const videoRefs = useRef([]);

  const items = [
    {
      icon: Plug,
      title: 'Plugins.',
      description:
        'Customize everything with official and community extensions. Write your own easily with C++',
      poster: '/videos/outfoxxed_thumb.webp',
      src: '/videos/outfoxxed.mp4',
      subtext: `
        Setup by <a href="https://github.com/outfoxxed/" target="_blank">outfoxxed</a> using 
        <a href="https://github.com/outfoxxed/hy3" target="_blank">hy3</a> and 
        <a href="https://github.com/VortexCoyote/hyprfocus" target="_blank">hyprfocus</a>`,
    },
    {
      icon: Hexagon,
      title: 'Bindings and IPC.',
      description: 'Control your desktop with your favourite languages or simply via IPC.',
      poster: '/videos/aylur_thumb.png',
      src: '/videos/aylur.mp4',
      subtext: `
        Setup by <a href="https://github.com/Aylur/dotfiles" target="_blank">Aylur</a>, creator of
        <a href="https://github.com/Aylur/ags" target="_blank">Ags</a> using Ags to control Hyprland
        via IPC.`,
    },
  ];

  useEffect(() => {
    const updateVideoCropped = () => {
      setIsVideoCropped(window.innerWidth > 1024 && window.innerWidth < 2200);
    };
    updateVideoCropped();
    window.addEventListener('resize', updateVideoCropped);
    return () => window.removeEventListener('resize', updateVideoCropped);
  }, []);

  const setVideoElement = (index) => (element) => {
    videoRefs.current[index] = element;
  };

  const onPlay = (currentIndex) => {
    videoRefs.current
      .filter((_, index) => index !== currentIndex)
      .forEach((video) => video.play());
  };

  const onPause = (activeIndex, currentIndex) => {
    if (currentIndex !== activeIndex) return;
    videoRefs.current
      .filter((_, index) => index !== currentIndex)
      .forEach((video) => video.pause());
  };

  const toggleVideoSlide = () => {
    setIsHoveringVideo(!isHoveringVideo);
  };

  return (
    <>
      <section className="relative z-0 flex min-h-max w-full flex-col items-center py-20">
        <div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 transition-all lg:grid-cols-2 lg:gap-12 animate-in"
          style={{ '--slide': '24px' }}
        >
          <div
            className={clsx(
              'z-10 flex flex-col gap-10 px-5 transition-transform delay-75 duration-300 sm:px-6',
              isHoveringVideo && '-translate-x-36'
            )}
          >
            <div className="txt-shadow mt-8 flex flex-col gap-6">
              <h2 className="text-6xl font-bold text-white">Unlock full power</h2>
              <p className="text-lg font-bold text-slate-300">
                Get the latest features Linux offers. Have full control over your workflow by
                customizing and extending it how you want.
              </p>
            </div>

            <div className="flex h-full flex-col gap-4">
              {items.map(({ icon: Icon, title, description }, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    className={clsx(
                      'flex gap-3 rounded-xl px-4 py-4 outline-0 outline-cyan-400/50 transition-all sm:-ml-4',
                      isActive && 'bg-blue-300/5 shadow-md outline outline-1 backdrop-blur-sm'
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <Icon className="h-8 w-8 shrink-0 text-primary" />
                    <p
                      className={clsx(
                        'txt-shadow text-left text-lg font-medium transition-colors',
                        isActive ? 'text-slate-300' : 'text-slate-400'
                      )}
                    >
                      <span className="font-bold text-white">{title}</span>
                      {description}
                    </p>
                  </button>
                );
              })}
            </div>

            <Button type="fancyOutline" size="lg" className="max-w-max">
              <a href="/plugins/">Check out more plugins</a>
            </Button>

            <div className="hidden gap-1 lg:mt-12 lg:flex lg:flex-col">
              <a
                className="txt-shadow flex w-max max-w-max shrink-0 items-center gap-3 rounded font-bold text-slate-400 hover:underline"
                href="https://github.com/hyprland-community/awesome-hyprland"
                target="_blank"
                rel="noopener"
              >
                <div>
                  Also see <span className="text-cyan-500">Awesome Hyprland</span>
                </div>
                <ExternalLink />
              </a>
              <p className="font-medium text-slate-400">
                A list of plugins, bindings, apps and more made by the community
              </p>
            </div>
          </div>

          <div
            className={clsx(
              'relative z-10 w-full min-w-0 transition-transform sm:h-[25rem] sm:px-4 md:h-[30rem] lg:h-[37rem] lg:px-0',
              isHoveringVideo && '-translate-x-56'
            )}
          >
            {isVideoCropped && (
              <button
                onClick={toggleVideoSlide}
                className={clsx(
                  'group absolute -left-6 top-1/2 z-50 rounded-full bg-blue-400/5 p-2 outline outline-white/10 backdrop-blur-sm transition-transform',
                  isHoveringVideo && 'rotate-180'
                )}
              >
                <ArrowLeft className="h-6 w-6 opacity-70 transition-all group-hover:-translate-x-0.5 group-hover:opacity-100" />
              </button>
            )}

            <div className="h-full w-full" role="complementary">
              {items.map(({ src, poster }, index) => (
                <Video
                  key={index}
                  sources={[src]}
                  poster={poster}
                  autoplay
                  muted
                  setVideoElement={setVideoElement(index)}
                  className="z-10 aspect-video origin-left object-cover object-left shadow-xl shadow-cyan-700/50 outline-2 outline-cyan-500 duration-500 sm:h-[inherit] sm:rounded-lg sm:outline"
                  playButtonClass="lg:left-32 xl:left-1/2"
                  hidden={index !== activeIndex}
                  onPause={() => onPause(activeIndex, index)}
                  onPlay={() => onPlay(index)}
                  videoClass="h-[inherit] aspect-video"
                />
              ))}
            </div>
            <div
              className="px-2 text-sm font-medium text-slate-300 sm:px-0 sm:pt-5 md:text-base [&>a:hover]:text-cyan-300 [&>a:hover]:underline [&>a]:font-bold"
              dangerouslySetInnerHTML={{ __html: items[activeIndex].subtext }}
            />
          </div>
        </div>

        <PatternBackground className="absolute inset-0 h-[110%] w-full text-slate-800 opacity-40" />
      </section>

      <style>{`
        .txt-shadow {
          text-shadow:
            0px 0px 12px rgba(0, 0, 0, 0.9),
            0px 0px 24px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
}

export default PluginsSlice;