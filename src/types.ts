export type MenuCategory = 
  | 'all'
  | 'wazwan'
  | 'grills'
  | 'mains'
  | 'fastfood'
  | 'breads'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: MenuCategory;
  price: number;
  description: string;
  ingredients?: string[];
  spiceLevel: 0 | 1 | 2 | 3; // 0: None, 1: Mild, 2: Medium, 3: Hot
  isVegetarian: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  image: string;
  calories?: string;
  servingSize?: string;
}

export interface CartItem {
  dish: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationData {
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'rooftop' | 'indoor' | 'family-enclosure';
  specialRequests?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  dishRecommended: string;
  avatar?: string;
}

export interface CateringInquiry {
  fullName: string;
  phone: string;
  eventType: 'Wedding / Walima' | 'Birthday Party' | 'Corporate Gathering' | 'Family Get-Together' | 'Other';
  guestCount: number;
  eventDate: string;
  preferredCuisine: string;
  notes?: string;
}
