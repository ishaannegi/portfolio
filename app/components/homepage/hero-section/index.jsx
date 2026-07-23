"use client";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Marquee from "react-fast-marquee";
import SpotlightCard from "../../helper/spotlight-card";
import BlurText from "../../helper/blur-text";
import GradientText from "../../helper/gradient-text";
import RotatingText from "../../helper/rotating-text";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        
        {/* Left Side: Headline, Social Links, Buttons, and Stat Cards */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <div className="flex flex-col items-start gap-2 relative w-full">
            {/* Soft localized name glow behind the text */}
            <div className="absolute -left-24 top-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#b4fe15]/0.06 to-[#00f2fe]/0.03 rounded-full filter blur-[100px] pointer-events-none -z-10"></div>
            <BlurText
              text="Hello, This is"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl font-light text-white/95 font-sans"
            />

            <GradientText
              colors={["#b4fe15", "#00f2fe"]}
              animationSpeed={4}
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter font-sans leading-[1.05]"
            >
              {personalData.name}
            </GradientText>

            <RotatingText
              texts={["Backend SDE", "IoT Developer", "DSA Enthusiast"]}
              mainClassName="text-base md:text-lg text-gray-400 font-semibold font-mono mt-2 tracking-widest uppercase"
              staggerFrom="last"
              rotationInterval={2500}
            />
          </div>

          <div className="my-8 flex items-center gap-4">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={26} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={26} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={26} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r from-[#ff2a5f] to-[#7c3aed] p-[1px] rounded-full transition-all duration-300 hover:scale-105 transform inline-block">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#080808] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 cursor-pointer">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#ff2a5f] to-[#7c3aed] px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-300 ease-out hover:text-white hover:no-underline hover:scale-105 transform md:font-semibold cursor-pointer" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

          {/* Metric / Stat Cards (Restored in their original position) */}
          <div className="grid grid-cols-2 gap-4 mt-12 w-full">
            {/* CGPA */}
            <SpotlightCard className="p-4 rounded-lg border border-[#27272a] bg-[#09090b] flex flex-col justify-between h-28 relative overflow-hidden group hover:border-[#b4fe15] transition-all duration-300">
              <div className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">CGPA</div>
              <div className="text-2xl font-bold mt-2 font-mono text-gray-100">8.38 <span className="text-xs text-gray-500">/ 10</span></div>
              <div className="absolute right-4 bottom-4 w-6 h-6 border border-[#b4fe15] rounded-full border-t-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
            </SpotlightCard>
            {/* Year */}
            <SpotlightCard className="p-4 rounded-lg border border-[#27272a] bg-[#09090b] flex flex-col justify-between h-28 relative overflow-hidden group hover:border-[#b4fe15] transition-all duration-300">
              <div className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">YEAR</div>
              <div className="text-2xl font-bold mt-2 font-mono text-gray-100">4th <span className="text-xs text-gray-500">OF 4</span></div>
              <div className="absolute right-4 bottom-4 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b4fe15]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b4fe15]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b4fe15]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#b4fe15]"></span>
              </div>
            </SpotlightCard>
            {/* Projects */}
            <SpotlightCard className="p-4 rounded-lg border border-[#27272a] bg-[#09090b] flex flex-col justify-between h-28 relative overflow-hidden group hover:border-[#b4fe15] transition-all duration-300">
              <div className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">PROJECTS</div>
              <div className="text-2xl font-bold mt-2 font-mono text-gray-100">05 <span className="text-xs text-gray-500">SHIPPED</span></div>
              <div className="absolute right-4 bottom-4 grid grid-cols-2 gap-1 w-5 h-5">
                <span className="w-2 h-2 bg-[#b4fe15] rounded-sm"></span>
                <span className="w-2 h-2 bg-[#b4fe15] rounded-sm"></span>
                <span className="w-2 h-2 bg-[#b4fe15] rounded-sm"></span>
                <span className="w-2 h-2 bg-[#b4fe15] rounded-sm"></span>
              </div>
            </SpotlightCard>
            {/* LeetCode */}
            <SpotlightCard className="p-4 rounded-lg border border-[#27272a] bg-[#09090b] flex flex-col justify-between h-28 relative overflow-hidden group hover:border-[#b4fe15] transition-all duration-300">
              <div className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">LEETCODE</div>
              <div className="text-2xl font-bold mt-2 font-mono text-gray-100">250+ <span className="text-xs text-gray-500">SOLVED</span></div>
              <div className="absolute right-4 bottom-4 w-6 h-6 border border-dashed border-[#b4fe15]/50 rounded-full flex items-center justify-center text-[10px] text-[#b4fe15] font-mono">★</div>
            </SpotlightCard>
          </div>
        </div>

        {/* Right Side: Status Panel */}
        <div className="order-1 lg:order-2 w-full lg:pt-10">
          <div className="rounded-xl border border-[#1F2A22] bg-[#111318] p-5 shadow-[0_0_15px_rgba(31,42,34,0.3)] font-mono text-xs md:text-sm relative overflow-hidden">
            
            {/* Header: Dots + Pulse Status Dot + Title */}
            <div className="flex flex-row items-center justify-between mb-6 border-b border-[#1F2A22]/50 pb-3">
              <div className="flex flex-row items-center gap-3">
                {/* Traffic-light dots */}
                <div className="flex flex-row space-x-1.5 mr-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80"></div>
                </div>
                {/* pulsing status dot */}
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b4fe15] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b4fe15]"></span>
                </span>
                <span className="text-gray-300 font-bold tracking-wider text-[10px] uppercase">
                  SYSTEM STATUS
                </span>
              </div>
            </div>

            {/* Metrics List */}
            <div className="space-y-3.5 opacity-100">
              <div className="grid grid-cols-3 gap-2 border-b border-[#1F2A22]/30 pb-2">
                <span className="text-gray-500 font-medium">role</span>
                <span className="col-span-2 text-gray-200 font-semibold font-mono">backend sde · open to work</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-[#1F2A22]/30 pb-2">
                <span className="text-gray-500 font-medium">cgpa</span>
                <span className="col-span-2 text-gray-200 font-semibold font-mono">8.38 / 10</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-[#1F2A22]/30 pb-2">
                <span className="text-gray-500 font-medium">year</span>
                <span className="col-span-2 text-gray-200 font-semibold font-mono">4th of 4</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-[#1F2A22]/30 pb-2">
                <span className="text-gray-500 font-medium">projects</span>
                <span className="col-span-2 text-gray-200 font-semibold font-mono">05 shipped</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="text-gray-500 font-medium">leetcode</span>
                <span className="col-span-2 text-gray-200 font-semibold font-mono">250+ solved</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Large Scrolling Categories Marquee Banner */}
      <div className="w-full bg-black py-4 border-y border-[#27272a]/70 my-8 overflow-hidden">
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