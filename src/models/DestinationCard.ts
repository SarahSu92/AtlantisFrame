export interface DestinationCard {
  id: string;
  name: string;
  region: 'EUROPE' | 'NORTH AMERICA' | 'AFRICA' | 'ASIA';
  activities: string[];
  shortDescription: string;
  image: string;
}

export const DestinationCards: DestinationCard[] = [
  {
    id: '1',
    name: 'Azores',
    region: 'EUROPE',
    activities: ['Hiking', 'Monuments'],
    shortDescription:
      'Volcanic archipelago in the Atlantic Ocean, belonging to Portugal.',
    image: '/Azores/flowers.jpg',
  },
  {
    id: '2',
    name: 'Capri',
    region: 'EUROPE',
    activities: ['Hiking', 'Monuments'],
    shortDescription:
      'Italian island known for its dramatic cliffs, Blue Grotto, and upscale Mediterranean charm.',
    image: '/Capri/capri.jpg',
  },
  {
    id: '3',
    name: 'Aruba',
    region: 'NORTH AMERICA',
    activities: ['Beaches'],
    shortDescription:
      'Sunny Caribbean island with turquoise waters, white beaches, and steady trade winds.',
    image: '/Karibien/aruba.jpg',
  },
  {
    id: '4',
    name: 'Boston',
    region: 'NORTH AMERICA',
    activities: ['Urban Culture', 'Monuments'],
    shortDescription:
      'Historic U.S. city known for the Freedom Trail, universities, and coastal charm.',
    image: '/Boston/boston.jpg',
  },
  {
    id: '5',
    name: 'Montana, Bozeman',
    region: 'NORTH AMERICA',
    activities: ['Hiking', 'Monuments'],
    shortDescription:
      'Gateway to Yellowstone with mountains, wildlife, skiing, and a lively downtown.',
    image: '/Montana/valley.jpg',
  },
  {
    id: '6',
    name: 'Vancouver',
    region: 'NORTH AMERICA',
    activities: ['Urban Culture', 'Monuments'],
    shortDescription:
      'Vibrant coastal city surrounded by mountains, beaches, and lush parks.',
    image: '/Vancover/globe.jpg',
  },
  {
    id: '7',
    name: 'Morocco',
    region: 'AFRICA',
    activities: ['Hiking', 'Monuments'],
    shortDescription:
      'A culturally rich North African destination with deserts, mountains, ancient medinas, and flavorful cuisine.',
    image: '/Marocko/marocco.jpg',
  },
  {
    id: '8',
    name: 'Maldives',
    region: 'ASIA',
    activities: ['Beaches'],
    shortDescription:
      'Capital city of the Maldives offering markets, mosques, culture, and access to tropical atolls.',
    image: '/Maldiverna/maldives.jpg',
  },
  {
    id: '9',
    name: 'Singapore',
    region: 'ASIA',
    activities: ['Urban Culture', 'Monuments'],
    shortDescription:
      'A clean, efficient, and multicultural hub with iconic architecture, nature parks, and incredible food.',
    image: '/Singapore/water.jpg',
  },
  {
    id: '10',
    name: 'Seychelles',
    region: 'AFRICA',
    activities: ['Beaches', 'Hiking'],
    shortDescription:
      'A tropical paradise with stunning islands, crystal-clear waters, and rich marine and terrestrial biodiversity.',
    image: '/Seychellerna/paradise.jpg',
  },
];
