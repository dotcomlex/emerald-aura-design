import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`Quote Request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="container-max px-6 text-center">
            <span className="text-eyebrow text-emerald-400 block mb-4">Contact Us</span>
            <h1 className="text-hero-mobile lg:text-hero-desktop text-white font-heading">
              Get Your <span className="text-emerald-400">Free Quote</span>
            </h1>
            <p className="mt-4 text-charcoal-300 text-lg max-w-xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        <section className="section-padding bg-cream">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Form */}
              <AnimatedSection className="lg:col-span-2">
                {submitted ? (
                  <div className="p-8 rounded-2xl bg-white shadow-soft text-center">
                    <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h2 className="font-heading font-bold text-2xl text-charcoal mb-2">Thank You!</h2>
                    <p className="text-charcoal-500">Your email client should open with your quote request. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white shadow-soft space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Full Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1">Phone *</label>
                        <input
                          required
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm"
                          placeholder="(720) 555-0123"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm"
                        placeholder="john@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm bg-white"
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-1">Project Details</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-charcoal-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none text-sm resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-emerald-500 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-colors shadow-glow-emerald"
                    >
                      Send Quote Request
                    </button>
                  </form>
                )}
              </AnimatedSection>

              {/* Sidebar */}
              <AnimatedSection delay={0.15}>
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white shadow-soft">
                    <h3 className="font-heading font-semibold text-charcoal mb-4">Contact Info</h3>
                    <ul className="space-y-4">
                      <li>
                        <a href={COMPANY.phoneLink} className="flex items-center gap-3 text-charcoal-600 hover:text-emerald-600 transition-colors">
                          <Phone className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          <span className="font-medium">{COMPANY.phone}</span>
                        </a>
                      </li>
                      <li>
                        <a href={COMPANY.emailLink} className="flex items-center gap-3 text-charcoal-600 hover:text-emerald-600 transition-colors">
                          <Mail className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm">{COMPANY.email}</span>
                        </a>
                      </li>
                      <li className="flex items-start gap-3 text-charcoal-600">
                        <MapPin className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{COMPANY.address.street}<br />{COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.zip}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-white shadow-soft">
                    <h3 className="font-heading font-semibold text-charcoal mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-emerald-500" /> Business Hours
                    </h3>
                    <ul className="space-y-2 text-charcoal-600 text-sm">
                      <li className="flex justify-between"><span>Mon – Sat</span><span className="font-medium">{COMPANY.hours.weekday}</span></li>
                      <li className="flex justify-between"><span>Sunday</span><span className="font-medium">{COMPANY.hours.sunday}</span></li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
