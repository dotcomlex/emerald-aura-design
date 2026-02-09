import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
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
            ? "bg-charcoal/95 backdrop-blur-md shadow-elevated"
            : "bg-transparent"
        }`}
      >
        <div className="container-max flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Emerald Paints" className="h-10 w-auto" />
            <span className="font-heading font-bold text-lg text-white hidden sm:block">
              {COMPANY.shortName}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-emerald-400"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={COMPANY.phoneLink}
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              {COMPANY.phone}
            </a>
            <Link
              to="/contact"
              className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-600 transition-colors shadow-glow-emerald"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
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
              className="fixed top-0 right-0 bottom-0 z-50 w-3/4 max-w-sm bg-charcoal p-6"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-4 right-4 text-white p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mt-16 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-xl font-heading font-semibold ${
                      location.pathname === link.href ? "text-emerald-400" : "text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-4 pt-6 border-t border-white/10 flex flex-col gap-4">
                  <a
                    href={COMPANY.phoneLink}
                    className="flex items-center gap-3 text-white font-medium"
                  >
                    <Phone className="h-5 w-5 text-emerald-400" />
                    {COMPANY.phone}
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-emerald-600 transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
