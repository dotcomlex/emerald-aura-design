import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Link } from "react-router-dom";
import heroAbout from "@/assets/images/hero-about.jpg";
import ownerPortrait from "@/assets/images/owner-portrait.jpg";
import {
  Users, Gem, MessageCircle, Heart, ThumbsUp, Star,
  BadgeCheck, Shield, Lock, MapPin, Phone,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";

const values = [
  { icon: Gem, title: "Quality First", desc: "We never cut corners. From prep to final coat, we do things the right way — because your home deserves our best work." },
  { icon: MessageCircle, title: "Honest Communication", desc: "Clear pricing, realistic timelines, and no surprises. We keep you informed every step of the way." },
  { icon: Heart, title: "Respect for Your Home", desc: "We treat your property like it's our own — protecting your belongings, respecting your space, and leaving it spotless." },
  { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Your happiness is our measure of success. We're not done until you're thrilled with the results." },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "5.0", label: "Star Rating", hasStar: true },
];

const credentials = [
  { icon: BadgeCheck, label: "Licensed Contractor" },
  { icon: Shield, label: "Fully Insured" },
  { icon: Lock, label: "Bonded" },
  { icon: MapPin, label: "Local & Established" },
];

const About = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Section 1 - Hero */}
        <section
          className="relative overflow-hidden flex items-center justify-center text-center"
          style={{
            height: "45vh",
            minHeight: 350,
            maxHeight: 450,
            background: "linear-gradient(135deg, #0f172a 0%, #0d1f3c 100%)",
          }}
        >
          <img src={heroAbout} alt="Emerald Paints team working together" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
          <div className="relative z-10 px-6 pt-20 pb-10 flex flex-col items-center lg:pt-0" style={{ maxWidth: 600 }}>
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
              <Users className="h-7 w-7 text-emerald-500" />
            </div>
            <h1 className="mt-5 text-4xl lg:text-[56px] font-bold font-heading text-white leading-tight">
              About Emerald Paints
            </h1>
            <p className="mt-3 text-white/85 text-base lg:text-lg leading-relaxed max-w-[340px] lg:max-w-[500px]">
              A local team committed to transforming Colorado homes with quality, integrity, and care.
            </p>
          </div>
        </section>

        {/* Section 2 - Our Story */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-max px-6">
            <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start">
              {/* Image */}
              <AnimatedSection className="lg:w-[40%] flex-shrink-0">
                <div className="w-full rounded-[20px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.12)]" style={{ aspectRatio: "4/3" }}>
                  <img src={ownerPortrait} alt="Miguel, Founder & Lead Painter" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="text-center text-charcoal-500 text-sm italic mt-3">
                  Miguel, Founder &amp; Lead Painter
                </p>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection delay={0.15} className="mt-8 lg:mt-0 lg:w-[60%]">
                <span className="text-emerald-500 text-xs font-semibold uppercase tracking-widest">OUR STORY</span>
                <h2 className="mt-3 text-[28px] lg:text-[40px] font-bold font-heading text-charcoal leading-tight">
                  Built on Craftsmanship, Driven by Pride
                </h2>
                <div className="mt-6 space-y-4 text-charcoal-500 text-base leading-[1.7]">
                  <p>Emerald Paints started with a simple belief: every home deserves a paint job done right the first time. What began as a one-man operation has grown into a trusted team of skilled professionals serving homeowners across the Denver metro area.</p>
                  <p>Our founder, Miguel, brings over {COMPANY.yearsExperience} years of experience in the painting industry. After working with several contractors and seeing how often quality was sacrificed for speed, he decided to build something different — a company where craftsmanship, honesty, and customer satisfaction come first.</p>
                  <p>Today, Emerald Paints is proud to be one of Denver's most trusted painting contractors. We've painted hundreds of homes and businesses across the Front Range, building lasting relationships with clients who return to us again and again — and refer us to their friends and family.</p>
                  <p>Our name reflects our commitment: emerald represents quality, value, and lasting beauty. Just like the gemstone, we believe your home deserves something precious — a finish that stands the test of time.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Section 3 - Our Values */}
        <section className="py-16 lg:py-24 bg-[#fafafa]">
          <div className="container-max px-6">
            <AnimatedSection className="text-center mb-10 lg:mb-16">
              <span className="text-emerald-600 text-xs font-semibold uppercase tracking-widest">WHAT WE STAND FOR</span>
              <h2 className="mt-3 text-[28px] lg:text-section-desktop font-bold font-heading text-charcoal">Our Core Values</h2>
              <p className="mt-4 text-charcoal-500 text-base">The principles that guide everything we do.</p>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl p-7 text-center shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="mt-4 font-heading font-semibold text-lg text-charcoal">{title}</h3>
                    <p className="mt-2 text-charcoal-500 text-[15px] leading-relaxed">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - By The Numbers */}
        <section className="py-12 lg:py-16 bg-[#0f172a]">
          <div className="container-max px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map(({ value, label, hasStar }, i) => (
                <AnimatedSection key={label} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className="text-emerald-400 font-heading font-bold text-5xl lg:text-[64px]">{value}</span>
                      {hasStar && <Star className="h-6 w-6 lg:h-8 lg:w-8 text-emerald-400 fill-emerald-400" />}
                    </div>
                    <p className="mt-1 text-white/70 text-sm">{label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Credentials */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-max px-6 text-center">
            <AnimatedSection>
              <h2 className="text-2xl lg:text-section-desktop font-bold font-heading text-charcoal">Licensed, Insured, and Trusted</h2>
              <p className="mt-3 text-charcoal-500 text-[15px]">We're committed to professionalism and protecting your investment.</p>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
              {credentials.map(({ icon: Icon, label }, i) => (
                <AnimatedSection key={label} delay={i * 0.06}>
                  <div className="bg-charcoal-50 border border-charcoal-200 rounded-xl py-6 px-4 text-center">
                    <Icon className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                    <span className="text-charcoal-800 text-sm font-medium">{label}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 - CTA */}
        <section className="py-16 lg:py-24 bg-emerald-500 text-center">
          <div className="container-max px-6">
            <AnimatedSection>
              <h2 className="text-[28px] lg:text-section-desktop font-bold font-heading text-white">Ready to Work with Us?</h2>
              <p className="mt-4 text-white/90 text-base max-w-md mx-auto">Contact us today for your free, no-obligation estimate.</p>
              <Link
                to="/contact"
                className="mt-6 inline-block bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-50 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              >
                Get Your Free Estimate
              </Link>
              <div className="mt-4">
                <a href={COMPANY.phoneLink} className="text-white text-[15px] hover:underline">
                  <Phone className="inline h-4 w-4 mr-1" />Or call {COMPANY.phone}
                </a>
              </div>
              <p className="mt-6 text-white/70 text-[13px]">
                Licensed &amp; Insured • {COMPANY.yearsExperience}+ Years Experience • Denver's Trusted Choice
              </p>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default About;
