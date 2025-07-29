import TitleWrapper from '../Global/TitleWrapper';
import TitlePre from '../Global/TitlePre';
import TitleHeading from '../Global/TitleHeading';
import NewsThumb from './NewsThumb';
import { useAnimateIn } from './helper';
import grainImage from '../../assets/grain.webp';

function NewsSlice({ news }) {
  const ref = useAnimateIn({ slide: 24, fade: 0 });

  return (
    <section className="relative mb-12 max-w-5xl px-8 md:mb-20">
      <TitleWrapper>
        <TitlePre>Read while it's fresh!</TitlePre>
        <TitleHeading>Latest news</TitleHeading>
      </TitleWrapper>

      <ul ref={ref} className="mt-8 flex flex-col gap-10">
        {news.map((entry) => (
          <NewsThumb key={entry.id} entry={entry} />
        ))}
      </ul>

      <div
        className="absolute top-0 left-0 z-[-10] w-[200%] min-h-[500px] h-[220%] -translate-x-1/4 -mt-[100px] pointer-events-none contain-strict"
        style={{
          background: `url(${grainImage}), radial-gradient(50% 50% at 50% 50%, rgba(6, 182, 212, 0.5) 0%, rgba(14, 165, 233, 0.2), transparent)`,
          maskImage: `radial-gradient(50% 50% at 50% 50%, white, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), transparent)`,
        }}
      />
    </section>
  );
}

export default NewsSlice; 