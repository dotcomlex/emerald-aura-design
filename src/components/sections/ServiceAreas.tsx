import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreas() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeader
          eyebrow="Coverage Area"
          title="Serving the Denver Metro"
          subtitle="From Boulder to Centennial, we bring premium painting to your doorstep."
        />
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 text-charcoal font-medium text-sm border border-emerald-100 hover:bg-emerald-100 transition-colors"
              >
                <MapPin className="h-4 w-4 text-emerald-500" />
                {area}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
