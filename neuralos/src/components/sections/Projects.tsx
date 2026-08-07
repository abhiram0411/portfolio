"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import { projects } from "@/data/content";
import FadeIn from "@/components/FadeIn";

export default function Projects() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("projects");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <section
      ref={ref}
      id="projects"
      className="relative flex min-h-screen items-center px-4 sm:px-12 lg:px-16 py-20 sm:py-32 pointer-events-none"
    >
      <div className="w-full max-w-full md:max-w-[50vw] lg:max-w-[38vw] text-left flex flex-col gap-8 sm:gap-12 pointer-events-auto">
        <FadeIn>
          <div className="p-4 sm:p-0 rounded-xl bg-[#f5edde]/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-[#1a1815]/15 sm:border-none shadow-sm sm:shadow-none">
            <h3 className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-[#6b5e50] uppercase mb-2 sm:mb-4">
              Engineering Artifacts
            </h3>
            <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#1a1815] uppercase tracking-tight break-words">
              Selected Projects & Systems
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6 sm:gap-10">
          {projects.map((proj, idx) => (
            <FadeIn key={proj.title} delay={idx * 100}>
              <div className="p-4 sm:p-6 rounded-xl border border-[#1a1815]/15 bg-[#f5edde]/80 backdrop-blur-md space-y-3 hover:border-[#1a1815]/40 transition-all shadow-sm">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1a1815]">
                    {proj.title}
                  </h3>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#a87d2a] uppercase font-bold">
                    EXHIBIT // 0{idx + 1}
                  </span>
                </div>
                <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#6b5e50] uppercase">
                  {proj.subtitle}
                </p>
                <p className="font-serif text-xs text-[#3a3229]/85 leading-relaxed pt-1">
                  {proj.description}
                </p>
                
                {proj.metrics && (
                  <div className="p-2 sm:p-2.5 bg-[#1a1815]/5 border-l-2 border-[#a87d2a] font-mono text-[9px] sm:text-[10px] text-[#2a241e] tracking-wider rounded-r">
                    IMPACT // {proj.metrics}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] tracking-wider text-[#6b5e50] bg-[#1a1815]/5 px-2 py-0.5 rounded border border-[#1a1815]/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
