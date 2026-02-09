import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CircularGallery } from "@/components/ui/CircularGallery";
import portfolioKitchen from "@/assets/images/portfolio-kitchen.jpg";
import portfolioExterior from "@/assets/images/service-exterior.jpg";
import portfolioLivingroom from "@/assets/images/portfolio-livingroom.jpg";
import portfolioStaining from "@/assets/images/service-staining.jpg";
import portfolioCommercial from "@/assets/images/service-commercial.jpg";
import portfolioBathroom from "@/assets/images/portfolio-bathroom.jpg";
import portfolioFence from "@/assets/images/portfolio-fence.jpg";
import portfolioAccent from "@/assets/images/portfolio-accent.jpg";

const portfolioItems = [
  { id: 1, title: "Kitchen Cabinet Refinishing", location: "Denver, CO", category: "Interior", image: portfolioKitchen },
  { id: 2, title: "Full Exterior Repaint", location: "Lakewood, CO", category: "Exterior", image: portfolioExterior },
  { id: 3, title: "Living Room Transformation", location: "Aurora, CO", category: "Interior", image: portfolioLivingroom },
  { id: 4, title: "Deck Staining", location: "Arvada, CO", category: "Staining", image: portfolioStaining },
  { id: 5, title: "Commercial Office", location: "Westminster, CO", category: "Commercial", image: portfolioCommercial },
  { id: 6, title: "Bathroom Refresh", location: "Thornton, CO", category: "Interior", image: portfolioBathroom },
  { id: 7, title: "Fence Staining", location: "Centennial, CO", category: "Staining", image: portfolioFence },
  { id: 8, title: "Accent Wall Feature", location: "Boulder, CO", category: "Custom", image: portfolioAccent },
];

export function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [radius, setRadius] = useState(520);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const total = portfolioItems.length;

  // Responsive radius
  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 320 : 520);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // IntersectionObserver for viewport activation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
    >
      {/* Background layers matching 14ER */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0a0f1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(249,115,22,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)",
          ].join(", "),
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative flex flex-col items-center pt-16 pb-12 px-4 md:py-16">
        {/* Header */}
        <div className="text-center mb-2 md:mb-16 relative z-40">
          <span className="inline-block text-orange-500 font-semibold text-xs md:text-sm tracking-widest uppercase mb-2">
            OUR WORK
          </span>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Work That Speaks For Itself
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-md mx-auto">
            A quick look at recent projects across Colorado.
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative w-full max-w-5xl mx-auto h-[340px] sm:h-[420px] md:h-[480px]">
          <CircularGallery
            items={portfolioItems}
            radius={radius}
            autoRotateSpeed={-0.035}
            isActive={isActive}
            onItemClick={(id) => setLightbox(id)}
          />
        </div>

        {/* Instruction text */}
        <div className="text-center mt-2 md:mt-16 relative z-40">
          <p className="text-white/40 text-xs md:text-sm tracking-wide">
            Auto-rotates • Drag or swipe to explore • Tap any photo to view
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 relative z-40">
          <Link
            to="/contact"
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Get a Free Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const item = portfolioItems.find(p => p.id === lightbox);
          if (!item) return null;
          const idx = portfolioItems.indexOf(item);
          return (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
              onClick={() => setLightbox(null)}
            >
              <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
                <X className="h-8 w-8" />
              </button>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-lg w-full"
                onClick={e => e.stopPropagation()}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-white text-xl font-heading font-bold">{item.title}</h3>
                  <p className="text-slate-400">{item.location} • {item.category}</p>
                </div>
                <div className="absolute top-1/2 -left-12 -translate-y-1/2">
                  <button onClick={e => { e.stopPropagation(); setLightbox(portfolioItems[(idx - 1 + total) % total].id); }} className="text-white/60 hover:text-white">
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                </div>
                <div className="absolute top-1/2 -right-12 -translate-y-1/2">
                  <button onClick={e => { e.stopPropagation(); setLightbox(portfolioItems[(idx + 1) % total].id); }} className="text-white/60 hover:text-white">
                    <ChevronRight className="h-8 w-8" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
