import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-lg p-1.5">
                <img src={logo} alt="Emerald Paints" className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed">
              Denver&apos;s premier painting professionals. Delivering flawless finishes and exceptional service for over {COMPANY.yearsExperience} years.
            </p>
            <div className="flex gap-3 mt-4">
              <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-charcoal-400 hover:text-emerald-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-1">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-charcoal-400 text-sm">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={COMPANY.phoneLink} className="flex items-center gap-2 text-charcoal-400 hover:text-emerald-400 text-sm transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" /> {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={COMPANY.emailLink} className="flex items-center gap-2 text-charcoal-400 hover:text-emerald-400 text-sm transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" /> {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-charcoal-400 text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /> {COMPANY.address.full}
              </li>
              <li className="flex items-start gap-2 text-charcoal-400 text-sm">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon-Sat: {COMPANY.hours.weekday}</p>
                  <p>Sun: {COMPANY.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-charcoal-500 text-sm">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
