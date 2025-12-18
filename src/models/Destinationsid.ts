export interface Attraction {
  title: string;
  desc: string;
  coords: [number, number]; 
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'EUROPE' | 'NORTH AMERICA' | 'AFRICA' | 'ASIA';
  heroimage: string;
  image1?: string;
  image2?: string;
  image3?: string;
  description?: string;
  shortDescription?: string;
  longDescription?: string;
  activities?: string[];
  language: string;
  religion?: string[];
  currency?: string;
  payment?: { cardsAccepted: string[]; cashRecommended?: boolean };
  climate?: string;
  bestTimeToTravel?: string;
  tips?: string[];
  hotels: string[];
  attractions?: Attraction[];
  budget?: string;
}


