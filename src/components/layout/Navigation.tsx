import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Facebook, Instagram } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import logo from "@/assets/logo.png";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-max flex items-center justify-between px-6 py-4 lg:py-5">
          {/* Mobile: hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 -ml-2 ${isScrolled ? "text-charcoal" : "text-white"}`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Emerald Paints" className="h-10 w-auto" />
            <span className={`font-heading font-bold text-lg hidden sm:block ${isScrolled ? "text-charcoal" : "text-white"}`}>
              {COMPANY.shortName}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-[15px] font-medium transition-colors py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-500 after:origin-left after:transition-transform after:duration-300 ${
                  location.pathname === link.href
                    ? `${isScrolled ? "text-emerald-600" : "text-emerald-400"} after:scale-x-100`
                    : `${isScrolled ? "text-charcoal-700 hover:text-charcoal" : "text-white/80 hover:text-white"} after:scale-x-0 hover:after:scale-x-100`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={COMPANY.phoneLink}
              className={`flex items-center gap-2 text-sm transition-colors ${isScrolled ? "text-charcoal-600 hover:text-charcoal" : "text-white/80 hover:text-white"}`}
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="bg-emerald-500 text-white px-6 py-2.5 rounded-lg font-semibold text-[15px] hover:bg-emerald-600 transition-all hover:scale-[1.02] shadow-glow-emerald"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile: phone icon */}
          <a
            href={COMPANY.phoneLink}
            className={`lg:hidden p-2 -mr-2 ${isScrolled ? "text-charcoal" : "text-white"}`}
            aria-label="Call us"
          >
            <Phone className="h-6 w-6" />
          </a>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-0 z-50 bg-charcoal/[0.98] flex flex-col items-center justify-center"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 text-white p-3"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              <span className="font-heading font-bold text-2xl text-white mb-12">
                <span className="text-emerald-400">Emerald</span> Paints
              </span>

              <div className="flex flex-col items-center gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-2xl font-heading font-semibold ${
                      location.pathname === link.href ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-12 flex flex-col items-center gap-4 w-full px-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="bg-emerald-500 text-white w-full max-w-xs py-4 rounded-xl font-semibold text-center hover:bg-emerald-600 transition-colors"
                >
                  Get Free Estimate
                </Link>
                <a
                  href={COMPANY.phoneLink}
                  className="flex items-center gap-3 text-white font-medium mt-2"
                >
                  <Phone className="h-5 w-5 text-emerald-400" />
                  {COMPANY.phone}
                </a>
                <a href={COMPANY.emailLink} className="text-charcoal-400 text-sm">
                  {COMPANY.email}
                </a>
                <div className="flex gap-4 mt-4">
                  <a href={COMPANY.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href={COMPANY.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
