export const Seychelles = 
 {
    id: '10',
    name: 'Seychelles',
    country: 'Seychelles',
    region: 'AFRICA',
    heroimage: '/Seychellerna/paradise.jpg',
    image1: '/Seychellerna/resort.jpg',
    image2: '/Seychellerna/couplebeach.jpg',
    description:
      'Seychelles is an Indian Ocean archipelago known for its pristine beaches, turquoise waters, lush tropical forests, and unique wildlife.',
    shortDescription:
      'A tropical paradise with stunning islands, crystal-clear waters, and rich marine and terrestrial biodiversity.',
    longDescription: `Seychelles is a group of 115 islands in the Indian Ocean, offering idyllic beaches, vibrant coral reefs, 
    and lush rainforests. Mahé, Praslin, and La Digue are the most visited islands, each with unique attractions, resorts, and guesthouses. 
    The capital, Victoria, is on Mahé and serves as the main hub for travel, commerce, and culture. 
    Seychelles is ideal for relaxation, eco-tourism, water sports, and exploring tropical nature.`,

    activities: [
      'Hiking',
      'Beaches'
    ],

    language: `English, French, Seychellois Creole (Kreol)`,

    religion: [
      'Roman Catholic',
    ],

    currency: 'Seychellois Rupee (SCR / SRe)',

    payment: {
      cardsAccepted: ['VISA', 'Mastercard'],
      cashRecommended: true,
      contactlessPayments: true,
    },

    climate:
      'Tropical climate',

    bestTimeToTravel:
      'May–October for cooler, drier weather; November–April is hot and humid but good for snorkeling',

    tips: [
      'Respect marine life and coral reefs.',      
    ],

    hotels: [
  {
    name: 'Four Seasons Resort Seychelles',
    description: 'Overwater villas, spa, luxury amenities',
    img: '/Seychellerna/Four Seasons Resort Seychelles.jpg', 
    url: 'https://www.fourseasons.com/seychelles/',
  },
  {
    name: 'North Island Seychelles',
    description: 'Exclusive private island resort',
    img: '/Seychellerna/North Island Seychelles.webp',
    url: 'https://www.north-island.com/',
  },
],
attractions: [
  {
    title: 'Anse Lazio & Anse Source d’Argent',
    desc: 'World-famous beaches with white sand and turquoise waters.',
    coords: [-4.2975, 55.7033] as [number, number], 
  },
  {
    title: 'Vallée de Mai (Praslin)',
    desc: 'UNESCO World Heritage site featuring the unique Coco de Mer palms.',
    coords: [-4.3333, 55.7333] as [number, number],
  },
  {
    title: 'La Digue',
    desc: 'Bike-friendly island with scenic granite beaches and charming villages.',
    coords: [-4.3591, 55.8413] as [number, number],
  },
  {
    title: 'Victoria (Mahé)',
    desc: 'Capital city with vibrant markets, cultural sights, and the famous clock tower.',
    coords: [-4.6200, 55.4550] as [number, number],
  },
  {
    title: 'Morne Seychellois National Park',
    desc: 'Hiking trails through tropical rainforest with stunning viewpoints.',
    coords: [-4.6546, 55.4435] as [number, number],
  },
  {
    title: 'Snorkeling & Diving',
    desc: 'Explore coral reefs, marine life, and sea turtles in crystal-clear waters.',
    coords: [-4.6796, 55.4920] as [number, number], 
  },
  {
    title: 'Island Hopping',
    desc: 'Take day trips between Mahé, Praslin, and La Digue to explore diverse landscapes.',
    coords: [-4.5710, 55.5510] as [number, number], 
  },
  {
    title: 'Water Sports',
    desc: 'Enjoy kayaking, paddleboarding, sailing, and other aquatic activities.',
    coords: [-4.6500, 55.4300] as [number, number], 
  }
],

    budget: `Daily expenses vary by travel style. 
     Travelers $200–$400 USD/day on 3–4★ hotels, resort restaurants, and guided tours. 
     Transportation includes ferries, speedboats, and small inter-island flights.`,
  }