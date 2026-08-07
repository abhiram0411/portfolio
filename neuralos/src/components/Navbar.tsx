"use client";

import { useState, useEffect } from "react";
import { navLinks, profile } from "@/data/content";
import { useUIStore } from "@/store/useStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useUIStore((state) => state.activeSection);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-12 lg:px-20 py-4 sm:py-6 bg-[#e7d5b5]/85 backdrop-blur-md border-b border-[#1a1815]/10 transition-all duration-300">
      <nav className="flex items-center justify-between" aria-label="Main Navigation">
        <a
          href="#"
          aria-label="Dasari Abhiram Home"
          className="font-mono text-xs sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-[#1a1815] uppercase hover:opacity-70 transition-opacity focus:outline-none focus:ring-1 focus:ring-[#1a1815]"
          onClick={() => setOpen(false)}
        >
          DASARI ABHIRAM
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 lg:gap-10 md:flex">
          {navLinks.map((link) => {
            const isSectionActive = activeSection === link.href.substring(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isSectionActive ? "page" : undefined}
                  className={`font-mono text-[11px] tracking-[0.25em] uppercase transition-all py-1 block ${
                    isSectionActive
                      ? "text-[#1a1815] font-bold border-b border-[#1a1815]"
                      : "text-[#6b5e50] hover:text-[#1a1815]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          aria-expanded={open}
          className="flex flex-col justify-center items-center w-9 h-9 p-2 rounded-md bg-[#1a1815]/5 border border-[#1a1815]/15 md:hidden focus:outline-none focus:ring-1 focus:ring-[#1a1815] active:scale-95 transition-transform"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="relative w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-5 bg-[#1a1815] transition-all duration-300 transform origin-center ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#1a1815] transition-all duration-200 ${
                open ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#1a1815] transition-all duration-300 transform origin-center ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="mt-3 pt-4 border-t border-[#1a1815]/15 md:hidden bg-[#e7d5b5]/95 backdrop-blur-xl rounded-b-2xl p-4 shadow-xl border border-[#1a1815]/10 animate-fade-up">
          <ul className="flex flex-col gap-1.5">
            {navLinks.map((link, idx) => {
              const isSectionActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isSectionActive ? "page" : undefined}
                    className={`flex items-center justify-between font-mono text-xs tracking-widest uppercase px-3 py-2.5 rounded-lg transition-all ${
                      isSectionActive
                        ? "text-[#1a1815] font-bold bg-[#1a1815]/10 border-l-4 border-[#a87d2a]"
                        : "text-[#6b5e50] hover:text-[#1a1815] hover:bg-[#1a1815]/5"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span>{link.label}</span>
                    <span className="text-[9px] opacity-50 tracking-wider">
                      0{idx + 1}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Quick Contact Links in Mobile Drawer */}
          <div className="mt-4 pt-3 border-t border-[#1a1815]/10 flex items-center justify-around font-mono text-[10px] tracking-wider text-[#6b5e50] uppercase">
            <a
              href={`mailto:${profile.contact.email}`}
              className="px-2 py-1 hover:text-[#1a1815] transition-colors"
              onClick={() => setOpen(false)}
            >
              EMAIL
            </a>
            <span className="text-[#1a1815]/20">•</span>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 hover:text-[#1a1815] transition-colors"
              onClick={() => setOpen(false)}
            >
              LINKEDIN
            </a>
            <span className="text-[#1a1815]/20">•</span>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 hover:text-[#1a1815] transition-colors"
              onClick={() => setOpen(false)}
            >
              GITHUB
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

