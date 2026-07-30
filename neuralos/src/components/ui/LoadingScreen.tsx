"use client";

import { useEffect, useState } from "react";
import { useUIStore } from "@/store/useStore";

const CATALOG_LOGS = [
  "Unrolling Parchment Archive...",
  "Tracing Spinal Nerve Pathways...",
  "Rendering Cerebral Synapses...",
  "Mapping Anatomical Plates...",
  "Preparing Exhibition Catalog...",
  "Exhibition Ready...",
];

export default function LoadingScreen() {
  const setLoaded = useUIStore((state) => state.setLoaded);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.max(2, Math.floor(Math.random() * 12));
        return Math.min(100, prev + increment);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const expectedLogIndex = Math.min(
      CATALOG_LOGS.length - 1,
      Math.floor((progress / 100) * CATALOG_LOGS.length)
    );
    if (expectedLogIndex > logIndex) {
      setLogIndex(expectedLogIndex);
    }

    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsFading(true);
        const exitTimeout = setTimeout(() => {
          setLoaded(true);
        }, 800);
        return () => clearTimeout(exitTimeout);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, logIndex, setLoaded]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#e7d5b5] transition-all duration-1000 ease-in-out ${
        isFading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm w-full px-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#6b5e50]">
          INTERACTIVE PORTFOLIO
        </p>

        <h1 className="mt-2 font-serif text-3xl font-light text-[#1a1815]">
          DASARI ABHIRAM
        </h1>

        <div className="mt-6 font-mono text-2xl font-light text-[#1a1815]">
          {progress}%
        </div>

        {/* Minimal ink line progress bar */}
        <div className="relative mt-4 h-[2px] w-full overflow-hidden bg-[#3a3229]/15">
          <div
            className="h-full bg-[#1a1815] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 font-mono text-[11px] tracking-widest text-[#6b5e50] uppercase">
          {CATALOG_LOGS[logIndex]}
        </div>
      </div>
    </div>
  );
}
