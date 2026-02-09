import { Shield, Sparkles, Leaf, Clock, ThumbsUp, Award } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const differentiators = [
  { icon: Shield, title: "Licensed & Insured", desc: "Full coverage for your peace of mind on every project." },
  { icon: Sparkles, title: "Premium Materials", desc: "We use top-tier paints and finishes from trusted brands." },
  { icon: Leaf, title: "Clean Job Sites", desc: "We leave your home spotless — every single time." },
  { icon: Clock, title: "On-Time Completion", desc: "We respect your schedule and deliver on our promises." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We're not done until you're absolutely thrilled." },
  { icon: Award, title: "15+ Years Experience", desc: "Decades of craftsmanship you can trust." },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-max">
        <SectionHeader
          eyebrow="Why Emerald Paints"
          title="The Difference Is in the Details"
          subtitle="We hold ourselves to a higher standard because your home deserves nothing less."
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map(({ icon: Icon, title, desc }, i) => (
            <AnimatedSection key={title} delay={i * 0.06}>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <Icon className="h-8 w-8 text-emerald-400 mb-4" />
                <h3 className="font-heading font-semibold text-white mb-2">{title}</h3>
                <p className="text-charcoal-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
