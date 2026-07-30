"use client";

import { useState } from "react";
import { navLinks } from "@/data/content";
import { useUIStore } from "@/store/useStore";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeSection = useUIStore((state) => state.activeSection);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 sm:px-12 lg:px-20 py-6 bg-[#e7d5b5]/80 backdrop-blur-md border-b border-[#1a1815]/10">
      <nav className="flex items-center justify-between" aria-label="Main Navigation">
        <a
          href="#"
          aria-label="Dasari Abhiram Home"
          className="font-mono text-xs font-semibold tracking-[0.3em] text-[#1a1815] uppercase hover:opacity-70 transition-opacity focus:outline-none focus:ring-1 focus:ring-[#1a1815]"
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
          className="flex flex-col gap-1.5 p-1 md:hidden focus:outline-none focus:ring-1 focus:ring-[#1a1815]"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`block h-0.5 w-6 bg-[#1a1815] transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1a1815] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#1a1815] transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="mt-4 border-t border-[#1a1815]/15 pt-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isSectionActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isSectionActive ? "page" : undefined}
                    className={`font-mono text-xs tracking-wider uppercase block ${
                      isSectionActive ? "text-[#1a1815] font-bold" : "text-[#6b5e50]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
