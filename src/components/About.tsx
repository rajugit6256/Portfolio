import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { SECTION_WRAP } from "@/lib/data";

export function About() {
  return (
    <section id="about" className={`${SECTION_WRAP} pt-20 pb-8 md:pt-[60px]`}>
      <SectionHeading
        eyebrow="A LITTLE ABOUT ME"
        title={<>Engineering the details<br />behind great experiences.</>}
        description="I enjoy the intersection of thoughtful design and solid engineering — building interfaces that are useful, accessible, and a pleasure to use."
      />
      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[1.3fr_.7fr] md:gap-[90px]">
        <div>
          <p className="mb-5 text-[16px] leading-[2] text-muted">
            I&apos;m a <strong className="text-text">Software Developer</strong> with 3 years of hands-on experience building full-stack web applications. My day-to-day work spans React.js, Next.js, and TypeScript on the frontend, and Node.js, Express, MongoDB, and PostgreSQL on the backend.
          </p>
          <p className="mb-5 text-[16px] leading-[2] text-muted">
            I care about clean component architecture, smooth interactions, and maintainable code — and I enjoy the full picture: from API design and database modeling with Prisma, to Redis caching, realtime features with Twilio Video, and performance work that measurably improves load times.
          </p>
          <a className="mt-2 inline-flex items-center gap-2 text-[14px] font-bold text-accent" href="https://www.linkedin.com/in/raju-kumar-668216261/" target="_blank" rel="noreferrer">
            More about my journey <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="grid max-w-[450px] grid-cols-2 gap-3">
          <div className="min-h-[110px] rounded-[11px] border border-border bg-surface p-5">
            <span className="block text-[38px] font-bold tracking-[-2px]">3<span className="text-[22px] text-accent">+</span></span>
            <span className="mt-1 block text-[12px] text-muted">Years of experience</span>
          </div>
          <div className="min-h-[110px] rounded-[11px] border border-border bg-surface p-5">
            <span className="block text-[38px] font-bold tracking-[-2px]">30<span className="text-[22px] text-accent">%</span></span>
            <span className="mt-1 block text-[12px] text-muted">Faster page loads</span>
          </div>
          <div className="col-span-2 min-h-[110px] rounded-[11px] border border-border bg-surface p-5">
            <span className="block text-[38px] font-bold tracking-[-2px]">200<span className="text-[22px] text-accent">+</span></span>
            <span className="mt-1 block text-[12px] text-muted">Live classes running daily</span>
          </div>
        </div>
      </div>
    </section>
  );
}