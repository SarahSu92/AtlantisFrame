export const Capri = {
  id: '2',
  name: 'Capri',
  country: 'Italy',
  region: 'EUROPE',
  heroimage: '/Capri/capri.jpg',
  image1: '/Capri/caves.jpeg',
  image2: '/Capri/statue.jpg',
  description:
    'Capri is an Italian island in the Tyrrhenian Sea, famous for its limestone cliffs, the Blue Grotto, and ancient Roman heritage.',
  shortDescription:
    'Italian island known for its dramatic cliffs, Blue Grotto, and upscale Mediterranean charm.',
  longDescription: `Capri is a mountainous island in the Tyrrhenian Sea, home to the towns of Capri and Anacapri. Its landscape features steep limestone cliffs, sandstone formations, and coastal trails shaped by natural erosion. 
  \n Popular since ancient Roman times, the island is known for stunning sea views, luxury boutiques, scenic hikes, and iconic natural features such as the Faraglioni rocks and the Blue Grotto.`,
  activities: ['Hiking', 'Monuments'],
  language: 'Italian',
  religion: [
    'Roman Catholic',
  ],
  currency: 'Euro (€ / EUR)',
  payment: { cardsAccepted: ['VISA', 'Mastercard'], cashRecommended: true },
  climate:
    'summary: Mediterranean climate with mild, wetter winters and hot, dry summers',
  bestTimeToTravel:
    'May–June and September–October for warm, sunny weather with fewer crowds',
  tips: [
    'Greet locals with “Buongiorno” or “Buonasera”',    
  ],
hotels: [
  {
    name: 'La Scalinatella',
    description: 'Elegant 5-star stay with pools and terraces',
    img: '/Capri/La Scalinatella.webp',
    url: 'https://www.scalinatella.com/',
  },
  {
    name: 'Capri Palace – Jumeirah',
    description: 'High-end luxury with spa and tranquil atmosphere',
    img: '/Capri/Jumeirah.jpg',
    url: 'https://www.jumeirah.com/en/stay/italy/capri-palace-jumeirah',
  }
],
 attractions: [
  {
    title: 'Blue Grotto (Grotta Azzurra)',
    desc: 'Iconic sea cave with glowing blue water.',
    coords: [40.5560, 14.2029] as [number, number],
  },
  {
    title: 'Gardens of Augustus',
    desc: 'Terraced botanical gardens with views of Faraglioni and Via Krupp.',
    coords: [40.5489, 14.2425] as [number, number],
  },
  {
    title: 'Villa Jovis',
    desc: 'Explore the ruins of Emperor Tiberius’ Roman villa.',
    coords: [40.5567, 14.2634] as [number, number],
  },
  {
    title: 'Monte Solaro',
    desc: 'Highest point on the island with panoramic views, reachable by chairlift.',
    coords: [40.5535, 14.2220] as [number, number],
  },
  {
    title: 'Villa San Michele',
    desc: 'Historic villa with gardens and sea views, built by Axel Munthe.',
    coords: [40.5516, 14.2323] as [number, number],
  },
  {
    title: 'Castello Barbarossa',
    desc: 'Fort ruins in Anacapri with botanical interest.',
    coords: [40.5563, 14.2536] as [number, number],
  },
  {
    title: 'Phoenician Steps',
    desc: 'Ancient staircase linking Capri and Anacapri.',
    coords: [40.5552, 14.2385] as [number, number],
  },
  {
    title: 'Capri Philosophical Park',
    desc: 'Peaceful park with philosophical quotes and nature paths.',
    coords: [40.5532, 14.2228] as [number, number],
  },
  {
    title: 'Grotta delle Felci',
    desc: 'Elevated sea cave with archaeological significance.',
    coords: [40.5590, 14.2285] as [number, number],
  },
  {
    title: 'Coastal Walks & Viewpoints',
    desc: 'Includes Via Krupp, Belvedere Tragara, and Faraglioni viewpoints.',
    coords: [40.5484, 14.2472] as [number, number],
  },
  {
    title: 'Boat Tours',
    desc: 'Island-circling tours with caves, coves, and Faraglioni arches.',
    coords: [40.5507, 14.2420] as [number, number], 
  },
  {
    title: 'Limoncello Tasting',
    desc: 'Discover Capri’s famous lemon-based liqueur.',
    coords: [40.5510, 14.2320] as [number, number], 
  }
],
  budget: `Capri ranges from moderately expensive to high-end. 
           Travelers spend around €200–€350 per day for 3–4★ hotels, restaurants, and paid attractions.  
           Transportation costs (ferries, buses, taxis) are modest but should be considered in planning.`,
};
