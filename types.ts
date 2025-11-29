export interface Product {
  id: string;
  name: string; // Keep internal/English name for keys if needed, or use for display if no trans
  nameFr: string;
  price: number;
  description: string; // English
  descriptionFr: string; // French
  features: string[]; // English
  featuresFr: string[]; // French
  imageUrl: string;
  category: "Men's Collection" | "Women's Collection" | "Apparel" | "Curated Sets";
  isSoldOut?: boolean;
  originalPrice?: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface NavLink {
  label: string; // Key for translation
  href: string;
}

export type Language = 'fr' | 'en';

export type TranslationKey = 
  | 'nav_men' 
  | 'nav_women' 
  | 'nav_apparel' 
  | 'nav_sets'
  | 'hero_delivery'
  | 'hero_title_1'
  | 'hero_title_2'
  | 'hero_subtitle'
  | 'cta_catalog'
  | 'cta_contact'
  | 'sold_out'
  | 'sale'
  | 'add_to_cart'
  | 'atelier_title'
  | 'atelier_subtitle'
  | 'atelier_desc'
  | 'atelier_cta'
  | 'footer_desc'
  | 'footer_catalog'
  | 'footer_support'
  | 'rights_reserved'
  | 'section_men_vibe'
  | 'section_men_title'
  | 'section_men_desc'
  | 'section_women_vibe'
  | 'section_women_title'
  | 'section_women_desc'
  | 'section_apparel_vibe'
  | 'section_apparel_title'
  | 'section_apparel_desc'
  | 'section_sets_vibe'
  | 'section_sets_title'
  | 'section_sets_desc';
