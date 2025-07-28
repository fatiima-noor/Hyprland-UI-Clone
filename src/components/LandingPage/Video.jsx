import { useState, forwardRef } from 'react';
import { PlayCircle, PauseCircle, Maximize2 } from 'lucide-react';

const Video = forwardRef(({ sources, loop = true, muted = true, autoplay, videoClass = '', playButtonClass = '' }, ref) => {
  const [isPaused, setIsPaused] = useState(true);

  const togglePlay = () => {
    if (!ref.current) {
      console.log('Video ref is null');
      return;
    }
    if (ref.current.paused) {
      console.log('Attempting to play video (toggle)');
      ref.current.play().catch((err) => console.error('Play error (toggle):', err));
      setIsPaused(false);
    } else {
      console.log('Pausing video (toggle)');
      ref.current.pause();
      setIsPaused(true);
    }
  };

  const makeFullscreen = () => {
    if (ref.current) {
      console.log('Requesting fullscreen');
      ref.current.requestFullscreen();
    }
  };

  return (
    <div className={`video-wrapper-preview-rice relative bg-black group ${playButtonClass}`}>
      <video
        ref={ref}
        muted={muted}
        disablePictureInPicture
        disableRemotePlayback
        className={`rounded-xl ${videoClass}`}
        loop={loop}
        preload="auto"
        onClick={togglePlay}
        onDoubleClick={makeFullscreen}
        onPlay={() => {
          console.log('Video playing');
          setIsPaused(false);
        }}
        onPause={() => {
          console.log('Video paused');
          setIsPaused(true);
        }}
        autoPlay={autoplay}
      >
        {sources.map((src, index) => (
          <source key={index} src={src} type="video/mp4" />
        ))}
      </video>

      <div className="absolute bottom-2 left-2 flex gap-4 opacity-80 hover:opacity-100 group-hover:opacity-90">
        {isPaused ? (
          <button onClick={() => ref.current?.play()} className="z-10">
            <PlayCircle className="h-6 w-6 rounded drop-shadow transition-all duration-75 hover:scale-105" />
          </button>
        ) : (
          <button onClick={() => ref.current?.pause()} className="z-10">
            <PauseCircle className="h-6 w-6 rounded drop-shadow transition-all duration-75 hover:scale-105" />
          </button>
        )}
        <button onClick={makeFullscreen} className="z-10">
          <Maximize2 className="h-6 w-6 rounded drop-shadow transition-all duration-75 hover:scale-105" />
        </button>
      </div>

      <div className={`z-20 transition-opacity ${isPaused ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {isPaused && (
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 hover:opacity-100">
            <PlayCircle className="h-full w-full" />
          </div>
        )}
      </div>

      <style>{`
        .video-wrapper-preview-rice {
          position: relative;
          background: #000;
        }

        .video-wrapper-preview-rice video {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
});

Video.displayName = 'Video';

export default Video;