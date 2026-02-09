import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Phone, Mail, MapPin, Clock, ArrowRight, Lock, Loader2,
  CheckCircle, Facebook, Instagram, AlertTriangle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { COMPANY, SERVICES, SERVICE_AREAS, CONTACT_FAQS } from "@/lib/constants";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  timeline: string;
  message: string;
  referral: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
}

const initialForm: FormData = { name: "", phone: "", email: "", service: "", timeline: "", message: "", referral: "" };

const SERVICE_OPTIONS = [
  { value: "interior", label: "Interior Painting" },
  { value: "exterior", label: "Exterior Painting" },
  { value: "staining", label: "Wood Staining" },
  { value: "vinyl", label: "Vinyl & Aluminum Painting" },
  { value: "commercial", label: "Commercial Painting" },
  { value: "repairs", label: "Touch-Ups & Repairs" },
  { value: "custom", label: "Custom Finishes" },
  { value: "color", label: "Color Consultation" },
  { value: "other", label: "Other / Not Sure" },
];

const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "2weeks", label: "Within 2 weeks" },
  { value: "1month", label: "Within 1 month" },
  { value: "2-3months", label: "Within 2-3 months" },
  { value: "exploring", label: "Just exploring options" },
];

const REFERRAL_OPTIONS = [
  { value: "google", label: "Google Search" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "referral", label: "Referral from friend/family" },
  { value: "drove-by", label: "Drove by a job site" },
  { value: "other", label: "Other" },
];

const inputClass =
  "w-full h-[52px] bg-charcoal-50 border-2 border-transparent rounded-xl px-4 text-base text-charcoal focus:border-blue-500 focus:bg-white outline-none placeholder:text-charcoal-400 transition-all duration-200";
const selectClass = inputClass + " appearance-none cursor-pointer";
const labelClass = "block text-charcoal-700 text-sm font-medium mb-1.5";
const errorInputClass = "!border-red-500";

const Contact = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field as keyof FormErrors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name || form.name.length < 2) errs.name = "Please enter your name";
    if (!form.phone || !/[\d\-()+ ]{7,}/.test(form.phone)) errs.phone = "Please enter a valid phone number";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Please enter a valid email";
    if (!form.service) errs.service = "Please select a service";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      console.log("Form submitted:", form);
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Section 1 - Hero */}
        <section className="bg-slate-800 pt-24 pb-12 lg:pt-32 lg:pb-16 text-center">
          <div className="container-max px-6 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <Phone className="h-7 w-7 text-blue-500" />
            </div>
            <h1 className="mt-5 text-4xl lg:text-5xl font-bold font-heading text-white">Let's Talk</h1>
            <p className="mt-3 text-white/90 text-base lg:text-lg max-w-[320px] lg:max-w-md">
              Ready to transform your home? Get in touch for your free estimate.
            </p>
          </div>
        </section>

        {/* Section 2 - Form + Sidebar */}
        <section className="py-12 lg:py-20 bg-white">
          <div className="container-max px-6">
            <div className="flex flex-col lg:flex-row lg:gap-12">
              {/* Form */}
              <AnimatedSection className="lg:w-[60%]">
                {status === "success" ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-blue-600" />
                    </div>
                    <h2 className="mt-4 text-blue-600 text-[28px] font-bold font-heading">Thank You!</h2>
                    <p className="mt-3 text-charcoal-500 text-base max-w-sm mx-auto">
                      We've received your request and will be in touch within 24 hours.
                    </p>
                    <p className="mt-4 text-charcoal-500 text-base">
                      For immediate assistance, call us at{" "}
                      <a href={COMPANY.phoneLink} className="text-blue-500 underline font-medium">{COMPANY.phone}</a>.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold font-heading text-charcoal">Request Your Free Estimate</h2>
                    <p className="mt-2 text-charcoal-500 text-[15px]">Fill out the form below and we'll get back to you within 24 hours.</p>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                      <div>
                        <label className={labelClass}>Your Name</label>
                        <input type="text" placeholder="John Smith" value={form.name} onChange={set("name")} className={`${inputClass} ${errors.name ? errorInputClass : ""}`} />
                        {errors.name && <p className="text-red-500 text-[13px] mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Phone Number</label>
                        <input type="tel" placeholder="(720) 555-1234" value={form.phone} onChange={set("phone")} className={`${inputClass} ${errors.phone ? errorInputClass : ""}`} />
                        {errors.phone && <p className="text-red-500 text-[13px] mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>Email Address</label>
                        <input type="email" placeholder="john@example.com" value={form.email} onChange={set("email")} className={`${inputClass} ${errors.email ? errorInputClass : ""}`} />
                        {errors.email && <p className="text-red-500 text-[13px] mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>What service are you interested in?</label>
                        <select value={form.service} onChange={set("service")} className={`${selectClass} ${errors.service ? errorInputClass : ""}`}>
                          <option value="" disabled>Select a service...</option>
                          {SERVICE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                        {errors.service && <p className="text-red-500 text-[13px] mt-1">{errors.service}</p>}
                      </div>
                      <div>
                        <label className={labelClass}>When are you looking to start?</label>
                        <select value={form.timeline} onChange={set("timeline")} className={selectClass}>
                          <option value="" disabled>Select timeline...</option>
                          {TIMELINE_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Tell us about your project</label>
                        <textarea
                          rows={4}
                          placeholder="Describe your project, including approximate size, surfaces to be painted, any specific concerns..."
                          value={form.message}
                          onChange={set("message")}
                          className="w-full bg-charcoal-50 border-2 border-transparent rounded-xl p-4 text-base text-charcoal focus:border-blue-500 focus:bg-white outline-none placeholder:text-charcoal-400 transition-all duration-200 resize-y min-h-[120px]"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>How did you hear about us?</label>
                        <select value={form.referral} onChange={set("referral")} className={selectClass}>
                          <option value="" disabled>Select one...</option>
                          {REFERRAL_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      </div>

                      {status === "error" && (
                        <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-3 flex items-center gap-2 text-sm">
                          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
                          Something went wrong. Please try again or call us directly.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full h-14 bg-orange-500 text-white rounded-xl font-semibold text-base flex items-center justify-center gap-2 hover:bg-orange-600 active:bg-orange-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                      >
                        {status === "loading" ? (
                          <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
                        ) : (
                          <>Get My Free Estimate <ArrowRight className="h-5 w-5" /></>
                        )}
                      </button>

                      <p className="text-charcoal-400 text-[13px] text-center flex items-center justify-center gap-1">
                        <Lock className="h-3.5 w-3.5" /> We respect your privacy. Your information will never be shared.
                      </p>
                    </form>
                  </>
                )}
              </AnimatedSection>

              {/* Info Sidebar */}
              <AnimatedSection delay={0.15} className="mt-12 pt-12 border-t border-charcoal-200 lg:mt-0 lg:pt-0 lg:border-t-0 lg:w-[40%] lg:sticky lg:top-24 lg:self-start">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-charcoal-700 text-sm font-medium">Call Us Anytime</p>
                      <a href={COMPANY.phoneLink} className="text-charcoal text-xl font-bold block mt-1 hover:text-blue-600 transition-colors">{COMPANY.phone}</a>
                      <p className="text-charcoal-500 text-sm mt-1">Mon-Sat: {COMPANY.hours.weekday}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-charcoal-700 text-sm font-medium">Email Us</p>
                      <a href={COMPANY.emailLink} className="text-charcoal font-semibold block mt-1 hover:text-blue-600 transition-colors break-all">{COMPANY.email}</a>
                      <p className="text-charcoal-500 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-charcoal font-semibold">Based in Commerce City</p>
                      <p className="text-charcoal-500 text-sm">Serving the Denver Metro Area</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-charcoal-700 text-sm font-medium mb-3">Follow Us</p>
                    <div className="flex gap-3">
                      <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-blue-500 transition-colors"><Facebook className="h-8 w-8" /></a>
                      <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="text-charcoal-400 hover:text-blue-500 transition-colors"><Instagram className="h-8 w-8" /></a>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-blue-500 flex-shrink-0" />
                    <p className="text-charcoal-700 text-sm">We typically respond within 2 hours during business hours!</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Section 3 - FAQ */}
        <section className="py-12 lg:py-16 bg-charcoal-50">
          <div className="container-max px-6">
            <AnimatedSection>
              <h2 className="text-2xl font-bold font-heading text-charcoal">Quick Answers</h2>
            </AnimatedSection>
            <Accordion type="single" collapsible className="mt-6 space-y-3 max-w-3xl">
              {CONTACT_FAQS.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <AccordionItem value={`faq-${i}`} className="bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.04)] border-none overflow-hidden">
                    <AccordionTrigger className="px-6 py-5 text-left text-charcoal font-medium text-base hover:no-underline [&[data-state=open]>svg]:rotate-180">
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

        {/* Section 4 - Service Areas */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container-max px-6 text-center">
            <AnimatedSection>
              <h2 className="text-2xl font-bold font-heading text-charcoal">Areas We Serve</h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 gap-3 mt-6 max-w-lg mx-auto">
              {SERVICE_AREAS.map((area, i) => (
                <AnimatedSection key={area} delay={i * 0.03}>
                  <div className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 rounded-lg py-3 px-4">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-charcoal-700 text-sm font-medium">{area}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Contact;
