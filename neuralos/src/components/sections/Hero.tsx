"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import { profile } from "@/data/content";

export default function Hero() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const isLoaded = useUIStore((state) => state.isLoaded);
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
        {/* Staggered fade-in entrance on page load */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className="font-mono text-[10px] tracking-[0.4em] text-[#6b5e50] uppercase mb-4">
            Portfolio // 2026
          </h3>
        </div>

        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#1a1815] uppercase tracking-tight leading-none mb-4">
            {profile.name}
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <p className="font-serif text-lg sm:text-xl text-[#2a241e]/80 mb-2">
            Software Engineer
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1100ms" }}
        >
          <p className="font-serif text-sm text-[#3a3229]/70 italic mb-8 leading-relaxed max-w-md">
            {profile.tagline}
          </p>
        </div>

        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "1300ms" }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-[1px] bg-[#1a1815]/30" />
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#6b5e50] uppercase">
              {profile.motto}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
