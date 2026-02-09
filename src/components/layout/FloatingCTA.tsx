import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { COMPANY } from "@/lib/constants";

export function FloatingCTA() {
  const { scrollY } = useScrollPosition();
  const show = scrollY > 600;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={COMPANY.phoneLink}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40 lg:hidden w-[60px] h-[60px] rounded-full bg-orange-500 flex items-center justify-center shadow-glow-orange-strong animate-pulse-glow"
          aria-label="Call us"
        >
          <Phone className="h-7 w-7 text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
