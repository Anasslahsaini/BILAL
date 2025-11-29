import React, { useEffect, useRef, useState } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';
import { Product, TranslationKey } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export interface SectionTheme {
  bg: string;
  text: string;
  subtext: string;
  accent: string;
  border: string;
  buttonBg: string;
  buttonText: string;
  titleFont: string;
  backgroundImage?: string;
  vibeTextKey: TranslationKey;
  titleKey: TranslationKey;
  descKey: TranslationKey;
  imageStyle: string;
  clipPath?: string;
  marginTop?: string;
  paddingTop?: string;
  layoutType?: 'grid' | 'masonry' | 'showcase';
}

const THEMES: Record<string, SectionTheme> = {
  "Men's Collection": {
    bg: 'bg-onyx-950',
    text: 'text-white',
    subtext: 'text-gray-400',
    accent: 'text-gold-500',
    border: 'border-white/10',
    buttonBg: 'bg-gold-500',
    buttonText: 'text-black',
    titleFont: 'font-cinzel',
    vibeTextKey: "section_men_vibe",
    titleKey: "section_men_title",
    descKey: "section_men_desc",
    backgroundImage: "linear-gradient(to bottom, #000000, #111111)",
    imageStyle: "rounded-none border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.8)] grayscale-[0.2] hover:grayscale-0",
    marginTop: "-mt-20", // Pull up over Hero
    paddingTop: "pt-32",
    layoutType: 'grid'
  },
  "Apparel": {
    bg: 'bg-[#f0f0f0]', 
    text: 'text-black',
    subtext: 'text-gray-600',
    accent: 'text-red-600', 
    border: 'border-black/20',
    buttonBg: 'bg-black',
    buttonText: 'text-white',
    titleFont: 'font-black font-sans uppercase tracking-tighter italic', 
    vibeTextKey: "section_apparel_vibe",
    titleKey: "section_apparel_title",
    descKey: "section_apparel_desc",
    backgroundImage: "repeating-linear-gradient(45deg, #e5e5e5 0px, #e5e5e5 2px, #f0f0f0 2px, #f0f0f0 10px)",
    imageStyle: "rounded-none shadow-[8px_8px_0px_rgba(0,0,0,1)] border-4 border-black grayscale hover:grayscale-0",
    // Diagonal cut into the previous section
    clipPath: "polygon(0 8%, 100% 0, 100% 95%, 0 100%)",
    marginTop: "-mt-32", // Intertwines with section above
    paddingTop: "pt-48 pb-32",
    layoutType: 'masonry'
  },
  "Women's Collection": {
    bg: 'bg-[#fff5f5]', 
    text: 'text-[#5d4037]', 
    subtext: 'text-[#8d6e63]',
    accent: 'text-[#d4a5a5]', 
    border: 'border-[#d4a5a5]/30',
    buttonBg: 'bg-[#d4a5a5]',
    buttonText: 'text-white',
    titleFont: 'font-serif tracking-widest', 
    vibeTextKey: "section_women_vibe",
    titleKey: "section_women_title",
    descKey: "section_women_desc",
    backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,245,245,0.2) 100%)",
    imageStyle: "rounded-[40px] shadow-2xl shadow-[#d4a5a5]/20 hover:scale-[1.02] duration-700",
    // Curved cut
    clipPath: "ellipse(150% 100% at 50% 100%)",
    marginTop: "-mt-32",
    paddingTop: "pt-48 pb-32",
    layoutType: 'showcase'
  },
  "Curated Sets": {
    bg: 'bg-[#1a0505]', 
    text: 'text-[#ffecd2]', 
    subtext: 'text-[#cf8f8f]',
    accent: 'text-[#ffd700]', 
    border: 'border-[#ffd700]/30',
    buttonBg: 'bg-gradient-to-r from-[#ffd700] to-[#fdb931]',
    buttonText: 'text-[#1a0505]',
    titleFont: 'font-cinzel',
    vibeTextKey: "section_sets_vibe",
    titleKey: "section_sets_title",
    descKey: "section_sets_desc",
    backgroundImage: "radial-gradient(circle at center, rgba(100, 0, 0, 0.3) 0%, transparent 80%)",
    imageStyle: "rounded-lg border-2 border-[#ffd700] shadow-[0_0_30px_rgba(255,215,0,0.15)]",
    marginTop: "-mt-20",
    paddingTop: "pt-40",
    layoutType: 'grid'
  }
};

const CategorySection: React.FC<{ category: string; products: Product[] }> = ({ category, products }) => {
  const theme = THEMES[category] || THEMES["Men's Collection"];
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Different layout structures based on the "Persona"
  const renderLayout = () => {
    if (theme.layoutType === 'masonry') {
      // Apparel: Chaotic "Street" Layout
      return (
        <div className="relative">
           {/* Decorative Elements for Streetwear */}
           <div className="absolute -top-20 -left-10 text-[10rem] font-black text-black/5 opacity-20 rotate-12 pointer-events-none select-none">
             URBAN
           </div>
           <div className="absolute bottom-0 right-0 text-[10rem] font-black text-black/5 opacity-20 -rotate-12 pointer-events-none select-none">
             COUTURE
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
             {products.map((product, index) => (
               <div 
                 key={product.id} 
                 className={`${index % 2 === 0 ? 'lg:translate-y-12' : 'lg:-translate-y-12'} transition-all duration-700`}
               >
                 <ProductCard product={product} theme={theme} />
               </div>
             ))}
           </div>
        </div>
      );
    } else if (theme.layoutType === 'showcase') {
      // Women: Elegant Horizontal Flow
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-12">
           {products.map((product, index) => (
             <div key={product.id} className={`${index === 1 ? 'md:scale-110 z-10' : 'md:scale-95 opacity-90'} transition-all duration-700 hover:opacity-100 hover:scale-105`}>
               <ProductCard product={product} theme={theme} />
             </div>
           ))}
        </div>
      );
    } else {
      // Men/Sets: Standard Luxury Grid
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} theme={theme} />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section 
      id={`section-${category}`} 
      ref={sectionRef}
      className={`relative z-20 overflow-hidden transition-colors duration-1000 ${theme.bg} ${theme.marginTop || ''} ${theme.paddingTop || 'py-32'}`}
      style={{ 
        clipPath: theme.clipPath,
        WebkitClipPath: theme.clipPath // Safari support
      }}
    >
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-1000 mix-blend-multiply" 
        style={{ 
          background: theme.backgroundImage,
        }} 
      />
      
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        
        {/* Section Header */}
        <div className={`flex flex-col ${theme.layoutType === 'masonry' ? 'items-center text-center' : 'md:flex-row justify-between items-end'} mb-24 gap-8`}>
          <div>
            <span className={`block text-xs font-bold tracking-[0.4em] uppercase mb-4 ${theme.accent}`}>
              {t(theme.vibeTextKey)}
            </span>
            <h2 className={`text-5xl md:text-8xl ${theme.titleFont} ${theme.text}`}>
              {t(theme.titleKey)}
            </h2>
          </div>
          {theme.layoutType !== 'masonry' && (
            <div className="md:max-w-sm">
              <div className={`h-[2px] w-24 ${theme.accent.replace('text-', 'bg-')} mb-6`}></div>
              <p className={`text-lg leading-relaxed ${theme.subtext}`}>
                {t(theme.descKey)}
              </p>
            </div>
          )}
        </div>

        {/* Dynamic Product Layout */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          {renderLayout()}
        </div>

      </div>
    </section>
  );
};

const ProductSection: React.FC = () => {
  const categoryOrder = ["Men's Collection", "Apparel", "Women's Collection", "Curated Sets"];
  
  return (
    <div className="relative">
      {categoryOrder.map((category) => {
        const categoryProducts = PRODUCTS.filter(p => p.category === category);
        if (categoryProducts.length === 0) return null;
        return (
          <CategorySection 
            key={category} 
            category={category} 
            products={categoryProducts} 
          />
        );
      })}
    </div>
  );
};

export default ProductSection;