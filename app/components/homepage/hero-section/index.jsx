"use client";
import { useState } from 'react';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Marquee from "react-fast-marquee";
import SpotlightCard from "../../helper/spotlight-card";
import GlowCard from "../../helper/glow-card";
import Aurora from "../../helper/aurora";
import BlurText from "../../helper/blur-text";
import GradientText from "../../helper/gradient-text";
import RotatingText from "../../helper/rotating-text";

function HeroSection() {
  const [isRunning, setIsRunning] = useState(false);
  const [runOutput, setRunOutput] = useState(null);

  const runCode = () => {
    setIsRunning(true);
    setRunOutput("Executing...");
    setTimeout(() => {
      setIsRunning(false);
      setRunOutput("true");
    }, 800);
  };

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <div className="flex flex-col items-start gap-2 relative w-full">
            {/* Soft localized name glow behind the text */}
            <div className="absolute -left-24 top-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#b4fe15]/10 to-[#10b981]/5 rounded-full filter blur-[100px] pointer-events-none -z-10"></div>
            <BlurText
              text="Hello, This is"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-3xl md:text-4xl font-light text-white/95 font-sans"
            />

            <GradientText
              colors={["#b4fe15", "#10b981", "#b4fe15", "#5eead4"]}
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
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600 hover:scale-105 transform inline-block">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#080808] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-300 ease-out hover:text-white hover:no-underline hover:scale-105 transform md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

          {/* Metric / Stat Cards */}
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
        <div className="order-1 lg:order-2 w-full">
          <GlowCard identifier="hero-coder">
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row items-center justify-between mb-4 border-b border-gray-800 pb-3">
                <div className="flex flex-row space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-200"></div>
                </div>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono font-semibold text-[#b4fe15] bg-[#b4fe15]/10 border border-[#b4fe15]/30 rounded hover:bg-[#b4fe15]/20 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all cursor-pointer"
                >
                  <span className="text-[10px]">▶</span> {isRunning ? "Running" : "Run"}
                </button>
              </div>
              <div className="overflow-hidden pt-1">
                <code className="font-mono text-xs md:text-sm lg:text-base">
                  <div className="blink">
                    <span className="mr-2 text-pink-500">const</span>
                    <span className="mr-2 text-white">coder</span>
                    <span className="mr-2 text-pink-500">=</span>
                    <span className="text-gray-400">{'{'}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                    <span className="text-gray-400">{`'`}</span>
                    <span className="text-amber-300">Ishaan Negi</span>
                    <span className="text-gray-400">{`',`}</span>
                  </div>
                  <div className="ml-4 lg:ml-8 mr-2">
                    <span className=" text-white">skills:</span>
                    <span className="text-gray-400">{`['`}</span>
                    <span className="text-amber-300">Java</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Spring Boot</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Docker</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Kubernetes</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Jenkins</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Graphite</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Grafana</span>
                    <span className="text-gray-400">{"', '"}</span>
                    <span className="text-amber-300">Nagios</span>
                    <span className="text-gray-400">{"'],"}</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                    <span className="text-orange-400">true</span>
                    <span className="text-gray-400">,</span>
                  </div>
                  <div>
                    <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                    <span className="text-orange-400">function</span>
                    <span className="text-gray-400">{'() {'}</span>
                  </div>
                  <div>
                    <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                    <span className="text-gray-400">{`(`}</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">hardWorker</span>
                    <span className="text-amber-300">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">problemSolver</span>
                    <span className="text-amber-300">&amp;&amp;</span>
                  </div>
                  <div>
                    <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                    <span className="mr-2 text-white">skills.length</span>
                    <span className="mr-2 text-amber-300">&gt;=</span>
                    <span className="text-orange-400">5</span>
                  </div>
                  <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                  <div><span className="ml-4 lg:ml-8 text-gray-400">{`}`}</span></div>
                  <div><span className="text-gray-400">{`};`}</span></div>
                </code>
                {runOutput !== null && (
                  <div className="mt-4 pt-4 border-t border-gray-800 font-mono text-xs md:text-sm transition-all duration-300">
                    <div className="text-gray-500">{`// console output`}</div>
                    <div className="text-gray-400 flex items-center gap-1">
                      <span className="text-[#b4fe15]">&gt;</span> coder.hireable()
                    </div>
                    <div className="text-[#b4fe15] font-bold pl-3 mt-1">
                      {runOutput}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </GlowCard>
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
};

export default HeroSection;