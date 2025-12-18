export const Morocco = {
  id: '7',
  name: 'Morocco',
  country: 'Morocco',
  region: 'AFRICA',
  heroimage: '/Marocko/marocco.jpg',
  image1: '/Marocko/architecture.jpg',
  image2: '/Marocko/coffee.jpg',
  description:
    'Morocco is a North African country known for its vibrant culture, diverse landscapes, and rich history — from bustling medinas and colorful souks to the Sahara Desert and Atlas Mountains.',
  shortDescription:
    'A culturally rich North African destination with deserts, mountains, ancient medinas, and flavorful cuisine.',
  longDescription: `Morocco is a diverse and historically rich country in North Africa, offering an exciting blend of Arab, Berber, and French influences. 
    The country is known for its colorful souks, Sahara Desert adventures, mountain landscapes, and unique architectural beauty. \n
     Whether you're wandering through ancient medinas, trekking through Berber villages, or relaxing on the coast, Morocco provides a mix of adventure, culture, and relaxation.`,

  activities: ['Hiking', 'Monuments'],

  language: `Arabic and Amazigh (Berber), French,
     English: Common in tourist areas`,

  religion: 'Islam (Sunni)',

  currency: 'Moroccan Dirham (MAD / د.م.)',

  payment: {
    cardsAccepted: ['VISA', 'Mastercard', 'American Express'],
    cashRecommended: true,
  },

  climate:
    'Highly varied. Mediterranean on the coast, hot summers inland, cold winters in the Atlas, and extreme desert heat in the Sahara',

  bestTimeToTravel:
    'Spring (March–May) and Autumn (September–November) for comfortable temperatures; summer is very hot inland and in the desert; winter is mild on the coast but cold in mountains',

  tips: ['Do not drink tap water — use bottled.'],

  hotels: [
    {
      name: 'La Mamounia',
      description:
        'Iconic 5★ resort in Marrakech with world-class spa and gardens',
      img: '/Marocko/La Mamounia.jpg',
      url: 'https://www.mamounia.com/',
    },
    {
      name: 'Riad Fes',
      description:
        'Traditional yet luxurious riad experience in the heart of Fes',
      img: '/Marocko/Riad Fes.jpg',
      url: 'https://www.riadfes.com/',
    },
  ],

  attractions: [
    {
      title: 'Marrakech Medina & Souks',
      desc: 'Vibrant markets filled with spices, textiles, and traditional crafts.',
      coords: [31.6295, -7.9811] as [number, number],
    },
    {
      title: 'Jemaa el-Fnaa',
      desc: 'The lively main square of Marrakech with food stalls and street performers.',
      coords: [31.6258, -7.9892] as [number, number],
    },
    {
      title: 'Chefchaouen',
      desc: 'Famous blue-painted mountain town in the Rif Mountains.',
      coords: [35.1688, -5.2636] as [number, number],
    },
    {
      title: 'Atlas Mountains',
      desc: 'Scenic mountain range ideal for trekking and visiting Berber villages.',
      coords: [31.0614, -7.9163] as [number, number],
    },
    {
      title: 'Sahara Desert',
      desc: 'Camel rides, sand dunes, and overnight desert camps.',
      coords: [31.0994, -4.0127] as [number, number],
    },
    {
      title: 'Fes Medina',
      desc: 'UNESCO-listed historic old city with medieval architecture.',
      coords: [34.0631, -4.9778] as [number, number],
    },
    {
      title: 'Casablanca',
      desc: 'Modern coastal city home to the Hassan II Mosque.',
      coords: [33.5731, -7.5898] as [number, number],
    },
    {
      title: 'Essaouira',
      desc: 'Relaxed coastal town known for seafood, medina, and water sports.',
      coords: [31.5085, -9.7595] as [number, number],
    },
    {
      title: 'Ouzoud Falls',
      desc: 'Stunning waterfalls surrounded by lush nature and hiking trails.',
      coords: [32.0167, -6.7186] as [number, number],
    },
    {
      title: 'Todra Gorge',
      desc: 'Dramatic canyon popular for hiking and climbing.',
      coords: [31.5876, -5.567] as [number, number],
    },
  ],

  budget: `Daily expenses vary based on travel style.
     Travelers spend around $100–$200 USD/day on boutique riads, guided tours, and nicer restaurants.
     Transportation options include trains, buses, taxis, and car rentals for travel between cities and remote areas.`,
};
