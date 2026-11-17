import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects, SECTION_WRAP } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.name} · Raju Kumar`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-[260px] top-10 h-[500px] w-[500px] rounded-full bg-[#7654e8] opacity-[0.10] blur-[110px]" />
      <div className="pointer-events-none absolute -right-[340px] top-[400px] h-[500px] w-[500px] rounded-full bg-[#1cabc9] opacity-[0.06] blur-[110px]" />

      <article className={`${SECTION_WRAP} relative z-[1] pt-16 pb-24`}>
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[11px] font-bold tracking-[1.4px] text-accent">{project.type}</span>
            <span className="text-[11px] text-subtle">·</span>
            <span className="text-[11px] text-subtle">{project.year}</span>
            <span className="text-[11px] text-subtle">·</span>
            <span className="text-[11px] text-subtle">{project.status}</span>
          </div>
          <h1 className="mt-4 text-[clamp(36px,5vw,64px)] font-bold leading-[1.08] tracking-[-2.5px]">
            {project.name}
          </h1>
          <p className="mt-5 max-w-[640px] text-[17px] leading-[1.85] text-muted">
            {project.description}
          </p>
        </header>

        {/* Outcomes strip */}
        <div className="mt-10 grid grid-cols-1 gap-3 border-y border-border py-6 sm:grid-cols-3">
          {project.outcomes.map((o) => (
            <div key={o.label}>
              <div className="text-[26px] font-bold tracking-[-1px] text-text">{o.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[1.4px] text-subtle">{o.label}</div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="mt-14">
          <h2 className="text-[11px] font-bold uppercase tracking-[2px] text-accent">Overview</h2>
          <div className="mt-5 grid max-w-[780px] gap-4 text-[16px] leading-[1.9] text-muted">
            {project.overview.map((para, i) => (
              <p key={i}><Bold text={para} /></p>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-14">
          <h2 className="text-[11px] font-bold uppercase tracking-[2px] text-accent">Key challenges</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.challenges.map((c, i) => (
              <div key={c.title} className="rounded-2xl border border-border bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-surface-2 font-mono text-[12px] text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="text-[16px] font-bold">{c.title}</h3>
                </div>
                <p className="mt-4 text-[14px] leading-[1.8] text-muted">
                  <Bold text={c.body} />
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack + Highlights side by side */}
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[2px] text-accent">Tech stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded border border-border bg-surface-2 px-3 py-1.5 text-[12px] text-muted">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-[11px] font-bold uppercase tracking-[2px] text-accent">Highlights</h3>
            <ul className="mt-4 grid gap-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[14px] text-muted">
                  <Check size={16} className="mt-0.5 flex-none text-accent" />{h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Built with — npm packages */}
        {project.tools && project.tools.length > 0 && (
          <section className="mt-14">
            <h2 className="text-[11px] font-bold uppercase tracking-[2px] text-accent">Built with</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border bg-surface-2 px-2.5 py-1.5 font-mono text-[11px] text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {(project.demoUrl || project.githubUrl) && (
          <section className="mt-14 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b9a3ff] to-[#7eddf2] px-5 py-3 text-[14px] font-bold text-[#100d1b] shadow-[0_8px_28px_rgba(150,124,239,0.16)] transition-transform hover:-translate-y-0.5"
              >
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-[14px] font-bold text-text transition-colors hover:border-accent"
              >
                View on GitHub <ArrowUpRight size={16} />
              </a>
            )}
          </section>
        )}

        {/* Next project */}
        <section className="mt-16 border-t border-border pt-8">
          <p className="text-[11px] uppercase tracking-[2px] text-subtle">Continue reading</p>
          <NextProjectLink currentSlug={project.slug} />
        </section>
      </article>
    </main>
  );
}

function NextProjectLink({ currentSlug }: { currentSlug: string }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  const next = projects[(idx + 1) % projects.length];
  return (
    <Link
      href={`/projects/${next.slug}`}
      className="mt-3 flex items-center justify-between rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
    >
      <div>
        <div className="text-[11px] tracking-[1.4px] text-accent">{next.type}</div>
        <div className="mt-1 text-[18px] font-bold">{next.name}</div>
      </div>
      <ArrowUpRight className="text-muted" />
    </Link>
  );
}

/** Renders **bold** markers inside plain-text strings. */
function Bold({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-text">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}