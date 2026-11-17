import { Code2, Globe2, Zap } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { SECTION_WRAP, skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className={`${SECTION_WRAP} pt-20 pb-8 md:pt-[60px]`}>
      <SectionHeading
        eyebrow="MY TOOLKIT"
        title="Tools I use to bring ideas to life."
        description="A practical toolkit for building modern web applications, from interface development to testing and delivery."
      />
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {skills.map((group, index) => (
          <div key={group.title} className="rounded-xl border border-border bg-surface p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[20px] text-accent">0{index + 1}</span>
              <h3 className="text-[16px]">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md border border-border bg-surface-2 px-3 py-2 text-[12px] text-muted">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}