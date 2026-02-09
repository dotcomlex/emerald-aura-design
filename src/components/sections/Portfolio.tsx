import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useDragRotation } from "@/hooks/useDragRotation";

const portfolioItems = [
  { id: 1, title: "Modern Kitchen Refresh", location: "Denver, CO", category: "Interior", color: "from-emerald-600 to-emerald-800" },
  { id: 2, title: "Victorian Exterior", location: "Lakewood, CO", category: "Exterior", color: "from-blue-600 to-blue-800" },
  { id: 3, title: "Living Room Accent Wall", location: "Aurora, CO", category: "Interior", color: "from-amber-600 to-amber-800" },
  { id: 4, title: "Cedar Deck Staining", location: "Arvada, CO", category: "Staining", color: "from-orange-600 to-orange-800" },
  { id: 5, title: "Office Suite Repaint", location: "Westminster, CO", category: "Commercial", color: "from-purple-600 to-purple-800" },
  { id: 6, title: "Bathroom Transformation", location: "Thornton, CO", category: "Interior", color: "from-teal-600 to-teal-800" },
  { id: 7, title: "Fence & Gate Staining", location: "Centennial, CO", category: "Staining", color: "from-red-600 to-red-800" },
  { id: 8, title: "Accent Wall Feature", location: "Boulder, CO", category: "Custom", color: "from-pink-600 to-pink-800" },
];

export function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { rotation, isDragging, handlers } = useDragRotation(0.5);
  const total = portfolioItems.length;
  const angleStep = 360 / total;
  const radius = 300;

  return (
    <section className="section-padding bg-navy overflow-hidden">
      <div className="container-max">
        <SectionHeader
          eyebrow="Our Work"
          title="Project Gallery"
          subtitle="Drag to explore our recent transformations."
          light
        />
        <AnimatedSection>
          <div
            className="relative mx-auto h-[420px] w-full max-w-[700px]"
            style={{ perspective: "1000px" }}
            {...handlers}
          >
            <div
              className={`relative w-full h-full transition-transform ${isDragging ? "" : "duration-300"}`}
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              {portfolioItems.map((item, i) => {
                const angle = i * angleStep;
                return (
                  <div
                    key={item.id}
                    className="absolute top-1/2 left-1/2 w-[200px] h-[280px] -mt-[140px] -ml-[100px] cursor-pointer"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                      backfaceVisibility: "hidden",
                    }}
                    onClick={() => !isDragging && setLightbox(item.id)}
                  >
                    <div className={`h-full rounded-2xl bg-gradient-to-br ${item.color} shadow-elevated flex flex-col justify-end p-4`}>
                      <span className="text-white/60 text-xs font-medium">{item.category}</span>
                      <h3 className="text-white font-heading font-semibold text-sm mt-1">{item.title}</h3>
                      <p className="text-white/70 text-xs">{item.location}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-center text-charcoal-400 text-sm mt-6">
            {isDragging ? "Release to stop" : "Click & drag to rotate • Tap a card to view"}
          </p>
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
                  <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className="text-white/40 text-lg font-heading">Project Photo</span>
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
