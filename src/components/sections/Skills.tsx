"use client";

import { useEffect, useRef } from "react";
import { useUIStore } from "@/store/useStore";
import FadeIn from "@/components/FadeIn";

export const SKILL_ITEMS = [
  {
    name: "Full Stack Development",
    category: "Core Architecture",
    region: "Prefrontal Cortex",
    detail: "End-to-end web architecture combining scalable React/Next.js frontends with robust Node.js microservices and REST API integrations."
  },
  {
    name: "Java",
    category: "Backend Systems",
    region: "Motor Cortex",
    detail: "Object-oriented software development, enterprise application logic, multi-threading, memory management, and core data structure implementations."
  },
  {
    name: "Python",
    category: "Data & AI",
    region: "Somatosensory Cortex",
    detail: "Data processing pipelines, AI model integration, automated testing, scripting, and backend API service development."
  },
  {
    name: "JavaScript",
    category: "Frontend Engine",
    region: "Broca Area",
    detail: "Modern ES6+ asynchronous programming, DOM manipulation, event-driven architecture, and real-time WebGL rendering."
  },
  {
    name: "TypeScript",
    category: "Type Systems",
    region: "Wernicke Area",
    detail: "Strict compile-time type safety, complex interface contracts, generic abstractions, and maintainable enterprise codebases."
  },
  {
    name: "React.js",
    category: "UI Framework",
    region: "Premotor Region",
    detail: "Declarative component design, custom hook architecture, state management with Zustand, and performant virtual DOM rendering."
  },
  {
    name: "Next.js",
    category: "SSR & Full-Stack",
    region: "Auditory Cortex",
    detail: "Server-Side Rendering (SSR), Static Site Generation (SSG), App Router, optimized asset delivery, and SEO best practices."
  },
  {
    name: "HTML5",
    category: "Semantic Markup",
    region: "Parietal Lobe",
    detail: "Accessible, semantic document structure, WCAG compliance, web worker integration, and rich audio/canvas APIs."
  },
  {
    name: "CSS3",
    category: "Styling & Motion",
    region: "Visual Cortex",
    detail: "Advanced Flexbox/Grid layouts, CSS custom properties, responsive design systems, smooth keyframe animations, and Tailwind styling."
  },
  {
    name: "SQL",
    category: "Relational Data",
    region: "Hippocampus",
    detail: "Relational database schema design, indexing strategies, complex JOIN queries, transaction integrity, and performance tuning."
  },
  {
    name: "ServiceNow Development",
    category: "Enterprise ITSM",
    region: "Basal Ganglia",
    detail: "Enterprise ITSM workflows, custom scoped applications, Business Rules, Script Includes, Client Scripts, and Flow Designer automation."
  },
  {
    name: "AWS Cloud",
    category: "Cloud Infrastructure",
    region: "Thalamus Sync",
    detail: "Cloud infrastructure deployment using EC2 instances, S3 storage buckets, VPC networking, RDS databases, DynamoDB, and ECR repositories."
  },
  {
    name: "Docker",
    category: "Containerization",
    region: "Cerebellar Hemisphere",
    detail: "Containerizing microservices, writing multi-stage Dockerfiles, Docker Compose orchestration, and reproducible runtime environments."
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    region: "Superior Sagittal",
    detail: "Declarative cloud provisioning, Infrastructure as Code (IaC), state management, and automated multi-environment setup."
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    region: "Occipital Lobe",
    detail: "Branching strategies, interactive rebase workflows, pull-request reviews, merge conflict resolution, and CI/CD version tracking."
  },
  {
    name: "REST APIs",
    category: "Interface Contracts",
    region: "Lateral Sulcus",
    detail: "RESTful API design standards, JSON payload schemas, HTTP status handling, authentication headers, and OpenAPI specification."
  },
  {
    name: "Three.js & WebGL",
    category: "3D Visuals",
    region: "Occipito-Temporal",
    detail: "3D scene composition, custom shaders, GLTF/GLB model loading, studio lighting setups, raycasting, and camera rigging."
  },
  {
    name: "System Architecture",
    category: "Distributed Design",
    region: "Brain Stem Matrix",
    detail: "Designing decoupled, fault-tolerant, high-throughput software systems with clean separation of concerns."
  },
  {
    name: "Performance Optimization",
    category: "Profiling & Speed",
    region: "Cerebellum Vermis",
    detail: "Bundle size reduction, code splitting, image optimization, memory leak prevention, and 60fps WebGL rendering speed."
  },
  {
    name: "Problem Solving",
    category: "Algorithmic Reasoning",
    region: "Frontal Pole Axis",
    detail: "Algorithmic thinking, data structure selection, time and space complexity optimization, and systematic debugging."
  },
];

export default function Skills() {
  const setActiveSection = useUIStore((state) => state.setActiveSection);
  const activeSkillIndex = useUIStore((state) => state.activeSkillIndex);
  const ref = useRef<HTMLElement>(null);

  const safeIdx = Math.max(0, Math.min(SKILL_ITEMS.length - 1, activeSkillIndex));
  const currentSkill = SKILL_ITEMS[safeIdx];
  const progressPercent = ((safeIdx + 1) / SKILL_ITEMS.length) * 100;

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
      {/* Sticky / Fixed HUD aligned to left side during Skill Exploration */}
      <div
        id="skills-hud-container"
        data-active="false"
        className="fixed top-16 sm:top-20 left-4 right-4 z-40 transition-all duration-500 opacity-0 translate-y-4 pointer-events-none data-[active=true]:opacity-100 data-[active=true]:translate-y-0 data-[active=true]:pointer-events-auto md:fixed md:top-28 md:left-12 lg:left-16 md:right-auto md:w-[35vw] lg:w-[30vw] text-left flex flex-col gap-4 sm:gap-6"
      >
        {/* Desktop Title Header */}
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

        {/* Dynamic Skill HUD Card */}
        <div className="p-4 sm:p-6 rounded-sm border border-[#1a1815]/20 bg-[#f5edde]/95 backdrop-blur-md space-y-2.5 sm:space-y-4 transition-all duration-500 shadow-[4px_4px_0px_rgba(26,24,21,0.15)]">
          <div className="flex justify-between items-center border-b border-[#1a1815]/15 pb-2 gap-2">
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#a87d2a] uppercase font-bold truncate">
              {currentSkill.category} &bull; {currentSkill.region}
            </span>
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#5a4d3e] font-semibold shrink-0">
              {String(safeIdx + 1).padStart(2, "0")} / {SKILL_ITEMS.length}
            </span>
          </div>
          <div>
            <h4 className="font-serif text-lg sm:text-2xl font-normal text-[#1a1815] transition-all break-words">
              {currentSkill.name}
            </h4>
            <p className="font-serif text-xs sm:text-sm text-[#3a3229]/90 leading-relaxed pt-1.5 sm:pt-2 transition-all">
              {currentSkill.detail}
            </p>
          </div>
          <div className="w-full bg-[#1a1815]/15 h-0.5 mt-2 sm:mt-3">
            <div className="bg-[#a87d2a] h-full transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
      </div>

      <div className="h-[450vh]" />
    </section>
  );
}
