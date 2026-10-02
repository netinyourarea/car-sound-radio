import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, PHONE_HREF, services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Car Sound Radio" },
      { name: "description", content: "Satellite radio setup, audio upgrades, speaker improvements, infotainment help, troubleshooting and personalised in-car audio." },
      { property: "og:title", content: "Car Audio & Satellite Radio Services" },
      { property: "og:description", content: "Six ways we help drivers improve and manage the sound inside their vehicle." },
    ],
  }),
  component: ServicesPage,
});

const layouts = [
  "md:grid-cols-[1.1fr_0.9fr]",
  "md:grid-cols-[0.8fr_1.2fr]",
  "md:grid-cols-[1fr_1fr]",
  "md:grid-cols-[0.9fr_1.1fr]",
  "md:grid-cols-[1.25fr_0.75fr]",
  "md:grid-cols-[0.85fr_1.15fr]",
];

function ServicesPage() {
  return (
    <>
      <section className="relative" aria-labelledby="svc-title">
        <div className="mx-auto max-w-[1440px] px-5 pt-8 md:px-10 md:pt-12">
          <p className="eyebrow text-muted-foreground">The service index</p>
          <h1 id="svc-title" className="anim-up mt-3 whitespace-nowrap text-[19vw] leading-[0.85] md:text-[13vw] xl:text-[11rem]">
            Services<span className="text-accent">.</span>
          </h1>
          <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-12 md:gap-8 md:items-end">
            <div className="anim-curtain overflow-hidden md:col-span-7">
              <img src={servicesHero} alt="Shelves of classic car radios and vintage valve radio equipment in a warm restoration workshop" width={1808} height={1104} fetchPriority="high" className="aspect-[16/10] w-full object-cover md:max-h-[420px]" />
            </div>
            <div className="grid gap-5 md:col-span-5">
              <p className="font-serif text-xl italic leading-snug md:text-2xl">From the first push-button radio to today's touchscreens — we help with all of it.</p>
              <nav aria-label="Services on this page">
                <ol className="space-y-1 text-sm">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <a href={`#${s.slug}`} className="flex gap-3 border-b border-foreground/10 py-1.5 hover:text-primary">
                        <span className="text-accent">{s.no}</span> {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-10 md:py-20">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className={`grid scroll-mt-8 items-center gap-8 border-t border-foreground/15 py-10 md:gap-16 md:py-24 ${layouts[i]}`}
            >
              <Reveal image className={`${flip ? "md:order-2" : ""}`}>
                <img
                  src={s.image}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  loading="lazy"
                  className={`w-full object-cover ${i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square"}`}
                />
              </Reveal>
              <Reveal className={flip ? "md:order-1" : ""}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-6xl font-black text-accent md:text-8xl">{s.no}</span>
                  <span className="h-px flex-1 bg-foreground/20" />
                </div>
                <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">{s.title}</h2>
                <p className="mt-6 max-w-lg leading-relaxed text-foreground/80">{s.body}</p>
                <ul className={`mt-8 grid max-w-lg gap-x-6 ${i % 2 ? "grid-cols-1" : "sm:grid-cols-2"}`}>
                  {s.points.map((p) => (
                    <li key={p} className="border-b border-foreground/15 py-2.5 text-sm">
                      <span className="mr-2 text-primary">—</span>{p}
                    </li>
                  ))}
                </ul>
                <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary hover:text-graphite">
                  <Phone className="h-4 w-4" aria-hidden /> Ask about this — {PHONE_DISPLAY}
                </a>
              </Reveal>
            </article>
          );
        })}
      </div>

      <section className="border-t border-foreground/15 bg-card">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-end md:px-10">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl">Not sure which<br />one you need?</h2>
          <a href={PHONE_HREF} className="inline-flex items-center gap-3 bg-primary px-6 py-4 font-display text-2xl font-bold text-primary-foreground hover:bg-graphite">
            <Phone className="h-5 w-5" aria-hidden /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
