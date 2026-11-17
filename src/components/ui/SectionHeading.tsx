export function SectionHeading({
  eyebrow, title, description,
}: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="mb-12">
      <span className="inline-flex items-center gap-2.5 text-[12px] font-bold tracking-[2px] text-accent">
        <span className="h-2 w-2 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-4 mb-3.5 text-[clamp(38px,4vw,54px)] font-bold leading-[1.12] tracking-[-2.2px]">{title}</h2>
      {description && <p className="max-w-[640px] text-[15px] leading-[1.85] text-muted">{description}</p>}
    </div>
  );
}