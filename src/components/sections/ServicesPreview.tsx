import { Link } from "react-router-dom";
import { Paintbrush, Home, Package, Droplets, Palette, RotateCcw } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const mainServices = [
  {
    icon: Paintbrush,
    title: "Interior Painting",
    badge: "Most Popular",
    badgeColor: "bg-orange-500",
    iconGradient: "from-orange-500 to-orange-600",
    iconShadow: "shadow-orange-500/25",
    hoverBorder: "hover:border-orange-200",
    hoverTitle: "group-hover:text-orange-600",
    desc: "Transform your living spaces with professional interior painting. Premium materials and flawless finish quality guaranteed.",
    features: [
      "Free color consultation",
      "Premium Sherwin-Williams paints",
      "Clean, professional finish",
      "2-year workmanship warranty",
    ],
  },
  {
    icon: Home,
    title: "Exterior Painting",
    badge: "Best Value",
    badgeColor: "bg-blue-500",
    iconGradient: "from-blue-500 to-blue-600",
    iconShadow: "shadow-blue-500/25",
    hoverBorder: "hover:border-blue-200",
    hoverTitle: "group-hover:text-blue-600",
    desc: "Protect and beautify your home's exterior with weather-resistant, high-quality paint systems designed for Colorado's climate.",
    features: [
      "Weather-resistant coatings",
      "Complete surface preparation",
      "10-year paint warranty",
      "Free pressure washing",
    ],
  },
  {
    icon: Package,
    title: "Cabinet Refinishing",
    badge: "Specialty",
    badgeColor: "bg-purple-500",
    iconGradient: "from-purple-500 to-purple-600",
    iconShadow: "shadow-purple-500/25",
    hoverBorder: "hover:border-purple-200",
    hoverTitle: "group-hover:text-purple-600",
    desc: "Transform your kitchen with professional cabinet refinishing. A cost-effective alternative to replacement with stunning results.",
    features: [
      "Save 70% vs replacement",
      "Factory-quality finish",
      "Completed in 3-5 days",
      "Hardware upgrade included",
    ],
  },
];

const additionalServices = [
  {
    icon: Droplets,
    title: "Pressure Washing",
    desc: "Complete exterior cleaning",
    color: "bg-emerald-500",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    desc: "Professional color selection",
    color: "bg-amber-500",
  },
  {
    icon: RotateCcw,
    title: "Commercial Painting",
    desc: "Office and retail spaces",
    color: "bg-indigo-500",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-orange-500 font-semibold text-sm tracking-widest uppercase mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-heading">
              Complete Painting Solutions
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Professional painting services with premium materials, expert craftsmanship, and guaranteed satisfaction across Colorado.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mainServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 ${service.hoverBorder} hover:-translate-y-2 relative overflow-hidden h-full flex flex-col`}>
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 ${service.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {service.badge}
                  </div>

                  {/* Icon Container */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${service.iconShadow} flex-shrink-0`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold text-slate-900 mb-3 ${service.hoverTitle} transition-colors font-heading`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Feature List */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/services"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-center block mt-auto"
                  >
                    Learn More
                  </Link>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Additional Services */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {additionalServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{service.title}</h4>
                  <p className="text-slate-600 text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
