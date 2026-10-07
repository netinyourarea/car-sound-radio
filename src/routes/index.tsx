import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import heroRadio from "@/assets/hero-radio.jpg";
import insideControls from "@/assets/inside-controls.jpg";
import roadDriver from "@/assets/road-driver.jpg";
import roadDash from "@/assets/road-dash.jpg";
import upclose from "@/assets/upclose-grille.jpg";
import coupe from "@/assets/vehicle-coupe.jpg";
import ctaRoad from "@/assets/cta-road.jpg";
import { Reveal } from "@/components/site/Reveal";
import { CallDesk, HelpTopics, SavingsIdeas } from "@/components/site/HomeSections";
import { PHONE_DISPLAY, PHONE_HREF, services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Car Sound Radio — Make Every Drive Sound Different" },
      { name: "description", content: "Satellite radio setup, car audio upgrades, speaker improvements and infotainment help. Call (855) 932-0777." },
      { property: "og:title", content: "Car Sound Radio — Make Every Drive Sound Different" },
      { property: "og:description", content: "Better in-car sound and satellite radio assistance for every kind of vehicle." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <InsideTheSound />
      <ListeningExperience />
      <HelpTopics />
      <RadioToRoad />
      <AudioUpClose />
      <BuiltAroundVehicle />
      <SavingsIdeas />
      <Process />
      <CallDesk />
      <FinalCta />
    </>
  );
}

const freqs = ["88", "92", "96", "100", "104", "108"];

function Hero() {
  return (
    <section className="bg-graphite text-ivory" aria-labelledby="hero-title">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">
        {/* top meta row */}
        <div className="flex flex-wrap items-center justify-end gap-3 border-b border-ivory/15 pb-4">
          <p className="eyebrow flex items-center gap-2 text-metal">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden /> On air — FM / AM / SAT
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          {/* image in a rounded "speaker" frame */}
          <div className="relative lg:order-2 lg:col-span-5">
            <div className="anim-curtain relative mx-auto aspect-[4/5] max-h-[460px] overflow-hidden rounded-t-full border border-ivory/20 sm:aspect-[5/4] sm:max-h-[520px] lg:aspect-[4/5] lg:max-h-none">
              <img
                src={heroRadio}
                alt="Chrome vintage car radio with push buttons and tuning dial set into a cream leather dashboard in warm sunlight"
                width={1280}
                height={1600}
                fetchPriority="high"
                className="slow-pan h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between bg-accent px-4 py-3 text-accent-foreground sm:left-auto sm:w-64">
              <span className="eyebrow">Now tuning</span>
              <span className="font-display text-2xl font-black">101.7</span>
            </div>
          </div>

          {/* headline + copy */}
          <div className="flex min-w-0 flex-col justify-between lg:order-1 lg:col-span-7">
            <h1 id="hero-title" className="anim-up mt-6 text-[15vw] font-black leading-[0.85] sm:text-8xl lg:mt-0 lg:text-[7.5rem] xl:text-[9rem]">
              Make every <span className="text-accent">drive</span> sound{" "}
              <span className="font-serif font-normal normal-case italic tracking-normal text-metal">different.</span>
            </h1>
            <div className="anim-up mt-8 grid gap-6 sm:grid-cols-2 sm:items-end" style={{ animationDelay: "250ms" }}>
              <p className="max-w-sm text-base leading-relaxed text-ivory/75">
                Clearer radio, richer speakers and satellite listening that simply works. Car Sound Radio helps drivers improve and manage the sound inside their vehicle.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-3 bg-ivory px-5 py-4 font-display text-lg font-bold uppercase tracking-wide text-graphite transition-colors hover:bg-accent sm:text-xl"
                >
                  <Phone className="h-5 w-5 shrink-0" aria-hidden /> Call {PHONE_DISPLAY}
                </a>
                <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ivory/80 hover:text-ivory">
                  Explore services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* tuner dial strip */}
        <div className="mt-16 lg:mt-14" aria-hidden>
          <div className="relative h-10 border-b border-ivory/30 bg-[repeating-linear-gradient(90deg,color-mix(in_oklab,var(--ivory)_35%,transparent)_0_1px,transparent_1px_12px)] [background-position:bottom] [background-size:100%_40%] bg-no-repeat">
            <span className="absolute bottom-0 left-[68%] h-14 w-0.5 bg-accent" />
          </div>
          <div className="mt-2 flex justify-between text-[11px] tracking-[0.2em] text-metal">
            {freqs.map((f) => <span key={f}>{f}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

const annotations = [
  { n: "01", x: "38%", y: "46%", t: "The volume ring", d: "A physical control you can find without looking away from the road." },
  { n: "02", x: "72%", y: "58%", t: "Source & presets", d: "Radio, satellite, phone — switching between them should feel effortless." },
  { n: "03", x: "20%", y: "18%", t: "The cabin itself", d: "Materials, seating and layout all shape how sound travels to your ears." },
  { n: "04", x: "88%", y: "28%", t: "Hidden settings", d: "Balance, fader and tone menus most drivers never get around to adjusting." },
];

function InsideTheSound() {
  return (
    <section className="border-t border-foreground/15 py-20 md:py-32" aria-labelledby="inside-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid grid-cols-12 gap-4">
          <p className="eyebrow col-span-12 text-muted-foreground md:col-span-2">§ 02 — Anatomy</p>
          <h2 id="inside-title" className="col-span-12 text-6xl md:col-span-6 md:text-8xl">
            Inside the <span className="font-serif font-normal normal-case italic text-primary">sound</span>
          </h2>
          <p className="col-span-12 self-end text-foreground/75 md:col-span-3 md:col-start-10">
            Great in-car listening is a chain of small details. Here's where they live.
          </p>
        </div>

        <Reveal image className="relative mt-12 md:mt-16">
          <img
            src={insideControls}
            alt="Close-up of a brushed aluminium volume knob and media buttons set into an olive leather dashboard"
            width={1600}
            height={1104}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover md:aspect-[16/9]"
          />
          {annotations.map((a) => (
            <div key={a.n} className="group absolute" style={{ left: a.x, top: a.y }}>
              <span className="flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/80 bg-graphite/70 text-xs font-semibold text-ivory backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                {a.n}
              </span>
            </div>
          ))}
        </Reveal>

        <ol className="mt-10 grid gap-x-8 gap-y-8 border-t border-foreground/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {annotations.map((a, i) => (
            <Reveal as="li" key={a.n} delay={i * 90}>
              <span className="font-display text-3xl font-black text-accent">{a.n}</span>
              <h3 className="mt-2 font-sans text-sm font-bold normal-case tracking-normal">{a.t}</h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground/70">{a.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ListeningExperience() {
  const reel = [...services, ...services];
  return (
    <section className="overflow-hidden bg-card py-20 md:py-28" aria-labelledby="listen-title">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-5 md:flex-row md:items-end md:px-10">
        <h2 id="listen-title" className="text-5xl sm:text-6xl lg:text-8xl">
          Choose your<br />listening <span className="text-primary">experience</span>
        </h2>
        <p className="max-w-xs text-sm text-foreground/70">Six ways we help. Hover to pause the reel.</p>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="marquee flex w-max gap-6 px-5 md:gap-8">
          {reel.map((s, i) => (
            <Link
              key={`${s.slug}-${i}`}
              to="/services"
              hash={s.slug}
              aria-hidden={i >= services.length}
              tabIndex={i >= services.length ? -1 : undefined}
              className="group w-[72vw] shrink-0 sm:w-[42vw] md:w-[30vw] lg:w-[22vw]"
            >
              <div className="relative overflow-hidden bg-muted">
                <img
                  src={s.image}
                  alt={i >= services.length ? "" : s.alt}
                  width={s.w}
                  height={s.h}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 ${i % 2 ? "aspect-[4/3]" : "aspect-[4/3.6]"} ${i % 3 === 2 ? "sepia-[.25]" : ""}`}
                />
                <span className="absolute left-3 top-3 bg-ivory/90 px-2 py-1 font-display text-lg font-black leading-none text-graphite">{s.no}</span>
              </div>
              <div className="mt-4 flex gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl md:text-2xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{s.short}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RadioToRoad() {
  return (
    <section className="py-20 md:py-36" aria-labelledby="road-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10 px-5 md:px-10">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow text-muted-foreground">§ 04 — A short story</p>
          <h2 id="road-title" className="mt-4 text-6xl md:text-8xl">
            From radio<br /><span className="font-serif font-normal normal-case italic">to</span> road
          </h2>
        </div>
        <Reveal image className="col-span-10 col-start-3 md:col-span-6 md:col-start-7 md:row-span-2">
          <img src={roadDriver} alt="Woman singing along while driving a convertible on a sunny coastal road" width={1200} height={1504} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        </Reveal>

        <div className="col-span-12 grid gap-8 md:col-span-4 md:col-start-2 md:self-end">
          <p className="first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-primary font-serif text-xl leading-relaxed">
            A car is three things working together: the vehicle, the system inside it, and the person behind the wheel. When the audio is set up properly, the commute stops feeling like dead time.
          </p>
          <p className="text-sm leading-relaxed text-foreground/75">
            Properly configured equipment means presets you actually use, speakers that don't buzz at highway speeds, and a phone that connects the moment you sit down. And when something isn't right, convenient assistance means you're not left guessing.
          </p>
        </div>

        <Reveal image className="col-span-11 md:col-span-7">
          <img src={roadDash} alt="Dashboard and steering wheel photographed from a low angle in the footwell with sunlight through the windshield" width={1408} height={1008} loading="lazy" className="aspect-[16/10] w-full object-cover" />
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Fig. 4 — The driver's-eye view nobody photographs</p>
        </Reveal>
        <div className="col-span-12 self-center md:col-span-4 md:col-start-9">
          <div className="border-l-2 border-accent pl-6">
            <p className="font-display text-4xl font-extrabold uppercase leading-none">Vehicle.<br />System.<br /><span className="text-primary">Driver.</span></p>
            <p className="mt-4 text-sm text-foreground/70">Get all three in tune and every drive sounds different.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const closeNotes = [
  ["Clearer vocals", "Voices, podcasts and news should sit in front of road noise — not behind it."],
  ["Balanced sound", "Music that feels centred, rather than coming from the door by your knee."],
  ["Stronger bass", "Low notes with presence, without rattling the trim."],
  ["Convenient controls", "Settings that are easy to reach and easy to understand."],
  ["A better listen", "Put together, the cabin becomes a place you enjoy spending time."],
];

function AudioUpClose() {
  return (
    <section className="relative bg-graphite text-ivory" aria-labelledby="close-title">
      <div className="relative">
        <img src={upclose} alt="Macro close-up of a perforated brass speaker grille set into stitched tan leather" width={1600} height={1008} loading="lazy" className="h-[70vh] min-h-[480px] w-full object-cover md:h-[92vh]" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/40 to-transparent" aria-hidden />
        <div className="absolute inset-0 mx-auto flex max-w-[1440px] flex-col justify-between px-5 py-12 md:px-10 md:py-16">
          <p className="eyebrow text-metal">§ 05 — Detail study</p>
          <h2 id="close-title" className="max-w-xl text-6xl md:text-8xl lg:text-[9rem]">Audio,<br /><span className="font-serif font-normal normal-case italic text-accent">up close</span></h2>
        </div>
      </div>
      <div className="mx-auto grid max-w-[1440px] gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-5">
        {closeNotes.map(([t, d], i) => (
          <Reveal key={t} delay={i * 80} className="bg-graphite px-5 py-8 md:px-8">
            <span className="text-[11px] tracking-[0.2em] text-metal">0{i + 1}</span>
            <h3 className="mt-3 font-serif text-2xl font-normal normal-case italic leading-tight">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ivory/65">{d}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function BuiltAroundVehicle() {
  return (
    <section className="py-20 md:py-32" aria-labelledby="vehicle-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid lg:grid-cols-12 lg:items-center">
          <Reveal image className="lg:col-span-8 lg:col-start-1 lg:row-start-1">
            <img src={coupe} alt="Cream classic coupe parked in a sunlit stone courtyard, seen from the rear three-quarter angle" width={1600} height={1008} loading="lazy" className="aspect-[16/10] w-full object-cover" />
          </Reveal>
          <Reveal className="relative z-10 mt-6 border-l-2 border-accent bg-ivory p-7 shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--graphite)_40%,transparent)] md:p-10 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0 lg:p-12">
            <p className="eyebrow text-primary">§ 06 — Personal</p>
            <h2 id="vehicle-title" className="mt-4 text-4xl sm:text-5xl lg:text-7xl">Built around your vehicle</h2>
            <p className="mt-6 text-sm leading-relaxed text-foreground/75">
              A classic coupe, a family SUV and a work truck all have different dashboards, wiring and speaker layouts. What works in one may not suit another. That's why we start with a conversation about your car, your current setup and what you'd like to change.
            </p>
            <a href={PHONE_HREF} className="mt-8 inline-flex items-center gap-2 font-display text-2xl font-bold uppercase text-primary hover:text-graphite">
              Discuss your setup <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["Tell us about your vehicle", "Make, model, year and what's currently installed."],
  ["Understand your audio needs", "How you listen, what bothers you, what you'd love — including any satellite radio questions."],
  ["Find the right solution", "Clear options that suit your car and priorities."],
  ["Get back to enjoying the drive", "Turn the key, press play, and go."],
];

function Process() {
  return (
    <section className="border-t border-foreground/15 pt-20 pb-20 md:pt-28" aria-labelledby="process-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <h2 id="process-title" className="text-5xl md:text-7xl">The route</h2>
        <div className="relative mt-14">
          {/* road */}
          <div className="absolute left-[18px] top-0 h-full w-10 -translate-x-1/2 bg-graphite md:left-0 md:top-[18px] md:h-10 md:w-full md:translate-x-0 md:-translate-y-1/2" aria-hidden>
            <div className="absolute left-1/2 top-0 h-full w-0 -translate-x-1/2 border-l-2 border-dashed border-accent md:left-0 md:top-1/2 md:h-0 md:w-full md:translate-x-0 md:-translate-y-1/2 md:border-l-0 md:border-t-2" />
          </div>
          <ol className="relative grid gap-12 md:grid-cols-4 md:gap-8">
            {steps.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 120} className="relative pl-16 md:pl-0 md:pt-20">
                <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-graphite bg-accent font-display text-lg font-black text-accent-foreground md:left-4">
                  {i + 1}
                </span>
                <h3 className="text-3xl">{t}</h3>
                <p className="mt-2 max-w-xs text-sm text-foreground/70">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative bg-primary text-primary-foreground" aria-labelledby="cta-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10 px-5 py-16 md:px-10 md:py-24">
        <div className="col-span-12 md:col-span-7">
          <Reveal image>
            <img src={ctaRoad} alt="Open road through golden wheat fields seen over a car's hood in late afternoon light" width={1808} height={1104} loading="lazy" className="aspect-[16/10] w-full object-cover" />
          </Reveal>
        </div>
        <div className="col-span-12 flex min-w-0 flex-col justify-end md:col-span-5 md:pl-8">
          <p className="eyebrow text-primary-foreground/70">Ready when you are</p>
          <h2 id="cta-title" className="mt-4 text-6xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl">
            Your drive.<br /><span className="text-accent">Your sound.</span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
            Questions about satellite radio, your setup or a confusing bill? Call for an independent consultation.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-10 inline-flex w-fit items-center gap-3 bg-ivory px-6 py-4 font-display text-2xl font-bold text-graphite transition-colors hover:bg-accent"
          >
            <Phone className="h-5 w-5" aria-hidden /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
