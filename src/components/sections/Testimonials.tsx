import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = TESTIMONIALS[current];

  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Real reviews from homeowners across the Denver metro."
        />
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
                <p className="text-charcoal-700 text-lg leading-relaxed italic">"{t.quote}"</p>
                <div className="flex justify-center gap-1 mt-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="mt-3 font-heading font-semibold text-charcoal">{t.name}</p>
                <p className="text-charcoal-500 text-sm">{t.project} • {t.location}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                className="p-3 rounded-full bg-white shadow-card hover:shadow-elevated transition-shadow"
              >
                <ChevronLeft className="h-5 w-5 text-charcoal" />
              </button>
              <button
                onClick={() => setCurrent((c) => (c + 1) % TESTIMONIALS.length)}
                className="p-3 rounded-full bg-white shadow-card hover:shadow-elevated transition-shadow"
              >
                <ChevronRight className="h-5 w-5 text-charcoal" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
