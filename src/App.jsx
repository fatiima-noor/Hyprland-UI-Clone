import Navbar from './components/Global/Navbar';
import Hero from './components/LandingPage/Hero';
import PreviewRiceSlice from './components/LandingPage/PreviewRiceSlice';
import FeaturesSlice from './components/LandingPage/FeaturesSlice';
import PluginsSlice from './components/LandingPage/PluginsSlice';
import InstallSlice from './components/LandingPage/InstallSlice';
import NewsSlice from './components/LandingPage/NewsSlice';
import CommunitySlice from './components/LandingPage/CommunitySlice';
import Footer from './components/Global/Footer';
import { getHeroBackgroundTiles } from './utils/heroBackgroundData';

// Mock news data
const news = [
  { id: 1, title: 'News 1', content: 'Placeholder news content', slug: 'news-1', date: '2025-07-01' },
  { id: 2, title: 'News 2', content: 'Placeholder news content', slug: 'news-2', date: '2025-07-15' },
  { id: 3, title: 'News 3', content: 'Placeholder news content', slug: 'news-3', date: '2025-07-29' },
];

function App() {
  const backgroundData = getHeroBackgroundTiles();

  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-screen w-full flex-col">
        <div className="overflow-hidden">
          <Hero backgroundData={backgroundData} />
          <div className="-mt-8 flex flex-col items-center gap-20 md:gap-[16rem]">
            <PreviewRiceSlice className="mb-12" />
            <FeaturesSlice />
            <PluginsSlice />
            <section>HallOfFameSlice Placeholder</section>
            <CommunitySlice />
            <NewsSlice news={news} />
            <InstallSlice />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;