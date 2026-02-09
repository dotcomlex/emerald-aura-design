import { Link } from "react-router-dom";
import { Home, Building, Palette, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import serviceInterior from "@/assets/images/service-interior.jpg";
import serviceExterior from "@/assets/images/service-exterior.jpg";
import serviceStaining from "@/assets/images/service-staining.jpg";

const featured = [
  {
    icon: Home,
    title: "Interior Painting",
    desc: "Transform any room with smooth, flawless finishes and expert color matching.",
    image: serviceInterior,
  },
  {
    icon: Building,
    title: "Exterior Painting",
    desc: "Boost curb appeal and protect your home with weather-resistant coatings.",
    image: serviceExterior,
  },
  {
    icon: Palette,
    title: "Staining & Specialty",
    desc: "Decks, fences, cabinets, and custom finishes tailored to your vision.",
    image: serviceStaining,
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader
          eyebrow="What We Do"
          title="Comprehensive Painting Solutions"
          subtitle="From interior refreshes to complete exterior transformations, we deliver premium results on every project."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map(({ icon: Icon, title, desc, image }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-charcoal text-lg">{title}</h3>
                  </div>
                  <p className="text-charcoal-500 text-[15px] leading-relaxed">{desc}</p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-1 text-emerald-500 font-medium text-[15px] group-hover:gap-2 transition-all"
                  >
                    Learn More <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-charcoal-500 mb-4">Need commercial painting or a custom project?</p>
            <Link
              to="/services"
              className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
