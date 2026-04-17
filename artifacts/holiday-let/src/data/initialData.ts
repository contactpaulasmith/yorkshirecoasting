export interface Property {
  id: string;
  slug: string;
  name: string;
  location: string;
  description: string;
  sleeps: number;
  bedrooms: number;
  bathrooms: number;
  pricePerNight: number;
  airbnbLink: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  images: string[];
}

export interface ThingToDo {
  id: string;
  title: string;
  category: "Food & Drink" | "Beaches" | "Attractions" | "Shopping";
  location: string;
  description: string;
  link: string;
  propertyIds: string[]; // which properties this applies to (or all)
}

export interface Review {
  id: string;
  propertyId: string;
  guestName: string;
  rating: number;
  text: string;
  date: string;
  status: "approved" | "pending";
}

export const initialProperties: Property[] = [
  {
    id: "p1",
    slug: "lighthouse-cottage",
    name: "The Lighthouse Cottage",
    location: "St Ives, Cornwall",
    description: "A beautifully restored fisherman's cottage perched above the harbour, with sweeping views of St Ives Bay. Original stone walls meet contemporary interiors — crisp white linen, a wood-burning stove, and a sun terrace that catches the golden hour perfectly.",
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNight: 245,
    airbnbLink: "https://www.airbnb.co.uk",
    benefits: ["2 min walk to the beach", "Sea views from every room", "Dog friendly", "Free parking", "Private sun terrace", "Wood-burning stove"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Check-in is 4pm / Check-out is 10am" },
      { question: "Parking", answer: "Free parking for 1 car on the drive" },
      { question: "Pets", answer: "Dogs welcome (max 2, well-behaved)" },
      { question: "Wifi", answer: "NetworkName 'LighthouseCottage' Password 'stives2024'" },
      { question: "Bins", answer: "Bins collected Tuesday — black bin only" }
    ],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ]
  },
  {
    id: "p2",
    slug: "harbour-house",
    name: "Harbour House",
    location: "Padstow, Cornwall",
    description: "A spacious Georgian townhouse in the heart of Padstow, moments from the famous Rick Stein restaurants and the coastal path. Light-filled rooms, a fully equipped kitchen, and a private walled garden make this the perfect base for exploring North Cornwall.",
    sleeps: 8,
    bedrooms: 4,
    bathrooms: 2,
    pricePerNight: 395,
    airbnbLink: "https://www.airbnb.co.uk",
    benefits: ["Steps from the harbour", "Private walled garden", "Sleeps 8 — perfect for groups", "Free parking", "Luxury kitchen", "Coastal path on the doorstep"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Check-in is 3pm / Check-out is 11am" },
      { question: "Parking", answer: "Parking for 2 cars" },
      { question: "Pets", answer: "No pets" },
      { question: "Wifi", answer: "NetworkName 'HarbourHouse_Guest' Password 'padstow2024'" }
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
    ]
  },
  {
    id: "p3",
    slug: "cliff-retreat",
    name: "The Cliff Retreat",
    location: "Polzeath, Cornwall",
    description: "Perched on the cliff edge above one of Cornwall's best surf beaches, this contemporary retreat offers uninterrupted Atlantic views from the floor-to-ceiling windows. Designed for those who love the outdoors — surf storage, outdoor shower, and a hot tub for après-surf evenings.",
    sleeps: 6,
    bedrooms: 3,
    bathrooms: 2,
    pricePerNight: 325,
    airbnbLink: "https://www.airbnb.co.uk",
    benefits: ["Cliff-top hot tub", "Direct beach access", "Surf storage", "Outdoor shower", "Floor-to-ceiling sea views", "Sleeps 6"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Check-in is 4pm / Check-out is 10am" },
      { question: "Parking", answer: "Free parking" },
      { question: "Pets", answer: "Dogs welcome" },
      { question: "Hot tub", answer: "Hot tub heated on request" },
      { question: "Wifi", answer: "NetworkName 'CliffRetreat' Password 'polzeath2024'" }
    ],
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
      "https://images.unsplash.com/photo-1536768139911-e290a59011e4?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c4a49f5a?w=800&q=80"
    ]
  }
];

export const initialThingsToDo: ThingToDo[] = [
  { id: "t1", title: "Rick Stein's Seafood Restaurant", category: "Food & Drink", location: "Padstow", description: "The legendary seafood restaurant that put North Cornwall on the culinary map. Book ahead.", link: "https://rickstein.com", propertyIds: ["p2"] },
  { id: "t2", title: "Polzeath Beach", category: "Beaches", location: "Polzeath", description: "One of Cornwall's premier surf beaches, with a long sandy stretch perfect for swimming, surfing, and sunsets.", link: "https://www.visitcornwall.com", propertyIds: ["p3"] },
  { id: "t3", title: "Tate St Ives", category: "Attractions", location: "St Ives", description: "World-class contemporary art in a stunning cliffside building overlooking Porthmeor Beach.", link: "https://www.tate.org.uk/visit/tate-st-ives", propertyIds: ["p1"] },
  { id: "t4", title: "The Hidden Hut", category: "Food & Drink", location: "Portscatho", description: "A famous cliff-top beach café serving incredible seasonal feasts. Book online for the feast nights.", link: "https://www.thehiddenhut.co.uk", propertyIds: [] },
  { id: "t5", title: "Eden Project", category: "Attractions", location: "St Austell", description: "The world-famous biomes in a former quarry — a day trip that never disappoints.", link: "https://www.edenproject.com", propertyIds: [] },
  { id: "t6", title: "Hayle Towans Beach", category: "Beaches", location: "Hayle", description: "Three miles of golden sand dunes and surf. Perfect for families.", link: "https://www.visitcornwall.com", propertyIds: ["p1"] },
  { id: "t7", title: "Padstow Harbour Market", category: "Shopping", location: "Padstow", description: "Browse local artisan produce, fresh fish, crafts and gifts every weekend morning.", link: "https://www.padstow-tc.gov.uk", propertyIds: ["p2"] },
  { id: "t8", title: "Land's End", category: "Attractions", location: "Land's End", description: "The dramatic westernmost tip of mainland Britain. Stunning cliff walks and sea views.", link: "https://www.landsend-landmark.co.uk", propertyIds: [] },
  { id: "t9", title: "The Mariners", category: "Food & Drink", location: "Rock", description: "A Rick Stein pub with fantastic local ales and the best Cornish crab sandwiches.", link: "https://rickstein.com", propertyIds: ["p2", "p3"] }
];

export const initialReviews: Review[] = [
  { id: "r1", propertyId: "p1", guestName: "Sarah M.", rating: 5, text: "Absolutely stunning cottage. Woke up to sea views every morning, the wood burner was going all evening. Will be back next year without a doubt.", date: "2023-10-12", status: "approved" },
  { id: "r2", propertyId: "p1", guestName: "James & Claire", rating: 4, text: "Perfect little bolthole. A bit tricky to park but the location more than makes up for it. Spotlessly clean.", date: "2023-09-28", status: "approved" },
  { id: "r3", propertyId: "p2", guestName: "The Williams Family", rating: 5, text: "We've stayed in many holiday cottages but this one blew us all away. The garden was a blessing with the kids. Padstow is magical.", date: "2023-08-15", status: "approved" },
  { id: "r4", propertyId: "p2", guestName: "Mike T.", rating: 5, text: "Fantastic house for our group of friends. Well equipped, great location, and the host was incredibly helpful.", date: "2023-11-02", status: "pending" },
  { id: "r5", propertyId: "p3", guestName: "Anna B.", rating: 5, text: "The hot tub with that view at sunset is something I'll never forget. Book it, you won't regret it.", date: "2023-07-22", status: "approved" },
  { id: "r6", propertyId: "p3", guestName: "Oliver F.", rating: 4, text: "Stunning location. The surf storage was perfect. House could use a few more kitchen essentials.", date: "2023-10-05", status: "pending" }
];
