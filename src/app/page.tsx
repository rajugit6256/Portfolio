"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/IntroStrip";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Page() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <main className="relative overflow-hidden font-sans">
      <div className="pointer-events-none absolute -left-[260px] top-10 h-[500px] w-[500px] rounded-full bg-[#7654e8] opacity-[0.12] blur-[110px]" />
      <div className="pointer-events-none absolute -right-[340px] top-[400px] h-[500px] w-[500px] rounded-full bg-[#1cabc9] opacity-[0.08] blur-[110px]" />

      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <BackToTop />
      <Footer />
    </main>
  );
}