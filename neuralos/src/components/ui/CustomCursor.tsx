"use client";

import { useEffect, useRef, useState } from "react";
import { useUIStore } from "@/store/useStore";

export default function CustomCursor() {
  const hoveredNeuron = useUIStore((state) => state.hoveredNeuron);
  const isLoaded = useUIStore((state) => state.isLoaded);
  
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const isVisibleRef = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isLoaded) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    
    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    let animationFrameId: number;
    
    const render = () => {
      const ease = 0.18;
      outlinePos.current.x += (mousePos.current.x - outlinePos.current.x) * ease;
      outlinePos.current.y += (mousePos.current.y - outlinePos.current.y) * ease;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList?.contains("interactive-node")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLoaded]);

  useEffect(() => {
    if (hoveredNeuron) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [hoveredNeuron]);

  if (!isLoaded) return null;

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          body, a, button, select, input, textarea {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Custom Cursor Dot */}
      <div
        ref={cursorDotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[99999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a1815] transition-opacity duration-300 ease-in-out md:block hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Custom Cursor Outline */}
      <div
        ref={cursorOutlineRef}
        className={`pointer-events-none fixed top-0 left-0 z-[99998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#3a3229]/40 transition-all duration-300 ease-out md:block hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isClicking
            ? "h-5 w-5 bg-[#3a3229]/20"
            : isHovered
            ? "h-12 w-12 border-[#1a1815] bg-[#3a3229]/10"
            : "h-7 w-7 bg-transparent"
        }`}
      />
    </>
  );
}
