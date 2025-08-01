import { useAnimateIn, formatDate } from './helper';
import { ArrowRightCircle } from 'lucide-react';

function NewsThumb({ entry }) {
  const ref = useAnimateIn({ fade: 0, slide: 24 });
  const link = `/news/${entry.slug}`;

  return (
    <li ref={ref} className="flex">
      <a href={link} className="w-full transition-transform hover:-translate-y-0.5">
        <article className="flex flex-col h-full justify-between gap-3 rounded hover:outline-sky-500/80 md:flex-row md:rounded-3xl md:bg-gradient-to-tr md:from-cyan-500/10 md:to-transparent md:p-8 md:shadow-xl md:outline md:outline-1 md:outline-sky-500/30">
          <div>
            <div className="flex flex-col gap-4 font-medium text-slate-400">
              <p className="font-bold text-slate-400">{formatDate(entry.date)}</p>
            </div>
            <h2 className="title text-xl font-bold hover:text-slate-200 md:text-2xl lg:text-3xl">
              {entry.title}
            </h2>
          </div>
          <p className="group flex min-w-max max-w-max flex-row-reverse items-center justify-center gap-2 font-medium text-slate-300 transition-transform hover:text-white md:flex-col">
            <ArrowRightCircle
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5 md:h-9 md:w-9"
            />
            Read up
          </p>
        </article>
      </a>
    </li>
  );
}

export default NewsThumb;