import { Calendar, ClipboardList, Paintbrush, CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  { num: 1, icon: Calendar, title: "Free Consultation", desc: "Schedule your free on-site estimate. We'll assess your project and discuss your vision." },
  { num: 2, icon: ClipboardList, title: "Detailed Proposal", desc: "Receive a clear, itemized quote with no hidden fees or surprises." },
  { num: 3, icon: Paintbrush, title: "Expert Execution", desc: "Our skilled team completes your project with precision and care." },
  { num: 4, icon: CheckCircle, title: "Final Walkthrough", desc: "We inspect every detail together to ensure your complete satisfaction." },
];

export function ProcessSteps() {
  return (
    <section className="section-padding bg-[#fafafa]">
      <div className="container-max">
        <SectionHeader
          eyebrow="Our Process"
          title="Simple Steps to Your Dream Home"
          subtitle="We make the painting process easy, transparent, and stress-free."
        />

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative mt-12 pl-10">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gray-200" />
          <div className="flex flex-col gap-8">
            {steps.map(({ num, icon: Icon, title, desc }) => (
              <AnimatedSection key={num} delay={num * 0.1}>
                <div className="relative flex gap-4">
                  <div className="absolute -left-10 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg flex-shrink-0 z-10">
                    {num}
                  </div>
                  <div className="ml-6">
                    <h3 className="font-heading font-semibold text-charcoal text-lg">{title}</h3>
                    <Icon className="h-5 w-5 text-emerald-500 mt-2" />
                    <p className="text-charcoal-500 text-[15px] leading-relaxed mt-2">{desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:block mt-12">
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-6 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gray-200" />
            <div className="grid grid-cols-4 gap-8">
              {steps.map(({ num, icon: Icon, title, desc }) => (
                <AnimatedSection key={num} delay={num * 0.1}>
                  <div className="text-center bg-white rounded-2xl p-6 shadow-soft relative z-10">
                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg mx-auto">
                      {num}
                    </div>
                    <h3 className="font-heading font-semibold text-charcoal mt-4">{title}</h3>
                    <Icon className="h-5 w-5 text-emerald-500 mx-auto mt-2" />
                    <p className="text-charcoal-500 text-sm leading-relaxed mt-2">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
