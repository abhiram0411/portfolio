"use client";
import {useEffect,useState} from 'react';
import SplitText from '@/components/react-bits/SplitText';
import FadeIn from '@/components/FadeIn';
import {useUIStore} from '@/store/useStore';
export default function Hero(){
 const loaded=useUIStore(s=>s.isLoaded);const [reduced,setReduced]=useState(true);
 useEffect(()=>{const m=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReduced(m.matches);update();m.addEventListener('change',update);return()=>m.removeEventListener('change',update)},[]);
 return <section id="hero" className="hero-section relative min-h-svh flex items-center px-6 sm:px-12 lg:px-16 pt-28 pb-20 pointer-events-none">
 <div className="hero-copy pointer-events-auto w-full md:w-[48%] lg:w-[42%]">
 <p className="eyebrow mb-8">Independent mind. Connected systems.</p>
 {loaded && !reduced ? <SplitText text="DASARI ABHIRAM" tag="h1" textAlign="left" splitType="words" delay={140} duration={1} trigger="load" className="hero-name"/>:<h1 className="hero-name">DASARI ABHIRAM</h1>}
 <FadeIn delay={150}><p className="hero-role">Software engineer.<br/><em>Curious by design.</em></p>
 <p className="hero-description">Building thoughtful software at the intersection of full-stack development, cloud systems, and intelligent automation.</p>
 <div className="hero-actions"><a className="primary-link" href="#projects">Explore selected work <span aria-hidden="true">↗</span></a><a className="secondary-link" href="#contact">Get in touch <span aria-hidden="true">↗</span></a></div>
 <div className="hero-meta"><span>Hyderabad, India</span><span>Learn · Build · Innovate</span></div></FadeIn>
 </div><a href="#about" className="scroll-note pointer-events-auto">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
 </section>
}
