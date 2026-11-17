import { BriefcaseBusiness, Check } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { experience, SECTION_WRAP } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className={`${SECTION_WRAP} pt-20 pb-8 md:pt-[80px]`}>
      <SectionHeading
        eyebrow="WHERE I'VE WORKED"
        title="Experience that ships."
        description="Building and improving real product experiences with a focus on usability, performance, and maintainability."
      />

      <div className="relative grid gap-4">
        {/* Vertical timeline line (desktop only) */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[22px] top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent/60 via-border to-transparent md:block"
        />

        {experience.map((job, index) => {
          const isCurrent = index === 0;
          return (
            <article
              key={job.company}
              className="relative rounded-2xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-accent/40 md:p-8 md:pl-16"
            >
              {/* Timeline node (desktop) */}
              <div className="absolute left-0 top-8 hidden h-11 w-11 -translate-x-1/2 place-items-center rounded-full border-2 border-border bg-surface md:grid">
                <BriefcaseBusiness size={18} className="text-accent" />
                {isCurrent && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#54d6a0] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#54d6a0]" />
                  </span>
                )}
              </div>

              {/* Header */}
              <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-[22px] font-bold tracking-[-0.6px] md:text-[24px]">{job.role}</h3>
                  <div className="mt-1.5 text-[14px] text-muted">
                    {job.company}
                    <span>{job.product}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  {isCurrent && (
                    <span className="rounded-full bg-[#54d6a0]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1.2px] text-[#54d6a0]">
                      Current
                    </span>
                  )}
                  <span className="whitespace-nowrap rounded-full border border-border bg-surface-2 px-3 py-1 text-[11px] font-bold tracking-[1.2px] text-subtle">
                    {job.period.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Bullets */}
              <ul className="grid list-none gap-3 p-0">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[14px] leading-[1.75] text-muted"
                  >
                    <Check size={16} className="mt-1 flex-none text-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border bg-surface-2 px-2.5 py-1.5 text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}