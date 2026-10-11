/**
 * KAPSHI Brand & Catalogue Configuration
 * Asset paths mapped to assets/
 */

export const CAMPAIGN_CONFIG = {
  navratri: {
    id: "navratri-festive",
    title: "The Navratri Edit",
    slogan: "Grace for Nine Nights of Celebration",
    badge: "Festive Exclusive",
    isActive: true,
    startDate: "2026-10-01",
    endDate: "2026-10-25",
    discountPercent: 40,
    targetCollectionId: "utsava",
    pairOffer: {
      title: "Festive Pair Privilege",
      description: "Buy any 2 pairs across the catalog and receive complimentary handloom cotton dust bags + artisan brass charm.",
      code: "UTSAVAPAIR"
    },
    terms: "40% discount applies automatically to all handcrafted pairs in the Utsava Collection. Complimentary pair privilege applies at checkout."
  }
};

export const COLLECTIONS = [
  {
    id: "mula",
    sanskrit: "मूल",
    name: "Mula",
    subtitle: "The Original",
    tagline: "Uncompromised traditional silhouette for purists and heritage collectors.",
    description: "The classic Kapshi silhouette, untouched. Rooted in four centuries of handcrafting with natural bag-tanned babul bark leather, braided cord toe loops, and unhurried artisanal dignity.",
    priceDisplay: "₹1,499",
    basePrice: 1499,
    photo: "/assets/collections/mula/mula-product-photo.jpg",
    thumb: "/assets/collections/mula/mula-silhouette.png",
    heroImage: "/assets/collections/mula/mula-editorial.jpg",
    accentColor: "#A77A53",
    craftDetail: "Bag-tanned babul bark leather with traditional curved rampi knife hand-skiving."
  },
  {
    id: "nagara",
    sanskrit: "नगर",
    name: "Nagara",
    subtitle: "The City",
    tagline: "Contemporary styling for everyday urban wear and 12-hour desk-to-street ease.",
    description: "Monochrome tones, ergonomic cushioned memory insoles, and streamlined edges for urban commutes, coffee meetings, studio desks, and everyday walking.",
    priceDisplay: "₹1,999",
    basePrice: 1999,
    photo: "/assets/collections/nagara/nagara-product-photo.jpg",
    thumb: "/assets/collections/nagara/nagara-silhouette.png",
    heroImage: "/assets/collections/nagara/nagara-editorial.jpg",
    accentColor: "#4B2615",
    craftDetail: "12-hour high-density cushioned footbed encased in oil-rubbed grain leather."
  },
  {
    id: "utsava",
    sanskrit: "उत्सव",
    name: "Utsava",
    subtitle: "The Occasion",
    tagline: "Refined footwear for intimate celebrations, weddings, and festive dressing.",
    description: "Burnished dark walnut leather woven with refined antique-gold cords and subtle brass rivets for weddings, family gatherings, and festive nights of dance.",
    priceDisplay: "₹2,499",
    basePrice: 2499,
    photo: "/assets/collections/utsava/utsava-product-photo.jpg",
    thumb: "/assets/collections/utsava/utsava-silhouette.png",
    heroImage: "/assets/collections/utsava/utsava-editorial.jpg",
    accentColor: "#8C2D19",
    isFestiveEligible: true,
    craftDetail: "Intricate hand-braided antique metallic cordage with stone-hammered castor oil burnish."
  },
  {
    id: "yatra",
    sanskrit: "यात्रा",
    name: "Yatra",
    subtitle: "The Travel",
    tagline: "Featherweight, flexible, packable soles designed for wanderers and getaways.",
    description: "Featherweight, flexible, packable soles with breathable open-air arch support, engineered for long walking tours, coastal strolls, and travel bags.",
    priceDisplay: "₹1,799",
    basePrice: 1799,
    photo: "/assets/collections/yatra/yatra-product-photo.jpg",
    thumb: "/assets/collections/yatra/yatra-silhouette.png",
    heroImage: "/assets/collections/yatra/yatra-editorial.jpg",
    accentColor: "#7B553C",
    craftDetail: "Zero-nail hand-twisted leather cord welt offering 360-degree bend flexibility."
  }
];

export const PRODUCTS = [
  {
    id: "kapshi-mula-classic",
    sku: "KAP-001",
    name: "Mula Classic Heritage Kolhapuri",
    sanskrit: "मूल क्लासिक",
    collectionId: "mula",
    collectionName: "Mula — The Original",
    originalPrice: 1499,
    rating: 4.9,
    artisanVillage: "Kapshi Village, Kolhapur District, Maharashtra",
    artisanName: "Baburao & Sons Karigar Guild",
    images: {
      product: "/assets/products/KAP-001/product-clean.jpg",
      model: "/assets/products/KAP-001/product-on-model.jpg",
      thumb: "/assets/collections/mula/mula-silhouette.png"
    },
    videoUrl: "/assets/video/brand-film.mp4",
    colors: [
      { id: "natural-tan", name: "Natural Babul Tan", hex: "#A77A53" },
      { id: "deep-walnut", name: "Deep Walnut", hex: "#4B2615" }
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "The benchmark Kolhapuri chappal that defined an entire heritage. Crafted from full-grain babul bark bag-tanned leather, shaped with traditional curved Rampi blades, and bound solely by hand-twisted leather cords.",
    features: [
      "100% Bag-tanned babul bark leather (GI Maharashtra)",
      "Zero chrome, zero synthetic adhesives, zero metal nails",
      "Hand-braided leather cord toe loop with soft knuckle relief",
      "Supple stone-hammered sole treated with pure cold-pressed castor oil",
      "Signature pointed Kapshi toe profile"
    ],
    care: "Wipe with a soft cotton cloth. Nourish every 3 months with a few drops of natural castor or coconut oil. Store in the complimentary unbleached cotton dust bag."
  },
  {
    id: "kapshi-nagara-urban",
    sku: "KAP-002",
    name: "Nagara Urban Comfort Slide",
    sanskrit: "नगर अर्बन",
    collectionId: "nagara",
    collectionName: "Nagara — The City",
    originalPrice: 1999,
    rating: 4.8,
    artisanVillage: "Hupari Guild, Kolhapur, Maharashtra",
    artisanName: "Ramesh Gaikwad Karigar Collective",
    images: {
      product: "/assets/collections/nagara/nagara-product-photo.jpg",
      model: "/assets/lifestyle/cafe-and-studio.jpg",
      thumb: "/assets/collections/nagara/nagara-silhouette.png"
    },
    videoUrl: "/assets/video/brand-film.mp4",
    colors: [
      { id: "charcoal-umber", name: "Charcoal Umber", hex: "#29231F" },
      { id: "cognac", name: "Cognac Brown", hex: "#6E371C" }
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Designed for the pace of contemporary urban life. Featuring an ergonomic hidden high-resilience foam bed seamlessly sandwiched between authentic vegetable-tanned leather sheets, providing effortless all-day comfort.",
    features: [
      "Hidden 6mm dual-density ergonomic foam insole",
      "Refined monochrome edge finishing with minimal seams",
      "Non-slip natural crepe rubber bottom insert for metro surfaces",
      "Breathable perforated leather sock liner",
      "Perfect pairing with relaxed denim, linen trousers, or kurtas"
    ],
    care: "Brush gently with horsehair brush. Keep away from prolonged puddle submersion. Let dry naturally at room temperature."
  },
  {
    id: "kapshi-utsava-gilded",
    sku: "KAP-003",
    name: "Utsava Gilded Royal Kolhapuri",
    sanskrit: "उत्सव सुवर्ण",
    collectionId: "utsava",
    collectionName: "Utsava — The Occasion",
    originalPrice: 2499,
    rating: 5.0,
    artisanVillage: "Nipani Border Artisan Cluster",
    artisanName: "Master Karigar Vithoba Shinde",
    images: {
      product: "/assets/collections/utsava/utsava-product-photo.jpg",
      model: "/assets/lifestyle/modern-occasions.jpg",
      thumb: "/assets/collections/utsava/utsava-silhouette.png"
    },
    videoUrl: "/assets/video/brand-film.mp4",
    colors: [
      { id: "burnished-walnut", name: "Burnished Walnut & Gold", hex: "#4B2615" },
      { id: "rust-mrittika", name: "Rust Clay Mrittika", hex: "#8C2D19" }
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "The celebratory footwear for sacred moments and grand festivities. Burnished deep walnut leather hand-woven with fine antique-gold zari threads and hand-plaited borders.",
    features: [
      "Festive Navratri 40% privilege currently applied",
      "Dual tone hand-braided antique metallic zari and leather cords",
      "Velvet-lined soft instep strap preventing festive abrasion",
      "Stone-burnished dark walnut finish with natural wax polish",
      "Individually numbered karigar card signed by the craftsman"
    ],
    care: "Buff with flannel cloth. Avoid chemical polish. Store with acid-free tissue inside your KAPSHI cotton dust bag."
  },
  {
    id: "kapshi-yatra-nomad",
    sku: "KAP-004",
    name: "Yatra Featherweight Flex Sandal",
    sanskrit: "यात्रा फ्लेक्स",
    collectionId: "yatra",
    collectionName: "Yatra — The Travel",
    originalPrice: 1799,
    rating: 4.9,
    artisanVillage: "Shiroli Karigar Center, Maharashtra",
    artisanName: "Dattatraya Shingade & Family",
    images: {
      product: "/assets/collections/yatra/yatra-product-photo.jpg",
      model: "/assets/lifestyle/weekend-travel.jpg",
      thumb: "/assets/collections/yatra/yatra-silhouette.png"
    },
    videoUrl: "/assets/video/brand-film.mp4",
    colors: [
      { id: "raw-parchment", name: "Desert Sand Tan", hex: "#9E714F" },
      { id: "deep-espresso", name: "Deep Espresso", hex: "#351E14" }
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    description: "Ultralight, flexible, and completely packable. Weighing under 260 grams per pair, Yatra is engineered for weekend explorers, long airport terminals, and heritage trails.",
    features: [
      "Ultra-supple split leather sole with 360-degree foldability",
      "Pack-flat design fitting compactly into carry-on luggage",
      "Quick-adjust self-conforming instep lace",
      "Natural moisture-wicking unlined vegetable-tanned underside",
      "Artisan-stamped GI craft authentication badge"
    ],
    care: "Roll gently or pack flat. If wet after rain, air-dry in shade and apply a dab of castor oil to maintain leather elasticity."
  }
];

export const PILLARS = [
  {
    number: "01",
    sanskrit: "शिल्प",
    name: "Craft",
    subtitle: "Authentic Roots",
    description: "Preserving protected GI bag-tanning, vegetable babul bark infusions, zero chrome chemicals, and hand-braided leather cordage. Honoring four centuries of unhurried artisan integrity.",
    image: "/assets/craft/artisan-karigar-hands.jpg",
    specs: ["GI Tag Registered (Maharashtra & Karnataka)", "100% Bag-Tanned with Babul Bark", "Hand-twisted cord, zero synthetic glues"]
  },
  {
    number: "02",
    sanskrit: "नूतन",
    name: "Contemporary",
    subtitle: "Today's Wardrobe",
    description: "Ergonomic cushioned footbeds, tailored silhouettes, and refined neutrals engineered for 12-hour urban comfort across cafes, creative desks, and evening celebrations.",
    image: "/assets/craft/traditional-craft-hero.jpg",
    specs: ["Ergonomic high-density cushioning", "Refined light and deep tonal palettes", "Versatile pairing with modern Indian & Western silhouettes"]
  },
  {
    number: "03",
    sanskrit: "धारिणी",
    name: "Responsible",
    subtitle: "Community Ecosystem",
    description: "Direct karigar partnerships, transparent cost sharing in rural Maharashtra, plastic-free recycled kraft packaging, and measurable social stewardship.",
    image: "/assets/craft/packaging-and-karigar-card.png",
    specs: ["100% plastic-free recycled packaging", "1:1 Artisan karigar card with each pair", "Fair compensation empowering master leathercraft families"]
  }
];

export const BRAND_STORY = {
  quote: "“Made from where we came. Designed for where we're going.”",
  tagline: "The Kolhapuri, for today. Authentic. Comfortable. Contemporary.",
  origin: "Kapshi Village — Cradle of Master Kolhapuri Craftsmanship",
  manifesto: "Born from India's enduring Kolhapuri heritage. Designed to find its place in the way we live today.",
  craftsmanship: [
    {
      title: "Bag-Tanned Leather",
      desc: "Vegetable tanning using babul bark and myrobalan nuts; zero chrome chemicals for natural breathability."
    },
    {
      title: "Precision Skiving",
      desc: "Sole and upper cut and skived by hand using traditional curved Rampi blades passed down through generations."
    },
    {
      title: "Cord Stitching",
      desc: "Sewn exclusively with hand-twisted leather cord; no synthetic glues, no staples, no metal nails."
    },
    {
      title: "Natural Burnish",
      desc: "Stone-hammered for muscle suppleness and hand-rubbed with cold-pressed castor oil for enduring patina."
    }
  ]
};
