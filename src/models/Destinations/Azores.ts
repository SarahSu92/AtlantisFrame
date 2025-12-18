export const Azores = {
  id: '1',
  name: 'Azores',
  country: 'Portugal',
  region: 'EUROPE',
  heroimage: '/Azores/flowers.jpg',
  image1: '/Azores/waterfall.jpg',
  image2: '/Azores/azores.jpg',
  description:
    'The Azores are a Portuguese archipelago in the Atlantic Ocean, known for volcanic landscapes, green valleys, and picturesque villages.',
  shortDescription:
    'Volcanic archipelago in the Atlantic Ocean, belonging to Portugal.',
  longDescription: `The Azores are a volcanic archipelago in the Atlantic Ocean, consisting of 9 main islands including São Miguel, Terceira, Pico, and Faial. Known for lush landscapes, crater lakes, geothermal hot springs, whale-watching tours, and scenic hikes.
  `,
  activities: ['Hiking', 'Monuments'],
  language: `Dutch, Regional: Papiamento`,
  religion: ['Predominantly Roman Catholic'],
  currency: 'Euro (€ / EUR)',
  payment: { cardsAccepted: ['VISA', 'Mastercard'], cashRecommended: true },
  climate:
    'summary: Mild oceanic climate year-round, cool winters, warm summers',
  bestTimeToTravel:
    'May to September for best weather, April and October good but more rainfall',
  tips: [
    'Expect quick weather changes — can be sunny, foggy, and rainy in one day',
  ],
 hotels: [
  {
    name: 'Furnas Boutique Hotel',
    description: 'Comfortable boutique stay',
    img: '/Azores/Furnas Boutique Hotel.jpg', 
    url: 'https://www.furnasboutiquehotel.com/',
  },
  {
    name: 'Lava Homes',
    description: 'Cozy guesthouse',
    img: '/Azores/Lava Homes.jpg',
    url: 'https://www.lavahomes.com/',
  },
],
attractions: [
  {
    title: 'Sete Cidades',
    desc: 'Explore the iconic volcanic crater lakes with scenic hiking trails.',
    coords: [37.8650, -25.7800] as [number, number], 
  },
  {
    title: 'Furnas Hot Springs',
    desc: 'Relax in geothermal pools and try traditional cozido cooking.',
    coords: [37.8050, -25.3230] as [number, number], 
  },
  {
    title: 'Terra Nostra Gardens',
    desc: 'Visit historic botanical gardens with thermal hot springs.',
    coords: [37.7993, -25.3191] as [number, number], 
  },
],
  budget: `The Azores is generally more affordable than mainland Portugal’s big cities or other Atlantic islands. 
           Traveles typically spend €120–€200 per day, staying in comfortable hotels, renting cars for island exploration, 
           and joining activities like whale-watching tours or hot spring visits.`,
};
