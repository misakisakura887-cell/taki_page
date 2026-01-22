import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InvestmentSection } from './components/InvestmentSection';
import { MartSection } from './components/MartSection';
import { TradeSection } from './components/TradeSection';
import { AboutSummary } from './components/AboutSummary';
import { Footer } from './components/Footer';
import { MouseFollower } from './components/UI/MouseFollower';

const App: React.FC = () => {
  return (
    <div className="bg-taki-beige min-h-screen text-taki-dark selection:bg-taki-orange selection:text-white font-sans">
      <MouseFollower />
      <Navbar />
      <main>
        <Hero />
        <InvestmentSection />
        <MartSection />
        <TradeSection />
        <AboutSummary />
      </main>
      <Footer />
    </div>
  );
};

export default App;