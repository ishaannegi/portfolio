"use client";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Marquee from "react-fast-marquee";

function HeroSection() {
  return (
    <section className="relative flex flex-col justify-between py-12 lg:py-16 max-w-full">
      
      {/* Main Headline */}
      <h1 className="font-sans font-medium text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] 2xl:text-[10rem] text-text-primary tracking-tighter leading-[0.92] flex flex-col gap-1 md:gap-2 w-full">
        <span className="font-serif-italic text-[#b4fe15]">Hello,</span>
        <span>I'm Ishaan</span>
        <span>
          Negi <span className="font-serif-italic text-[#b4fe15]">&amp;</span>
        </span>
        <span>a builder of</span>
        <span>
          <span className="font-serif-italic text-[#b4fe15] mr-2 md:mr-4">reliable</span>
          <span>systems.</span>
        </span>
      </h1>

      {/* Bio & CTA Button Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end w-full pt-10 mt-10 border-t border-[#27272a]/30">
        {/* Left Column: Bio paragraph */}
        <div className="lg:col-span-2">
          <p className="text-gray-400 font-sans text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
            Final-year B.Tech CSE (IoT) at VIT. I build backend systems,
            DevOps pipelines, and AI-driven applications — from Q-learning
            schedulers to full-stack platforms deployed in production.
          </p>
        </div>
        {/* Right Column: Aligned CTA buttons + Social icons */}
        <div className="flex flex-col items-start lg:items-end gap-4 w-full">
          <div className="flex flex-wrap items-center gap-3">
            <Link className="flex items-center gap-2 rounded-sm bg-[#b4fe15] hover:bg-[#b4fe15]/90 text-black px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(180,254,21,0.25)] cursor-pointer" target="_blank" href={personalData.resume}>
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
            <Link href="#contact" className="border border-[#27272a] hover:border-[#b4fe15] flex items-center gap-2 rounded-sm bg-transparent px-6 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-text-primary transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer hover:bg-[#0d131f]">
              <span>Contact Me</span>
              <RiContactsFill size={16} />
            </Link>
          </div>
          {/* Social icons directly under the buttons */}
          <div className="flex items-center gap-5 mt-1 lg:mr-2">
            <Link href={personalData.github} target='_blank' className="transition-all text-[#b4fe15] hover:scale-125 duration-300">
              <BsGithub size={22} />
            </Link>
            <Link href={personalData.linkedIn} target='_blank' className="transition-all text-[#b4fe15] hover:scale-125 duration-300">
              <BsLinkedin size={22} />
            </Link>
            <Link href={personalData.leetcode} target='_blank' className="transition-all text-[#b4fe15] hover:scale-125 duration-300">
              <SiLeetcode size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stat Cards below */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12 w-full">
        {/* CGPA */}
        <div className="p-[18px] rounded-[4px] bg-[#13131A] border border-white/5 flex flex-col gap-[14px] relative overflow-hidden group hover:border-[#b4fe15]/30 hover:bg-[#1A1A23] transition-all duration-300 hover:-translate-y-1 rotate-[-0.6deg] hover:rotate-0">
          {/* Background Radial Glow */}
          <div className="absolute -right-8 -top-8 w-20 h-20 bg-[radial-gradient(circle_at_center,rgba(180,254,21,0.18)_0%,transparent_60%)] pointer-events-none opacity-60" />
          {/* Corner bracket accent */}
          <span className="absolute left-[6px] top-[6px] w-[6px] h-[6px] border-l border-t border-[#4A4A52] pointer-events-none" />
          
          <div className="flex items-center justify-between gap-[10px] w-full z-10">
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase font-semibold">CGPA</span>
            <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 28 28" aria-hidden="true">
              <circle cx="14" cy="14" r="11" fill="none" strokeWidth="1.5" stroke="rgba(237, 234, 226, 0.08)" />
              <circle cx="14" cy="14" r="11" fill="none" strokeWidth="1.5" stroke="#b4fe15"
                strokeDasharray={`${2 * Math.PI * 11 * 0.838} ${2 * Math.PI * 11}`} strokeLinecap="round" transform="rotate(-90 14 14)" className="drop-shadow-[0_0_4px_rgba(180,254,21,0.15)]" />
            </svg>
          </div>
          <div className="flex items-baseline gap-[8px] w-full z-10">
            <span className="text-3xl sm:text-4xl font-sans font-medium text-text-primary tracking-tight">8.38</span>
            <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">/ 10</span>
          </div>
        </div>

        {/* Year */}
        <div className="p-[18px] rounded-[4px] bg-[#13131A] border border-white/5 flex flex-col gap-[14px] relative overflow-hidden group hover:border-[#b4fe15]/30 hover:bg-[#1A1A23] transition-all duration-300 hover:-translate-y-1 rotate-[0.8deg] hover:rotate-0">
          <div className="absolute -right-8 -top-8 w-20 h-20 bg-[radial-gradient(circle_at_center,rgba(180,254,21,0.18)_0%,transparent_60%)] pointer-events-none opacity-60" />
          <span className="absolute left-[6px] top-[6px] w-[6px] h-[6px] border-l border-t border-[#4A4A52] pointer-events-none" />
          
          <div className="flex items-center justify-between gap-[10px] w-full z-10">
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase font-semibold">YEAR</span>
            <span className="flex gap-1 items-center h-7" aria-hidden="true">
              <span className="w-[7px] h-[7px] rounded-full bg-[#b4fe15] border border-[#b4fe15] shadow-[0_0_6px_rgba(180,254,21,0.18)]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#b4fe15] border border-[#b4fe15] shadow-[0_0_6px_rgba(180,254,21,0.18)]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#b4fe15] border border-[#b4fe15] shadow-[0_0_6px_rgba(180,254,21,0.18)]" />
              <span className="w-[7px] h-[7px] rounded-full bg-[#b4fe15] border border-[#b4fe15] shadow-[0_0_6px_rgba(180,254,21,0.18)]" />
            </span>
          </div>
          <div className="flex items-baseline gap-[8px] w-full z-10">
            <span className="text-3xl sm:text-4xl font-sans font-medium text-text-primary tracking-tight">4th</span>
            <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">of 4</span>
          </div>
        </div>

        {/* Projects */}
        <div className="p-[18px] rounded-[4px] bg-[#13131A] border border-white/5 flex flex-col gap-[14px] relative overflow-hidden group hover:border-[#b4fe15]/30 hover:bg-[#1A1A23] transition-all duration-300 hover:-translate-y-1 rotate-[-0.4deg] hover:rotate-0">
          <div className="absolute -right-8 -top-8 w-20 h-20 bg-[radial-gradient(circle_at_center,rgba(180,254,21,0.18)_0%,transparent_60%)] pointer-events-none opacity-60" />
          <span className="absolute left-[6px] top-[6px] w-[6px] h-[6px] border-l border-t border-[#4A4A52] pointer-events-none" />
          
          <div className="flex items-center justify-between gap-[10px] w-full z-10">
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase font-semibold">PROJECTS</span>
            <span className="grid grid-cols-3 gap-[2px] w-7 h-7 z-10" aria-hidden="true">
              <span className="w-[7px] h-[7px] border border-white/10 rounded-sm" />
              <span className="w-[7px] h-[7px] border border-white/10 rounded-sm" />
              <span className="w-[7px] h-[7px] bg-[#b4fe15] border border-[#b4fe15] rounded-sm" />
              <span className="w-[7px] h-[7px] border border-white/10 rounded-sm" />
              <span className="w-[7px] h-[7px] border border-white/10 rounded-sm" />
              <span className="w-[7px] h-[7px] bg-[#b4fe15] border border-[#b4fe15] rounded-sm" />
              <span className="w-[7px] h-[7px] bg-[#b4fe15] border border-[#b4fe15] rounded-sm" />
              <span className="w-[7px] h-[7px] bg-[#b4fe15] border border-[#b4fe15] rounded-sm" />
              <span className="w-[7px] h-[7px] bg-[#b4fe15] border border-[#b4fe15] rounded-sm" />
            </span>
          </div>
          <div className="flex items-baseline gap-[8px] w-full z-10">
            <span className="text-3xl sm:text-4xl font-sans font-medium text-text-primary tracking-tight">05</span>
            <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">shipped</span>
          </div>
        </div>

        {/* LeetCode */}
        <div className="p-[18px] rounded-[4px] bg-[#13131A] border border-white/5 flex flex-col gap-[14px] relative overflow-hidden group hover:border-[#b4fe15]/30 hover:bg-[#1A1A23] transition-all duration-300 hover:-translate-y-1 rotate-[0.7deg] hover:rotate-0">
          <div className="absolute -right-8 -top-8 w-20 h-20 bg-[radial-gradient(circle_at_center,rgba(180,254,21,0.18)_0%,transparent_60%)] pointer-events-none opacity-60" />
          <span className="absolute left-[6px] top-[6px] w-[6px] h-[6px] border-l border-t border-[#4A4A52] pointer-events-none" />
          
          <div className="flex items-center justify-between gap-[10px] w-full z-10">
            <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase font-semibold">LEETCODE</span>
            <svg className="w-7 h-7 text-[#b4fe15] z-10" viewBox="0 0 28 28">
              <circle cx="14" cy="14" r="11" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M14 6l1.8 3.7 4 0.6-2.9 2.8 0.7 4-3.6-1.9-3.6 1.9 0.7-4-2.9-2.8 4-0.6z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex items-baseline gap-[8px] w-full z-10">
            <span className="text-3xl sm:text-4xl font-sans font-medium text-[#EDEAE2] tracking-tight">250+</span>
            <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">solved</span>
          </div>
        </div>
      </div>

      {/* Large Scrolling Categories Marquee Banner */}
      <div className="w-full bg-black py-4 border-y border-[#27272a]/70 mt-16 overflow-hidden">
        <Marquee gradient={false} speed={50} play={true} direction="left">
          <span className="text-[#b4fe15] font-serif italic text-2xl mx-8 font-bold">Data Structures &amp; Algorithms</span>
          <span className="text-gray-600 text-2xl mx-4">✦</span>
          <span className="text-gray-100 text-2xl mx-8 font-semibold">DevOps &amp; CI/CD Pipelines</span>
          <span className="text-gray-600 text-2xl mx-4">✦</span>
          <span className="text-[#b4fe15] font-serif italic text-2xl mx-8 font-bold">Cloud Deployment &amp; Infrastructure</span>
          <span className="text-gray-600 text-2xl mx-4">✦</span>
          <span className="text-gray-100 text-2xl mx-8 font-semibold">Full-stack Software Systems</span>
          <span className="text-gray-600 text-2xl mx-4">✦</span>
        </Marquee>
      </div>
    </section>
  );
}

export default HeroSection;