import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Concierge from './components/Concierge';
import Footer from './components/Footer';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const AtelierSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="atelier" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <img 
            src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?q=80&w=1200&auto=format&fit=crop" 
            alt="Artisan Craftsmanship" 
            className="rounded-sm shadow-2xl border-l-2 border-gold-500"
          />
        </div>
        <div className="order-1 lg:order-2">
           <span className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-4 block">
            The Atelier
          </span>
          <h2 className="font-cinzel text-4xl text-white mb-6">
            {t('atelier_title')} <span className="italic font-serif text-gold-300">{t('atelier_subtitle')}</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed mb-8 text-lg">
            {t('atelier_desc')}
          </p>
          <button className="text-white border border-gold-500 px-8 py-3 hover:bg-gold-500 hover:text-black transition-all duration-300 font-cinzel uppercase tracking-widest text-sm">
            {t('atelier_cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-onyx-950 text-gold-100 selection:bg-gold-500 selection:text-black">
        <Navbar />
        <Hero />
        <ProductSection />
        <AtelierSection />
        <Footer />
        <Concierge />
      </div>
    </LanguageProvider>
  );
}

export default App;
