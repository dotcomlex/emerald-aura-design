import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { COMPANY } from "@/lib/constants";

export function FloatingCTA() {
  const { isScrolled } = useScrollPosition();

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-4 right-4 z-40 lg:hidden"
        >
          <div className="flex gap-3">
            <a
              href={COMPANY.phoneLink}
              className="flex-1 bg-charcoal text-white py-3.5 rounded-xl font-semibold text-center flex items-center justify-center gap-2 shadow-elevated"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href="/contact"
              className="flex-1 bg-emerald-500 text-white py-3.5 rounded-xl font-semibold text-center shadow-glow-emerald animate-pulse-glow"
            >
              Free Quote
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
