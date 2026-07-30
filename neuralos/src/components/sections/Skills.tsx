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
      className="relative min-h-[300vh] px-6 sm:px-12 lg:px-16 py-20 pointer-events-none"
    >
      {/* Sticky HUD during Skill Exploration */}
      <div className="sticky top-24 sm:top-28 left-0 w-full max-w-full md:max-w-[45vw] lg:max-w-[36vw] text-left pointer-events-auto flex flex-col gap-6">
        <FadeIn>
          <div>
            <h3 className="font-mono text-[10px] tracking-[0.4em] text-[#6b5e50] uppercase mb-2">
              Plate III. // Cognitive Capabilities
            </h3>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1a1815] uppercase tracking-tight">
              Engineering Expertise
            </h2>
            <p className="font-serif text-sm text-[#3a3229]/80 italic mt-2">
              Scroll through to inspect each skill mapping across the neural atlas.
            </p>
          </div>
        </FadeIn>

        {/* Dynamic HUD indicator updated live by NeuralCanvas */}
        <div className="p-6 border border-[#1a1815]/20 bg-[#f5edde]/80 backdrop-blur-md space-y-4 transition-all duration-500 shadow-sm">
          <div className="flex justify-between items-center border-b border-[#1a1815]/10 pb-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-[#a87d2a] uppercase font-bold" id="hud-category">
              CORE ARCHITECTURE
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#6b5e50]" id="hud-counter">
              01 / 20
            </span>
          </div>
          <div>
            <h4 className="font-serif text-2xl font-normal text-[#1a1815] transition-all" id="hud-title">
              Full Stack Development
            </h4>
            <p className="font-serif text-xs text-[#3a3229]/80 leading-relaxed pt-2 transition-all" id="hud-detail">
              End-to-end web architecture combining scalable React/Next.js frontends with robust Node.js microservices and REST API integrations.
            </p>
          </div>
          <div className="w-full bg-[#1a1815]/10 h-1 rounded-full overflow-hidden mt-2">
            <div className="bg-[#a87d2a] h-full transition-all duration-300 w-[5%]" id="hud-progress" />
          </div>
        </div>
      </div>

      <div className="h-[250vh]" />
    </section>
  );
}
