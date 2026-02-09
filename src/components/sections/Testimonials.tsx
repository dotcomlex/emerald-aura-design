import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const featuredTestimonials = [
  {
    quote: "Emerald Paints completely transformed our home. The attention to detail was incredible, and they finished exactly on schedule. Our neighbors keep asking who did the work!",
    name: "Sarah Johnson",
    location: "Denver, CO",
    project: "Kitchen & Living Room Remodel",
  },
  {
    quote: "Professional team from start to finish. They exceeded our expectations and delivered results that we're proud to show off to friends and family.",
    name: "Michael Chen",
    location: "Boulder, CO",
    project: "Exterior House Painting",
  },
  {
    quote: "Best investment we made in our home. The cabinet refinishing looks incredible and saved us thousands compared to replacement.",
    name: "Lisa Rodriguez",
    location: "Lakewood, CO",
    project: "Kitchen Cabinet Refinishing",
  },
];

const secondaryTestimonials = [
  {
    quote: "Professional crew, clean work site, and beautiful results. Best painting contractor we've worked with. Highly recommend!",
    name: "Mike Rodriguez",
    location: "Boulder, CO",
    project: "Exterior Paint",
    timeAgo: "2 weeks ago",
  },
  {
    quote: "Cabinet refinishing exceeded our expectations. Looks like a brand new kitchen at a fraction of the cost!",
    name: "Jennifer Chen",
    location: "Lakewood, CO",
    project: "Kitchen Cabinets",
    timeAgo: "1 month ago",
  },
  {
    quote: "Outstanding work from start to finish. Professional, punctual, and the results speak for themselves.",
    name: "David Thompson",
    location: "Aurora, CO",
    project: "Whole House",
    timeAgo: "3 weeks ago",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "5.0", label: "Average Rating" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

function Stars({ size = 6 }: { size?: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-${size} h-${size} text-amber-400 fill-current`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % featuredTestimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = featuredTestimonials[active];

  return (
    <section className="bg-slate-900 py-16 md:py-24 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-heading">
              What Our Clients Say
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Real results and genuine feedback from homeowners across Colorado
            </p>
          </div>
        </AnimatedSection>

        {/* Magazine Layout */}
        <AnimatedSection delay={0.1}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Featured Testimonial - 8 cols */}
              <div className="lg:col-span-8">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/20 relative overflow-hidden h-full">
                  {/* Decorative quote */}
                  <div className="absolute top-6 right-6 text-slate-100 opacity-50">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 106.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1017.5 10z" />
                    </svg>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10"
                    >
                      {/* Stars */}
                      <div className="flex items-center mb-8">
                        <Stars size={6} />
                        <span className="ml-3 text-2xl font-bold text-slate-800">5.0</span>
                      </div>

                      {/* Quote */}
                      <blockquote className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed mb-10 italic">
                        "{current.quote}"
                      </blockquote>

                      {/* Client */}
                      <div className="flex items-center">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-2xl ring-4 ring-orange-100">
                            {current.name.charAt(0)}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-xl font-bold text-slate-900">{current.name}</div>
                          <div className="text-slate-600">{current.location}</div>
                          <div className="text-sm text-slate-500 flex items-center mt-1">
                            <svg className="w-4 h-4 mr-1 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                            </svg>
                            {current.project}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Dots indicator */}
                  <div className="flex gap-2 mt-8">
                    {featuredTestimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-orange-500" : "w-4 bg-slate-200"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Secondary Sidebar - 4 cols */}
              <div className="lg:col-span-4 space-y-6">
                {secondaryTestimonials.map((t) => (
                  <div key={t.name} className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className="flex items-center mb-4">
                      <Stars size={4} />
                      <span className="ml-2 text-slate-400 text-sm">{t.timeAgo}</span>
                    </div>
                    <p className="text-slate-200 text-sm mb-6 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-semibold text-sm mr-3">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{t.name}</div>
                        <div className="text-slate-400 text-xs">{t.location} · {t.project}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Row */}
        <AnimatedSection delay={0.2}>
          <div className="mt-20 pt-16 border-t border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{s.value}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
