import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import BenefitSection from './components/BenefitSection';
import Articles from './components/Articles';
import Footer from './components/Footer';
import ListNavMobile from './components/ListNavMobile';
import { useEffect, useState } from 'react';

// aos setup
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // aos init
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Home">
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <ListNavMobile isOpen={isOpen} />
      <main className="relative md:mt-14 overflow-hidden">
        <Hero />
        <BenefitSection />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
