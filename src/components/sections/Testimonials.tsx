import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = TESTIMONIALS[current];

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-charcoal">
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
                key={t.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border-l-4 border-emerald-500 rounded-xl p-6 md:p-8"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white text-base md:text-lg leading-relaxed italic mt-4">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="h-px bg-white/10 my-5" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-white/60 text-sm">{t.project} • {t.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "w-3 h-3 bg-emerald-500"
                      : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
