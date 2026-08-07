"use client";

import { useEffect, useRef, useState, Component, ReactNode, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Html, ContactShadows, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { MODEL_PATH } from "@/config/modelConfig";
import { useUIStore } from "@/store/useStore";

// Preload model asset for immediate caching
useGLTF.preload(MODEL_PATH);

// ─────────────────────────────────────────────────────────────────────────────
// 20 SKILLS STORYTELLING DATA
// ─────────────────────────────────────────────────────────────────────────────
export const SKILLS_20 = [
  { id: 'sk-1',  name: 'Full Stack Development',    region: 'Prefrontal Cortex',    category: 'Core Architecture',    local: [0.0, 0.6, 0.8], camera: [-1.2, 0.4, 4.8], look: [0, 0.4, 0], dir: 'left' },
  { id: 'sk-2',  name: 'Java',                      region: 'Motor Cortex',          category: 'Backend Systems',     local: [-0.5, 0.7, 0.5], camera: [-1.8, 0.6, 4.5], look: [0, 0.5, 0], dir: 'left' },
  { id: 'sk-3',  name: 'Python',                    region: 'Somatosensory Cortex', category: 'Data & AI',           local: [0.5, 0.7, 0.4], camera: [ 1.8, 0.6, 4.5], look: [0, 0.5, 0], dir: 'right' },
  { id: 'sk-4',  name: 'JavaScript',                region: 'Broca Area',           category: 'Frontend Engine',     local: [-0.7, 0.2, 0.5], camera: [-2.0, 0.1, 4.2], look: [0, 0.1, 0], dir: 'left' },
  { id: 'sk-5',  name: 'TypeScript',                region: 'Wernicke Area',        category: 'Type Systems',        local: [0.7, 0.2, 0.4], camera: [ 2.0, 0.2, 4.2], look: [0, 0.2, 0], dir: 'right' },
  { id: 'sk-6',  name: 'React.js',                  region: 'Premotor Region',       category: 'UI Framework',        local: [-0.5, -0.1, 0.7], camera: [-1.8, -0.2, 4.4], look: [0, -0.1, 0], dir: 'left' },
  { id: 'sk-7',  name: 'Next.js',                   region: 'Auditory Cortex',      category: 'SSR & Full-Stack',    local: [0.5, -0.1, 0.7], camera: [ 1.8, -0.2, 4.4], look: [0, -0.1, 0], dir: 'right' },
  { id: 'sk-8',  name: 'HTML5',                     region: 'Parietal Lobe',         category: 'Semantic Markup',     local: [-0.6, 0.5, -0.2], camera: [-2.0, 0.4, 4.8], look: [0, 0.2, 0], dir: 'left' },
  { id: 'sk-9',  name: 'CSS3',                      region: 'Visual Cortex',         category: 'Styling & Motion',     local: [0.6, 0.5, -0.2], camera: [ 2.0, 0.4, 4.8], look: [0, 0.2, 0], dir: 'right' },
  { id: 'sk-10', name: 'SQL',                      region: 'Hippocampus',          category: 'Relational Data',     local: [0.0, -0.5, 0.7], camera: [-1.2, -0.6, 4.6], look: [0, -0.4, 0], dir: 'left' },
  { id: 'sk-11', name: 'ServiceNow Development',   region: 'Basal Ganglia',        category: 'Enterprise ITSM',     local: [-0.6, -0.3, 0.3], camera: [-2.0, -0.4, 4.6], look: [0, -0.3, 0], dir: 'left' },
  { id: 'sk-12', name: 'AWS Cloud',                 region: 'Thalamus Sync',         category: 'Cloud Infrastructure', local: [0.6, 0.8, -0.3], camera: [ 1.8, 0.8, 4.8], look: [0, 0.6, 0], dir: 'right' },
  { id: 'sk-13', name: 'Docker',                   region: 'Cerebellar Hemisphere', category: 'Containerization',    local: [-0.5, 0.8, -0.3], camera: [-1.8, 0.8, 4.8], look: [0, 0.6, 0], dir: 'left' },
  { id: 'sk-14', name: 'Terraform',                region: 'Superior Sagittal',    category: 'Infrastructure as Code', local: [0.0, 0.9, -0.4], camera: [-1.0, 1.4, 5.0], look: [0, 0.7, 0], dir: 'left' },
  { id: 'sk-15', name: 'Git & GitHub',             region: 'Occipital Lobe',        category: 'Version Control',     local: [-0.6, 0.1, -0.7], camera: [-2.2, 0.1, 5.0], look: [0, 0.0, 0], dir: 'left' },
  { id: 'sk-16', name: 'REST APIs',                region: 'Lateral Sulcus',       category: 'Interface Contracts', local: [0.6, 0.1, -0.7], camera: [ 2.2, 0.1, 5.0], look: [0, 0.0, 0], dir: 'right' },
  { id: 'sk-17', name: 'Three.js & WebGL',         region: 'Occipito-Temporal',    category: '3D Visuals',          local: [0.0, -0.4, -0.8], camera: [ 1.2, -0.5, 5.0], look: [0, -0.3, 0], dir: 'right' },
  { id: 'sk-18', name: 'System Architecture',     region: 'Brain Stem Matrix',    category: 'Distributed Design',  local: [-0.4, -0.7, -0.5], camera: [-1.6, -0.8, 5.0], look: [0, -0.5, 0], dir: 'left' },
  { id: 'sk-19', name: 'Performance Optimization',  region: 'Cerebellum Vermis',    category: 'Profiling & Speed',   local: [0.4, -0.7, -0.5], camera: [ 1.6, -0.8, 5.0], look: [0, -0.5, 0], dir: 'right' },
  { id: 'sk-20', name: 'Problem Solving',          region: 'Frontal Pole Axis',    category: 'Algorithmic Reasoning', local: [0.0, -0.9, -0.2], camera: [ 0.0, -1.2, 5.2], look: [0, -0.7, 0], dir: 'left' },
] as const;

// Global Store for active 2D anchor positions & active skill index
const annotationStore = {
  activeSkillIndex: -1, // -1 means no skill active (Hero or Chapter views)
  anchors: {} as Record<string, { x: number, y: number, visible: boolean }>,
};

// ─────────────────────────────────────────────────────────────────────────────
// MODEL PRE-FLIGHT CHECK
// ─────────────────────────────────────────────────────────────────────────────
type ModelStatus = "checking" | "found" | "missing" | "invalid_format";

function useModelCheck(url: string): ModelStatus {
  const [status, setStatus] = useState<ModelStatus>("checking");
  useEffect(() => {
    const ext = url.split(".").pop()?.toLowerCase();
    if (!ext || !["glb", "gltf", "fbx", "obj"].includes(ext)) {
      setStatus("invalid_format");
      return;
    }
    fetch(url, { method: "HEAD" })
      .then((res) => {
        if (res.ok) setStatus("found");
        else setStatus("missing");
      })
      .catch(() => setStatus("missing"));
  }, [url]);
  return status;
}

class ModelErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error) { console.error("Model Error:", error); }
  render() {
    if (this.state.hasError) return <PlaceholderScene reason="corrupt" />;
    return this.props.children;
  }
}

function PlaceholderScene({ reason }: { reason: "checking" | "missing" | "invalid_format" | "corrupt" }) {
  const labels: Record<string, string> = {
    checking: "VERIFYING ANATOMICAL MODEL...",
    missing: `MODEL NOT FOUND AT ${MODEL_PATH.toUpperCase()}`,
    invalid_format: "UNSUPPORTED MODEL FORMAT",
    corrupt: "FAILED TO PARSE GLB GEOMETRY",
  };
  return (
    <group>
      <mesh>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshStandardMaterial color="#c8b89a" wireframe transparent opacity={0.3} />
      </mesh>
      <Html center className="pointer-events-none text-center">
        <div className="rounded border border-[#3a3229]/20 bg-[#e7d5b5]/90 px-4 py-2 font-mono text-[10px] tracking-[0.25em] text-[#3a3229] uppercase shadow-sm backdrop-blur-sm">
          {labels[reason]}
        </div>
      </Html>
    </group>
  );
}

function LoadingOverlay() {
  const { progress } = useProgress();
  return (
    <Html center className="pointer-events-none text-center">
      <div className="flex flex-col items-center gap-2 rounded border border-[#3a3229]/20 bg-[#e7d5b5]/90 px-5 py-3 font-mono text-[10px] tracking-[0.25em] text-[#3a3229] uppercase shadow-sm backdrop-blur-sm">
        <span>LOADING BRAIN MODEL... {Math.round(progress)}%</span>
        <div className="h-[2px] w-24 overflow-hidden rounded bg-[#3a3229]/20">
          <div className="h-full bg-[#3a3229] transition-all duration-200" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </Html>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3D ANCHOR TRACKER
// ─────────────────────────────────────────────────────────────────────────────
function AnchorTracker({ id, position, modelRef }: { id: string; position: readonly number[]; modelRef: React.RefObject<THREE.Group | null> }) {
  const { camera, size } = useThree();
  const objRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (!objRef.current || !modelRef.current) return;
    
    const pos = new THREE.Vector3();
    objRef.current.getWorldPosition(pos);

    pos.project(camera);
    const x = (pos.x * 0.5 + 0.5) * size.width;
    const y = (pos.y * -0.5 + 0.5) * size.height;

    // Anchor is visible whenever projected inside camera frustum
    annotationStore.anchors[id] = { x, y, visible: pos.z < 1 };
  });

  return (
    <group ref={objRef} position={position as [number,number,number]}>
       <mesh>
         <sphereGeometry args={[0.025, 16, 16]} />
         <meshBasicMaterial color="#1a1815" depthTest={false} />
       </mesh>
       <mesh>
         <sphereGeometry args={[0.035, 16, 16]} />
         <meshBasicMaterial color="#e7d5b5" depthTest={false} side={THREE.BackSide} />
       </mesh>
    </group>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2D SVG OVERLAY FOR THE ACTIVE SKILL ANNOTATION
// ─────────────────────────────────────────────────────────────────────────────
function AtlasOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40" id="atlas-overlay">
      <svg className="w-full h-full absolute inset-0">
        {SKILLS_20.map(lbl => (
           <path key={lbl.id} id={`ann-path-${lbl.id}`} fill="none" stroke="#1a1815" strokeWidth="0.9" className="transition-opacity duration-300 opacity-0" />
        ))}
      </svg>
      {SKILLS_20.map(lbl => (
         <div key={lbl.id} id={`ann-text-${lbl.id}`} className="absolute left-0 top-0 flex flex-col items-end text-right gap-0.5 -translate-y-1/2 transition-opacity duration-300 opacity-0 whitespace-nowrap">
           <span className="font-mono text-[8px] tracking-[0.3em] text-[#a87d2a] uppercase font-bold">
             SKILL {lbl.id.replace('sk-', '').padStart(2, '0')} // {lbl.category}
           </span>
           <span className="font-serif text-lg font-medium text-[#1a1815] uppercase tracking-tight">
             {lbl.name}
           </span>
         </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// REAL MODEL
// ─────────────────────────────────────────────────────────────────────────────
function NervousSystemModel() {
  const { scene } = useGLTF(MODEL_PATH);
  const ref = useRef<THREE.Group>(null);
  const targetRotY = useRef(0);

  useEffect(() => {
    if (!scene) return;

    scene.scale.setScalar(1);
    scene.position.set(0, 0, 0);
    scene.updateMatrixWorld(true);

    const box = new THREE.Box3();
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
        if (mesh.geometry.boundingBox) {
          const b = mesh.geometry.boundingBox.clone();
          b.applyMatrix4(mesh.matrixWorld);
          box.union(b);
        }
      }
    });

    if (box.isEmpty()) return;

    const size = new THREE.Vector3();
    box.getSize(size);

    const targetSize = 2.2;
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = maxDim > 0 ? targetSize / maxDim : 1;

    scene.scale.setScalar(scale);
    scene.updateMatrixWorld(true);

    const scaledBox = new THREE.Box3();
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const b = mesh.geometry.boundingBox!.clone();
        b.applyMatrix4(mesh.matrixWorld);
        scaledBox.union(b);
      }
    });

    if (!scaledBox.isEmpty()) {
      const scaledCenter = new THREE.Vector3();
      scaledBox.getCenter(scaledCenter);
      scene.position.x = -scaledCenter.x;
      scene.position.y = -scaledCenter.y;
      scene.position.z = -scaledCenter.z;
    }
  }, [scene]);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        
        mats.forEach((m) => {
          if (m instanceof THREE.Material) {
            m.transparent = false;
            m.opacity = 1;
            m.depthWrite = true;
            m.side = THREE.DoubleSide;

            if (m instanceof THREE.MeshStandardMaterial || m instanceof THREE.MeshPhongMaterial || m instanceof THREE.MeshBasicMaterial) {
              if ("map" in m && m.map) {
                m.color.set("#ffffff");
              } else if ("color" in m && m.color) {
                m.color.set("#d4c3a3");
              }
              if ("roughness" in m) m.roughness = 0.5;
              if ("metalness" in m) m.metalness = 0.1;
            }
          }
        });
      }
    });
  }, [scene]);

  const scaleProgress = useRef(0);

  useFrame(({ clock, pointer }, delta) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();

    // Initial entrance fade-in animation for 3D brain
    if (scaleProgress.current < 1) {
      scaleProgress.current = Math.min(1, scaleProgress.current + delta * 1.5);
      const s = THREE.MathUtils.lerp(0.2, 1, scaleProgress.current);
      ref.current.scale.setScalar(s);
    }

    targetRotY.current += (pointer.x * 0.35 - targetRotY.current) * 0.045;
    ref.current.rotation.y = targetRotY.current;

    ref.current.position.y = Math.sin(t * 0.6) * 0.02;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} />
      {SKILLS_20.map(lbl => (
        <AnchorTracker key={lbl.id} id={lbl.id} position={lbl.local} modelRef={ref} />
      ))}
    </group>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CINEMATIC CAMERA RIG (Skills Exploration + Portfolio Chapters)
// ─────────────────────────────────────────────────────────────────────────────
function CameraRig() {
  const { camera, size } = useThree();
  const currentPos = useRef(new THREE.Vector3(-1.2, 0.0, 7.5));
  const currentLook = useRef(new THREE.Vector3(0.0, 0.0, 0.0));
  const lastActiveIdx = useRef(-1);

  const boundsRef = useRef({
    hero: { top: 0, height: 0 },
    about: { top: 0, height: 0 },
    skills: { top: 0, height: 0 },
    projects: { top: 0, height: 0 },
    certs: { top: 0, height: 0 },
    edu: { top: 0, height: 0 },
    contact: { top: 0, height: 0 },
  });

  useEffect(() => {
    const updateBounds = () => {
      const getB = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return { top: 0, height: 0 };
        const rect = el.getBoundingClientRect();
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollY, height: rect.height };
      };
      boundsRef.current = {
        hero: getB("hero"),
        about: getB("about"),
        skills: getB("skills"),
        projects: getB("projects"),
        certs: getB("certifications"),
        edu: getB("education"),
        contact: getB("contact"),
      };
    };

    updateBounds();
    window.addEventListener("resize", updateBounds, { passive: true });
    window.addEventListener("scroll", updateBounds, { passive: true });
    return () => {
      window.removeEventListener("resize", updateBounds);
      window.removeEventListener("scroll", updateBounds);
    };
  }, []);

  useFrame(() => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const viewH = size.height || window.innerHeight;
    const viewW = size.width || window.innerWidth;
    const isMobile = viewW < 768;

    let targetPos = isMobile ? new THREE.Vector3(0.0, 0.6, 6.6) : new THREE.Vector3(0.0, 0.2, 5.2);
    let targetLook = new THREE.Vector3(0.0, 0.0, 0.0);

    const { hero, about, skills, projects, certs, edu, contact } = boundsRef.current;

    const skillsRectTop = skills.top - scrollY;
    const skillsRectBottom = skillsRectTop + skills.height;

    // SKILL EXPLORATION ACTIVE CONDITION
    const isSkillsActive = skills.height > 0 && skillsRectTop <= 200 && skillsRectBottom >= viewH * 0.15;

    const hudContainer = document.getElementById("skills-hud-container");

    if (isSkillsActive) {
      if (hudContainer && hudContainer.getAttribute("data-active") !== "true") {
        hudContainer.setAttribute("data-active", "true");
      }

      const scrollableDistance = skills.height - viewH;
      const currentScroll = Math.max(0, -skillsRectTop);
      const progress = scrollableDistance > 0 ? Math.min(1, Math.max(0, currentScroll / scrollableDistance)) : 0;
      const idx = Math.min(19, Math.max(0, Math.floor(progress * 20)));

      annotationStore.activeSkillIndex = idx;
      const activeSkill = SKILLS_20[idx];

      // 180-degree horizontal rotation sweep across 20 skills (-80deg to +80deg)
      const angle = -Math.PI * 0.44 + progress * (Math.PI * 0.88);
      const radius = isMobile ? 3.4 : 2.8;

      // Dynamic vertical and elevation angle shift per skill
      const yOffset = isMobile
        ? 0.5 + (activeSkill.camera[1] || 0) * 0.2
        : (activeSkill.camera[1] || 0) * 0.3 + Math.sin(idx * 0.85) * 0.25;

      targetPos.set(
        Math.sin(angle) * radius,
        yOffset,
        Math.cos(angle) * radius
      );
      targetLook.set(0.0, isMobile ? 0.3 : 0.05, 0.0);

      // DOM HUD update ONLY on index change
      if (idx !== lastActiveIdx.current) {
        lastActiveIdx.current = idx;

        const catEl = document.getElementById("hud-category");
        const cntEl = document.getElementById("hud-counter");
        const ttlEl = document.getElementById("hud-title");
        const dtlEl = document.getElementById("hud-detail");
        const prgEl = document.getElementById("hud-progress");

        if (catEl) catEl.textContent = activeSkill.category;
        if (cntEl) cntEl.textContent = `${String(idx + 1).padStart(2, "0")} / 20`;
        if (ttlEl) ttlEl.textContent = activeSkill.name;
        if (dtlEl) {
          const details: Record<string, string> = {
            "Full Stack Development": "End-to-end web architecture combining scalable React/Next.js frontends with robust Node.js microservices and REST API integrations.",
            "Java": "Object-oriented software development, enterprise application logic, multi-threading, memory management, and core data structure implementations.",
            "Python": "Data processing pipelines, AI model integration, automated testing, scripting, and backend API service development.",
            "JavaScript": "Modern ES6+ asynchronous programming, DOM manipulation, event-driven architecture, and real-time WebGL rendering.",
            "TypeScript": "Strict compile-time type safety, complex interface contracts, generic abstractions, and maintainable enterprise codebases.",
            "React.js": "Declarative component design, custom hook architecture, state management with Zustand, and performant virtual DOM rendering.",
            "Next.js": "Server-Side Rendering (SSR), Static Site Generation (SSG), App Router, optimized asset delivery, and SEO best practices.",
            "HTML5": "Accessible, semantic document structure, WCAG compliance, web worker integration, and rich audio/canvas APIs.",
            "CSS3": "Advanced Flexbox/Grid layouts, CSS custom properties, responsive design systems, smooth keyframe animations, and Tailwind styling.",
            "SQL": "Relational database schema design, indexing strategies, complex JOIN queries, transaction integrity, and performance tuning.",
            "ServiceNow Development": "Enterprise ITSM workflows, custom scoped applications, Business Rules, Script Includes, Client Scripts, and Flow Designer automation.",
            "AWS Cloud": "Cloud infrastructure deployment using EC2 instances, S3 storage buckets, VPC networking, RDS databases, DynamoDB, and ECR repositories.",
            "Docker": "Containerizing microservices, writing multi-stage Dockerfiles, Docker Compose orchestration, and reproducible runtime environments.",
            "Terraform": "Declarative cloud provisioning, Infrastructure as Code (IaC), state management, and automated multi-environment setup.",
            "Git & GitHub": "Branching strategies, interactive rebase workflows, pull-request reviews, merge conflict resolution, and CI/CD version tracking.",
            "REST APIs": "RESTful API design standards, JSON payload schemas, HTTP status handling, authentication headers, and OpenAPI specification.",
            "Three.js & WebGL": "3D scene composition, custom shaders, GLTF/GLB model loading, studio lighting setups, raycasting, and camera rigging.",
            "System Architecture": "Designing decoupled, fault-tolerant, high-throughput software systems with clean separation of concerns.",
            "Performance Optimization": "Bundle size reduction, code splitting, image optimization, memory leak prevention, and 60fps WebGL rendering speed.",
            "Problem Solving": "Algorithmic thinking, data structure selection, time and space complexity optimization, and systematic debugging.",
          };
          dtlEl.textContent = details[activeSkill.name] || "";
        }
        if (prgEl) prgEl.style.width = `${((idx + 1) / 20) * 100}%`;
      }
    } else {
      if (hudContainer && hudContainer.getAttribute("data-active") !== "false") {
        hudContainer.setAttribute("data-active", "false");
      }

      // OUTSIDE SKILLS SECTION — Hide skill annotations
      annotationStore.activeSkillIndex = -1;
      if (lastActiveIdx.current !== -1) {
        lastActiveIdx.current = -1;
        SKILLS_20.forEach((skill) => {
          const path = document.getElementById(`ann-path-${skill.id}`);
          const text = document.getElementById(`ann-text-${skill.id}`);
          if (path) path.style.opacity = "0";
          if (text) text.style.opacity = "0";
        });
      }

      // Continuous camera animation for all other sections across the page
      const aboutTop = about.top - scrollY;
      const projectsTop = projects.top - scrollY;
      const certsTop = certs.top - scrollY;
      const eduTop = edu.top - scrollY;
      const contactTop = contact.top - scrollY;

      if (contactTop < viewH * 0.7) {
        // Contact section (exiting page)
        targetPos.set(0.0, isMobile ? 0.6 : 0.4, isMobile ? 6.5 : 5.5);
        targetLook.set(0.0, 0.0, 0.0);
      } else if (eduTop < viewH * 0.7) {
        // Education section
        targetPos.set(0.0, isMobile ? 0.4 : -0.5, isMobile ? 6.4 : 4.8);
        targetLook.set(0.0, 0.15, 0.0);
      } else if (certsTop < viewH * 0.7) {
        // Certifications section
        targetPos.set(isMobile ? 0.0 : -1.2, isMobile ? 0.7 : 1.2, isMobile ? 6.4 : 5.0);
        targetLook.set(0.0, 0.1, 0.0);
      } else if (projectsTop < viewH * 0.7) {
        // Projects section
        targetPos.set(isMobile ? 0.0 : 1.6, isMobile ? 0.6 : 0.4, isMobile ? 6.5 : 5.2);
        targetLook.set(0.0, 0.0, 0.0);
      } else if (aboutTop < viewH * 0.7) {
        // About section
        targetPos.set(isMobile ? 0.0 : -1.4, isMobile ? 0.7 : 0.5, isMobile ? 6.4 : 5.0);
        targetLook.set(0.0, 0.1, 0.0);
      } else {
        // Hero opening section
        targetPos.set(0.0, isMobile ? 0.5 : 0.2, isMobile ? 6.6 : 5.2);
        targetLook.set(0.0, 0.0, 0.0);
      }
    }

    // Smooth camera position and lookAt interpolation (prevents camera jittering)
    currentPos.current.lerp(targetPos, 0.06);
    currentLook.current.lerp(targetLook, 0.06);
    camera.position.copy(currentPos.current);
    camera.lookAt(currentLook.current);

    // Frame-synced overlay rendering
    const activeIdx = annotationStore.activeSkillIndex;
    SKILLS_20.forEach((skill, idx) => {
      const path = document.getElementById(`ann-path-${skill.id}`);
      const text = document.getElementById(`ann-text-${skill.id}`);
      if (!path || !text) return;

      if (activeIdx < 0 || idx !== activeIdx) {
        path.style.opacity = "0";
        text.style.opacity = "0";
        return;
      }

      const data = annotationStore.anchors[skill.id];
      if (!data || !data.visible) {
        path.style.opacity = "0";
        text.style.opacity = "0";
        return;
      }

      path.style.opacity = isMobile ? "0" : "0.85";
      text.style.opacity = isMobile ? "0" : "1";

      // On mobile screens, keep label safely bounded within screen horizontal margins
      const labelRightMargin = isMobile ? 16 : 28;
      const textW = Math.min(text.offsetWidth || 200, viewW - 32);
      const labelRightEdge = viewW - labelRightMargin;
      const labelLeftEdge = isMobile ? Math.max(16, labelRightEdge - textW) : labelRightEdge - textW;
      const textY = Math.max(isMobile ? 90 : 80, Math.min(data.y, viewH - (isMobile ? 120 : 80)));

      // Leader line: brain anchor → midpoint → left edge of label
      const midX = data.x + (labelLeftEdge - data.x) * 0.5;
      path.setAttribute("d", `M ${data.x} ${data.y} L ${midX} ${textY} L ${labelLeftEdge - 8} ${textY}`);

      text.style.transform = `translate(${labelLeftEdge}px, ${textY}px)`;
    });
  });

  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// CANVAS ROOT
// ─────────────────────────────────────────────────────────────────────────────
function SceneContent() {
  const modelStatus = useModelCheck(MODEL_PATH);

  return (
    <>
      <ambientLight intensity={1.8} color="#ffffff" />
      <directionalLight position={[6,10,8]} intensity={2.5} castShadow shadow-mapSize={[2048,2048]} color="#fffaf0" />
      <directionalLight position={[-6,4,-6]} intensity={1.2} color="#eddcc4" />
      <directionalLight position={[0,-5,4]} intensity={0.8} color="#dfd0b5" />
      <directionalLight position={[0, 6, -8]} intensity={1.0} color="#ffffff" />
      <ContactShadows position={[0,-1.6,0]} opacity={0.2} scale={6} blur={2.2} far={4} color="#2a2219" />

      {modelStatus === "checking" && <PlaceholderScene reason="checking" />}
      {modelStatus === "missing"  && <PlaceholderScene reason="missing" />}
      {modelStatus === "invalid_format" && <PlaceholderScene reason="invalid_format" />}

      {modelStatus === "found" && (
        <ModelErrorBoundary>
          <Suspense fallback={<LoadingOverlay />}>
            <NervousSystemModel />
          </Suspense>
        </ModelErrorBoundary>
      )}

      <CameraRig />
    </>
  );
}

export default function NeuralCanvas() {
  const isLoaded = useUIStore((s) => s.isLoaded);
  return (
    <>
      <div className={`fixed inset-0 -z-20 h-screen w-screen transition-opacity duration-1000 ${isLoaded?"opacity-100":"opacity-0"}`}>
        <Canvas
          shadows
          camera={{ position: [-1.2, 0.0, 7.5], fov: 45 }}
          gl={{ antialias: true, powerPreference: "high-performance", toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
        >
          <color attach="background" args={["#e7d5b5"]} />
          <fog attach="fog" args={["#e7d5b5", 8, 20]} />
          <SceneContent />
        </Canvas>
      </div>
      
      {/* 2D Atlas Overlay for active skill annotation */}
      {isLoaded && <AtlasOverlay />}
    </>
  );
}

