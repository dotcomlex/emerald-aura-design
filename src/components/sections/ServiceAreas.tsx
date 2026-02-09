import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreas() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader
          eyebrow="Coverage Area"
          title="Proudly Serving the Denver Metro"
          subtitle="From downtown Denver to the surrounding suburbs, we bring premium painting to your doorstep."
        />
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-50 border border-gray-200"
              >
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span className="text-charcoal-700 font-medium text-sm">{area}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
