import { Product, TranslationKey } from './types';

export const PRODUCTS: Product[] = [
  // MEN'S COLLECTION (Watches)
  {
    id: 'm1',
    name: "Santos Noir Edition",
    nameFr: "Santos Édition Noir",
    price: 300,
    originalPrice: 550,
    description: "An icon of modern design. The Santos Noir features a bold, blacked-out aesthetic with exposed screws.",
    descriptionFr: "Une icône du design moderne. La Santos Noir présente une esthétique audacieuse, entièrement noire.",
    features: ["Matte Black Finish", "Geometric Bezel", "Rubber Strap", "Automatic Movement"],
    featuresFr: ["Finition Noir Mat", "Lunette Géométrique", "Bracelet Caoutchouc", "Mouvement Automatique"],
    imageUrl: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?q=80&w=1000&auto=format&fit=crop",
    category: "Men's Collection"
  },
  {
    id: 'm2',
    name: "The 'Who Cares' Chrono",
    nameFr: "Rolex 'Who Cares'",
    price: 249,
    description: "Time is a construct. This playful yet luxurious timepiece features the iconic 'I'm already late' dial.",
    descriptionFr: "Le temps est une construction. Cette montre ludique arbore le cadran emblématique 'Je suis déjà en retard'.",
    features: ["Unique Dial Art", "Stainless Steel", "Statement Piece", "Water Resistant"],
    featuresFr: ["Cadran Artistique", "Acier Inoxydable", "Pièce Forte", "Résistant à l'eau"],
    imageUrl: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop",
    category: "Men's Collection"
  },
  {
    id: 'm3',
    name: "Bespoke Eyes Complication",
    nameFr: "Montre Yeux Personnalisable",
    price: 199,
    description: "A truly unique accessory that mirrors your gaze. Customizable eye design on the dial.",
    descriptionFr: "Un accessoire unique qui reflète votre regard. Design des yeux personnalisable sur le cadran.",
    features: ["Customizable Dial", "Steel Case", "Limited Availability", "Quartz Precision"],
    featuresFr: ["Cadran Personnalisable", "Boîtier Acier", "Disponibilité Limitée", "Précision Quartz"],
    imageUrl: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop",
    category: "Men's Collection",
    isSoldOut: true
  },

  // WOMEN'S COLLECTION
  {
    id: 'w1',
    name: "Heure H Emblem",
    nameFr: "Montre Heure H d’Hermès",
    price: 219,
    description: "A symbol of heritage. The H-shaped bezel captures the essence of Parisian luxury.",
    descriptionFr: "Un symbole d'héritage. La lunette en forme de H capture l'essence du luxe parisien.",
    features: ["Signature H Case", "Red Leather Strap", "Sapphire Glass", "Swiss Quartz"],
    featuresFr: ["Boîtier Signature H", "Bracelet Cuir Rouge", "Verre Saphir", "Quartz Suisse"],
    imageUrl: "https://images.unsplash.com/photo-1619119069152-a2b3d3141680?q=80&w=1000&auto=format&fit=crop",
    category: "Women's Collection"
  },
  {
    id: 'w2',
    name: "Panthère Bicolore",
    nameFr: "Panthère de Cartier Bicolore",
    price: 179,
    description: "Grace in motion. A stunning blend of gold and steel tones.",
    descriptionFr: "La grâce en mouvement. Un mélange étonnant de tons or et acier.",
    features: ["Two-Tone Bracelet", "Square Dial", "Jewelry Clasp", "Timeless Design"],
    featuresFr: ["Bracelet Bicolore", "Cadran Carré", "Fermoir Bijou", "Design Intemporel"],
    imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=1000&auto=format&fit=crop",
    category: "Women's Collection"
  },
  {
    id: 'w3',
    name: "Diamond Tennis Bracelet",
    nameFr: "Bracelet Tennis Pour Femme",
    price: 99,
    description: "Understated brilliance. A continuous line of crystals that catches the light.",
    descriptionFr: "Brillance discrète. Une ligne continue de cristaux qui capte la lumière.",
    features: ["Crystal Setting", "Sterling Silver Base", "Secure Clasp", "Evening Wear"],
    featuresFr: ["Sertissage Cristal", "Base Argent Sterling", "Fermoir Sécurisé", "Tenue de Soirée"],
    imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop",
    category: "Women's Collection"
  },

  // APPAREL (Urban Couture)
  {
    id: 'f1',
    name: "Riri & Rocky Icon Tee",
    nameFr: "T-SHIRT ICÔNE RIRI & ROCKY",
    price: 249,
    description: "Culture royalty. High-weight cotton tee featuring an iconic portrait print.",
    descriptionFr: "Royauté de la culture. T-shirt en coton épais avec un portrait iconique.",
    features: ["Heavyweight Cotton", "Oversized Fit", "High-Def Print", "Street Luxury"],
    featuresFr: ["Coton Épais", "Coupe Oversize", "Impression HD", "Luxe Urbain"],
    imageUrl: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=1000&auto=format&fit=crop",
    category: "Apparel"
  },
  {
    id: 'f2',
    name: "Legacy CR7 Edition",
    nameFr: "T-SHIRT ÉDITION CR7",
    price: 199,
    description: "'In my mind, I am always the best.' Wear the mindset of a champion.",
    descriptionFr: "'Dans mon esprit, je suis toujours le meilleur.' Portez l'état d'esprit d'un champion.",
    features: ["Motivational Print", "Premium Blend", "Athletic Cut", "Limited Series"],
    featuresFr: ["Imprimé Motivant", "Mélange Premium", "Coupe Athlétique", "Série Limitée"],
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Apparel"
  },
  {
    id: 'f3',
    name: "Trust Circle Tee",
    nameFr: "T-SHIRT CERCLE DE CONFIANCE",
    price: 199,
    description: "6 People I Trust. A bold statement on loyalty and currency.",
    descriptionFr: "6 Personnes en qui j'ai confiance. Une déclaration audacieuse sur la loyauté.",
    features: ["Statement Graphic", "Black Cotton", "Ribbed Collar", "Urban Fit"],
    featuresFr: ["Graphique Audacieux", "Coton Noir", "Col Côtelé", "Coupe Urbaine"],
    imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
    category: "Apparel"
  },

  // CURATED SETS (Packs)
  {
    id: 'p1',
    name: "The Essential Set",
    nameFr: "PACK MONTRE + BRACELET",
    price: 189,
    description: "The perfect pairing. A classic timepiece matched with a complementary bracelet.",
    descriptionFr: "L'accord parfait. Une montre classique assortie d'un bracelet complémentaire.",
    features: ["Watch + Bracelet", "Gift Boxed", "Color Matched", "Best Value"],
    featuresFr: ["Montre + Bracelet", "Boîte Cadeau", "Couleurs Assorties", "Meilleur Prix"],
    imageUrl: "https://images.unsplash.com/photo-1616353270216-e5746eea1493?q=80&w=1000&auto=format&fit=crop",
    category: "Curated Sets"
  }
];

export const NAV_LINKS = [
  { label: "nav_men", href: "#section-Men's Collection" },
  { label: "nav_apparel", href: "#section-Apparel" },
  { label: "nav_women", href: "#section-Women's Collection" },
  { label: "nav_sets", href: "#section-Curated Sets" },
];

export const TRANSLATIONS: Record<TranslationKey, { en: string; fr: string }> = {
  nav_men: { en: "Men's", fr: "Hommes" },
  nav_women: { en: "Women's", fr: "Femmes" },
  nav_apparel: { en: "Urban Couture", fr: "Couture Urbaine" },
  nav_sets: { en: "Sets", fr: "Packs" },
  
  hero_delivery: { en: "Delivery Everywhere in Morocco", fr: "La livraison Partout au Maroc" },
  hero_title_1: { en: "Define Your", fr: "Définissez Votre" },
  hero_title_2: { en: "Moment", fr: "Moment" },
  hero_subtitle: { en: "Curated selection. Passionate team.", fr: "Sélection soignée. Équipe passionnée." },
  
  cta_catalog: { en: "View Catalog", fr: "Voir le Catalogue" },
  cta_contact: { en: "Contact Us", fr: "Contactez-nous" },
  
  sold_out: { en: "Sold Out", fr: "Épuisé" },
  sale: { en: "Sale", fr: "Solde" },
  add_to_cart: { en: "Add to Cart", fr: "Ajouter au Panier" },

  atelier_title: { en: "Uncompromising", fr: "Un Savoir-Faire" },
  atelier_subtitle: { en: "Craftsmanship", fr: "Inégalé" },
  atelier_desc: { 
    en: "Our master artisans dedicate hundreds of hours to every creation. Whether shaping 18k gold for our timepieces, selecting the finest hides for our leather goods, or setting diamonds for our jewelry.", 
    fr: "Nos maîtres artisans consacrent des centaines d'heures à chaque création. Qu'il s'agisse de façonner l'or 18 carats pour nos garde-temps ou de sélectionner les meilleures peaux pour nos articles en cuir." 
  },
  atelier_cta: { en: "Discover Our World", fr: "Découvrir Notre Monde" },

  footer_desc: { en: "Montrex brings you a curated selection of timepieces and fashion statements.", fr: "Montrex vous propose une sélection soignée de montres et de vêtements." },
  footer_catalog: { en: "Catalog", fr: "Catalogue" },
  footer_support: { en: "Support", fr: "Support" },
  rights_reserved: { en: "ALL RIGHTS RESERVED.", fr: "TOUS DROITS RÉSERVÉS." },

  // Section Headers
  section_men_vibe: { en: "Power. Precision. Presence.", fr: "Puissance. Précision. Présence." },
  section_men_title: { en: "Men's Collection", fr: "Collection Hommes" },
  section_men_desc: { en: "Designed for those who lead, not follow.", fr: "Conçu pour ceux qui dirigent, et non ceux qui suivent." },

  section_women_vibe: { en: "Grace. Brilliance. Timeless.", fr: "Grâce. Éclat. Intemporel." },
  section_women_title: { en: "Women's Collection", fr: "Collection Femmes" },
  section_women_desc: { en: "Elegant timepieces and jewelry for her.", fr: "Montres et bijoux élégants pour elle." },

  section_apparel_vibe: { en: "Urban. Legacy. Hype.", fr: "Urbain. Héritage. Hype." },
  section_apparel_title: { en: "Urban Couture", fr: "Couture Urbaine" },
  section_apparel_desc: { en: "Statement pieces for the modern street.", fr: "Des pièces fortes pour la rue moderne." },

  section_sets_vibe: { en: "Celebrate. Gift. Cherish.", fr: "Célébrer. Offrir. Chérir." },
  section_sets_title: { en: "Curated Sets", fr: "Packs Cadeaux" },
  section_sets_desc: { en: "The perfect gift for yourself or others.", fr: "Le cadeau parfait pour vous ou vos proches." },
};