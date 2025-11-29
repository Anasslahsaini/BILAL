import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { TranslationKey } from '../types';

// Define the styles for the header in each "world"
const HEADER_STYLES: Record<string, string> = {
  "default": "text-white font-cinzel bg-transparent",
  "Men's Collection": "text-white font-cinzel bg-onyx-950/90 backdrop-blur-md border-b border-white/10",
  "Apparel": "text-black font-sans font-black tracking-tighter bg-white/90 backdrop-blur-md border-b-4 border-black",
  "Women's Collection": "text-[#5d4037] font-serif bg-[#fff5f5]/90 backdrop-blur-md border-b border-[#d4a5a5]/30",
  "Curated Sets": "text-[#ffecd2] font-cinzel bg-[#1a0505]/90 backdrop-blur-md border-b border-[#ffd700]/30",
};

const MOBILE_MENU_STYLES: Record<string, string> = {
  "default": "bg-onyx-950 text-white",
  "Men's Collection": "bg-onyx-950 text-white",
  "Apparel": "bg-[#f0f0f0] text-black",
  "Women's Collection": "bg-[#fff5f5] text-[#5d4037]",
  "Curated Sets": "bg-[#1a0505] text-[#ffecd2]",
};

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("default");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently most visible
      const sections = ["Men's Collection", "Apparel", "Women's Collection", "Curated Sets"];
      
      // Default to transparent Hero if near top
      if (window.scrollY < 100) {
        setActiveSection("default");
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(`section-${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is covering the header area
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  const currentStyle = HEADER_STYLES[activeSection] || HEADER_STYLES["default"];
  const currentMenuBg = MOBILE_MENU_STYLES[activeSection] || MOBILE_MENU_STYLES["default"];
  
  // Specific logo styling based on section
  const getLogoStyle = () => {
    if (activeSection === 'Apparel') return "font-black tracking-tighter text-3xl italic";
    if (activeSection === "Women's Collection") return "font-serif tracking-widest text-2xl font-normal";
    return "font-cinzel font-bold tracking-widest text-2xl";
  };

  const getAccentColor = () => {
    if (activeSection === 'Apparel') return "text-red-600";
    if (activeSection === "Women's Collection") return "text-[#d4a5a5]";
    if (activeSection === "Curated Sets") return "text-[#ffd700]";
    return "text-gold-500";
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${currentStyle} py-4`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Dynamic Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Icons.Watch className={`w-8 h-8 transition-colors duration-500 ${getAccentColor()}`} />
            <span className={`transition-all duration-500 ${getLogoStyle()}`}>
              MON<span className={`transition-colors duration-500 ${getAccentColor()}`}>TREX</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-50 relative group ${activeSection === 'Apparel' ? 'font-black' : ''}`}
              >
                {t(link.label as TranslationKey)}
                <span className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${activeSection === 'Apparel' ? 'bg-black' : activeSection === "Women's Collection" ? 'bg-[#d4a5a5]' : 'bg-gold-500'}`} />
              </a>
            ))}
          </div>

          {/* Icons & Lang */}
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className={`text-xs font-bold border rounded px-2 py-1 transition-colors uppercase ${activeSection === 'Apparel' ? 'border-black hover:bg-black hover:text-white' : activeSection === "Women's Collection" ? 'border-[#5d4037] hover:bg-[#5d4037] hover:text-white' : 'border-white hover:bg-white hover:text-black'}`}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            <button className="hover:opacity-60 transition-opacity relative">
              <Icons.Bag className="w-6 h-6" />
              <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full ${activeSection === 'Apparel' ? 'bg-red-600' : 'bg-gold-500'}`}></span>
            </button>
            <button 
              className="lg:hidden hover:opacity-60 transition-opacity"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Icons.Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} ${currentMenuBg}`}>
        <div className="flex flex-col h-full p-8 relative">
          {/* Decorative Pattern for menu */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="flex justify-between items-center mb-16 relative z-10">
            <span className={getLogoStyle()}>MONTREX</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className={getAccentColor()}>
              <Icons.Close className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex flex-col gap-10 relative z-10">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-3xl hover:opacity-50 transition-colors border-b pb-4 flex justify-between items-center group ${activeSection === 'Apparel' ? 'font-black border-black' : activeSection === "Women's Collection" ? 'font-serif border-[#d4a5a5]' : 'font-cinzel border-white/10'}`}
              >
                {t(link.label as TranslationKey)}
                <Icons.ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-4 group-hover:translate-x-0" />
              </a>
            ))}
            
            <div className="mt-8 pt-8 border-t border-current opacity-50">
              <button 
                onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
                className="text-xl font-sans text-left flex items-center gap-4"
              >
                <span className="uppercase">{language === 'fr' ? 'English' : 'Français'}</span>
                <span className="text-xs border border-current px-2 py-1 rounded">SWITCH</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;