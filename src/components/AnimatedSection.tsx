"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
