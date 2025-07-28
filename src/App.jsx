import Navbar from './components/Global/Navbar';
import Hero from './components/LandingPage/Hero';
import PreviewRiceSlice from './components/LandingPage/PreviewRiceSlice';
import FeaturesSlice from './components/LandingPage/FeaturesSlice';
import PluginsSlice from './components/LandingPage/PluginsSlice';
import Footer from './components/Global/Footer';
import { getHeroBackgroundTiles } from './utils/heroBackgroundData';

// Mock news data (replace with actual API call if needed)
const news = [
  { id: 1, title: 'News 1', content: 'Placeholder news content' },
  { id: 2, title: 'News 2', content: 'Placeholder news content' },
  { id: 3, title: 'News 3', content: 'Placeholder news content' },
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
            <section>Community Placeholder</section>
            <section>NewsSlice Placeholder: {news.map((item) => item.title).join(', ')}</section>
            <section>InstallSlice Placeholder</section>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;