import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Community } from './components/Community';
import { Support } from './components/Support';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-brand-orange selection:text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Products />
        <Community />
        <Support />
        <HowItWorks />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;