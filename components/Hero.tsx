import React from 'react';
import { Icons } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen w-full overflow-hidden bg-onyx-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2600&auto=format&fit=crop" 
          alt="Luxury Lifestyle Background" 
          className="w-full h-full object-cover object-center transform scale-110 animate-[zoom-out_15s_ease-out_forwards]"
          style={{ animationFillMode: 'forwards' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx-950 via-onyx-950/40 to-transparent" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20">
        <span className="text-gold-500 tracking-[0.3em] text-sm sm:text-base uppercase font-sans mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          {t('hero_delivery')}
        </span>
        <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-9xl text-white mb-8 tracking-tight animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          {t('hero_title_1')} <br/> <span className="text-gold-300 italic font-serif">{t('hero_title_2')}</span>
        </h1>
        <p className="max-w-2xl text-gray-300 text-lg sm:text-xl font-light leading-relaxed mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          {t('hero_subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 animate-slide-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <button className="group relative px-8 py-4 bg-gold-500 text-onyx-950 font-cinzel font-bold tracking-widest overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-shadow">
            <span className="relative z-10 flex items-center gap-2">
              {t('cta_catalog')} <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>
          
          <button className="group px-8 py-4 border border-white/30 text-white font-cinzel tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm">
            {t('cta_contact')}
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-gold-500/50">
        <span className="text-[10px] uppercase tracking-widest mb-2 block text-center">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent mx-auto" />
      </div>

      <style>{`
        @keyframes zoom-out {
          0% { transform: scale(1.2); }
          100% { transform: scale(1.0); }
        }
      `}</style>
    </div>
  );
};

export default Hero;