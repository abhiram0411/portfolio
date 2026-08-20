"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import { profile } from "@/data/content";
import FadeIn from "@/components/FadeIn";

export default function Contact() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("contact");
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <section ref={ref} id="contact" className="relative flex min-h-screen items-center px-4 sm:px-12 lg:px-16 py-20 sm:py-32">
      <div className="w-full max-w-full md:max-w-[50vw] lg:max-w-[38vw] text-left flex flex-col gap-8 sm:gap-12 p-5 sm:p-0 rounded-sm bg-[#f5edde]/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-[#1a1815]/15 sm:border-none shadow-[3px_3px_0px_rgba(26,24,21,0.10)] sm:shadow-none">
        <FadeIn>
          <div>
            <h3 className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#6b5e50] uppercase mb-1.5 sm:mb-2">
              Correspondence
            </h3>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#1a1815] uppercase tracking-tight break-words">
              Direct Access
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="flex flex-col gap-6 sm:gap-8">
            <div>
              <h3 className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#6b5e50] uppercase mb-1.5 sm:mb-2">
                Electronic Mail
              </h3>
              <a
                href={`mailto:${profile.contact.email}`}
                className="group font-serif text-base sm:text-lg break-all text-[#2a241e] hover:text-[#a87d2a] transition-colors font-medium inline-flex items-baseline gap-0.5"
              >
                <span className="font-mono text-[#6b5e50] group-hover:text-[#a87d2a] text-xs mr-0.5 group-hover:mr-1.5 transition-all duration-300">[</span>
                <span className="link-underline">{profile.contact.email}</span>
                <span className="font-mono text-[#6b5e50] group-hover:text-[#a87d2a] text-xs ml-0.5 group-hover:ml-1.5 transition-all duration-300"> ↗ ]</span>
              </a>
            </div>
            
            <div>
              <h3 className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#6b5e50] uppercase mb-1.5 sm:mb-2">
                Professional Network
              </h3>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-serif text-base sm:text-lg text-[#2a241e] hover:text-[#a87d2a] transition-colors font-medium inline-flex items-baseline gap-0.5"
              >
                <span className="font-mono text-[#6b5e50] group-hover:text-[#a87d2a] text-xs mr-0.5 group-hover:mr-1.5 transition-all duration-300">[</span>
                <span className="link-underline">LinkedIn Profile</span>
                <span className="font-mono text-[#6b5e50] group-hover:text-[#a87d2a] text-xs ml-0.5 group-hover:ml-1.5 transition-all duration-300"> ↗ ]</span>
              </a>
            </div>
            
            <div>
              <h3 className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#6b5e50] uppercase mb-1.5 sm:mb-2">
                Code Repository
              </h3>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group font-serif text-base sm:text-lg text-[#2a241e] hover:text-[#a87d2a] transition-colors font-medium inline-flex items-baseline gap-0.5"
              >
                <span className="font-mono text-[#6b5e50] group-hover:text-[#a87d2a] text-xs mr-0.5 group-hover:mr-1.5 transition-all duration-300">[</span>
                <span className="link-underline">GitHub Architecture</span>
                <span className="font-mono text-[#6b5e50] group-hover:text-[#a87d2a] text-xs ml-0.5 group-hover:ml-1.5 transition-all duration-300"> ↗ ]</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
