type SectionProps = {
  kicker?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function Section({ kicker, title, description, children }: SectionProps) {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        {kicker ? (
          <div className="inline-block border-t-2 border-signal pt-2 text-xs font-semibold uppercase tracking-widest text-neutral-900">
            {kicker}
          </div>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-lg text-neutral-600">{description}</p>
        ) : null}
      </header>
      {children ? <div className="space-y-6">{children}</div> : null}
    </section>
  );
}
