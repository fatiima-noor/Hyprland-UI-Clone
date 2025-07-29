import clsx from 'clsx';

function TitleSubtile({ children, className }) {
  return (
    <p className={clsx('-mt-4 mb-7 font-extrabold text-slate-300 sm:text-lg', className)}>
      {children}
    </p>
  );
}

export default TitleSubtile;