import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CircularGallery } from "@/components/ui/CircularGallery";
import type { GalleryItem } from "@/components/ui/CircularGallery";
import portfolioKitchen from "@/assets/images/portfolio-kitchen.jpg";
import portfolioExterior from "@/assets/images/service-exterior.jpg";
import portfolioLivingroom from "@/assets/images/portfolio-livingroom.jpg";
import portfolioStaining from "@/assets/images/service-staining.jpg";
import portfolioCommercial from "@/assets/images/service-commercial.jpg";
import portfolioBathroom from "@/assets/images/portfolio-bathroom.jpg";
import portfolioFence from "@/assets/images/portfolio-fence.jpg";
import portfolioAccent from "@/assets/images/portfolio-accent.jpg";

export function Portfolio() {
  const items: GalleryItem[] = useMemo(() => [
    { common: "Kitchen Cabinet Refinishing", binomial: "Denver, CO", photo: { url: portfolioKitchen, text: "Kitchen refinishing", by: "Emerald Paints" } },
    { common: "Full Exterior Repaint", binomial: "Lakewood, CO", photo: { url: portfolioExterior, text: "Exterior repaint", by: "Emerald Paints" } },
    { common: "Living Room Transformation", binomial: "Aurora, CO", photo: { url: portfolioLivingroom, text: "Living room painting", by: "Emerald Paints" } },
    { common: "Deck Staining", binomial: "Arvada, CO", photo: { url: portfolioStaining, text: "Deck staining", by: "Emerald Paints" } },
    { common: "Commercial Office", binomial: "Westminster, CO", photo: { url: portfolioCommercial, text: "Commercial painting", by: "Emerald Paints" } },
    { common: "Bathroom Refresh", binomial: "Thornton, CO", photo: { url: portfolioBathroom, text: "Bathroom painting", by: "Emerald Paints" } },
    { common: "Fence Staining", binomial: "Centennial, CO", photo: { url: portfolioFence, text: "Fence staining", by: "Emerald Paints" } },
    { common: "Accent Wall Feature", binomial: "Boulder, CO", photo: { url: portfolioAccent, text: "Accent wall", by: "Emerald Paints" } },
  ], []);

  const [lightbox, setLightbox] = useState<number | null>(null);
  const [radius, setRadius] = useState(600);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Responsive radius
  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 380 : 600);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // IntersectionObserver
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

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") setLightbox((prev) => prev !== null ? (prev - 1 + items.length) % items.length : null);
      if (e.key === "ArrowRight") setLightbox((prev) => prev !== null ? (prev + 1) % items.length : null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, items.length]);

  // Body scroll lock
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const openLightbox = useCallback((index: number) => setLightbox(index), []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden md:min-h-screen"
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
        <CircularGallery
          items={items}
          radius={radius}
          autoRotateSpeed={-0.035}
          isActive={isActive}
          className="relative z-10 w-full max-w-5xl mx-auto h-[340px] sm:h-[420px] md:h-[480px]"
          onItemClick={openLightbox}
        />

        {/* Instruction text */}
        <div className="text-center mt-2 md:mt-16 relative z-40">
          <p className="text-white/40 text-xs md:text-sm tracking-wide">
            Auto-rotates · Swipe left or right to explore · Tap any photo to view
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

      {/* Lightbox - 14ER style */}
      {lightbox !== null && (() => {
        const item = items[lightbox];
        if (!item) return null;
        return (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + items.length) % items.length); }}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % items.length); }}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image */}
            <div
              className="relative max-w-4xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={item.photo.url}
                alt={item.photo.text}
                className="w-full h-full max-h-[85vh] object-contain rounded-lg"
              />
              {/* Info bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg">{item.common}</h3>
                    <p className="text-white/70 text-sm">{item.binomial}</p>
                  </div>
                  <span className="text-white/50 text-sm">{lightbox + 1} / {items.length}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
