import clsx from 'clsx';

function Button({ size = 'md', type = 'primary', href, className, children, ...props }) {
  const classes = clsx(
    'rounded text-sm font-bold hover:scale-[1.01] active:scale-100',
    type === 'primary' && 'bg-slate-200 text-black',
    type === 'outline' && 'bg-transparent text-white outline outline-2 outline-slate-200',
    type === 'fancyOutline' && 'fancy',
    size === 'md' && 'min-w-[5.5rem] px-4 py-2.5',
    size === 'lg' && 'min-w-[5.5rem] px-6 py-3',
    size === 'xl' && 'min-w-[5.5rem] px-8 py-3.5',
    className
  );

  const Element = href ? 'a' : 'button';

  return (
    <>
      {type === 'fancyOutline' ? (
        <div className="relative max-w-max">
          <Element
            {...props}
            href={href}
            role="button"
            tabIndex={0}
            className={classes}
          >
            {children || 'NO LABEL PROVIDED'}
          </Element>
          <span
            className="fancy-bg absolute inset-0 -z-10 h-full w-[110%] min-w-[5rem] scale-y-75 bg-cyan-500/90 px-4 py-2 blur-xl"
            style={{ '--easing': 'x', '--duration': '8s' }}
          />
          <span
            className="fancy-bg absolute inset-0 -z-10 h-full w-[110%] min-w-[5rem] scale-y-75 bg-purple-500/90 px-4 py-2 blur-xl"
            style={{ '--easing': 'y', '--duration': '8s' }}
          />
          <span
            className="fancy-bg absolute inset-0 -z-10 h-full w-[110%] min-w-[5rem] scale-y-75 bg-purple-500/90 px-4 py-2 blur-xl"
            style={{ '--easing': 'z', '--duration': '8s' }}
          />
        </div>
      ) : (
        <Element
          {...props}
          href={href}
          role="button"
          tabIndex={0}
          className={classes}
        >
          {children || 'NO LABEL PROVIDED'}
        </Element>
      )}

      <style>{`
        .animate {
          animation: pop 380ms cubic-bezier(0.1, -0, 0.42, 1.8);
          transition: transform 180ms cubic-bezier(0.1, -0, 0.42, 1.8);
        }

        .fancy {
          background: rgba(0, 0, 0, 0.5); /* black/50 */
          outline: 2px solid #58E1FF; /* primary */
        }

        .fancy-bg {
          animation: var(--easing, 'x') var(--duration, 8s) infinite;
        }
      `}</style>
    </>
  );
}

export default Button;