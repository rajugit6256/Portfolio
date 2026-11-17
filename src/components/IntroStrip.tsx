"use client";

import { useRef, useState } from "react";
import { SECTION_WRAP } from "@/lib/data";

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS",
  "Twilio SDK", "Jest", "AWS Amplify", "Git",
];


export function TechMarquee() {
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="overflow-hidden border-y border-border bg-surface py-6">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false);
          setHovered(null);
        }}
      >
        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent" />

        {/* Marquee track */}
        <div
          ref={trackRef}
          className="flex animate-marquee gap-8 whitespace-nowrap"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[...techStack, ...techStack].map((tech, i) => {
            const isActive = hovered === tech;
            return (
              <span
                key={`${tech}-${i}`}
                onMouseEnter={() => setHovered(tech)}
                onMouseLeave={() => setHovered(null)}
                className="relative flex items-center gap-8 text-[15px] font-semibold text-muted"
              >
                <span
                  className={`inline-block transition-all duration-300 ease-out ${isActive
                      ? "scale-125 text-accent drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]"
                      : "scale-100"
                    }`}
                >
                  {tech}
                </span>
                <span
                  aria-hidden
                  className={`h-1 w-1 rounded-full transition-colors duration-300 ${isActive ? "bg-accent" : "bg-accent/60"
                    }`}
                />
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}