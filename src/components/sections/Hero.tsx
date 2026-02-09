import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Shield, MapPin, ChevronDown } from "lucide-react";
import { heroSequence } from "@/lib/animations";
import heroHomepage from "@/assets/images/hero-homepage.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden" style={{ minHeight: "700px" }}>
      {/* Background image with gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0d1f3c] to-[#0f172a]" />
      <img src={heroHomepage} alt="Professional exterior house painting in Denver, Colorado" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/40 lg:to-black/20" />

      <div className="relative z-10 container-max w-full px-6 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
          <motion.span
            variants={heroSequence.eyebrow}
            initial="hidden"
            animate="visible"
            className="text-eyebrow text-emerald-400 block mb-4"
          >
            Denver&apos;s Trusted Painting Professionals
          </motion.span>

          <motion.h1
            variants={heroSequence.headline}
            initial="hidden"
            animate="visible"
            className="text-hero-mobile lg:text-hero-desktop text-white font-heading"
          >
            Flawless Finishes.
            <br />
            <span className="text-emerald-400">Lasting Impressions.</span>
          </motion.h1>

          <motion.p
            variants={heroSequence.subheadline}
            initial="hidden"
            animate="visible"
            className="mt-6 text-base lg:text-xl text-white/85 max-w-md lg:max-w-xl leading-relaxed mx-auto lg:mx-0"
          >
            Transform your home with expert craftsmanship, premium materials, and a team that treats your property like our own.
          </motion.p>

          <motion.div
            variants={heroSequence.buttons}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xs sm:max-w-none mx-auto lg:mx-0"
          >
            <Link
              to="/contact"
              className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg text-center hover:bg-emerald-800 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-glow-emerald w-full sm:w-auto"
            >
              Get Your Free Estimate
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-medium text-lg text-center hover:border-white hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            variants={heroSequence.badges}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {[
              { icon: Star, label: "5.0 Rating", iconClass: "text-gold" },
              { icon: Shield, label: "Licensed & Insured", iconClass: "text-emerald-400" },
              { icon: MapPin, label: "Locally Owned", iconClass: "text-emerald-400" },
            ].map(({ icon: Icon, label, iconClass }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-xs font-medium text-white bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full"
              >
                <Icon className={`h-4 w-4 ${iconClass}`} />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="h-6 w-6 text-white/50 animate-bounce" />
      </motion.div>
    </section>
  );
}
