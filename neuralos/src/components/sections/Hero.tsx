"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("hero");
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen flex-col justify-center px-6 sm:px-12 lg:px-16 pt-20 pointer-events-none"
    >
      <div className="w-full max-w-full md:max-w-[50vw] lg:max-w-[38vw] text-left pointer-events-auto">
        <FadeIn delay={200}>
          <h3 className="font-mono text-[10px] tracking-[0.4em] text-[#6b5e50] uppercase mb-4">
            Plate I.
          </h3>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#1a1815] uppercase tracking-tight leading-none mb-6">
            Human Nervous System
          </h1>
          <p className="font-serif text-lg text-[#2a241e] italic mb-12">
            An interactive anatomical atlas mapping the architecture of the mind and peripheral pathways.
          </p>
          <div className="w-16 h-[1px] bg-[#1a1815]/30" />
        </FadeIn>
      </div>
    </section>
  );
}
