import { Shield, Paintbrush, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/lib/constants";
import painterInterior from "@/assets/images/painter-interior.jpg";

const proofPoints = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Fully licensed, bonded, and insured for your complete peace of mind.",
  },
  {
    icon: Paintbrush,
    title: "Premium Materials",
    desc: "We use only top-tier paints and coatings for lasting, beautiful results.",
  },
  {
    icon: Sparkles,
    title: "Clean, Professional Work",
    desc: "Meticulous prep, protection, and cleanup on every project.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated bg-gradient-to-br from-emerald-600 to-charcoal">
              <img src={painterInterior} alt="Professional painter at work" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              {/* Floating badge */}
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-glow-emerald">
                {COMPANY.yearsExperience}+ Years Experience
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.15}>
            <span className="inline-block bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
              Why Homeowners Trust Us
            </span>
            <h2 className="text-section-mobile lg:text-section-desktop text-charcoal font-heading mt-4">
              Quality Craftsmanship, Every Time
            </h2>
            <p className="text-charcoal-500 text-base leading-relaxed mt-4">
              We&apos;re not just painters — we&apos;re craftsmen committed to transforming your home with precision, professionalism, and pride in every brushstroke.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              {proofPoints.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-charcoal-50 border border-charcoal-200">
                  <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal">{title}</h3>
                    <p className="text-charcoal-500 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
