import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6 py-16 font-sans text-text">
      {/* Ambient blobs — match the homepage look */}
      <div className="pointer-events-none absolute -left-[260px] top-10 h-[500px] w-[500px] rounded-full bg-[#7654e8] opacity-[0.12] blur-[110px]" />
      <div className="pointer-events-none absolute -right-[340px] bottom-0 h-[500px] w-[500px] rounded-full bg-[#1cabc9] opacity-[0.08] blur-[110px]" />

      <div className="relative z-[1] mx-auto w-full max-w-[640px] text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-3.5 py-2 text-[12px] font-bold tracking-[2px] text-accent">
          <Compass size={14} />
          LOST IN THE VOID
        </span>

        {/* Big 404 */}
        <h1 className="mt-8 text-[clamp(96px,18vw,180px)] font-bold leading-none tracking-[-8px]">
          <span className="gradient-text">404</span>
        </h1>

        {/* Headline */}
        <h2 className="mt-2 text-[clamp(24px,3vw,34px)] font-bold leading-[1.15] tracking-[-1px]">
          This page took a wrong turn.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-[1.85] text-muted">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or is
          temporarily unavailable. Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#b9a3ff] to-[#7eddf2] px-5 py-3.5 text-[14px] font-bold text-[#100d1b] shadow-[0_8px_28px_rgba(150,124,239,0.16)] transition-transform hover:-translate-y-0.5"
          >
            <Home size={17} />
            Back to home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-border bg-surface px-5 py-3.5 text-[14px] font-bold text-text transition-colors hover:border-accent"
          >
            <ArrowLeft size={17} />
            Explore my work
          </Link>
        </div>

        {/* Footer hint */}
        <p className="mt-12 text-[12px] tracking-[0.2px] text-subtle">
          Error code: <span className="font-mono text-accent">HTTP 404</span> · Not Found
        </p>
      </div>
    </main>
  );
}