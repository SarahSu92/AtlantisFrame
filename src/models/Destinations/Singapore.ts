export const Singapore = 
 {
    id: '9',
    name: 'Singapore',
    country: 'Singapore',
    region: 'ASIA',
    heroimage: '/Singapore/water.jpg',
    image1: '/Singapore/singapore.jpg',
    image2: '/Singapore/living.jpg',
    description:
      'Singapore is a modern, multicultural city-state known for its futuristic skyline, world-class attractions, and diverse culinary scene.',
    shortDescription:
      'A clean, efficient, and multicultural hub with iconic architecture, nature parks, and incredible food.',
    longDescription: `Singapore is a vibrant city-state at the southern tip of the Malay Peninsula.
     Known for its futuristic architecture, lush urban gardens, safety, and exceptional cleanliness.
     With world-famous attractions, efficient public transport, and a remarkable dining scene 
     Singapore is perfect for city lovers, families, and food explorers.`,

    activities: [
      'Urban Culture',
      'Monuments'
    ],

    language: `English, Malay, Mandarin, Tamil`,

    religion: 'Buddhism, Islam, Hinduism, Taoism',

    currency: 'Singapore Dollar (SGD / S$)',

    payment: {
      cardsAccepted: ['VISA', 'Mastercard'],
      cashRecommended: false,
      contactlessPayments: true,
    },

    climate:
      'Tropical climate',

    bestTimeToTravel:
      'Singapore can be visited year-round, but Nov–Jan is the peak rainy season',

    tips: [
      'Public transport (MRT & buses) is fast, clean, and reliable.',      
    ],

    hotels: [
  {
    name: 'Marina Bay Sands',
    description: 'Iconic hotel with infinity pool and skyline views',
    img: '/Singapore/Marina Bay Sands.jpg', 
    url: 'https://www.marinabaysands.com/',
  },
  {
    name: 'Raffles Singapore',
    description: 'Historic colonial-style landmark hotel',
    img: '/Singapore/Raffles Singapore.webp',
    url: 'https://www.raffles.com/singapore/',
  },
],
attractions: [
  {
    title: 'Marina Bay Sands & SkyPark',
    desc: 'Iconic landmark offering panoramic views of the city skyline.',
    coords: [1.2834, 103.8607] as [number, number],
  },
  {
    title: 'Gardens by the Bay',
    desc: 'Explore Supertree Grove, Cloud Forest, and Flower Dome for futuristic botanical experiences.',
    coords: [1.2816, 103.8636] as [number, number],
  },
  {
    title: 'Sentosa Island',
    desc: 'Beaches, resorts, Universal Studios, and a variety of attractions for all ages.',
    coords: [1.2494, 103.8303] as [number, number],
  },
  {
    title: 'Chinatown',
    desc: 'Discover temples, vibrant markets, and authentic local cuisine.',
    coords: [1.2830, 103.8430] as [number, number],
  },
  {
    title: 'Little India',
    desc: 'Colorful streets full of culture, traditional shops, and delicious food.',
    coords: [1.3065, 103.8518] as [number, number],
  },
  {
    title: 'Singapore Zoo & Night Safari',
    desc: 'Renowned wildlife experiences with day and night encounters.',
    coords: [1.4043, 103.7930] as [number, number],
  },
  {
    title: 'Orchard Road',
    desc: 'World-famous shopping district with malls, boutiques, and dining.',
    coords: [1.3048, 103.8318] as [number, number],
  },
  {
    title: 'Hawker Centers',
    desc: 'Local food hubs such as Maxwell Food Centre and Lau Pa Sat.',
    coords: [1.2800, 103.8443] as [number, number], 
  }
],
budget: `Daily expenses vary by travel style.
     Travelers spend $150–$300 USD/day for 3–4★ hotels, restaurants, and paid attractions.
     Transportation is efficient and affordable via MRT, buses, and rideshares.`,
  }