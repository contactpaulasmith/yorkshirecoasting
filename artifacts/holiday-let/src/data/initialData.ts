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
  image: string;
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
    slug: "bay-view-cottage",
    name: "Bay View Cottage",
    location: "Scarborough, North Yorkshire",
    description: "A beautifully restored fisherman's cottage perched above Scarborough's South Bay, with sweeping views over the harbour and castle headland. Original stone walls meet contemporary interiors — crisp white linen, a wood-burning stove, and a sun terrace that catches the golden hour perfectly.",
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNight: 245,
    airbnbLink: "https://www.airbnb.co.uk",
    benefits: ["5 min walk to South Bay beach", "Sea and castle views", "Dog friendly", "Free parking", "Private sun terrace", "Wood-burning stove"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Check-in is 4pm / Check-out is 10am" },
      { question: "Parking", answer: "Free parking for 1 car on the drive" },
      { question: "Pets", answer: "Dogs welcome (max 2, well-behaved)" },
      { question: "Wifi", answer: "Network: BayViewCottage — Password: scarborough2024" },
      { question: "Bins", answer: "Bins collected Tuesday — black bin only" }
    ],
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=800&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
    ]
  },
  {
    id: "p2",
    slug: "whitby-harbour-house",
    name: "Whitby Harbour House",
    location: "Whitby, North Yorkshire",
    description: "A spacious Victorian townhouse in the heart of Whitby, steps from the famous 199 steps and the ruins of Whitby Abbey. Light-filled rooms, a fully equipped kitchen, and a private walled courtyard garden make this the perfect base for exploring the North Yorkshire coast.",
    sleeps: 8,
    bedrooms: 4,
    bathrooms: 2,
    pricePerNight: 395,
    airbnbLink: "https://www.airbnb.co.uk",
    benefits: ["Steps from the harbour", "Private walled courtyard", "Sleeps 8 — perfect for groups", "Free parking", "Luxury kitchen", "Coastal path on the doorstep"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Check-in is 3pm / Check-out is 11am" },
      { question: "Parking", answer: "Parking for 2 cars" },
      { question: "Pets", answer: "No pets" },
      { question: "Wifi", answer: "Network: WhitbyHarbourHouse — Password: whitby2024" }
    ],
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80"
    ]
  },
  {
    id: "p3",
    slug: "the-cliff-retreat",
    name: "The Cliff Retreat",
    location: "Robin Hood's Bay, North Yorkshire",
    description: "Perched on the clifftop above one of Yorkshire's most dramatic bays, this contemporary retreat offers uninterrupted North Sea views from floor-to-ceiling windows. Designed for those who love the outdoors — walking the Cleveland Way, rockpooling on the shore, and warming up in the cliff-top hot tub afterwards.",
    sleeps: 6,
    bedrooms: 3,
    bathrooms: 2,
    pricePerNight: 325,
    airbnbLink: "https://www.airbnb.co.uk",
    benefits: ["Cliff-top hot tub", "North Sea views", "Direct coastal path access", "Outdoor shower", "Floor-to-ceiling windows", "Sleeps 6"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Check-in is 4pm / Check-out is 10am" },
      { question: "Parking", answer: "Free parking for 2 cars" },
      { question: "Pets", answer: "Dogs welcome" },
      { question: "Hot tub", answer: "Hot tub heated and ready on arrival" },
      { question: "Wifi", answer: "Network: CliffRetreat — Password: robinshood2024" }
    ],
    images: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1536768139911-e290a59011e4?w=800&q=80",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c4a49f5a?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    ]
  }
];

export const initialThingsToDo: ThingToDo[] = [
  { id: "t1", title: "The Magpie Cafe", category: "Food & Drink", location: "Whitby", description: "Possibly the most famous fish and chip restaurant in England. Queues form early — and for very good reason. Fresh, locally-caught haddock and perfectly crisp chips.", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80", link: "https://www.magpiecafe.co.uk", propertyIds: ["p2"] },
  { id: "t2", title: "Scarborough South Bay Beach", category: "Beaches", location: "Scarborough", description: "A classic British seaside beach with golden sand, donkey rides, and the dramatic castle headland as backdrop. Perfect for families and leisurely coastal walks.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: ["p1"] },
  { id: "t3", title: "Whitby Abbey", category: "Attractions", location: "Whitby", description: "The hauntingly beautiful ruins of a 7th-century monastery overlooking the harbour — one of Yorkshire's most iconic landmarks and the inspiration for Bram Stoker's Dracula.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", link: "https://www.english-heritage.org.uk/visit/places/whitby-abbey", propertyIds: ["p2"] },
  { id: "t4", title: "Runswick Bay", category: "Beaches", location: "Runswick Bay", description: "A secluded, sheltered cove with crystal-clear water and colourful fishing cottages tumbling down the cliff. One of Yorkshire's best-kept secrets.", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: [] },
  { id: "t5", title: "Scarborough Castle", category: "Attractions", location: "Scarborough", description: "A spectacular English Heritage fortress on the headland between North and South Bays, offering 360-degree views of the coastline and centuries of history.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80", link: "https://www.english-heritage.org.uk/visit/places/scarborough-castle", propertyIds: ["p1"] },
  { id: "t6", title: "North York Moors National Park", category: "Attractions", location: "North Yorkshire", description: "Wild moorland, ancient abbeys, and dramatic dales — England's most extensive expanse of open country is right on the doorstep. Walk the Cleveland Way or ride the North Yorkshire Moors Railway.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80", link: "https://www.northyorkmoors.org.uk", propertyIds: [] },
  { id: "t7", title: "Whitby Market", category: "Shopping", location: "Whitby", description: "Explore stalls piled with local jet jewellery, artisan produce, freshly smoked kippers, and handmade crafts. Held every Tuesday and Saturday on the quayside.", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", link: "https://www.whitbyonline.co.uk", propertyIds: ["p2"] },
  { id: "t8", title: "Robin Hood's Bay Village", category: "Attractions", location: "Robin Hood's Bay", description: "A picture-perfect fishing village of smugglers' cottages and winding lanes spilling down to a rocky shore. Ideal for rockpooling and fossil hunting at low tide.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: ["p3"] },
  { id: "t9", title: "The Star Inn the Harbour", category: "Food & Drink", location: "Whitby", description: "Andrew Pern's celebrated restaurant on Whitby Quayside, serving outstanding modern Yorkshire cuisine with locally landed seafood and produce from the Moors.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", link: "https://www.thestarinntheharbour.co.uk", propertyIds: ["p2", "p3"] }
];

export const initialReviews: Review[] = [
  { id: "r1", propertyId: "p1", guestName: "Sarah M.", rating: 5, text: "Absolutely stunning cottage. Woke up to sea views and the castle every morning, the wood burner was going all evening. Will be back next year without a doubt.", date: "2023-10-12", status: "approved" },
  { id: "r2", propertyId: "p1", guestName: "James & Claire", rating: 4, text: "Perfect little bolthole. Scarborough has so much more to offer than we expected. Spotlessly clean and really well thought-out. Tricky to park but the location more than makes up for it.", date: "2023-09-28", status: "approved" },
  { id: "r3", propertyId: "p2", guestName: "The Williams Family", rating: 5, text: "We've stayed in many holiday homes but this one blew us all away. The courtyard was a blessing with the kids, and Whitby is absolutely magical — the Abbey at dusk is unforgettable.", date: "2023-08-15", status: "approved" },
  { id: "r4", propertyId: "p2", guestName: "Mike T.", rating: 5, text: "Fantastic house for our group of friends. Well equipped, great location right in the heart of Whitby, and the host was incredibly helpful with local recommendations.", date: "2023-11-02", status: "pending" },
  { id: "r5", propertyId: "p3", guestName: "Anna B.", rating: 5, text: "The hot tub with that view of Robin Hood's Bay at sunset is something I'll never forget. The Cleveland Way walk from the door was breathtaking. Book it — you won't regret it.", date: "2023-07-22", status: "approved" },
  { id: "r6", propertyId: "p3", guestName: "Oliver F.", rating: 4, text: "Stunning clifftop location. We watched the sunrise over the North Sea every morning from the hot tub. Could do with a few more kitchen essentials but otherwise faultless.", date: "2023-10-05", status: "pending" }
];
