"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { artTone, iconTone, projects, SECTION_WRAP } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className={`${SECTION_WRAP} pt-20 pb-8 md:pt-[60px]`}>
      <SectionHeading
        eyebrow="SELECTED WORK"
        title={<>A closer look at<br />what I&apos;ve built.</>}
        description="A mix of product work and hands-on engineering. Click any project to read the full story."
      />
      <div className="grid grid-cols-1 gap-[17px] md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;
          const art = artTone[project.tone as keyof typeof artTone];
          const icon = iconTone[project.tone as keyof typeof iconTone];
          return (
            <Link
              key={project.number}
              href={`/projects/${project.slug}`}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <motion.article
                className="h-full overflow-hidden rounded-[13px] border border-border bg-surface transition-colors group-hover:border-[rgba(167,139,250,0.55)]"
                whileHover={{ y: -7 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`relative grid h-[190px] place-items-center overflow-hidden bg-gradient-to-br ${art}`}>
                  <div className="project-art-grid absolute inset-0 opacity-25" />
                  <div className="absolute h-[140px] w-[140px] rounded-full border border-[rgba(190,176,255,0.3)] shadow-[0_0_55px_rgba(156,127,255,0.2),inset_0_0_35px_rgba(156,127,255,0.12)]" />
                  <div className={`relative z-[1] grid h-[82px] w-[82px] -rotate-[8deg] place-items-center rounded-[22px] border bg-[rgba(15,17,29,0.7)] ${icon}`}>
                    <Icon size={38} strokeWidth={1.4} />
                  </div>
                  <span className="absolute left-4 top-4 font-mono text-[20px] text-white/65">{project.number}</span>
                  <span className="absolute bottom-4 right-4 text-[11px] text-white/65">{project.note}</span>
                </div>
                <div className="p-5 md:px-5 md:pb-5 md:pt-6">
                  <span className="text-[10px] font-bold tracking-[1.4px] text-accent">{project.type}</span>
                  <h3 className="my-2.5 text-[19px] tracking-[-0.5px]">{project.name}</h3>
                  <p className="min-h-[78px] text-[13px] leading-[1.8] text-muted max-md:min-h-0">{project.description}</p>
                  <ul className="my-4 grid list-none gap-2.5 p-0">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[12px] text-muted">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />{h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span key={s} className="rounded border border-border bg-surface-2 px-2 py-1.5 text-[10px] text-muted">{s}</span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Read case study <ArrowUpRight size={14} />
                  </span>
                </div>
              </motion.article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}