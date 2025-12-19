export interface DestinationActivities {
  id: string;
  name: string;
  region: 'EUROPE' | 'NORTH AMERICA' | 'AFRICA' | 'ASIA';
  activities: string[];
  shortDescription: string;
}

export const DestinationActivities: DestinationActivities [] = [
  {
    id: '1',
    name: 'Azores',
    region: 'EUROPE',
    activities: ['Hiking', 'Monuments'],
    shortDescription: 'Volcanic archipelago in the Atlantic Ocean, belonging to Portugal.',

  },
  {
    id: '2',
    name: 'Capri',
    region: 'EUROPE',
    activities: ['Hiking', 'Monuments'],
    shortDescription: 'Italian island known for its dramatic cliffs, Blue Grotto, and upscale Mediterranean charm.',
  },
  {
    id: '3',
    name: 'Aruba',
    region: 'NORTH AMERICA',
    activities: ['Beaches'],
    shortDescription:
      'Sunny Caribbean island with turquoise waters, white beaches, and steady trade winds.',
  },
];