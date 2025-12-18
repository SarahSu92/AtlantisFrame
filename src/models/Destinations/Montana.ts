export const Montana = 
{
    id: '5',
    name: 'Montana, Bozeman',
    country: 'United States',
    region: 'NORTH AMERICA',
    heroimage: '/Montana/valley.jpg',
    image1: '/Montana/livingstone.jpg',
    image2: '/Montana/ranch.jpg',
    description:
      'Bozeman is a city in southwestern Montana known for its proximity to Yellowstone, mountain landscapes, and outdoor adventure.',
    shortDescription:
      'Gateway to Yellowstone with mountains, wildlife, skiing, and a lively downtown.',
    longDescription: `Bozeman, located in southwestern Montana, serves as a gateway to the Rocky Mountains, Yellowstone National Park, and the Gallatin Valley. 
     Surrounded by mountains, forests, and rivers, the city blends outdoor adventure with western charm and a growing cultural scene. 
     Bozeman is also home to Montana State University, which adds a youthful and vibrant atmosphere.`,

    activities: [
      'Hiking',
      'Monuments'    
    ],

    language: `English`,

    religion: [
      'Christian',
    ],

    currency: 'United States Dollar (USD / $)',

    payment: {
      cardsAccepted: ['VISA', 'Mastercard', 'American Express'],
      cashRecommended: true,
    },

    climate:
      'Warm dry summers, snowy cold winters, and spring/autumn seasons',

    bestTimeToTravel:
      'Summer (June–September) for hiking and outdoor activities; Winter (December–March) for skiing; Spring/Autumn for quieter visits and scenic landscapes',

    tips: [
      'Hiking boots recommended for Yellowstone and nearby mountain trails.',     
    ],

    hotels: [
  {
    name: 'Element Bozeman',
    description: 'Upscale hotel with premium amenities',
    img: '/Montana/Element Bozeman.jpg',
    url: 'https://www.marriott.com/en-us/hotels/bznel-element-bozeman/overview/',
  },
  {
    name: 'Big Sky Resort',
    description: 'Luxury ski-in/ski-out lodging near Bozeman',
    img: '/Montana/Big Sky Resort.jpg',
    url: 'https://www.bigskyresort.com/',
  },
],
attractions: [
  {
    title: 'Yellowstone National Park',
    desc: 'Day trips for geysers, wildlife, and dramatic natural scenery.',
    coords: [44.4280, -110.5885] as [number, number], 
  },
  {
    title: 'Bridger Bowl',
    desc: 'Popular ski resort for winter sports and mountain fun.',
    coords: [45.8170, -110.8966] as [number, number],
  },
  {
    title: 'Museum of the Rockies',
    desc: 'Explore dinosaur exhibits and learn about Montana’s history.',
    coords: [45.6603, -111.0456] as [number, number],
  },
  {
    title: 'Downtown Bozeman',
    desc: 'Restaurants, breweries, shops, and art galleries in a lively town center.',
    coords: [45.6796, -111.0386] as [number, number],
  },
  {
    title: 'Gallatin River',
    desc: 'Enjoy fly fishing, kayaking, and rafting adventures.',
    coords: [45.4170, -111.2153] as [number, number], 
  },
  {
    title: 'Big Sky Resort',
    desc: 'Skiing, hiking, ziplining, and mountain activities for all seasons.',
    coords: [45.2844, -111.4015] as [number, number],
  },
  {
    title: 'Hyalite Canyon',
    desc: 'Beautiful area for hiking, wildlife, and nature photography.',
    coords: [45.5986, -111.0548] as [number, number],
  },
  {
    title: 'Drinking Horse Mountain',
    desc: 'Scenic hike offering panoramic views of the surrounding landscape.',
    coords: [45.7136, -111.0337] as [number, number],
  },
  {
    title: 'Chico Hot Springs',
    desc: 'Relax in natural hot springs and enjoy spa experiences.',
    coords: [45.3361, -110.6976] as [number, number],
  }
],

    budget: `Daily expenses vary by travel style. 
           Travelers spend $150–$300 USD/day on 3–4★ hotels, restaurants, guided tours, 
           and winter sports. Transportation includes rental cars, taxis, 
           and shuttles to Yellowstone and ski resorts.`,
  }