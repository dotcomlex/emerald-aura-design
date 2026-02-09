import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Link } from "react-router-dom";
import { Award, Heart, Shield, Users, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const values = [
  { icon: Heart, title: "Passion for Craft", desc: "We love what we do — and it shows in every brushstroke." },
  { icon: Shield, title: "Integrity First", desc: "Honest pricing, transparent communication, no surprises." },
  { icon: Users, title: "Customer-Centric", desc: "Your satisfaction is our #1 priority on every project." },
  { icon: Star, title: "Excellence Always", desc: "We never cut corners. Premium results, every time." },
];

const About = () => {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="container-max px-6 text-center">
            <span className="text-eyebrow text-emerald-400 block mb-4">About Us</span>
            <h1 className="text-hero-mobile lg:text-hero-desktop text-white font-heading">
              The Story Behind <span className="text-emerald-400">Emerald</span>
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-cream">
          <div className="container-max">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <h2 className="text-section-mobile lg:text-section-desktop font-heading text-charcoal mb-6">
                  Built on {COMPANY.yearsExperience}+ Years of Craftsmanship
                </h2>
                <div className="space-y-4 text-charcoal-600 leading-relaxed text-lg">
                  <p>
                    Emerald Paints was founded by {COMPANY.owner} with a simple mission: bring world-class painting to Denver homeowners at a fair price. What started as a one-person operation has grown into one of the most trusted painting companies in the metro area.
                  </p>
                  <p>
                    With over {COMPANY.projectsCompleted} completed projects, we've earned a reputation for meticulous attention to detail, premium materials, and spotless job sites. We treat every home like it's our own.
                  </p>
                  <p>
                    Our team is fully licensed and insured, and we stand behind every project with our satisfaction guarantee. Whether it's a single accent wall or a full exterior transformation, we bring the same level of professionalism and care.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <SectionHeader eyebrow="Our Values" title="What Drives Us" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map(({ icon: Icon, title, desc }, i) => (
                <AnimatedSection key={title} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-50 mb-4">
                      <Icon className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="font-heading font-semibold text-charcoal mb-2">{title}</h3>
                    <p className="text-charcoal-500 text-sm">{desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="section-padding bg-charcoal text-center">
          <div className="container-max">
            <AnimatedSection>
              <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                {[
                  { icon: Award, label: `${COMPANY.yearsExperience}+ Years` },
                  { icon: Star, label: "5-Star Rated" },
                  { icon: Shield, label: "Licensed & Insured" },
                  { icon: Users, label: `${COMPANY.projectsCompleted}+ Projects` },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <Icon className="h-8 w-8 text-emerald-400" />
                    <span className="text-white font-heading font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <Link
                to="/contact"
                className="mt-10 inline-block bg-emerald-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-colors shadow-glow-emerald"
              >
                Work With Us
              </Link>
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
