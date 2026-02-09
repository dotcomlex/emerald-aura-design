import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const total = portfolioItems.length;
  const angleStep = 360 / total;

  // Auto-rotation
  useEffect(() => {
    if (isHovering || lightbox !== null) return;
    const interval = setInterval(() => {
      setRotation(prev => prev + angleStep);
      setActiveIndex(prev => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering, lightbox, angleStep, total]);

  const goNext = useCallback(() => {
    setRotation(prev => prev + angleStep);
    setActiveIndex(prev => (prev + 1) % total);
  }, [angleStep, total]);

  const goPrev = useCallback(() => {
    setRotation(prev => prev - angleStep);
    setActiveIndex(prev => (prev - 1 + total) % total);
  }, [angleStep, total]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.touches[0].clientX;
    if (diff > 50) { goNext(); touchStartX.current = null; }
    if (diff < -50) { goPrev(); touchStartX.current = null; }
  }, [goNext, goPrev]);

  const handleTouchEnd = useCallback(() => { touchStartX.current = null; }, []);

  // Normalize angle difference to [-180, 180]
  const normalizeAngle = (a: number) => ((a % 360) + 540) % 360 - 180;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-slate-900/50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

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
        <div
          className="relative w-full max-w-5xl mx-auto h-[340px] sm:h-[420px] md:h-[480px] perspective-1000"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-full preserve-3d" style={{ transformStyle: "preserve-3d" }}>
            {portfolioItems.map((item, index) => {
              const angle = index * angleStep;
              const diff = normalizeAngle(angle - rotation);
              const isFront = Math.abs(diff) < 90;
              const isActive = index === activeIndex;

              return (
                <div
                  key={item.id}
                  className="absolute left-1/2 top-1/2 w-64 h-80 md:w-80 md:h-96 cursor-pointer"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${diff}deg) translateZ(280px) scale(${isActive ? 1.05 : 0.9})`,
                    opacity: isFront ? 1 : 0.3,
                    transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.7s ease",
                    backfaceVisibility: "hidden",
                    zIndex: isActive ? 20 : 10,
                  }}
                  onClick={() => setLightbox(item.id)}
                >
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden shadow-2xl transform-gpu">
                    <div className="relative h-full">
                      <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-bold text-lg md:text-xl mb-1">{item.title}</h3>
                        <p className="text-white/80 text-sm mb-2">{item.location}</p>
                        <p className="text-white/60 text-xs">Emerald Paints</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Instruction text */}
        <div className="text-center mt-2 md:mt-16 relative z-40">
          <p className="text-white/40 text-xs md:text-sm tracking-wide">
            Auto-rotates • Swipe left or right to explore • Tap any photo to view
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
