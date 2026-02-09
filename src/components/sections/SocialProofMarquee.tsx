import { Star } from "lucide-react";
import { MICRO_REVIEWS } from "@/lib/constants";

export function SocialProofMarquee() {
  const doubled = [...MICRO_REVIEWS, ...MICRO_REVIEWS];

  return (
    <section className="bg-emerald-500 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((review, i) => (
          <div key={i} className="flex items-center gap-2 mx-8 flex-shrink-0">
            <Star className="h-4 w-4 text-gold fill-gold" />
            <span className="text-white font-medium text-sm">"{review.quote}"</span>
            <span className="text-white/70 text-sm">— {review.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
