"use client";
import {useEffect,useRef,type ReactNode} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function FadeIn({children,className='',delay=0}:{children:ReactNode;className?:string;delay?:number}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const mm=gsap.matchMedia();mm.add('(prefers-reduced-motion: no-preference)',()=>{gsap.from(ref.current,{y:28,opacity:0,duration:.85,delay:delay/1000,ease:'power3.out',scrollTrigger:{trigger:ref.current,start:'top 94%',once:true}})});return()=>mm.revert()},[delay]);
 return <div ref={ref} className={className}>{children}</div>
}
