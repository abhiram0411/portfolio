"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import FadeIn from "@/components/FadeIn";

export const SKILL_ITEMS = [
  {
    name: "Full Stack Development",
    category: "Core Architecture",
    detail: "End-to-end web architecture combining scalable React/Next.js frontends with robust Node.js microservices and REST API integrations."
  },
  {
    name: "Java",
    category: "Backend Systems",
    detail: "Object-oriented software development, enterprise application logic, multi-threading, memory management, and core data structure implementations."
  },
  {
    name: "Python",
    category: "Data & AI",
    detail: "Data processing pipelines, AI model integration, automated testing, scripting, and backend API service development."
  },
  {
    name: "JavaScript",
    category: "Frontend Engine",
    detail: "Modern ES6+ asynchronous programming, DOM manipulation, event-driven architecture, and real-time WebGL rendering."
  },
  {
    name: "TypeScript",
    category: "Type Systems",
    detail: "Strict compile-time type safety, complex interface contracts, generic abstractions, and maintainable enterprise codebases."
  },
  {
    name: "React.js",
    category: "UI Framework",
    detail: "Declarative component design, custom hook architecture, state management with Zustand, and performant virtual DOM rendering."
  },
  {
    name: "Next.js",
    category: "SSR & Full-Stack",
    detail: "Server-Side Rendering (SSR), Static Site Generation (SSG), App Router, optimized asset delivery, and SEO best practices."
  },
  {
    name: "HTML5",
    category: "Semantic Markup",
    detail: "Accessible, semantic document structure, WCAG compliance, web worker integration, and rich audio/canvas APIs."
  },
  {
    name: "CSS3",
    category: "Styling & Motion",
    detail: "Advanced Flexbox/Grid layouts, CSS custom properties, responsive design systems, smooth keyframe animations, and Tailwind styling."
  },
  {
    name: "SQL",
    category: "Relational Data",
    detail: "Relational database schema design, indexing strategies, complex JOIN queries, transaction integrity, and performance tuning."
  },
  {
    name: "ServiceNow Development",
    category: "Enterprise ITSM",
    detail: "Enterprise ITSM workflows, custom scoped applications, Business Rules, Script Includes, Client Scripts, and Flow Designer automation."
  },
  {
    name: "AWS Cloud",
    category: "Cloud Infrastructure",
    detail: "Cloud infrastructure deployment using EC2 instances, S3 storage buckets, VPC networking, RDS databases, DynamoDB, and ECR repositories."
  },
  {
    name: "Docker",
    category: "Containerization",
    detail: "Containerizing microservices, writing multi-stage Dockerfiles, Docker Compose orchestration, and reproducible runtime environments."
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    detail: "Declarative cloud provisioning, Infrastructure as Code (IaC), state management, and automated multi-environment setup."
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    detail: "Branching strategies, interactive rebase workflows, pull-request reviews, merge conflict resolution, and CI/CD version tracking."
  },
  {
    name: "REST APIs",
    category: "Interface Contracts",
    detail: "RESTful API design standards, JSON payload schemas, HTTP status handling, authentication headers, and OpenAPI specification."
  },
  {
    name: "Three.js & WebGL",
    category: "3D Visuals",
    detail: "3D scene composition, custom shaders, GLTF/GLB model loading, studio lighting setups, raycasting, and camera rigging."
  },
  {
    name: "System Architecture",
    category: "Distributed Design",
    detail: "Designing decoupled, fault-tolerant, high-throughput software systems with clean separation of concerns."
  },
  {
    name: "Performance Optimization",
    category: "Profiling & Speed",
    detail: "Bundle size reduction, code splitting, image optimization, memory leak prevention, and 60fps WebGL rendering speed."
  },
  {
    name: "Problem Solving",
    category: "Algorithmic Reasoning",
    detail: "Algorithmic thinking, data structure selection, time and space complexity optimization, and systematic debugging."
  },
];

export default function Skills() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection("skills");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <section
      ref={ref}
      id="skills"
      className="relative min-h-[500vh] px-4 sm:px-12 lg:px-16 py-16 sm:py-20 pointer-events-none"
    >
      {/* Sticky / Fixed HUD during Skill Exploration */}
      <div
        id="skills-hud-container"
        data-active="false"
        className="fixed top-20 left-4 right-4 z-40 transition-all duration-500 opacity-0 translate-y-4 pointer-events-none data-[active=true]:opacity-100 data-[active=true]:translate-y-0 data-[active=true]:pointer-events-auto md:sticky md:top-32 md:left-auto md:right-auto md:z-30 md:opacity-100 md:translate-y-0 md:pointer-events-auto md:w-full md:max-w-[45vw] lg:max-w-[36vw] text-left flex flex-col gap-4 sm:gap-6"
      >
        {/* Desktop Title Header (Hidden on Mobile to ensure card is 100% visible on small screens) */}
        <div className="hidden md:block">
          <FadeIn>
            <div className="p-4 sm:p-0 rounded-xl bg-[#f5edde]/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border border-[#1a1815]/15 sm:border-none shadow-sm sm:shadow-none">
              <h3 className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-[#6b5e50] uppercase mb-1.5 sm:mb-2">
                Cognitive Capabilities
              </h3>
              <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#1a1815] uppercase tracking-tight break-words">
                Engineering Expertise
              </h2>
              <p className="font-serif text-xs sm:text-sm text-[#3a3229]/80 italic mt-1 sm:mt-2">
                Scroll through to inspect each skill mapping across the neural atlas.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Dynamic Skill HUD Card matching screenshot */}
        <div className="p-5 sm:p-6 rounded-[22px] border border-[#1a1815]/20 bg-[#f5edde]/95 backdrop-blur-md space-y-3 sm:space-y-4 transition-all duration-500 shadow-2xl">
          <div className="flex justify-between items-center border-b border-[#1a1815]/15 pb-2.5">
            <span className="font-mono text-xs tracking-[0.25em] text-[#a87d2a] uppercase font-bold" id="hud-category">
              CORE ARCHITECTURE
            </span>
            <span className="font-mono text-xs tracking-[0.2em] text-[#5a4d3e] font-semibold" id="hud-counter">
              01 / 20
            </span>
          </div>
          <div>
            <h4 className="font-serif text-2xl sm:text-3xl font-normal text-[#1a1815] transition-all" id="hud-title">
              Full Stack Development
            </h4>
            <p className="font-serif text-sm text-[#3a3229]/90 leading-relaxed pt-2 transition-all" id="hud-detail">
              End-to-end web architecture combining scalable React/Next.js frontends with robust Node.js microservices and REST API integrations.
            </p>
          </div>
          <div className="w-full bg-[#1a1815]/15 h-1.5 rounded-full overflow-hidden mt-3">
            <div className="bg-[#a87d2a] h-full transition-all duration-300 w-[5%]" id="hud-progress" />
          </div>
        </div>
      </div>

      <div className="h-[450vh]" />
    </section>
  );
}
