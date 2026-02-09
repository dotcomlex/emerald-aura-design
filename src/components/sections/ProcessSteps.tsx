import { MessageSquare, FileText, PaintBucket, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  { icon: MessageSquare, step: "01", title: "Free Consultation", desc: "Tell us about your project and we'll visit your home for a free assessment." },
  { icon: FileText, step: "02", title: "Detailed Quote", desc: "Receive a transparent, no-surprise estimate within 24 hours." },
  { icon: PaintBucket, step: "03", title: "Expert Painting", desc: "Our skilled team transforms your space with precision and care." },
  { icon: CheckCircle2, step: "04", title: "Final Walkthrough", desc: "We review every detail together to ensure your complete satisfaction." },
];

export function ProcessSteps() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <SectionHeader
          eyebrow="How It Works"
          title="Simple, Seamless Process"
          subtitle="From first call to final walkthrough, we make it easy."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <AnimatedSection key={step} delay={i * 0.1}>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-emerald-500 text-white mb-4 mx-auto">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-eyebrow text-emerald-600 block mb-1">{step}</span>
                <h3 className="font-heading font-semibold text-charcoal mb-2">{title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-emerald-200" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
