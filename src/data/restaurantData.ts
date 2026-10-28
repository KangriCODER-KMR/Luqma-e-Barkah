import { MenuItem, ReviewItem } from '../types';

export const RESTAURANT_INFO = {
  name: "Luqma-e-Barkah",
  tagline: "A Blessing in Every Bite",
  urduName: "لقمةِ برکت",
  subtitle: "North Kashmir's premier rooftop dining & authentic culinary destination in Hadipora, Rafiabad",
  phone: "+91 70068 12345", // Standard format with direct WhatsApp link
  whatsapp: "+91 70068 12345",
  email: "reservations@luqmaebarkah.com",
  instagram: "https://www.instagram.com/luqma_e_barkah/",
  instagramHandle: "@luqma_e_barkah",
  address: "Near GDC Hadipora, Baramulla–Handwara Highway, Rafiabad, J&K 193301",
  googleMapsUrl: "https://www.google.com/maps/place/Luqma+e+Barkah/@34.3049918,74.3749946,17z/data=!3m1!4b1!4m6!3m5!1s0x38e10500797303b5:0xb940d517bbd421b6!8m2!3d34.3049919!4d74.3798655!16s%2Fg%2F11zh91q1b8",
  coordinates: {
    lat: 34.3049919,
    lng: 74.3798655
  },
  hours: [
    { days: "Monday – Thursday", time: "10:30 AM – 10:30 PM" },
    { days: "Friday", time: "01:30 PM – 11:00 PM" },
    { days: "Saturday – Sunday", time: "10:30 AM – 11:00 PM" }
  ],
  stats: [
    { label: "Guest Satisfaction", value: "4.8★" },
    { label: "Signature Recipes", value: "65+" },
    { label: "Rooftop Open Sky Seating", value: "80+" },
    { label: "Served Highway Travelers", value: "25k+" }
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // WAZWAN & KASHMIRI SPECIALTIES
  {
    id: "waz-01",
    name: "Shahi Rogan Josh",
    urduName: "روغن جوش",
    category: "wazwan",
    price: 480,
    description: "Tender mountain mutton braised in rich Kashmiri Mawall (cockscomb flower) extract, aromatic dry ginger (shonth), and hand-ground fennel seeds.",
    ingredients: ["Kashmiri Mutton", "Kashmiri Chillies", "Fennel Powder", "Mawall Extract", "Mustard Oil"],
    spiceLevel: 2,
    isVegetarian: false,
    isChefSpecial: true,
    isPopular: true,
    servingSize: "2 Persons",
    image: "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "waz-02",
    name: "Authentic Gushtaba",
    urduName: "گوشتابہ",
    category: "wazwan",
    price: 520,
    description: "The crown jewel of Kashmiri feasts. Velvety, wood-hammered meatballs gently poached in a creamy, curd-based gravy infused with wild Kashmiri mint.",
    ingredients: ["Minced Mutton", "Thick Curd", "Kashmiri Green Cardamom", "Dried Mint", "Ghee"],
    spiceLevel: 1,
    isVegetarian: false,
    isChefSpecial: true,
    isPopular: true,
    servingSize: "2 Meatballs with Gravy",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "waz-03",
    name: "Crispy Tabak Maaz",
    urduName: "طباق ماز",
    category: "wazwan",
    price: 490,
    description: "Succulent mutton ribs simmered in spiced milk, then pan-fried in pure desi ghee until blistered with a golden, crackling crust.",
    ingredients: ["Mutton Ribs", "Spiced Milk Stock", "Asafoetida", "Pure Ghee"],
    spiceLevel: 1,
    isVegetarian: false,
    isPopular: true,
    servingSize: "3 Crispy Ribs",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "waz-04",
    name: "Fiery Rista Gravy",
    urduName: "رستہ",
    category: "wazwan",
    price: 460,
    description: "Silken hand-beaten mutton dumplings in an intoxicating, deep crimson saffron-infused gravy with fiery Kashmiri chilies.",
    ingredients: ["Hand-pounded Mutton", "Kashmiri Mirch", "Saffron Broth", "Garlic Essence"],
    spiceLevel: 3,
    isVegetarian: false,
    servingSize: "2 Large Ristas",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "waz-05",
    name: "Kashmiri Wazwan Trami Platter",
    urduName: "وازوان ترامی تھالی",
    category: "wazwan",
    price: 1850,
    description: "The royal communal feast served on an engraved brass Trami: Fragrant rice adorned with Seekh Tujji, Tabak Maaz, Methi Maaz, Rogan Josh, Gushtaba, and Rista.",
    ingredients: ["Assorted Wazwan Specialties", "Fragrant Basmati", "Kashmiri Chutneys"],
    spiceLevel: 2,
    isVegetarian: false,
    isChefSpecial: true,
    isPopular: true,
    servingSize: "For 3–4 Guests",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },

  // CHARCOAL GRILLS & TANDOOR
  {
    id: "grill-01",
    name: "Signature Barkah Mutton Seekh Tujji",
    urduName: "برکت مٹن سیخ تجی",
    category: "grills",
    price: 360,
    description: "Authentic Kashmiri street skewers char-grilled over glowing acacia coals, served with freshly made lavasa, onion relish, and mint walnut chutney.",
    ingredients: ["Spiced Tender Mutton", "Charcoal Smoke", "Walnut Chutney", "Lavasa"],
    spiceLevel: 2,
    isVegetarian: false,
    isChefSpecial: true,
    isPopular: true,
    servingSize: "6 Skewers",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "grill-02",
    name: "Smoky Tandoori Chicken Feast",
    urduName: "تندوری چکن",
    category: "grills",
    price: 420,
    description: "Whole spring chicken bathed in hung yogurt, freshly ground garam masala, and roasted in our clay tandoor to succulent smokiness.",
    ingredients: ["Spring Chicken", "Hung Curd", "Degi Mirch", "Kasoori Methi", "Lime"],
    spiceLevel: 2,
    isVegetarian: false,
    isPopular: true,
    servingSize: "Full / Half Available",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "grill-03",
    name: "Charred Malai Paneer Tikka",
    urduName: "ملائی پنیر ٹکہ",
    category: "grills",
    price: 320,
    description: "Creamy cubes of cottage cheese marinated with green cardamom, clotted cream, crushed cashews, and blistered capsicum.",
    ingredients: ["Fresh Paneer", "Malai", "Cashew Paste", "Cardamom", "Bell Peppers"],
    spiceLevel: 1,
    isVegetarian: true,
    isPopular: true,
    servingSize: "6 Large Chunks",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "grill-04",
    name: "Luqma Grand Mixed BBQ Platter",
    urduName: "لقمہ مکس گرل پلایٹر",
    category: "grills",
    price: 980,
    description: "An extravagant assortment of Seekh Tujji, Tandoori Chicken, Fish Tikka, Malai Boti, and Paneer Tikka sizzling on a hot iron plate.",
    ingredients: ["Mutton Tujji", "Chicken Tikka", "Grilled Fish", "Paneer", "Mint Dip"],
    spiceLevel: 2,
    isVegetarian: false,
    isChefSpecial: true,
    servingSize: "Feeds 2–3 Persons",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
  },

  // ROYAL MAINS & CURRIES
  {
    id: "main-01",
    name: "Old Delhi Butter Chicken",
    urduName: "دہلی بٹر چکن",
    category: "mains",
    price: 410,
    description: "Clay-oven smoked tandoori chicken simmered in an indulgent gravy of San Marzano-style vine tomatoes, honey, butter, and crushed fenugreek leaves.",
    ingredients: ["Pulled Tandoori Chicken", "Tomato Reduction", "Butter & Cream", "Kasoori Methi"],
    spiceLevel: 1,
    isVegetarian: false,
    isPopular: true,
    servingSize: "2 Persons",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-02",
    name: "Slow-Cooked Dal Luqma (24-Hour)",
    urduName: "دال لقمہ",
    category: "mains",
    price: 280,
    description: "Whole black urad lentils gently simmered over slow embers for 24 hours with vine tomatoes, fresh garlic, and churned white butter.",
    ingredients: ["Urad Lentils", "White Butter", "Slow Simmered Cream", "Smoked Chili"],
    spiceLevel: 1,
    isVegetarian: true,
    isChefSpecial: true,
    servingSize: "2 Persons",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-03",
    name: "Shahi Paneer Lababdar",
    urduName: "شاہی پنیر لبابدار",
    category: "mains",
    price: 340,
    description: "Fresh cottage cheese bathed in an opulent tomato-onion masala speckled with grated paneer and freshly roasted cumin.",
    ingredients: ["Farm Paneer", "Cashew Gravy", "Chopped Coriander", "Butter Glaze"],
    spiceLevel: 1,
    isVegetarian: true,
    servingSize: "2 Persons",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "main-04",
    name: "Dum Gosht Biryani",
    urduName: "دم گوشت بریانی",
    category: "mains",
    price: 440,
    description: "Aged long-grain basmati layered with spice-marinated spring mutton, sealed with dough in a heavy handi and slow-cooked to perfection. Served with burrani raita.",
    ingredients: ["Aged Basmati", "Marinated Mutton", "Saffron Milk", "Crispy Onions"],
    spiceLevel: 2,
    isVegetarian: false,
    isPopular: true,
    servingSize: "Generous Portion",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },

  // INDO-CHINESE & FAST BITES
  {
    id: "fast-01",
    name: "Hadipora Crunchy Highway Burger",
    urduName: "کرنچی ہائی وے برگر",
    category: "fastfood",
    price: 210,
    description: "Crispy fried spiced chicken fillet topped with melted cheddar, smoked jalapeño slaw, and secret Barkah sauce on a toasted brioche bun.",
    ingredients: ["Buttermilk Fried Chicken", "Brioche Bun", "Cheddar", "House Sauce", "French Fries"],
    spiceLevel: 2,
    isVegetarian: false,
    isPopular: true,
    servingSize: "Served with Seasoned Fries",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fast-02",
    name: "Wok-Tossed Chilli Chicken Gravy",
    urduName: "چلی چکن",
    category: "fastfood",
    price: 310,
    description: "Crisp chicken pieces tossed with bell peppers, green chilies, dark soy sauce, and scallions in a glossy spicy wok sauce.",
    ingredients: ["Crispy Chicken", "Bell Peppers", "Garlic Soy", "Spring Onions"],
    spiceLevel: 3,
    isVegetarian: false,
    isPopular: true,
    servingSize: "Platter Portion",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fast-03",
    name: "Steamed Himalayan Chicken Momos",
    urduName: "چکن موموز",
    category: "fastfood",
    price: 180,
    description: "Delicate hand-wrapped dumplings stuffed with juicy minced chicken and ginger, served with fiery red pepper chutney.",
    ingredients: ["Juicy Minced Chicken", "Shallots", "Sesame Dip", "Chilli Garlic Sauce"],
    spiceLevel: 2,
    isVegetarian: false,
    isPopular: true,
    servingSize: "8 Pieces",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "fast-04",
    name: "Smoky Barbecue Chicken Pizza (12-inch)",
    urduName: "باربیکیو پیزا",
    category: "fastfood",
    price: 380,
    description: "Thin crust stone-baked pizza loaded with mozzarella, grilled chicken chunks, red onions, and smoky chipotle drizzle.",
    ingredients: ["Hand-stretched Dough", "Smoked Mozzarella", "Grilled BBQ Chicken", "Herbs"],
    spiceLevel: 1,
    isVegetarian: false,
    servingSize: "6 Large Slices",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },

  // BREADS & SIDES
  {
    id: "brd-01",
    name: "Kashmiri Sesame Lavasa",
    urduName: "کشمیری لواسا",
    category: "breads",
    price: 35,
    description: "Traditional local flatbread baked fresh on stone oven with a soft puffed center and toasted sesame seeds.",
    spiceLevel: 0,
    isVegetarian: true,
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "brd-02",
    name: "Garlic & Coriander Butter Naan",
    urduName: "گارلک بٹر نان",
    category: "breads",
    price: 65,
    description: "Crispy tandoor-baked flatbread infused with charred minced garlic, fresh cilantro, and melted dairy butter.",
    spiceLevel: 0,
    isVegetarian: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "brd-03",
    name: "Kashmiri Bakarkhani / Rogani Naan",
    urduName: "روغنی نان",
    category: "breads",
    price: 85,
    description: "Layered, flaky bread made with ghee and milk, brushed with saffron water and nigella seeds.",
    spiceLevel: 0,
    isVegetarian: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
  },

  // BEVERAGES & TRADITIONAL TEAS
  {
    id: "bev-01",
    name: "Shahi Kashmiri Saffron Kahwa",
    urduName: "شاہی زعفرانی قہوہ",
    category: "beverages",
    price: 120,
    description: "Traditional green tea brewed in a copper Samovar with pure Pampore saffron threads, cinnamon bark, cardamom, and slivered almonds.",
    ingredients: ["Pampore Saffron", "Green Tea Leaves", "Cardamom", "Crushed Almonds", "Honey"],
    spiceLevel: 0,
    isVegetarian: true,
    isChefSpecial: true,
    isPopular: true,
    servingSize: "Served in Traditional Glass",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bev-02",
    name: "Authentic Pink Noon Chai",
    urduName: "نمکین گلابی چائے",
    category: "beverages",
    price: 80,
    description: "The soul of the Kashmir valley: slow-aerated pink salted tea with rich clotted milk, baking soda froth, and ground pistachio.",
    ingredients: ["Special Tea Leaves", "Full Cream Milk", "Rock Salt", "Pistachio Dust"],
    spiceLevel: 0,
    isVegetarian: true,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bev-03",
    name: "Hadipora Sunset Passion Mocktail",
    urduName: "سن سیٹ موک ٹیل",
    category: "beverages",
    price: 160,
    description: "Refreshing sparkling blend of crushed mint, pomegranate pearls, tangy passionfruit pulp, and crushed Himalayan rock ice.",
    ingredients: ["Passionfruit", "Mint Leaves", "Pomegranate Juice", "Sparkling Soda"],
    spiceLevel: 0,
    isVegetarian: true,
    isPopular: true,
    servingSize: "Tall Chilled Glass",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bev-04",
    name: "Rafiabad Royal Hazelnut Cold Coffee",
    urduName: "ہیزل نٹ کولڈ کافی",
    category: "beverages",
    price: 190,
    description: "Espresso shot whipped with creamy whole milk, artisanal hazelnut syrup, and crowned with vanilla ice cream and dark cocoa dust.",
    ingredients: ["Dark Roast Espresso", "Hazelnut", "Vanilla Cream", "Cocoa"],
    spiceLevel: 0,
    isVegetarian: true,
    servingSize: "Frappé Glass",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Zubair Ahmad Lone",
    location: "Baramulla",
    rating: 5,
    date: "1 week ago",
    text: "The best dining experience in North Kashmir! Having open-air rooftop dining right along the highway is a game changer. The Wazwan Trami and Seekh Tujji are sensational, and the evening breeze under the fairy lights is unbeatable.",
    dishRecommended: "Barkah Mutton Seekh Tujji & Wazwan Platter"
  },
  {
    id: "rev-2",
    author: "Dr. Mir Farooq",
    location: "Sopore",
    rating: 5,
    date: "2 weeks ago",
    text: "We hosted a 30-person family reunion on the terrace. The hospitality was exceptional, every dish from Rogan Josh to Butter Chicken arrived piping hot. Truly 'Luqma-e-Barkah' lived up to its name — a blessing of flavors.",
    dishRecommended: "Shahi Rogan Josh & Saffron Kahwa"
  },
  {
    id: "rev-3",
    author: "Ayesha Qadir",
    location: "Hadipora / GDC Traveler",
    rating: 5,
    date: "3 weeks ago",
    text: "Visited after college with friends. Their burgers, chicken momos, and mocktails are surprisingly great! Very aesthetic ambiance, clean family seating, and polite staff.",
    dishRecommended: "Crunchy Highway Burger & Sunset Mocktail"
  },
  {
    id: "rev-4",
    author: "Tanveer Hassan",
    location: "Srinagar (Highway Traveler)",
    rating: 5,
    date: "a month ago",
    text: "Driving to Kupwara/Handwara, this is hands down the best highway halt. Ample parking, spotless restrooms, and warm Saffron Kahwa with Kashmiri bakarkhani.",
    dishRecommended: "Traditional Kahwa & Tandoori Platter"
  }
];

export const ROOFTOP_FEATURES = [
  {
    title: "North Kashmir's 1st Rooftop Terrace",
    desc: "Breathtaking open-sky dining overlooking the picturesque Rafiabad valley and Pir Panjal mountain silhouettes.",
    icon: "Sparkles"
  },
  {
    title: "Twilight Fairy-Light Ambiance",
    desc: "Warm glowing lanterns, gentle acoustic Kashmiri and Sufi melodies, and cozy heated dining corners for chilly valley nights.",
    icon: "Moon"
  },
  {
    title: "Private Family Enclosures",
    desc: "Secluded cabanas designed with traditional Kashmiri comfort and modern privacy for family dinners and private celebrations.",
    icon: "Users"
  },
  {
    title: "Live Acacia Charcoal Grills",
    desc: "Watch our master Ustads prepare smoky Seekh Tujji and Tandoori skewers live on the open terrace counter.",
    icon: "Flame"
  }
];
