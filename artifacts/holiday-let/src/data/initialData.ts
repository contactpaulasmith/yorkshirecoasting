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
    slug: "the-courtyard",
    name: "The Courtyard",
    location: "Scarborough, North Yorkshire",
    description: "Stunning open-plan living that flows out onto a private courtyard — moments from Peasholm Park and North Bay beach. Two double bedrooms and bathroom on the first floor, plus an additional master bedroom and en-suite in the dormer suite. Appointed to the highest standards with oak furniture, plush king sleigh beds and smart TVs with Netflix. Five-star comfort close to Scarborough's best attractions.",
    sleeps: 6,
    bedrooms: 3,
    bathrooms: 2,
    pricePerNight: 195,
    airbnbLink: "https://www.airbnb.co.uk/rooms/701988237544422493",
    benefits: ["5 mins to North Bay beach", "Private courtyard & deck", "Moments from Peasholm Park", "Self check-in (lockbox)", "10 mins to North York Moors", "Free on-street parking", "Smart TVs with Netflix", "Sleeps 6 in five-star comfort"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Self check-in via lockbox — details sent before arrival. Check-out is 10am." },
      { question: "Parking", answer: "Free on-street parking directly outside the property." },
      { question: "Pets", answer: "Please check the Airbnb listing for the current pet policy." },
      { question: "Wifi", answer: "Wifi included — network details provided in the welcome book." },
      { question: "North Bay beach", answer: "A 5-minute walk through Peasholm Park brings you straight to North Bay beach." }
    ],
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/34d4a8b8-01f3-46e3-ad87-f64d08762106.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/338897cd-e916-465a-af0d-a5ab337b675e.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/75e00a1c-c3d0-407d-8d90-9809e3e55e41.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/ad753ebb-ea55-462a-9191-c078fa87e326.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/f30b006c-23e7-4602-8272-5800233566ca.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/54d34ca2-5335-4e8a-a046-a67129e62fd4.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/5f6e9670-6002-4664-a585-65a325f12c5a.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/2de2e7c7-948a-4560-bc0a-dec9216a2713.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/1d7a3567-ed99-470f-9d82-71ddb9518b86.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/133f1018-557f-4290-a881-02ec8c4171cb.jpeg?im_w=1440"
    ]
  },
  {
    id: "p2",
    slug: "the-steeple",
    name: "The Steeple",
    location: "Scarborough, North Yorkshire",
    description: "A beautifully appointed Victorian apartment within walking distance of Scarborough's iconic South Bay and the town centre. Featuring private gardens, an outdoor decking area and enclosed patio — perfect for couples, families and business travellers. Finished to a high standard with quality oak furniture, plush sofas and carpets, and charming period features throughout. 5-star rated on TripAdvisor.",
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNight: 150,
    airbnbLink: "https://www.airbnb.co.uk/rooms/1880508",
    benefits: ["Walk to South Bay beach & town centre", "Private gardens & decking", "Enclosed patio", "Self check-in (lockbox)", "Free on-street parking", "Washing machine & tumble dryer", "Travel cot & high chair available", "5-star TripAdvisor rating"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Self check-in via lockbox — details sent before arrival. Check-out is 10am." },
      { question: "Parking", answer: "Free on-street parking directly outside the property." },
      { question: "Pets", answer: "Please check the Airbnb listing for the current pet policy." },
      { question: "Wifi", answer: "Wifi included — network details provided in the welcome book." },
      { question: "Fold-out bed", answer: "A fold-out bed is available on request, accommodating up to 5 guests. A portable cot and high chair can also be provided." }
    ],
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/f305f979-ceeb-4a25-a274-24a4397ed293.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/a768f16c-d30c-46aa-9676-9db8b2beeb34.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/eff9bb06-87f6-4c2a-aea7-9504a790ab80.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/9342a9f2-6c1a-4ad3-9fef-fd03e4ac0a36.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/c210fe63-f252-4e3d-9be3-f1e81532ecf9.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/09ee24b2-cc69-493d-8e02-c2de847e273c.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/6e8dc1aa-870e-4ae6-8287-2a209f6d918f.jpeg?im_w=1440"
    ]
  }
];

export const initialThingsToDo: ThingToDo[] = [
  { id: "t1", title: "The Magpie Cafe", category: "Food & Drink", location: "Whitby", description: "Possibly the most famous fish and chip restaurant in England. Queues form early — and for very good reason. Fresh, locally-caught haddock and perfectly crisp chips.", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80", link: "https://www.magpiecafe.co.uk", propertyIds: [] },
  { id: "t2", title: "Scarborough South Bay Beach", category: "Beaches", location: "Scarborough", description: "A classic British seaside beach with golden sand, donkey rides, and the dramatic castle headland as backdrop. Perfect for families and leisurely coastal walks.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: ["p1", "p2"] },
  { id: "t3", title: "Whitby Abbey", category: "Attractions", location: "Whitby", description: "The hauntingly beautiful ruins of a 7th-century monastery overlooking the harbour — one of Yorkshire's most iconic landmarks and the inspiration for Bram Stoker's Dracula.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", link: "https://www.english-heritage.org.uk/visit/places/whitby-abbey", propertyIds: [] },
  { id: "t4", title: "Runswick Bay", category: "Beaches", location: "Runswick Bay", description: "A secluded, sheltered cove with crystal-clear water and colourful fishing cottages tumbling down the cliff. One of Yorkshire's best-kept secrets.", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: [] },
  { id: "t5", title: "Scarborough Castle", category: "Attractions", location: "Scarborough", description: "A spectacular English Heritage fortress on the headland between North and South Bays, offering 360-degree views of the coastline and centuries of history.", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80", link: "https://www.english-heritage.org.uk/visit/places/scarborough-castle", propertyIds: ["p1", "p2"] },
  { id: "t6", title: "North York Moors National Park", category: "Attractions", location: "North Yorkshire", description: "Wild moorland, ancient abbeys, and dramatic dales — England's most extensive expanse of open country is right on the doorstep. Walk the Cleveland Way or ride the North Yorkshire Moors Railway.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80", link: "https://www.northyorkmoors.org.uk", propertyIds: [] },
  { id: "t7", title: "Whitby Market", category: "Shopping", location: "Whitby", description: "Explore stalls piled with local jet jewellery, artisan produce, freshly smoked kippers, and handmade crafts. Held every Tuesday and Saturday on the quayside.", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80", link: "https://www.whitbyonline.co.uk", propertyIds: [] },
  { id: "t8", title: "Robin Hood's Bay Village", category: "Attractions", location: "Robin Hood's Bay", description: "A picture-perfect fishing village of smugglers' cottages and winding lanes spilling down to a rocky shore. Ideal for rockpooling and fossil hunting at low tide.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: [] },
  { id: "t9", title: "The Star Inn the Harbour", category: "Food & Drink", location: "Whitby", description: "Andrew Pern's celebrated restaurant on Whitby Quayside, serving outstanding modern Yorkshire cuisine with locally landed seafood and produce from the Moors.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", link: "https://www.thestarinntheharbour.co.uk", propertyIds: [] }
];

export const initialReviews: Review[] = [
  { id: "r1", propertyId: "p1", guestName: "Sarah M.", rating: 5, text: "Stunning property — the open-plan kitchen and living area is beautiful and the private courtyard was perfect for our morning coffees. Peasholm Park right on the doorstep made it extra special. We'll be back!", date: "2024-08-12", status: "approved" },
  { id: "r2", propertyId: "p1", guestName: "James & Claire", rating: 5, text: "Everything we hoped for and more. The king sleigh beds were incredibly comfortable and the property was spotlessly clean. North Bay beach in five minutes — you genuinely can't ask for better. Already booked again.", date: "2024-07-28", status: "approved" },
  { id: "r3", propertyId: "p2", guestName: "The Henderson Family", rating: 5, text: "Absolutely perfect for our family break. The Victorian character of the apartment is charming and the private garden was a real bonus for the kids. Scarborough's south bay is a short walk — brilliant location.", date: "2024-08-15", status: "approved" },
  { id: "r4", propertyId: "p2", guestName: "Rachel T.", rating: 5, text: "Lovely, cosy apartment finished to a really high standard. Paula was wonderfully responsive and the welcome information was thorough. Quiet neighbourhood but everything you need is walkable. Highly recommend.", date: "2024-09-02", status: "approved" }
];
