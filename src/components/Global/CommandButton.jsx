import { useState, useEffect } from 'react';
import { ClipboardCopy } from 'lucide-react'; 
import clsx from 'clsx';

export default function CommandButton({ command, commandClass, containerClass, children }) {
  const [isShowingCopied, setIsShowingCopied] = useState(false);
  let timeoutId;

  const copyCommand = async () => {
    await navigator.clipboard.writeText(command);
    setIsShowingCopied(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => setIsShowingCopied(false), 1400);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={clsx('relative flex grow flex-col font-mono', containerClass)}>
      <button
        className="group flex min-w-[18rem] items-center justify-center gap-4 rounded-lg border border-primary py-3 pl-6 pr-6 text-base font-medium transition-transform active:scale-[1.01] sm:rounded-full"
        onClick={children ? undefined : copyCommand}
      >
        {children || (
          <div className="relative flex w-full justify-between gap-4">
            <div className="flex gap-4">
              <div className="select-none font-bold text-primary">&gt;</div>
              <span className={commandClass}>{command}</span>
            </div>
            <ClipboardCopy
              className="hidden h-6 w-6 text-white opacity-50 transition-opacity duration-100 hover:!opacity-100 group-hover:opacity-80 group-active:opacity-100 md:block"
            />
          </div>
        )}
      </button>

      <div
        className={clsx(
          'pointer-events-none absolute left-1/2 z-20 hidden w-full max-w-max select-none rounded-full bg-black/10 px-2 text-green-400 backdrop-blur [translate:-50%_0px] max-md:-bottom-6 md:-top-8',
          { copy: isShowingCopied }
        )}
      >
        Copied to clipboard ✔
      </div>

      {/* Fixed: Remove absolute positioning and add proper spacing */}
      {children && (
        <div className="mt-4 flex w-full justify-center font-sans text-xs opacity-80 text-center">
          {children}
        </div>
      )}

      <style jsx>{`
        .copy {
          animation: 80ms cubic-bezier(0.5, 0.2, 0, 1.5) 1 copy;
          display: block;
        }

        @keyframes copy {
          from {
            opacity: 0.8;
            scale: 0.98;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }
      `}</style>
    </div>
  );
}