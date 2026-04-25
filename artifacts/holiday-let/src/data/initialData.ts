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
  reviewsLink: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
  images: string[];
}

export interface ThingToDo {
  id: string;
  title: string;
  category: "Food & Drink" | "Beaches" | "Attractions" | "Shopping" | "Children";
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
    pricePerNight: 100,
    airbnbLink: "https://www.airbnb.co.uk/rooms/701988237544422493",
    reviewsLink: "https://www.airbnb.co.uk/rooms/701988237544422493/reviews?source_impression_id=p3_1776448407_P3wS8CJr78EuQQp4",
    benefits: ["10 mins walk to North Bay", "Private courtyard & deck", "Moments from Peasholm Park", "Self check-in (lockbox)", "30 mins to North York Moors", "Free on-street parking", "Smart TVs with Netflix", "Sleeps 6 in five-star comfort"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Self check-in via lockbox — details sent before arrival. Check-in is 3pm and Check-out is 10am unless agreed otherwise." },
      { question: "Parking", answer: "Free on-street parking directly outside the property." },
      { question: "Wifi", answer: "Wifi included — network details provided in the welcome book." },
      { question: "North Bay beach", answer: "A 10-minute walk through Peasholm Park brings you straight to North Bay beach." },
      { question: "Fold-out bed / Cot", answer: "A fold-out bed and Portable Cot is available on request to accommodate an extra guest / child." }
    ],
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/34d4a8b8-01f3-46e3-ad87-f64d08762106.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/caf9b32a-b845-4754-8254-08c5b7d0ca09.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/338897cd-e916-465a-af0d-a5ab337b675e.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/75e00a1c-c3d0-407d-8d90-9809e3e55e41.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/ad753ebb-ea55-462a-9191-c078fa87e326.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/f30b006c-23e7-4602-8272-5800233566ca.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/54d34ca2-5335-4e8a-a046-a67129e62fd4.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/5f6e9670-6002-4664-a585-65a325f12c5a.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/2de2e7c7-948a-4560-bc0a-dec9216a2713.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzAxOTg4MjM3NTQ0NDIyNDkz/original/1d7a3567-ed99-470f-9d82-71ddb9518b86.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-701988237544422493/original/0b3f5898-d62e-4fa6-8b1f-641f09a0daef.jpeg?im_w=720",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-701988237544422493/original/5581b865-8d99-4ee3-b3cd-eacb6630f79c.jpeg?im_w=1920"
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
    pricePerNight: 60,
    airbnbLink: "https://www.airbnb.co.uk/rooms/1880508",
    reviewsLink: "https://www.airbnb.co.uk/rooms/1880508/reviews",
    benefits: ["Walk to South Bay beach & town centre", "Private gardens & decking", "Enclosed patio", "Self check-in (lockbox)", "Free on-street parking", "Washing machine & tumble dryer", "Travel cot & high chair available", "5-star TripAdvisor rating"],
    faqs: [
      { question: "Check-in / Check-out", answer: "Self check-in via lockbox — details sent before arrival. Check-in is 3pm and Check-out is 10am unless agreed otherwise." },
      { question: "Parking", answer: "Free on-street parking directly outside the property." },
      { question: "Wifi", answer: "Wifi included — network details provided in the welcome book." },
      { question: "Fold-out bed / Cot", answer: "A fold-out bed and Portable Cot is available on request to accommodate an extra guest / child." }
    ],
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/f305f979-ceeb-4a25-a274-24a4397ed293.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/eff9bb06-87f6-4c2a-aea7-9504a790ab80.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/ca939f38-483c-4434-b336-eee0dcd74f51.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/25fa14a8-68a5-44cd-bc54-352d1674452f.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/09ee24b2-cc69-493d-8e02-c2de847e273c.jpeg?im_w=1200",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/6e8dc1aa-870e-4ae6-8287-2a209f6d918f.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/e0d2e668-4901-4a2c-8542-7a1cee53c329.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/620ae21e-5fd7-41e9-844a-92243882021c.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/a687b55e-7aa0-4f25-8e8d-822faaf2e053.jpeg?im_w=1440",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTg4MDUwOA%3D%3D/original/02a22ebb-3285-48a3-a72c-fedb4e0599fb.jpeg?im_w=1200"
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
  { id: "t9", title: "The Star Inn the Harbour", category: "Food & Drink", location: "Whitby", description: "Andrew Pern's celebrated restaurant on Whitby Quayside, serving outstanding modern Yorkshire cuisine with locally landed seafood and produce from the Moors.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", link: "https://www.thestarinntheharbour.co.uk", propertyIds: [] },
  { id: "t10", title: "Playdale Farm Park", category: "Children", location: "Cayton, Scarborough (~3 miles)", description: "Hands-on farm experience with animals to meet and feed, soft play areas, and outdoor activities — a fantastic all-weather option for younger children.", image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?w=600&q=80", link: "https://playdalefarmpark.co.uk/", propertyIds: [] },
  { id: "t11", title: "Filey Zoo", category: "Children", location: "Filey (~7 miles)", description: "A small, friendly zoo perfect for a relaxed family visit. Home to a wide range of animals in a welcoming, unhurried atmosphere ideal for young children.", image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=600&q=80", link: "https://www.fileyzoo.com/", propertyIds: [] },
  { id: "t12", title: "SEA LIFE Scarborough", category: "Children", location: "Scalby Mills, Scarborough (~1.5 miles)", description: "Walk through underwater tunnels and come face-to-face with sharks, rays and penguins. An immersive aquarium experience right on the North Bay doorstep.", image: "https://www.visitsealife.com/scarborough/media/eyuhaeaz/homepage-banner.jpg?format=jpg", link: "http://www.visitsealife.com/scarborough", propertyIds: ["p1"] },
  { id: "t13", title: "North Bay Mini Golf", category: "Children", location: "Peasholm Gap, Scarborough (~1 mile)", description: "Classic seaside mini golf with simple holes and sea views. A fun, affordable outing for children and adults alike, just a short stroll from North Bay beach.", image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: ["p1"] },
  { id: "t14", title: "The Secret Realm", category: "Children", location: "Scarborough (~4 miles)", description: "A large indoor soft play centre perfect for letting younger children burn off energy whatever the weather. Safe, supervised, and great for all ages.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", link: "http://www.thesecretrealmscarborough.co.uk/", propertyIds: [] },
  { id: "t15", title: "The Little Play Company", category: "Children", location: "Seamer (~3 miles)", description: "A charming role-play centre designed for younger children to explore imaginative scenarios — from shops to hospitals — in a safe and stimulating environment.", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80", link: "http://www.thelittleplaycompany-scarborough.co.uk/", propertyIds: [] },
  { id: "t16", title: "Alpamare Water Park", category: "Children", location: "Burniston Rd, Scarborough (~1.5 miles)", description: "Scarborough's popular indoor and outdoor water park featuring exhilarating slides, wave pools and relaxation areas — fun for the whole family year-round.", image: "https://www.alpamare.co.uk/content/uploads/2024/07/pool-girls-splashing-1536x1024.jpg", link: "https://www.alpamare.co.uk/", propertyIds: ["p1"] },
  { id: "t17", title: "North Yorkshire Water Park", category: "Children", location: "Wykeham Lakes (~6 miles)", description: "An exciting outdoor inflatable water park on a beautiful lake. Perfect for older children and families looking for a thrilling summer adventure in stunning surroundings.", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80", link: "https://www.northyorkshirewaterpark.co.uk/", propertyIds: [] },
  { id: "t18", title: "Scarborough Big Wheel", category: "Children", location: "Foreshore Rd, Scarborough (~1.5 miles)", description: "Ride high above the seafront on this classic ferris wheel for spectacular views over Scarborough's South Bay, the castle headland and the North Sea.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: ["p1", "p2"] },
  { id: "t19", title: "Hispaniola Pirate Ship", category: "Children", location: "Sandside, Scarborough Harbour (~1.5 miles)", description: "Step aboard a pirate-themed boat moored in Scarborough Harbour. A fun and memorable experience that sparks the imagination of children of all ages.", image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: ["p1", "p2"] },
  { id: "t20", title: "Scarborough North Bay Railway", category: "Children", location: "Peasholm Park, Scarborough (~1 mile)", description: "A charming miniature railway running along the North Bay between Peasholm Park and Scalby Mills. A nostalgic seaside ride the whole family will love.", image: "https://www.snbr.org.uk/uploads/block1image.jpg", link: "https://www.snbr.org.uk/", propertyIds: ["p1"] },
  { id: "t21", title: "Crafty Creations Cafe", category: "Children", location: "Eastborough, Scarborough (~1.2 miles)", description: "A delightful café and craft studio where children can paint pottery, create keepsakes and enjoy refreshments. A perfect rainy-day activity in the heart of Scarborough.", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80", link: "https://www.craftycreationscafe.co.uk/", propertyIds: ["p1", "p2"] },
  { id: "t22", title: "Flamingo Land Resort", category: "Children", location: "Kirby Misperton (~25 miles)", description: "A full day out combining a thrilling theme park with a zoo home to over 1,000 animals. One of Yorkshire's most beloved family attractions — well worth the drive.", image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=600&q=80", link: "https://www.flamingoland.co.uk/", propertyIds: [] },
  { id: "t23", title: "Peasholm Park", category: "Children", location: "North Bay, Scarborough (~1 mile)", description: "A beautiful orientally-themed park with a boating lake, paddleboats, mini waterfall and regular Naval Warfare shows. A wonderful free day out for all ages.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80", link: "https://www.discoveryorkshirecoast.com", propertyIds: ["p1"] },
  { id: "t24", title: "Sewerby Hall & Gardens", category: "Children", location: "Bridlington (~18 miles)", description: "A Georgian hall set in stunning clifftop gardens with a small zoo, an adventure playground and temporary exhibitions. A fantastic full family day out on the Yorkshire coast.", image: "https://images.unsplash.com/photo-1568607689150-17e625c1586e?w=600&q=80", link: "https://www.sewerbyhall.co.uk/", propertyIds: [] }
];

export const initialReviews: Review[] = [
  { id: "r1", propertyId: "p1", guestName: "Sarah M.", rating: 5, text: "Stunning property — the open-plan kitchen and living area is beautiful and the private courtyard was perfect for our morning coffees. Peasholm Park right on the doorstep made it extra special. We'll be back!", date: "2024-08-12", status: "approved" },
  { id: "r2", propertyId: "p1", guestName: "James & Claire", rating: 5, text: "Everything we hoped for and more. The king sleigh beds were incredibly comfortable and the property was spotlessly clean. North Bay beach in five minutes — you genuinely can't ask for better. Already booked again.", date: "2024-07-28", status: "approved" },
  { id: "r3", propertyId: "p2", guestName: "The Henderson Family", rating: 5, text: "Absolutely perfect for our family break. The Victorian character of the apartment is charming and the private garden was a real bonus for the kids. Scarborough's south bay is a short walk — brilliant location.", date: "2024-08-15", status: "approved" },
  { id: "r4", propertyId: "p2", guestName: "Rachel T.", rating: 5, text: "Lovely, cosy apartment finished to a really high standard. Paula was wonderfully responsive and the welcome information was thorough. Quiet neighbourhood but everything you need is walkable. Highly recommend.", date: "2024-09-02", status: "approved" }
];
