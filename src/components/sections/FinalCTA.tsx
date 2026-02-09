import { Link } from "react-router-dom";
import { MessageCircle, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/lib/constants";
import ctaSkyline from "@/assets/images/cta-denver-skyline.jpg";

export function FinalCTA() {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-navy to-charcoal-900" />
      <img src={ctaSkyline} alt="Denver skyline at golden hour" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 container-max text-center px-6 py-12">
        <AnimatedSection>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-[13px] font-semibold">
            <MessageCircle className="h-4 w-4" />
            Let&apos;s Talk
          </div>

          <h2 className="text-section-mobile lg:text-section-desktop text-white font-heading mt-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-white/85 text-base lg:text-lg max-w-lg mx-auto mt-4">
            Schedule your free estimate today and discover why Denver homeowners trust Emerald Paints.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all hover:gap-3 shadow-glow-orange mt-8"
          >
            Get Your Free Estimate <ChevronRight className="h-5 w-5" />
          </Link>

          <p className="text-white/50 text-[13px] mt-6">
            Licensed &amp; Insured • {COMPANY.yearsExperience}+ Years Experience • {COMPANY.projectsCompleted}+ Projects
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
