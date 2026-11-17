"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navItems } from "@/lib/data";

export function Header({ theme, setTheme }: {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 mx-auto flex mt-3 h-[78px] w-[min(1300px,calc(100%-40px))] items-center justify-between rounded-2xl border border-b border-border bg-header px-3.5 backdrop-blur-[18px]">
      <a
        className="group flex items-center gap-2.5 text-[21px] font-bold tracking-[-0.8px]"
        href="#home"
        aria-label="Raju Kumar home"
      >
        <span className="relative grid h-8 w-8 place-items-center rounded-[10px] border border-border bg-surface-2 text-[12px] font-bold tracking-[-0.5px] text-accent transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 group-hover:border-accent/50 group-hover:shadow-[0_0_24px_rgba(167,139,250,0.45)]">
          {/* subtle gradient wash inside the mark */}
          <span className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-accent/20 to-accent-2/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative">RK</span>
        </span>
        <span className="transition-colors duration-300 group-hover:text-accent">
          raju<span className="text-accent transition-all duration-300 group-hover:text-accent-2">.</span>
        </span>
      </a>

      <nav
        className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[67px] flex-col items-start gap-5 border-b border-border bg-surface p-5 text-[14px] font-semibold text-muted md:static md:flex md:flex-row md:items-center md:gap-[31px] md:border-0 md:bg-transparent md:p-0`}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a key={item} className="transition-colors hover:text-accent"
            onClick={(e) => {
              e.preventDefault(); // stop native jump
              setMenuOpen(false);
              document.getElementById(item.toLowerCase())?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        <button
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-text"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="hidden items-center gap-2.5 rounded-lg bg-gradient-to-r from-[#b9a3ff] to-[#7eddf2] px-3.5 py-2.5 text-[13px] font-bold text-[#100d1b] shadow-[0_8px_28px_rgba(150,124,239,0.16)] transition-transform hover:-translate-y-0.5 md:inline-flex" href="#contact">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-text md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}