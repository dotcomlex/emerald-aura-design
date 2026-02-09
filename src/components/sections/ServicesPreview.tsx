import { Link } from "react-router-dom";
import { Home, Building, Trees, Layers, Building2, Wrench, Palette, Paintbrush } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Home, Building, Trees, Layers, Building2, Wrench, Palette, Paintbrush,
};

export function ServicesPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <SectionHeader
          eyebrow="What We Do"
          title="Our Services"
          subtitle="From interior refreshes to full exterior transformations, we deliver premium results on every project."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <AnimatedSection key={service.id} delay={i * 0.05}>
                <Link
                  to="/services"
                  className="group block p-6 rounded-2xl bg-white shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                    <Icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading font-semibold text-charcoal mb-2">{service.name}</h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed">{service.shortDescription}</p>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
