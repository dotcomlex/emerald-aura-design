import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = true, light = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "text-center", className)}>
      {eyebrow && (
        <span className={cn("text-eyebrow mb-3 block", light ? "text-emerald-400" : "text-emerald-600")}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn("text-section-mobile lg:text-section-desktop font-heading", light ? "text-white" : "text-charcoal")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-lg max-w-2xl", centered && "mx-auto", light ? "text-charcoal-300" : "text-charcoal-500")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
