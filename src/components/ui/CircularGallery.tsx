import { useRef, useEffect, useCallback } from "react";

export interface CarouselItem {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
}

interface CircularGalleryProps {
  items: CarouselItem[];
  radius: number;
  autoRotateSpeed?: number;
  isActive?: boolean;
  onItemClick?: (id: number) => void;
}

export function CircularGallery({
  items,
  radius,
  autoRotateSpeed = -0.035,
  isActive = true,
  onItemClick,
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartAngleRef = useRef(0);
  const rafRef = useRef<number>(0);

  const total = items.length;
  const angleStep = 360 / total;
  const sensitivity = 0.3;

  // Normalize angle to [-180, 180]
  const normalize = (a: number) => ((a % 360) + 540) % 360 - 180;

  // Animation loop
  useEffect(() => {
    const animate = () => {
      if (!isDraggingRef.current && isActive) {
        angleRef.current += autoRotateSpeed;
      }
      // Update card transforms directly via DOM for performance
      const container = containerRef.current;
      if (container) {
        const cards = container.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const cardAngle = angleStep * i + angleRef.current;
          const diff = normalize(cardAngle);
          const absDiff = Math.abs(diff);
          const isFront = absDiff < 90;
          const cosVal = Math.cos((diff * Math.PI) / 180);
          const scale = 0.85 + 0.15 * Math.max(0, cosVal);
          const opacity = isFront ? 0.3 + 0.7 * Math.max(0, cosVal) : 0;
          const zIndex = Math.round(cosVal * 100) + 100;

          card.style.transform = `translate(-50%, -50%) rotateY(${diff}deg) translateZ(${radius}px) scale(${scale})`;
          card.style.opacity = String(opacity);
          card.style.zIndex = String(zIndex);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isActive, autoRotateSpeed, angleStep, radius, total]);

  // Mouse drag handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartAngleRef.current = angleRef.current;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    angleRef.current = dragStartAngleRef.current + deltaX * sensitivity;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Touch drag handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.touches[0].clientX;
    dragStartAngleRef.current = angleRef.current;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.touches[0].clientX - dragStartXRef.current;
    angleRef.current = dragStartAngleRef.current + deltaX * sensitivity;
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  return (
    <div
      className="relative w-full h-full"
      style={{ perspective: "1000px" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute left-1/2 top-1/2 w-56 h-72 sm:w-64 sm:h-80 md:w-80 md:h-96 cursor-pointer select-none"
            style={{
              backfaceVisibility: "hidden",
              willChange: "transform, opacity",
            }}
            onClick={() => onItemClick?.(item.id)}
          >
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-1">
                    {item.location}
                  </p>
                  <p className="text-white/50 text-[10px] sm:text-xs">
                    Emerald Paints
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
