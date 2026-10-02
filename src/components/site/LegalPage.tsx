import type { ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:py-24">
      <p className="eyebrow text-muted-foreground">Legal</p>
      <h1 className="mt-4 text-5xl sm:text-6xl md:text-8xl">{title}</h1>
      <div className="mt-12 space-y-6 leading-relaxed text-foreground/80 [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:text-foreground">
        {children}
      </div>
    </article>
  );
}
