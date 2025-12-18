export const Maldives = {
  id: '8',
  name: 'Malé',
  country: 'Maldives',
  region: 'ASIA',
  heroimage: '/Maldiverna/maldives.jpg',
  image1: '/Maldiverna/town.jpg',
  image2: '/Maldiverna/surfboard.jpg',
  description:
    'Malé is the vibrant capital of the Maldives, known for its markets, mosques, colorful buildings, and as the main gateway to the country’s resort islands.',
  shortDescription:
    'Capital city of the Maldives offering markets, mosques, culture, and access to tropical atolls.',
  longDescription: `Malé is the bustling urban heart of the Maldives, located on Malé Island in the Indian Ocean. 
     While the country is famous for its luxury island resorts and turquoise lagoons, Malé offers a glimpse into local Maldivian life with its lively markets, cultural landmarks, harbors, and historic mosques. 
     It also serves as the main transit hub for ferries, speedboats, and seaplane transfers to the surrounding atolls.`,

  activities: ['Beaches'],

  language: `Dhivehi, English`,

  religion: 'Islam',

  currency: 'Maldivian Rufiyaa (MVR / RF)',

  payment: {
    cardsAccepted: ['VISA', 'Mastercard'],
    cashRecommended: true,
  },

  climate:
    'Tropical',

  bestTimeToTravel:
    'December–April for the best beach weather; May–October offers lower prices but more rain',

  tips: [
    'Dress modestly in Malé (shoulders and knees covered).',
  ],

 hotels: [
  {
    name: 'Soneva Jani',
    description: 'Iconic overwater villas with private pools and lagoon access',
    img: '/Maldiverna/Soneva Jan.jpg', 
    url: 'https://www.soneva.com/soneva-jani/',
  },
  {
    name: 'Baros Maldives',
    description: 'Secluded beachfront and overwater villas with luxury service',
    img: '/Maldiverna/Baros Maldives.jpg',
    url: 'https://www.baros.com/',
  },
],

attractions: [
  {
    title: 'Malé Fish Market',
    desc: 'Lively local seafood hub showcasing everyday Maldivian life.',
    coords: [4.1755, 73.5093] as [number, number],
  },
  {
    title: 'Hukuru Miskiy (Friday Mosque)',
    desc: 'Historic coral-stone mosque dating back to the 1600s.',
    coords: [4.1750, 73.5086] as [number, number],
  },
  {
    title: 'Sultan Park & National Museum',
    desc: 'Cultural exhibitions and historical artifacts.',
    coords: [4.1758, 73.5097] as [number, number],
  },
  {
    title: 'Artificial Beach',
    desc: 'Urban beach popular for swimming and relaxing.',
    coords: [4.1780, 73.5215] as [number, number],
  },
  {
    title: 'Water Sports Centers',
    desc: 'Try jet skiing, kayaking, paddleboarding, and more.',
    coords: [4.1910, 73.5290] as [number, number], 
  }
],

  budget: `Travel costs vary by your preferred experience.
     Travelers spend $150–$300 USD/day on smaller resorts, island-hopping tours, and good restaurants.
     Transportation includes ferries, speedboats, seaplane transfers, and domestic flights across the atolls.`,
};
