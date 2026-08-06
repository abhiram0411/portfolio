"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import { certifications } from "@/data/content";
import FadeIn from "@/components/FadeIn";

export default function Certifications() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("certifications");
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
      id="certifications"
      className="relative flex min-h-screen items-center px-6 sm:px-12 lg:px-16 py-32 pointer-events-none"
    >
      <div className="w-full max-w-full md:max-w-[50vw] lg:max-w-[38vw] text-left flex flex-col gap-10 pointer-events-auto">
        <FadeIn>
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.4em] text-[#6b5e50] uppercase mb-4">
              Verified Competencies
            </h3>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1a1815] uppercase tracking-tight">
              Certifications & Credentials
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {certifications.map((cert, idx) => (
            <FadeIn key={cert.title} delay={idx * 70}>
              <div className="p-6 border border-[#1a1815]/15 bg-[#f5edde]/60 backdrop-blur-sm space-y-2 hover:border-[#1a1815]/40 transition-all">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-serif text-lg font-medium text-[#1a1815] leading-snug">
                    {cert.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#a87d2a] font-bold shrink-0">
                    {cert.date}
                  </span>
                </div>
                <div className="flex justify-between items-center font-mono text-[9px] tracking-[0.2em] text-[#6b5e50] uppercase">
                  <span>ISSUER // {cert.issuer}</span>
                  <span className="opacity-60">{cert.code}</span>
                </div>
                <p className="font-serif text-xs text-[#3a3229]/80 leading-relaxed pt-1">
                  {cert.details}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
