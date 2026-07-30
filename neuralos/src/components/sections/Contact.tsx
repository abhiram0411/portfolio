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
    <section ref={ref} id="contact" className="relative flex min-h-screen items-center px-6 sm:px-12 lg:px-16 py-32">
      <div className="w-full max-w-full md:max-w-[50vw] lg:max-w-[38vw] text-left flex flex-col gap-12">
        <FadeIn>
          <div>
            <h3 className="font-mono text-[10px] tracking-widest text-[#6b5e50] uppercase mb-2">
              Correspondence
            </h3>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#1a1815] uppercase tracking-tight">
              Direct Access
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-mono text-[10px] tracking-widest text-[#6b5e50] uppercase mb-2">
                Electronic Mail
              </h3>
              <a
                href={`mailto:${profile.contact.email}`}
                className="font-serif text-lg text-[#2a241e] hover:text-[#a87d2a] transition-colors"
              >
                {profile.contact.email}
              </a>
            </div>
            
            <div>
              <h3 className="font-mono text-[10px] tracking-widest text-[#6b5e50] uppercase mb-2">
                Professional Network
              </h3>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg text-[#2a241e] hover:text-[#a87d2a] transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            
            <div>
              <h3 className="font-mono text-[10px] tracking-widest text-[#6b5e50] uppercase mb-2">
                Code Repository
              </h3>
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg text-[#2a241e] hover:text-[#a87d2a] transition-colors"
              >
                GitHub Architecture
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
