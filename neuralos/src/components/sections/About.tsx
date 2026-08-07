"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import { profile } from "@/data/content";
import FadeIn from "@/components/FadeIn";

export default function About() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("about");
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <section ref={ref} id="about" className="relative flex min-h-screen items-center px-4 sm:px-12 lg:px-16 py-20 sm:py-32 pointer-events-none">
      <div className="w-full max-w-full md:max-w-[50vw] lg:max-w-[38vw] text-left flex flex-col gap-6 sm:gap-10 pointer-events-auto p-5 sm:p-0 rounded-2xl bg-[#f5edde]/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-[#1a1815]/15 sm:border-none shadow-sm sm:shadow-none">
        
        <FadeIn delay={100}>
          <div className="border-b border-[#1a1815]/15 pb-4 sm:pb-6">
            <h3 className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-[#6b5e50] uppercase mb-1.5 sm:mb-2">
              Biography & System Focus
            </h3>
            <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#1a1815] uppercase tracking-tight break-words">
              About The Engineer
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex items-center gap-6 group">
            <div>
              <h3 className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-[#6b5e50] uppercase mb-1">
                Education
              </h3>
              <p className="font-serif text-base sm:text-lg text-[#2a241e]">
                {profile.education.degree}
                <br />
                {profile.education.institution}
              </p>
            </div>
            <div className="flex-1 h-[1px] bg-[#1a1815]/20 hidden lg:block group-hover:bg-[#1a1815]/50 transition-colors" />
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex items-center gap-6 group">
            <div>
              <h3 className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-[#6b5e50] uppercase mb-1">
                Focus
              </h3>
              <p className="font-serif text-base sm:text-lg text-[#2a241e] leading-snug">
                AI • Cloud • Full Stack • ServiceNow
              </p>
            </div>
            <div className="flex-1 h-[1px] bg-[#1a1815]/20 hidden lg:block group-hover:bg-[#1a1815]/50 transition-colors" />
          </div>
        </FadeIn>
        
        <FadeIn delay={500}>
          <div className="flex items-center gap-6 group">
            <div>
              <h3 className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-[#6b5e50] uppercase mb-1">
                Location
              </h3>
              <p className="font-serif text-base sm:text-lg text-[#2a241e]">
                {profile.location}
              </p>
            </div>
            <div className="flex-1 h-[1px] bg-[#1a1815]/20 hidden lg:block group-hover:bg-[#1a1815]/50 transition-colors" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
