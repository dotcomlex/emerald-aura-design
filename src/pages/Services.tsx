import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import heroServices from "@/assets/images/hero-services.jpg";
import serviceInterior from "@/assets/images/service-interior.jpg";
import serviceExterior from "@/assets/images/service-exterior.jpg";
import serviceStaining from "@/assets/images/service-staining.jpg";
import serviceVinyl from "@/assets/images/service-vinyl.jpg";
import serviceCommercial from "@/assets/images/service-commercial.jpg";
import serviceTouchups from "@/assets/images/service-touchups.jpg";
import serviceCustom from "@/assets/images/service-custom.jpg";
import serviceConsultation from "@/assets/images/service-consultation.jpg";
import painterInterior from "@/assets/images/painter-interior.jpg";
import {
  Home, Building, Trees, Layers, Building2, Wrench, Palette, Paintbrush,
  Shield, Users, Sparkles, Calendar, ClipboardList, CheckCircle, ChevronRight, Plus, Phone,
} from "lucide-react";
import { SERVICES_DETAILED, SERVICE_FAQS, PAINT_BRANDS, COMPANY } from "@/lib/constants";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const iconMap: Record<string, React.ElementType> = {
  Home, Building, Trees, Layers, Building2, Wrench, Palette, Paintbrush,
};

const serviceImageMap: Record<string, string> = {
  "interior": serviceInterior,
  "exterior": serviceExterior,
  "staining": serviceStaining,
  "vinyl": serviceVinyl,
  "commercial": serviceCommercial,
  "repairs": serviceTouchups,
  "custom": serviceCustom,
  "color": serviceConsultation,
};

const qualityPoints = [
  { icon: Shield, title: "Thorough Preparation", desc: "We properly prep every surface — cleaning, sanding, priming, and repairing — because a great finish starts with a great foundation." },
  { icon: Palette, title: "Premium Materials", desc: "We use only top-quality paints, primers, and coatings from trusted brands for durability and beauty that lasts." },
  { icon: Users, title: "Expert Craftsmanship", desc: "Our experienced team brings skill and attention to detail to every project, large or small." },
  { icon: Home, title: "Complete Protection", desc: "We carefully protect your furniture, floors, landscaping, and belongings throughout the project." },
  { icon: Sparkles, title: "Spotless Cleanup", desc: "We leave your home cleaner than we found it. No mess, no hassle — just beautiful results." },
];

const processSteps = [
  { num: 1, icon: Calendar, title: "Free Consultation", desc: "Schedule your free on-site estimate." },
  { num: 2, icon: ClipboardList, title: "Detailed Proposal", desc: "Receive a clear, itemized quote." },
  { num: 3, icon: Paintbrush, title: "Expert Execution", desc: "We complete your project with precision." },
  { num: 4, icon: CheckCircle, title: "Final Walkthrough", desc: "We ensure your complete satisfaction." },
];

const Services = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* ── Section 1: Services Hero ── */}
        <section className="relative h-[50vh] min-h-[400px] max-h-[500px] lg:h-[60vh] lg:max-h-[600px] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0d1f3c 50%, #047857 100%)" }} />
          <img src={heroServices} alt="Professional painter working on interior wall" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70" />
          <div className="relative z-10 text-center px-6 pt-20">
            <AnimatedSection>
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mx-auto shadow-[0_4px_20px_rgba(16,185,129,0.4)]">
                <Paintbrush className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl lg:text-[56px] font-heading font-bold text-white mt-5 leading-tight">
                Our Services
              </h1>
              <p className="text-white/85 text-base lg:text-lg max-w-[300px] lg:max-w-[500px] mx-auto mt-3">
                Expert craftsmanship for every surface, inside and out.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ── Section 2: Services Grid ── */}
        <section className="bg-white py-12 lg:py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-500">What We Offer</span>
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-charcoal mt-3">Complete Painting Solutions</h2>
                <p className="text-charcoal-500 text-base mt-4 max-w-xs lg:max-w-lg mx-auto">
                  From single rooms to complete home transformations, we have you covered.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {SERVICES_DETAILED.map((service, i) => {
                const Icon = iconMap[service.icon] || Home;
                return (
                  <AnimatedSection key={service.id} delay={i * 0.05}>
                    <div className="group rounded-[20px] border border-charcoal-200 overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-emerald-200 transition-all duration-300">
                      {/* Image placeholder */}
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img src={serviceImageMap[service.id] || ""} alt={service.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        {/* Overlapping icon badge */}
                        <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl bg-emerald-500 border-4 border-white shadow-[0_4px_12px_rgba(16,185,129,0.3)] flex items-center justify-center z-10">
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      {/* Content */}
                      <div className="relative pt-10 px-6 pb-6">
                        <h3 className="font-heading font-semibold text-xl text-charcoal">{service.name}</h3>
                        <p className="text-charcoal-500 text-[15px] leading-relaxed mt-3">{service.description}</p>
                        <ul className="flex flex-col gap-2 mt-4">
                          {service.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-charcoal-600 text-sm">
                              <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 text-emerald-500 font-semibold text-[15px] mt-5 hover:gap-2 hover:text-emerald-600 transition-all"
                        >
                          Get a Quote <ChevronRight className="h-[18px] w-[18px]" />
                        </Link>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Section 3: Quality Commitment ── */}
        <section className="bg-emerald-50 py-16 lg:py-24 px-6">
          <div className="max-w-[1200px] mx-auto lg:grid lg:grid-cols-[45%_55%] lg:gap-16 lg:items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
                <img src={painterInterior} alt="Professional painter at work" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>

            <div className="mt-8 lg:mt-0">
              <AnimatedSection delay={0.1}>
                <span className="inline-block bg-white text-emerald-600 text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded-full">
                  Our Commitment
                </span>
                <h2 className="text-3xl lg:text-[40px] font-heading font-bold text-charcoal mt-4 leading-tight">
                  Quality in Every Detail
                </h2>
                <p className="text-charcoal-500 text-base leading-relaxed mt-4">
                  At Emerald Paints, we believe that exceptional results come from exceptional processes. That's why we never cut corners — from thorough surface preparation to premium materials and meticulous cleanup.
                </p>
              </AnimatedSection>

              <div className="flex flex-col gap-4 mt-7">
                {qualityPoints.map((pt, i) => (
                  <AnimatedSection key={pt.title} delay={0.15 + i * 0.05}>
                    <div className="flex gap-4 bg-white p-5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <pt.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-charcoal">{pt.title}</h4>
                        <p className="text-charcoal-500 text-sm mt-1">{pt.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 4: Materials & Brands ── */}
        <section className="bg-white py-12 lg:py-16 px-6">
          <div className="max-w-[1200px] mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-charcoal">Premium Products for Premium Results</h2>
              <p className="text-charcoal-500 text-[15px] mt-3">We partner with industry-leading brands to ensure lasting quality.</p>
            </AnimatedSection>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mt-8">
              {PAINT_BRANDS.map((brand) => (
                <AnimatedSection key={brand}>
                  <span className="text-lg lg:text-xl font-bold text-charcoal-400 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-emerald-600 transition-all duration-300 cursor-default select-none">
                    {brand}
                  </span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: Process Recap ── */}
        <section className="bg-charcoal py-16 lg:py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Our Process</span>
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mt-3">How We Work</h2>
                <p className="text-white/60 text-base mt-4">A simple, stress-free process from estimate to completion.</p>
              </div>
            </AnimatedSection>

            {/* Mobile: horizontal scroll */}
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 mt-10 lg:hidden scrollbar-hide">
              {processSteps.map((s) => (
                <div key={s.num} className="min-w-[280px] flex-shrink-0 snap-start bg-charcoal-700 rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg mx-auto">
                    {s.num}
                  </div>
                  <s.icon className="h-6 w-6 text-emerald-400 mx-auto mt-4" />
                  <h3 className="font-heading font-semibold text-white text-lg mt-3">{s.title}</h3>
                  <p className="text-white/60 text-sm mt-2">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Desktop: 4-col grid */}
            <div className="hidden lg:grid grid-cols-4 gap-6 mt-10">
              {processSteps.map((s, i) => (
                <AnimatedSection key={s.num} delay={i * 0.1}>
                  <div className="bg-charcoal-700 rounded-2xl p-6 text-center min-h-[220px]">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg mx-auto">
                      {s.num}
                    </div>
                    <s.icon className="h-6 w-6 text-emerald-400 mx-auto mt-4" />
                    <h3 className="font-heading font-semibold text-white text-lg mt-3">{s.title}</h3>
                    <p className="text-white/60 text-sm mt-2">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 6: FAQ ── */}
        <section className="bg-cream py-16 lg:py-24 px-6">
          <div className="max-w-[800px] mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <h2 className="text-3xl lg:text-5xl font-heading font-bold text-charcoal">Common Questions</h2>
                <p className="text-charcoal-500 text-base mt-3">Everything you need to know about working with us.</p>
              </div>
            </AnimatedSection>

            <Accordion type="single" collapsible className="mt-10 space-y-3">
              {SERVICE_FAQS.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.03}>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.04)] border-none overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left font-medium text-charcoal hover:no-underline [&>svg]:text-emerald-500">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-charcoal-500 text-[15px] leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </AnimatedSection>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Section 7: CTA ── */}
        <section className="bg-emerald-500 py-16 lg:py-24 px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white">Ready to Get Started?</h2>
            <p className="text-white/90 text-base max-w-[400px] mx-auto mt-4">
              Contact us today for your free, no-obligation estimate.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-emerald-600 font-semibold text-base px-8 py-4 rounded-xl mt-6 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-gray-50 hover:shadow-lg transition-all"
            >
              Get Your Free Estimate
            </Link>
            <a href={COMPANY.phoneLink} className="block text-white text-[15px] mt-4 hover:underline">
              Or call {COMPANY.phone}
            </a>
            <p className="text-white/70 text-[13px] mt-6">
              Licensed &amp; Insured • {COMPANY.yearsExperience}+ Years Experience • Denver's Trusted Choice
            </p>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Services;
