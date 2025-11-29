import React from 'react';
import { Icons } from './Icons';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <Icons.Watch className="w-8 h-8 text-gold-500" />
              <span className="font-cinzel text-2xl font-bold tracking-widest">
                MON<span className="text-gold-500">TREX</span>
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed max-w-md mb-8">
              {t('footer_desc')}
            </p>
            <div className="flex items-center gap-4 text-sm text-gold-300 mb-8">
              <span className="flex items-center gap-2">
                <Icons.Shield className="w-4 h-4" /> {t('hero_delivery')}
              </span>
            </div>
            <div className="flex gap-6">
              {['Instagram', 'TikTok', 'Facebook'].map(social => (
                <a key={social} href="#" className="text-gray-500 hover:text-gold-500 transition-colors text-sm uppercase tracking-wider">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-cinzel text-gold-300 text-lg mb-8">{t('footer_catalog')}</h4>
            <ul className="space-y-4">
              {['nav_men', 'nav_women', 'nav_apparel', 'nav_sets'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors font-light text-sm">
                    {t(item as any)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-gold-300 text-lg mb-8">{t('footer_support')}</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Privacy Policy', 'Terms of Use', 'Track Order'].map(item => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors font-light text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs tracking-widest">
            © 2025 MONTREX. {t('rights_reserved')}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white text-xs tracking-widest">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
