"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import { profile } from "@/data/content";
import FadeIn from "@/components/FadeIn";

export default function Education() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("education");
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
      id="education"
      className="relative flex min-h-screen items-center px-6 sm:px-12 lg:px-16 py-32 pointer-events-none"
    >
      <div className="w-full max-w-full md:max-w-[50vw] lg:max-w-[38vw] text-left flex flex-col gap-8 pointer-events-auto">
        <FadeIn>
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.4em] text-[#6b5e50] uppercase mb-4">
              Plate VII. // Academic Foundations
            </h3>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1a1815] uppercase tracking-tight">
              Education & Academic Record
            </h2>
          </div>
        </FadeIn>

        {/* Academic Timeline Cards */}
        <div className="flex flex-col gap-6">
          {profile.educationHistory?.map((edu, idx) => (
            <FadeIn key={edu.level} delay={idx * 100}>
              <div className="p-6 border border-[#1a1815]/20 bg-[#f5edde]/70 backdrop-blur-md space-y-3 shadow-sm hover:border-[#1a1815]/40 transition-all">
                <div className="flex justify-between items-start flex-wrap gap-2 border-b border-[#1a1815]/10 pb-3">
                  <div>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-[#a87d2a] uppercase font-bold">
                      {edu.level}
                    </span>
                    <h3 className="font-serif text-xl font-normal text-[#1a1815] mt-0.5">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-[10px] tracking-wider text-[#6b5e50] font-bold">
                      {edu.period}
                    </span>
                    {edu.metrics && (
                      <div className="font-mono text-[9px] text-[#a87d2a] font-bold mt-0.5">
                        {edu.metrics}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <p className="font-serif text-sm font-medium text-[#1a1815]">
                    {edu.institution}
                  </p>
                  <p className="font-mono text-[9px] tracking-widest text-[#6b5e50] uppercase mt-0.5">
                    LOC // {edu.location}
                  </p>
                </div>

                <p className="font-serif text-xs text-[#3a3229]/80 leading-relaxed pt-1">
                  {edu.details}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* B.Tech Core Computer Science Modules */}
        <FadeIn delay={300}>
          <div className="p-6 border border-[#1a1815]/15 bg-[#f5edde]/50 backdrop-blur-sm space-y-3">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#6b5e50] uppercase">
              B.TECH CORE COMPUTER SCIENCE MODULES
            </h4>
            <div className="flex flex-wrap gap-2">
              {profile.education.coursework.map((course) => (
                <span
                  key={course}
                  className="font-mono text-[9px] text-[#2a241e] bg-[#1a1815]/5 border border-[#1a1815]/15 px-2.5 py-1 rounded"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
