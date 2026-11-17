"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import { SECTION_WRAP } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className={`${SECTION_WRAP} relative z-[1] grid min-h-[690px] grid-cols-1 items-center gap-5 pt-[85px] pb-16 md:grid-cols-[1.06fr_.94fr] md:gap-12 md:pt-[30px] md:pb-[100px]`}>
      <motion.div className="relative z-[2] max-w-[650px] md:max-w-none" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3 py-2 text-[12px] tracking-[0.2px] text-muted">
          <span className="h-[7px] w-[7px] rounded-full bg-[#54d6a0] shadow-[0_0_0_4px_rgba(84,214,160,0.12)]" />
          Open to full-stack &amp; frontend opportunities
        </div>
        <p className="text-[12px] font-bold tracking-[2px] text-accent">HELLO, I&apos;M RAJU KUMAR</p>
        <h1 className="mt-4 mb-6 text-[clamp(50px,6vw,84px)] font-bold leading-[1.04] tracking-[-5px]">
          I build full-stack<br />
          <span className="gradient-text">experiences</span> that<br />
          feel effortless<span className="text-accent">.</span>
        </h1>
        <p className="max-w-[520px] text-[17px] leading-[1.9] text-muted">
          Software Developer with 3 years of experience building scalable web applications — from pixel-perfect React &amp; Next.js interfaces to REST APIs in Node.js, Express, MongoDB, and PostgreSQL.
        </p>

        {/* Currently building */}
        {/* <div className="mt-4 inline-flex items-center gap-2 text-[12px] text-subtle">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
          Currently building LiveClass &amp; browser-based Python editor at CarveNiche
        </div> */}

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#b9a3ff] to-[#7eddf2] px-5 py-3.5 text-[14px] font-bold text-[#100d1b] shadow-[0_8px_28px_rgba(150,124,239,0.16)] transition-transform hover:-translate-y-0.5" href="#projects">
            Explore my work <ArrowUpRight size={18} />
          </a>
          <a className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-border bg-surface px-5 py-3.5 text-[14px] font-bold text-text transition-colors hover:border-accent" href="/resume.pdf" target="_blank" rel="noreferrer">
            <Download size={17} /> Download resume
          </a>
        </div>


        {/* Socials */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] font-semibold text-muted">
          <a className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent" href="https://github.com/Rajushk" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight size={13} className="opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent" href="https://www.linkedin.com/in/raju-kumar-668216261/" target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={13} className="opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a className="group inline-flex items-center gap-1.5 transition-colors hover:text-accent" href="mailto:rajukumarcrrit@gmail.com">
            <Mail size={16} /> Email
          </a>
        </div>
      </motion.div>

     
      <motion.div className="relative grid min-h-[340px] place-items-center md:min-h-[460px]" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
        {/* Ambient glow */}
        <div className="absolute h-[300px] w-[300px] rounded-full bg-gradient-to-br from-[rgba(150,112,255,0.28)] to-[rgba(76,202,231,0.13)] blur-[55px]" />

        {/* Orbits — 5 rings now */}
        <div className="absolute h-[220px] w-[340px] rotate-[-25deg] rounded-full border border-border md:h-[270px] md:w-[470px]" />
        <div className="absolute h-[270px] w-[300px] rotate-[35deg] rounded-full border border-border md:h-[340px] md:w-[390px]" />
        <div className="absolute h-[320px] w-[360px] rotate-[70deg] rounded-full border border-border/70 md:h-[400px] md:w-[460px]" />
        <div className="absolute h-[360px] w-[280px] rotate-[-60deg] rounded-full border border-border/50 md:h-[450px] md:w-[340px]" />
        <div className="absolute h-[180px] w-[440px] rotate-[15deg] rounded-full border border-border/60 md:h-[220px] md:w-[540px]" />

        {/* Code window */}
        <div className="relative z-[2] w-[94%] -rotate-3 overflow-hidden rounded-[14px] border border-[rgba(173,160,255,0.25)] bg-[rgba(17,19,31,0.94)] shadow-[0_28px_90px_rgba(0,0,0,0.38),0_0_60px_rgba(140,111,255,0.1)] md:w-[min(440px,100%)]">
          <div className="flex h-[43px] items-center justify-between border-b border-white/10 px-4 text-[12px] text-[#8d93a9]">
            <div className="flex gap-1.5">
              <i className="h-[7px] w-[7px] rounded-full bg-[#fa7e86]" />
              <i className="h-[7px] w-[7px] rounded-full bg-[#f5c66b]" />
              <i className="h-[7px] w-[7px] rounded-full bg-[#6ed5a0]" />
            </div>
            <span>raju.config.ts</span>
            <span className="text-[10px] text-[#a99bff]">TSX</span>
          </div>
          <div className="whitespace-nowrap px-3 py-4 font-mono text-[11px] leading-[2.1] text-[#e2e4f0] md:px-[18px] md:py-[23px] md:text-[12px]">
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">01</span><span className="text-[#c3a4ff]">const</span> <span className="text-[#8bc9ff]">developer</span> = {"{"}</div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">02</span>  name: <span className="text-[#a7e5c0]">&quot;Raju Kumar&quot;</span>,</div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">03</span>  role: <span className="text-[#a7e5c0]">&quot;Software Developer&quot;</span>,</div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">04</span>  stack: [</div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">05</span>    <span className="text-[#a7e5c0]">&quot;JavaScript&quot;</span>, <span className="text-[#a7e5c0]">&quot;TypeScript&quot;</span>, <span className="text-[#a7e5c0]">&quot;React&quot;</span>,</div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">06</span>    <span className="text-[#a7e5c0]">&quot;Next.js&quot;</span>, <span className="text-[#a7e5c0]">&quot;Node&quot;</span>, <span className="text-[#a7e5c0]">&quot;Express&quot;</span>,</div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">07</span>    <span className="text-[#a7e5c0]">&quot;PostgreSQL&quot;</span>, <span className="text-[#a7e5c0]">&quot;Prisma&quot;</span>, <span className="text-[#a7e5c0]">&quot;Redis&quot;</span>,</div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">08</span>    <span className="text-[#a7e5c0]">&quot;AWS&quot;</span>, <span className="text-[#a7e5c0]">&quot;ChatGPT&quot;</span></div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">09</span>  ],</div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">08</span>  mindset: <span className="text-[#a7e5c0]">&quot;Always learning&quot;</span></div>

            <div><span className="inline-block w-[30px] select-none text-[#626a82]">10</span>  focus: <span className="text-[#a7e5c0]">&quot;Realtime &amp; performance&quot;</span></div>
            <div><span className="inline-block w-[30px] select-none text-[#626a82]">11</span>{"}"};</div>
            <div className="flex items-center">
              <span className="inline-block w-[30px] select-none text-[#626a82]">12</span>
              <span className="text-[#7b849b]">{"// Full-stack: pixel-perfect UIs + reliable APIs"}</span>
              <span className="ml-1 inline-block h-[13px] w-1.5 bg-[#a995ff] align-middle" />
            </div>
          </div>
        </div>

        {/* Floating badges — 6 total, positioned around the code window */}
        <div className="absolute left-0 top-[22px] z-[3] flex items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3 py-2 text-[12px] font-bold shadow-card md:top-[50px] md:px-3.5 md:py-2.5">
          <span className="text-[20px] text-[#6ec9ef]">⚛</span><span>React.js</span>
        </div>
        <div className="absolute -right-1 top-[70px] z-[3] flex items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3 py-2 text-[12px] font-bold shadow-card md:top-[100px] md:px-3.5 md:py-2.5">
          <span className="rounded bg-[#f7df1e] px-1.5 py-0.5 text-[10px] font-bold text-[#222]">JS</span><span>JavaScript</span>
        </div>
        <div className="absolute -right-2 top-[130px] z-[3] hidden items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3 py-2 text-[12px] font-bold shadow-card md:top-[160px] md:flex md:px-3.5 md:py-2.5">
          <span className="rounded bg-black px-1.5 py-0.5 text-[10px] font-bold text-white">N</span><span>Next.js</span>
        </div>
        <div className="absolute -right-3 top-[220px] z-[3] hidden items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3 py-2 text-[12px] font-bold shadow-card lg:top-[230px] lg:flex lg:px-3.5 lg:py-2.5">
          <span className="rounded bg-[#3c873a] px-1.5 py-0.5 text-[10px] font-bold text-white">N</span><span>Node.js</span>
        </div>
        <div className="absolute bottom-[55px] left-0 z-[3] flex items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3 py-2 text-[12px] font-bold shadow-card md:bottom-[75px] md:left-2 md:px-3.5 md:py-2.5">
          <span className="rounded bg-[#336791] px-1.5 py-0.5 text-[10px] font-bold text-white">PG</span><span>PostgreSQL</span>
        </div>
        <div className="absolute bottom-[10px] left-[150px] z-[3] hidden items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3 py-2 text-[12px] font-bold shadow-card md:bottom-[5px] md:left-[170px] md:flex md:px-3.5 md:py-2.5">
          <span className="rounded bg-[#ff9900] px-1.5 py-0.5 text-[10px] font-bold text-white">AWS</span><span>AWS</span>
        </div>
        <div className="absolute bottom-[150px] -left-2 z-[3] hidden items-center gap-2.5 rounded-[10px] border border-border bg-surface px-3 py-2 text-[12px] font-bold shadow-card lg:bottom-[190px] lg:flex lg:px-3.5 lg:py-2.5">
          <span className="rounded bg-[#10a37f] px-1.5 py-0.5 text-[10px] font-bold text-white">AI</span><span>ChatGPT</span>
        </div>

        <div className="absolute -bottom-10 left-0 flex w-full items-center justify-center gap-2 text-[11px] text-muted md:-bottom-2 md:right-3.5 md:left-auto md:w-auto md:justify-end">
    <Sparkles size={15} /> Thoughtful code. Meaningful impact.
  </div>
      </motion.div>

      <a className="absolute bottom-[35px] left-0 hidden items-center gap-3 text-[10px] tracking-[1.8px] text-subtle md:flex" href="#about">
        <span>SCROLL TO EXPLORE</span><ArrowDown size={15} />
      </a>
    </section>
  );
}