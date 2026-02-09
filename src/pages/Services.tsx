import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";
import { Home, Building, Trees, Layers, Building2, Wrench, Palette, Paintbrush } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Home, Building, Trees, Layers, Building2, Wrench, Palette, Paintbrush,
};

const Services = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="container-max px-6 text-center">
            <span className="text-eyebrow text-emerald-400 block mb-4">Our Services</span>
            <h1 className="text-hero-mobile lg:text-hero-desktop text-white font-heading">
              What We <span className="text-emerald-400">Offer</span>
            </h1>
            <p className="mt-4 text-charcoal-300 text-lg max-w-xl mx-auto">
              Comprehensive painting solutions for every project, big or small.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="section-padding bg-cream">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {SERVICES.map((service, i) => {
                const Icon = iconMap[service.icon] || Home;
                return (
                  <AnimatedSection key={service.id} delay={i * 0.05}>
                    <div className="p-8 rounded-2xl bg-white shadow-soft hover:shadow-elevated transition-all">
                      <div className="h-14 w-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                        <Icon className="h-7 w-7 text-emerald-600" />
                      </div>
                      <h2 className="font-heading font-bold text-xl text-charcoal mb-3">{service.name}</h2>
                      <p className="text-charcoal-500 leading-relaxed">{service.shortDescription}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-charcoal text-center">
          <div className="container-max">
            <SectionHeader
              eyebrow="Get Started"
              title="Ready for a Transformation?"
              subtitle="Contact us today for a free, no-obligation consultation and quote."
              light
            />
            <Link
              to="/contact"
              className="inline-block bg-emerald-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-colors shadow-glow-emerald"
            >
              Get a Free Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Services;
