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

export const SERVICES_DETAILED = [
  {
    id: "interior", name: "Interior Painting", icon: "Home",
    description: "From single accent walls to complete interior transformations, our team delivers smooth, flawless finishes that bring your vision to life. We handle everything from prep to final touch-ups.",
    features: ["Walls, ceilings, and trim", "Color consultation included", "Furniture protection & cleanup", "Premium paints & primers"],
    gradient: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  },
  {
    id: "exterior", name: "Exterior Painting", icon: "Building",
    description: "Protect and beautify your home with our durable, weather-resistant exterior painting services. We prepare every surface properly for a finish that lasts for years, even through Colorado winters.",
    features: ["Siding, stucco, and brick", "Trim, fascia, and soffits", "Weather-resistant coatings", "Thorough surface preparation"],
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)",
  },
  {
    id: "staining", name: "Wood Staining", icon: "Trees",
    description: "Bring out the natural beauty of your wood surfaces with our expert staining services. We protect and enhance decks, fences, pergolas, doors, and trim with premium stains and sealers.",
    features: ["Decks and pergolas", "Fences and gates", "Doors and trim", "UV and weather protection"],
    gradient: "linear-gradient(135deg, #d6bcfa 0%, #a78bfa 100%)",
  },
  {
    id: "vinyl", name: "Vinyl & Aluminum Painting", icon: "Layers",
    description: "Refresh and modernize dated vinyl siding or aluminum surfaces without the cost of replacement. We use specialized high-bond coatings designed specifically for these materials.",
    features: ["Vinyl siding refresh", "Aluminum surfaces", "Specialized bonding primers", "Long-lasting finish"],
    gradient: "linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 100%)",
  },
  {
    id: "commercial", name: "Commercial Painting", icon: "Building2",
    description: "We offer flexible scheduling and professional results for offices, retail spaces, and commercial properties — on time and on budget. Minimal disruption to your business operations.",
    features: ["Offices and retail spaces", "Flexible scheduling", "Minimal business disruption", "Fast, efficient turnaround"],
    gradient: "linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 100%)",
  },
  {
    id: "repairs", name: "Touch-Ups & Repairs", icon: "Wrench",
    description: "Every great paint job starts with proper prep. We handle minor drywall repairs, caulking, filling, and touch-ups to ensure a smooth, flawless foundation for your new finish.",
    features: ["Drywall patching and repair", "Caulking and sealing", "Surface preparation", "Existing paint touch-ups"],
    gradient: "linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)",
  },
  {
    id: "custom", name: "Custom Finishes", icon: "Palette",
    description: "From bold accent walls to decorative textures and specialty coatings, we create custom finishes tailored to your unique style and vision. Make a statement with something different.",
    features: ["Accent walls and murals", "Textured finishes", "Faux techniques", "Protective specialty coatings"],
    gradient: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
  },
  {
    id: "color", name: "Color Consultation", icon: "Paintbrush",
    description: "Choosing the perfect color can be overwhelming. Our experts guide you through selection, considering your space, lighting, decor, and personal style for the perfect match.",
    features: ["Expert color guidance", "Large format samples", "Lighting considerations", "Trend and classic options"],
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%)",
  },
];

export const SERVICE_FAQS = [
  { question: "How do I get a free estimate?", answer: "Simply give us a call at (720) 447-5654 or fill out our contact form. We'll schedule a convenient time to visit your property, assess the project, and provide a detailed written estimate — typically within 24-48 hours." },
  { question: "What areas do you serve?", answer: "We proudly serve the entire Denver metro area including Denver, Aurora, Lakewood, Arvada, Westminster, Thornton, Centennial, Commerce City, Boulder, Broomfield, and surrounding communities." },
  { question: "How long does a typical project take?", answer: "Project timelines vary based on scope and size. A single room typically takes 1-2 days, while a full interior might take 3-5 days. Exteriors range from 3-7 days depending on home size. We'll provide a clear timeline in your estimate." },
  { question: "Do I need to move my furniture?", answer: "No! We handle all furniture moving and protection. We carefully cover and protect your belongings, floors, and fixtures throughout the project." },
  { question: "What type of paint do you use?", answer: "We use premium paints from trusted brands like Sherwin-Williams, Benjamin Moore, and Behr. We select the right product for each surface and application to ensure lasting results." },
  { question: "Are you licensed and insured?", answer: "Yes, Emerald Paints is fully licensed, bonded, and insured for your complete peace of mind. We carry general liability and workers' compensation coverage." },
  { question: "Do you offer any warranties?", answer: "Yes, we stand behind our work. All projects include a workmanship warranty. If you're not happy with any aspect of our work, we'll make it right." },
  { question: "Can you match existing paint colors?", answer: "Absolutely! We have access to computerized color matching technology that can match virtually any existing color. We can also help you find the perfect new color through our consultation service." },
];

export const PAINT_BRANDS = [
  "Sherwin-Williams",
  "Benjamin Moore",
  "Behr",
  "PPG Paints",
  "Cabot Stains",
];
