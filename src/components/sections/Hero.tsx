import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Shield, Award, CheckCircle } from "lucide-react";
import { heroSequence } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-charcoal overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-900 to-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="relative container-max w-full px-6 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          <motion.span
            variants={heroSequence.eyebrow}
            initial="hidden"
            animate="visible"
            className="text-eyebrow text-emerald-400 block mb-4"
          >
            Denver&apos;s Most Trusted Painting Company
          </motion.span>

          <motion.h1
            variants={heroSequence.headline}
            initial="hidden"
            animate="visible"
            className="text-hero-mobile lg:text-hero-desktop text-white font-heading"
          >
            Premium Painting
            <br />
            <span className="text-emerald-400">Professionals</span>
          </motion.h1>

          <motion.p
            variants={heroSequence.subheadline}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg lg:text-xl text-charcoal-300 max-w-xl leading-relaxed"
          >
            Transforming Denver homes with flawless finishes, premium materials, and meticulous attention to detail. Your vision, our expertise.
          </motion.p>

          <motion.div
            variants={heroSequence.buttons}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl font-semibold text-lg text-center hover:bg-emerald-600 transition-colors shadow-glow-emerald"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/services"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg text-center hover:border-white hover:bg-white/5 transition-all"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            variants={heroSequence.badges}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap gap-6"
          >
            {[
              { icon: Award, label: `${COMPANY.yearsExperience}+ Years Experience` },
              { icon: CheckCircle, label: `${COMPANY.projectsCompleted}+ Projects` },
              { icon: Star, label: "5-Star Rated" },
              { icon: Shield, label: "Licensed & Insured" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-charcoal-300">
                <Icon className="h-5 w-5 text-emerald-400" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
