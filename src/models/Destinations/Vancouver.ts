export const Vancouver = 
 {
    id: '6',
    name: 'Vancouver',
    country: 'Canada',
    region: 'NORTH AMERICA',
    heroimage: '/Vancover/globe.jpg',
    image1: '/Vancover/streetwalk.jpg',
    image2: '/Vancover/harbour.jpg',
    description:
      'Vancouver is a coastal city in British Columbia known for its mountain–ocean scenery, multicultural atmosphere, and year-round outdoor activities.',
    shortDescription:
      'Vibrant coastal city surrounded by mountains, beaches, and lush parks.',
    longDescription: `Vancouver, located on the west coast of British Columbia, is famous for its dramatic scenery where the Pacific Ocean meets the Coast Mountains. 
     Known as one of the world’s most livable cities, Vancouver offers a mix of urban energy, multicultural neighborhoods, beaches, forests, and mountains. 
     The city includes vibrant districts such as Downtown, Gastown, Yaletown, Kitsilano, and the North Shore.`,

    activities: [
      'Urban Culture',
      'Monuments'     
    ],

    language: `English`,

    religion: `   
      Christianity,
      Buddhism,
      Sikhism,
      Islam,
      Judaism`,

    currency: 'Canadian Dollar (CAD / $)',

    payment: {
      cardsAccepted: ['VISA', 'Mastercard', 'American Express'],
      cashRecommended: false,
    },

    climate:
      'Rainy winters, warm summers, and mild spring/autumn seasons',

    bestTimeToTravel:
      'May–September for the best weather. December–February for skiing. April and October for fewer crowds and mild temperatures.',

    tips: [
      'Vancouver is extremely walkable and bike-friendly.',
    ],

    hotels: [
  {
    name: 'Fairmont Pacific Rim',
    description: 'Waterfront luxury with harbour views, spa, and top-tier dining.',
    img: '/Vancover/Fairmont Pacific Rim.webp', 
    url: 'https://www.fairmont.com/pacific-rim-vancouver/',
  },
  {
    name: 'Pinnacle Hotel at the Pier',
    description: 'Located in North Vancouver with skyline views and access to mountains.',
    img: '/Vancover/Pinnacle Hotel at the Pier.webp',
    url: 'https://www.pinnaclepierhotel.com/',
  },
],
attractions: [
   {
    title: 'Stanley Park',
    desc: 'World-famous urban park with an 11 km seawall, beaches, and old-growth forests.',
    coords: [49.3043, -123.1443] as [number, number],
  },
  {
    title: 'Capilano Suspension Bridge',
    desc: 'Iconic rainforest bridge with treetop walks and canyon views.',
    coords: [49.3429, -123.1149] as [number, number],
  },
  {
    title: 'Granville Island',
    desc: 'Public market, artisan shops, galleries, and breweries.',
    coords: [49.2712, -123.1340] as [number, number],
  },
  {
    title: 'Grouse Mountain',
    desc: 'Panoramic views, hiking, skiing, and wildlife experiences.',
    coords: [49.3704, -123.0986] as [number, number],
  },
  {
    title: 'Gastown',
    desc: 'Historic cobblestone district with boutiques, bars, and the Steam Clock.',
    coords: [49.2830, -123.1069] as [number, number],
  },
  {
    title: 'Kitsilano Beach',
    desc: 'Popular beach for swimming, paddleboarding, and skyline views.',
    coords: [49.2744, -123.1540] as [number, number],
  },
  {
    title: 'Vancouver Aquarium',
    desc: 'Exhibits showcasing Pacific marine life in Stanley Park.',
    coords: [49.3000, -123.1300] as [number, number],
  },
  {
    title: 'Science World',
    desc: 'Interactive science museum with OMNIMAX theatre.',
    coords: [49.2734, -123.1039] as [number, number],
  },
  {
    title: 'Queen Elizabeth Park',
    desc: 'Gardens and scenic viewpoints perfect for photos.',
    coords: [49.2416, -123.1126] as [number, number],
  },
  {
    title: 'Whistler',
    desc: 'World-class ski and mountain resort, ideal for a day trip.',
    coords: [50.1163, -122.9574] as [number, number],
  }
],
budget: `Daily expenses vary by travel style. 
           Travelers spend $200–$350 CAD/day on 3–4★ hotels, restaurants, and paid attractions like Capilano or Grouse Mountain.  
           Transportation includes SkyTrain, buses, SeaBus, and occasional taxis or rideshares.`,
  }