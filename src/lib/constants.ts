export const COMPANY = {
  name: "Emerald Paints LLC",
  shortName: "Emerald Paints",
  phone: "(720) 447-5654",
  phoneRaw: "+17204475654",
  phoneLink: "tel:+17204475654",
  email: "PaintsEmerald@gmail.com",
  emailLink: "mailto:PaintsEmerald@gmail.com",
  address: {
    street: "8170 Brighton Rd",
    city: "Commerce City",
    state: "CO",
    zip: "80022",
    full: "Commerce City, CO",
  },
  owner: "Miguel",
  yearsExperience: 15,
  projectsCompleted: 500,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61575693606448",
    instagram: "#",
  },
  hours: {
    weekday: "7:00 AM - 7:00 PM",
    saturday: "7:00 AM - 7:00 PM",
    sunday: "By appointment",
  },
};

export const SERVICES = [
  { id: "interior", name: "Interior Painting", shortDescription: "Transform any room with smooth, flawless finishes and expert color matching.", icon: "Home" },
  { id: "exterior", name: "Exterior Painting", shortDescription: "Boost curb appeal and protect your home with weather-resistant coatings.", icon: "Building" },
  { id: "staining", name: "Wood Staining", shortDescription: "Decks, fences, doors, and trim — bringing out the natural beauty of wood.", icon: "Trees" },
  { id: "vinyl", name: "Vinyl & Aluminum Painting", shortDescription: "Refresh and modernize siding with specialized high-bond coatings.", icon: "Layers" },
  { id: "commercial", name: "Commercial Painting", shortDescription: "Flexible scheduling and professional results for offices and retail spaces.", icon: "Building2" },
  { id: "repairs", name: "Touch-Ups & Repairs", shortDescription: "Drywall repairs, caulking, and touch-ups for a smooth foundation.", icon: "Wrench" },
  { id: "custom", name: "Custom Finishes", shortDescription: "Accent walls, decorative textures, and specialty coatings.", icon: "Palette" },
  { id: "color", name: "Color Consultation", shortDescription: "Expert guidance through color selection for the perfect match.", icon: "Paintbrush" },
];

export const SERVICE_AREAS = [
  "Denver", "Aurora", "Lakewood", "Arvada", "Westminster",
  "Thornton", "Centennial", "Commerce City", "Boulder", "Broomfield",
];

export const TESTIMONIALS = [
  { id: 1, name: "Mike Thompson", location: "Denver, CO", project: "Interior Repaint", quote: "Emerald Paints transformed our living room and kitchen. The attention to detail was incredible, and they finished ahead of schedule. Highly recommend!", rating: 5 },
  { id: 2, name: "Sarah Rodriguez", location: "Lakewood, CO", project: "Exterior Painting", quote: "Professional from start to finish. They protected all our landscaping and left the site cleaner than they found it. Our home looks brand new!", rating: 5 },
  { id: 3, name: "David Chen", location: "Aurora, CO", project: "Deck Staining", quote: "The deck staining exceeded our expectations. They took the time to properly prep the wood, and the finish is absolutely beautiful.", rating: 5 },
  { id: 4, name: "Jennifer Williams", location: "Arvada, CO", project: "Cabinet Refinishing", quote: "We saved thousands by refinishing instead of replacing our cabinets. The team was courteous and the results are stunning.", rating: 5 },
  { id: 5, name: "Chris Martinez", location: "Westminster, CO", project: "Commercial Office", quote: "As a business owner, I appreciated their flexible scheduling and minimal disruption. The office looks fantastic.", rating: 5 },
];

export const MICRO_REVIEWS = [
  { quote: "Exceeded our expectations!", author: "Mike T." },
  { quote: "Best painters in Denver", author: "Sarah L." },
  { quote: "Flawless exterior work", author: "David R." },
  { quote: "Highly recommend!", author: "Jennifer M." },
  { quote: "Professional from start to finish", author: "Chris B." },
  { quote: "Transformed our home", author: "Amanda K." },
  { quote: "Outstanding attention to detail", author: "Robert J." },
  { quote: "Will use again!", author: "Lisa P." },
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];
