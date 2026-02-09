import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.1),transparent_60%)]" />
      <div className="container-max relative text-center">
        <AnimatedSection>
          <span className="text-eyebrow text-emerald-400 block mb-4">Ready to Transform Your Home?</span>
          <h2 className="text-section-mobile lg:text-section-desktop text-white font-heading mb-6">
            Let&apos;s Make It{" "}
            <span className="text-emerald-400">Beautiful</span>
          </h2>
          <p className="text-charcoal-300 text-lg max-w-xl mx-auto mb-8">
            Get a free, no-obligation quote from Denver&apos;s most trusted painting professionals. We&apos;ll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-colors shadow-glow-emerald"
            >
              Get Your Free Quote
            </Link>
            <a
              href={COMPANY.phoneLink}
              className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:border-white hover:bg-white/5 transition-all"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
