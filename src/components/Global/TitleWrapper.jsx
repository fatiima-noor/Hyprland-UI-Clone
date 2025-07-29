import { useAnimateIn } from '../LandingPage/helper';
import clsx from 'clsx';

function TitleWrapper({ align = 'center', children, className }) {
  const ref = useAnimateIn({ slide: 24, fade: 0 });

  const alignClass = align === 'center'
    ? 'text-center items-center'
    : align === 'left'
      ? 'text-left items-start'
      : 'text-right items-end';

  return (
    <hgroup
      ref={ref}
      className={clsx('z-10 flex flex-col px-3', alignClass, className)}
    >
      {children}
    </hgroup>
  );
}

export default TitleWrapper;