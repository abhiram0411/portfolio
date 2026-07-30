"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useUIStore } from "@/store/useStore";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/ui/LoadingScreen";
import NeuralCanvas from "@/components/canvas/NeuralCanvas";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { profile } from "@/data/content";

export default function Home() {
  const isLoaded = useUIStore((state) => state.isLoaded);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (!isLoaded) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [isLoaded]);

  return (
    <>
      {/* Loading Screen Gate */}
      <LoadingScreen />

      {/* 3D WebGL Scene backdrop */}
      <NeuralCanvas />

      {/* Navbar overlay */}
      {isLoaded && <Navbar />}

      {/* Scrollable DOM Sections */}
      <main
        className={`relative overflow-x-hidden min-h-screen transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Cinematic Chapter Sequence */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Education />
        <Contact />

        {/* Anatomical Exhibition Footer */}
        <footer className="border-t border-[#3a3229]/15 bg-[#f5edde]/40 backdrop-blur-sm px-6 py-10 text-center font-mono text-[11px] text-[#6b5e50] tracking-[0.25em] uppercase">
          <p>
            &copy; {new Date().getFullYear()} {profile.name.toUpperCase()} // ANATOMICAL ART EXHIBITION
          </p>
        </footer>
      </main>
    </>
  );
}
