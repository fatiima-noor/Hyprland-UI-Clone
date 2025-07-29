import clsx from 'clsx';

function TitleHeading({ children, className }) {
  return (
    <h1 className={clsx('mb-12 text-5xl font-bold md:text-7xl lg:text-8xl', className)}>
      {children || 'No title given!!!'}
    </h1>
  );
}

export default TitleHeading;