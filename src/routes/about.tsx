import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import dial from "@/assets/about-dial.jpg";
import lake from "@/assets/about-lake.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Car Sound Radio" },
      { name: "description", content: "We help drivers improve and manage their in-car audio and satellite radio experience." },
      { property: "og:title", content: "About Car Sound Radio" },
      { property: "og:description", content: "An editorial look at why in-car sound matters, and how we help." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-[1440px] grid-cols-12 gap-4 px-5 pb-16 pt-10 md:px-10 md:pb-24" aria-labelledby="about-title">
        <p className="eyebrow col-span-12 text-muted-foreground md:col-span-2">Feature — About us</p>
        <h1 id="about-title" className="anim-up col-span-12 text-5xl sm:text-6xl md:col-span-10 md:text-7xl lg:text-8xl lg:text-[8.5rem]">
          We care about the part of the car you <span className="font-serif font-normal normal-case italic text-primary">hear.</span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10 px-5 md:px-10">
        <Reveal image className="col-span-12 sm:col-span-10 md:col-span-5 md:col-start-2">
          <img src={dial} alt="Hand turning the chrome knob of a classic car radio on an olive green dashboard in sunlight" width={1200} height={1504} loading="lazy" className="aspect-[4/5] max-h-[460px] w-full object-cover sm:max-h-none" />
        </Reveal>
        <div className="col-span-12 md:col-span-4 md:col-start-8 md:pt-24">
          <p className="first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-7xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-primary font-serif text-xl leading-relaxed">
            Car Sound Radio exists for a simple reason: drivers spend a lot of time in their cars, and the sound inside them matters more than most people realise.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-foreground/75">
            Our purpose is to help drivers improve and manage their in-car audio and satellite-radio experience. That might mean getting satellite radio working properly, explaining an unfamiliar infotainment screen, replacing speakers that have seen better days, or working out why the sound keeps cutting out.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/75">
            We'd rather explain things clearly than overwhelm you with jargon. You tell us about your vehicle and how you listen; we help you find a sensible way forward.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <blockquote className="mx-auto max-w-4xl border-y border-foreground/20 py-12 text-center">
            <p className="font-serif text-2xl italic leading-snug sm:text-3xl md:text-5xl">
              A favourite song on an open road. A clear voice on a long commute. That's what we're here to protect.
            </p>
          </blockquote>
        </div>
      </section>

      <section className="relative">
        <Reveal image>
          <img src={lake} alt="Vintage car interior with cream bench seat and a small portable radio, parked beside a lake in the morning" width={1600} height={1008} loading="lazy" className="h-[45vh] min-h-[300px] w-full object-cover md:h-[70vh]" />
        </Reveal>
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <div className="relative -mt-16 grid gap-8 bg-ivory p-6 sm:p-8 md:-mt-24 md:ml-auto md:w-[80%] md:gap-10 md:p-10 lg:w-[62%] lg:grid-cols-2 lg:p-12">
            <div>
              <h2 className="text-4xl md:text-5xl">What we help with</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">Satellite radio, audio upgrades, speakers, infotainment systems, troubleshooting and personalised advice — for classic and modern vehicles alike.</p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl">How we work</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">It starts with a phone call or message. We listen first, ask about your car and setup, then talk through options that make sense for you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 py-20 md:flex-row md:items-end md:px-10 md:py-28">
        <h2 className="text-4xl sm:text-6xl lg:text-8xl">Let's talk<br />about your car.</h2>
        <div className="flex flex-col gap-4">
          <a href={PHONE_HREF} className="font-display text-4xl font-black text-primary hover:text-graphite sm:text-5xl md:text-6xl">{PHONE_DISPLAY}</a>
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em]">
            Or send a message <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
