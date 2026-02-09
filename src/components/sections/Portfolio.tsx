import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDragRotation } from "@/hooks/useDragRotation";
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
  const [isHovering, setIsHovering] = useState(false);
  const { rotation, isDragging, setRotation, handlers } = useDragRotation(0.5);
  const total = portfolioItems.length;
  const angleStep = 360 / total;
  const radius = typeof window !== "undefined" && window.innerWidth < 768 ? 250 : 400;
  const cardW = typeof window !== "undefined" && window.innerWidth < 768 ? 280 : 400;
  const cardH = typeof window !== "undefined" && window.innerWidth < 768 ? 350 : 450;

  // Auto-rotation
  useEffect(() => {
    if (isDragging || isHovering || lightbox !== null) return;
    const interval = setInterval(() => {
      setRotation((r) => r + 0.1);
    }, 16); // ~60fps, full rotation in ~60s
    return () => clearInterval(interval);
  }, [isDragging, isHovering, lightbox, setRotation]);

  return (
    <section
      className="overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a1628 0%, #0d1f3c 50%, #0a0f1a 100%)",
        padding: "80px 0",
      }}
    >
      <div className="container-max px-6">
        <SectionHeader
          eyebrow="Our Work"
          title="Work That Speaks For Itself"
          subtitle="A quick look at recent projects across Colorado."
          light
        />
        <AnimatedSection>
          <div
            className="relative mx-auto"
            style={{
              height: `${cardH + 100}px`,
              perspective: "1200px",
              marginTop: "48px",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            {...handlers}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotation}deg)`,
                transition: isDragging ? "none" : "transform 0.1s linear",
              }}
            >
              {portfolioItems.map((item, i) => {
                const angle = i * angleStep;
                return (
                  <div
                    key={item.id}
                    className="absolute top-1/2 left-1/2 cursor-pointer"
                    style={{
                      width: `${cardW}px`,
                      height: `${cardH}px`,
                      marginTop: `${-cardH / 2}px`,
                      marginLeft: `${-cardW / 2}px`,
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      backfaceVisibility: "hidden",
                    }}
                    onClick={() => !isDragging && setLightbox(item.id)}
                  >
                    <div className="h-full rounded-2xl bg-white shadow-elevated overflow-hidden relative">
                      <img src={item.image} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                      {/* Gradient text overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <h3 className="text-white font-heading font-semibold text-lg">{item.title}</h3>
                        <p className="text-white/80 text-sm mt-1">{item.location}</p>
                        <p className="text-white/50 text-xs mt-2">Emerald Paints</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-center text-white/40 text-sm mt-8">
            Auto-rotates • Swipe left or right to explore • Tap any photo to view
          </p>
          <div className="text-center mt-10">
            <Link
              to="/contact"
              className="inline-block bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-colors shadow-glow-emerald"
            >
              Get a Free Estimate
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
              <X className="h-8 w-8" />
            </button>
            {(() => {
              const item = portfolioItems.find((p) => p.id === lightbox);
              if (!item) return null;
              const idx = portfolioItems.indexOf(item);
              return (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative max-w-lg w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-white text-xl font-heading font-bold">{item.title}</h3>
                    <p className="text-charcoal-400">{item.location} • {item.category}</p>
                  </div>
                  <div className="absolute top-1/2 -left-12 -translate-y-1/2">
                    <button onClick={(e) => { e.stopPropagation(); setLightbox(portfolioItems[(idx - 1 + total) % total].id); }} className="text-white/60 hover:text-white">
                      <ChevronLeft className="h-8 w-8" />
                    </button>
                  </div>
                  <div className="absolute top-1/2 -right-12 -translate-y-1/2">
                    <button onClick={(e) => { e.stopPropagation(); setLightbox(portfolioItems[(idx + 1) % total].id); }} className="text-white/60 hover:text-white">
                      <ChevronRight className="h-8 w-8" />
                    </button>
                  </div>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
