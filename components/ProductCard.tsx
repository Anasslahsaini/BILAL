import React from 'react';
import { Product } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionTheme } from './ProductSection';

interface ProductCardProps {
  product: Product;
  theme: SectionTheme;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, theme }) => {
  const { language, t } = useLanguage();

  const name = language === 'fr' ? product.nameFr : product.name;
  const description = language === 'fr' ? product.descriptionFr : product.description;

  return (
    <div className={`group relative h-full flex flex-col overflow-hidden transition-all duration-500`}>
      
      {/* Image Container with Unique Theme Style */}
      <div className={`relative aspect-[3/4] overflow-hidden mb-6 ${theme.imageStyle} transition-all duration-300`}>
        <img 
          src={product.imageUrl} 
          alt={name} 
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${product.isSoldOut ? 'grayscale opacity-70' : ''}`}
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {product.isSoldOut && (
            <span className="bg-black text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
              {t('sold_out')}
            </span>
          )}
          {product.originalPrice && !product.isSoldOut && (
            <span className="bg-red-600 text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest">
              {t('sale')}
            </span>
          )}
        </div>

        {/* Quick Add Overlay */}
        {!product.isSoldOut && (
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
            <button className={`w-full py-3 ${theme.buttonBg} ${theme.buttonText} ${theme.titleFont} text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg`}>
              {t('add_to_cart')}
            </button>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow">
        <h3 className={`text-xl ${theme.titleFont} ${theme.text} mb-2 group-hover:opacity-80 transition-opacity`}>
          {name}
        </h3>
        
        <p className={`text-xs uppercase tracking-widest ${theme.subtext} mb-4 border-l-2 ${theme.border.split(' ')[0]} pl-3 line-clamp-2`}>
          {description}
        </p>
        
        <div className="mt-auto flex items-center justify-between border-t border-gray-500/10 pt-4">
          <div className="flex items-center gap-3">
            <span className={`${theme.accent} font-serif italic text-lg`}>
              {product.price.toFixed(2)} DH
            </span>
            {product.originalPrice && (
              <span className={`text-xs line-through ${theme.subtext} opacity-60`}>
                {product.originalPrice.toFixed(2)} DH
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;