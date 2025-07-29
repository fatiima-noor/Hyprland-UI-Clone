import { useAnimateIn } from './helper';

function DistroOption({ name, image, imageExtra, children }) {
  const ref = useAnimateIn();

  return (
    <div ref={ref} className="group relative flex flex-col items-center gap-2 md:flex-row md:gap-4">
      {image && name && (
        <div className="relative flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-full text-lg font-medium text-primary transition-transform group-focus-within:-translate-y-1">
          <img
            src={image}
            className="h-20 w-32 object-contain"
            alt={`${name} Logo`}
            loading="lazy"
          />
          {name}
          {imageExtra && <div>{imageExtra}</div>}
        </div>
      )}
      <div className="mb-2 w-full">{children}</div>
    </div>
  );
}

export default DistroOption;