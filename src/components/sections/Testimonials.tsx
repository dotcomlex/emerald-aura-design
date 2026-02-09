import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((c) => (c + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-[#0f172a]">
      <div className="container-max">
        <SectionHeader
          eyebrow="Client Reviews"
          title="What Our Clients Say"
          subtitle="Real reviews from homeowners across the Denver metro."
          light
        />
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white text-lg md:text-xl leading-relaxed mt-6 font-light">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-white/10 my-6" />

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                    {current.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">{current.name}</p>
                    <p className="text-white/50 text-sm">{current.project} • {current.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Name-based selector buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    i === active
                      ? "bg-emerald-600 text-white shadow-lg"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  <p className="text-sm font-semibold">{t.name.split(" ")[0]}</p>
                  <p className="text-xs opacity-70">{t.location.split(",")[0]}</p>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
