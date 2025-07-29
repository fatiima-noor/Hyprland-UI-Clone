import { useState, useEffect } from 'react';
import { useAnimateIn } from './helper';

function DiscordProfilePicture({ image, size, coordinates, class: className, quote }) {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const ref = useAnimateIn({ slide: 24, fade: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setHasImageLoaded(true);
    img.onerror = () => setHasImageLoaded(true); // Handle error to prevent infinite loading
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [image]);

  const handleViewEnter = () => {
    setTimeout(() => setHasEnteredView(true), 550);
  };

  const relativeSize = size / 172; // biggestSize from profiles
  const delay = Math.pow(1 - relativeSize, 4) * 4654;

  return (
    <div
      className={`absolute left-0 top-0 touch-none select-none transition-opacity ${hasImageLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        transform: `translate(${coordinates[0]}px, ${coordinates[1]}px)`,
        width: `${size}px`,
        height: `${size}px`,
        '--delay': `${delay}ms`
      }}
      aria-hidden="true"
    >
      <button
        ref={ref}
        className={`group absolute inset-0 h-full w-full touch-none select-none ${hasImageLoaded && hasEnteredView ? 'animate-reveal' : 'opacity-0'}`}
        onMouseEnter={handleViewEnter}
      >
        <div>
          <img
            className={`aspect-square h-full w-full touch-none select-none rounded-full object-cover outline outline-4 ${className} ${quote ? 'group-hover:scale-125' : ''}`}
            src={image}
            alt="community profile picture"
            aria-hidden="true"
            loading="lazy"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
            width={size}
            height={size}
            onLoad={() => setHasImageLoaded(true)}
            onError={() => setHasImageLoaded(true)}
          />
        </div>
        {quote && (
          <div className="quote" aria-hidden="true">
            {quote}
          </div>
        )}
      </button>
    </div>
  );
}

export default DiscordProfilePicture;