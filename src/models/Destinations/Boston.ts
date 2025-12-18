export const Boston = {
  id: '4',
  name: 'Boston',
  country: 'United States',
  region: 'NORTH AMERICA',
  heroimage: '/Boston/boston.jpg',
  image1: '/Boston/church.jpg',
  image2: '/Boston/bostoncity.jpg',
  description:
    'Boston is one of the oldest and most historically significant cities in the United States, known for its colonial heritage, universities, and vibrant cultural scene.',
  shortDescription:
    'Historic U.S. city known for the Freedom Trail, universities, and coastal charm.',
  longDescription: `Boston, the capital of Massachusetts, blends colonial American history with modern innovation. Located on the Atlantic coast, the city features iconic neighborhoods such as Back Bay, Beacon Hill. 
    \n North End, Downtown, and nearby Cambridge, home to Harvard and MIT. 
     Boston offers historic landmarks, beautiful parks, museums, waterfront views, and a lively food and culture scene.`,
  activities: ['Urban Culture', 'Monuments'],
  language: `English`,
  religion: [
    'Roman Catholic',
  ],
  currency: 'United States Dollar (USD / $)',
  payment: {
    cardsAccepted: ['VISA', 'Mastercard', 'American Express'],
    cashRecommended: true,
  },
  climate:
    'Four seasons',
  bestTimeToTravel:
    'Late spring (May–June) and early autumn (September–October) for ideal weather; summer is busy and warm; winter is cold and snowy',
  tips: ['Try local seafood such as clam chowder and lobster rolls.'],
  hotels: [
    {
      name: 'Boston Harbor Hotel',
      description: 'Waterfront luxury with elegant rooms and dining',
      img: '/Boston/Boston Harbor Hotel.jpg',
      url: 'https://www.bhh.com/',
    },
    {
      name: 'Four Seasons Hotel Boston',
      description: 'High-end accommodations in Back Bay',
      img: '/Boston/Four Seasons Hotel Boston.jpg',
      url: 'https://www.fourseasons.com/boston/',
    },
  ],
  attractions: [
    {
      title: 'Historic Highlights',
      desc: 'Prominent landmarks like the Freedom Trail, Boston Common, and Beacon Hill give you a sense of Boston’s rich colonial history.',
      coords: [42.355, -71.0656] as [number, number],
    },
    {
      title: 'Arts & Culture',
      desc: 'Visit Fenway Park for sports history or explore the Museum of Fine Arts and Isabella Stewart Gardner Museum for world-class art.',
      coords: [42.3394, -71.0942] as [number, number],
    },
    {
      title: 'Waterfront & Outdoors',
      desc: 'Take a harbor cruise, go whale watching, or enjoy a stroll along the waterfront parks and gardens.',
      coords: [42.3601, -71.0495] as [number, number],
    },
    {
      title: 'Neighborhood Flavors',
      desc: 'North End offers authentic Italian cuisine, while Back Bay and Cambridge offer vibrant shops, cafes, and historic streets.',
      coords: [42.3647, -71.0542] as [number, number],
    },
    {
      title: 'MIT Museum',
      desc: 'Interactive exhibits on science, technology, and innovation.',
      coords: [42.3626, -71.0903] as [number, number],
    },
    {
      title: 'Boston Tea Party Ships & Museum',
      desc: 'Live reenactments and interactive exhibits about the historic Boston Tea Party.',
      coords: [42.3522, -71.05] as [number, number],
    },
    {
      title: 'Boston Aquarium',
      desc: 'Explore marine life at the New England Aquarium near the waterfront.',
      coords: [42.3592, -71.049] as [number, number],
    },
    {
      title: 'Fenway Park Tour',
      desc: 'Tour the iconic home of the Boston Red Sox.',
      coords: [42.3467, -71.0972] as [number, number],
    },
    {
      title: 'Isabella Stewart Gardner Museum',
      desc: 'Renaissance-style art museum with beautiful gardens and interiors.',
      coords: [42.338, -71.099] as [number, number],
    },
    {
      title: 'Boston Common & Public Garden',
      desc: 'Historic parks perfect for walking, picnics, and swan boat rides.',
      coords: [42.355, -71.0656] as [number, number],
    },
  ],
  budget: `Boston travel costs vary widely. 
           Travelers spend $200–$350 USD/day on 3–4★ hotels, restaurants, museums, harbor tours,
           and guided activities. Transportation includes the “T,” taxis, rideshares, and occasional car rentals.`,
};
