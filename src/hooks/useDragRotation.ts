import { useState, useRef, useCallback } from "react";

export function useDragRotation(sensitivity = 0.3) {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const startX = useRef(0);
  const startRotation = useRef(0);

  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    startRotation.current = rotation;
  }, [rotation]);

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const deltaX = clientX - startX.current;
    setRotation(startRotation.current + deltaX * sensitivity);
  }, [isDragging, sensitivity]);

  const handleDragEnd = useCallback(() => setIsDragging(false), []);

  const handlers = {
    onMouseDown: useCallback((e: React.MouseEvent) => { e.preventDefault(); handleDragStart(e.clientX); }, [handleDragStart]),
    onMouseMove: useCallback((e: React.MouseEvent) => handleDragMove(e.clientX), [handleDragMove]),
    onMouseUp: handleDragEnd,
    onMouseLeave: handleDragEnd,
    onTouchStart: useCallback((e: React.TouchEvent) => handleDragStart(e.touches[0].clientX), [handleDragStart]),
    onTouchMove: useCallback((e: React.TouchEvent) => handleDragMove(e.touches[0].clientX), [handleDragMove]),
    onTouchEnd: handleDragEnd,
  };

  return { isDragging, rotation, setRotation, handlers };
}
