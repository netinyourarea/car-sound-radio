import { ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const topics = [
  {
    t: "Incorrect billing",
    pts: ["Unexpected or higher-than-expected renewal charges", "Monthly vs. annual pricing breakdowns explained", "Updating a payment method and billing dispute assistance"],
    cta: "Call billing support",
  },
  {
    t: "Cancel subscription",
    pts: ["Ask about subscription cancellation terms", "Stop automatic renewal on your vehicle's system", "Transfer service to a new car or replacement receiver"],
    cta: "Call cancellation help",
  },
  {
    t: "Know about plans",
    pts: ["Save up to 40%–50% with eligible annual rates", "Single-vehicle, multi-car and fleet options", "Promotional discount vouchers and channel line-ups"],
    cta: "Call to compare plans",
  },
  {
    t: "Signal not working",
    pts: ["Fix “No Signal”, “Check Antenna” or loading errors", "Preview Channel 184 audio test guidance", "Request a satellite signal refresh or activation"],
    cta: "Call technical support",
  },
  {
    t: "Shop parts & hardware",
    pts: ["Magnetic car antennas and replacement power cords", "Bluetooth dashboard docks and mounting cradles", "Expert advice on compatibility for your car make and model"],
    cta: "Inquire about parts",
  },
];

export function HelpTopics() {
  return (
    <section className="border-t border-foreground/15 py-20 md:py-32" aria-labelledby="topics-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-muted-foreground">Start here</p>
            <h2 id="topics-title" className="mt-4 text-5xl md:text-7xl">
              What can we help you with <span className="font-serif font-normal normal-case italic text-primary">today?</span>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground/70">
              Select your issue below. One call to {PHONE_DISPLAY} covers every one of them.
            </p>
          </div>
        </div>

        <ol className="col-span-12 border-t border-foreground/25 lg:col-span-8">
          {topics.map((x, i) => (
            <Reveal as="li" key={x.t} delay={i * 70} className="group border-b border-foreground/25">
              <a href={PHONE_HREF} className="grid gap-4 py-7 transition-colors hover:bg-accent/15 md:grid-cols-[4rem_1fr_auto] md:items-start md:gap-6 md:px-4">
                <span className="font-display text-3xl font-black text-accent">0{i + 1}</span>
                <div className="min-w-0">
                  <h3 className="text-3xl md:text-4xl">{x.t}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-foreground/70">
                    {x.pts.map((p) => (
                      <li key={p} className="flex gap-2"><span className="mt-2 h-px w-3 shrink-0 bg-foreground/50" aria-hidden />{p}</li>
                    ))}
                  </ul>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary md:pt-2">
                  {x.cta} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
                </span>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const savings = [
  ["Bigger family savings", "Combine eligible systems and cut your overall subscription cost with a family plan."],
  ["Save up to 40%", "Cut your annual cost with up to 40% off eligible annual plans. Terms apply."],
  ["Pay less for sports", "Enjoy sports coverage for less. Check current promotional pricing and eligibility."],
  ["Lower your monthly cost", "Explore available plans that can help reduce your monthly subscription expense."],
  ["More savings, less hassle", "Bundle eligible systems, lower your overall cost, and get help finding available savings."],
];

export function SavingsIdeas() {
  return (
    <section className="bg-graphite py-20 text-ivory md:py-28" aria-labelledby="savings-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-metal">Smarter listening</p>
            <h2 id="savings-title" className="mt-4 text-5xl md:text-7xl lg:text-8xl">
              Ways you may lower your <span className="text-accent">cost</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            Explore these savings options. Check current eligibility and pricing.
          </p>
        </div>

        {/* dial-style scale */}
        <div className="mt-12 h-6 border-b border-ivory/30 bg-[repeating-linear-gradient(90deg,color-mix(in_oklab,var(--ivory)_35%,transparent)_0_1px,transparent_1px_14px)] [background-position:bottom] [background-size:100%_50%] bg-no-repeat" aria-hidden />

        <ol className="mt-8 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-6">
          {savings.map(([t, d], i) => (
            <Reveal
              as="li"
              key={t}
              delay={i * 80}
              className={`flex flex-col p-6 md:p-8 lg:col-span-2 ${i === 1 ? "bg-accent text-accent-foreground" : "bg-graphite"} ${i >= 3 ? "lg:col-span-3" : ""} ${i === 4 ? "sm:col-span-2" : ""}`}
            >
              <span className={`font-display text-5xl font-black leading-none ${i === 1 ? "text-accent-foreground/60" : "text-metal"}`}>0{i + 1}</span>
              <h3 className="mt-6 font-serif text-3xl font-normal normal-case italic leading-tight">{t}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-accent-foreground/80" : "text-ivory/65"}`}>{d}</p>
            </Reveal>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ivory/50">
          Offers vary. Eligibility, pricing and duration are not guaranteed on this page. Plans are typically sold separately from radio hardware.
        </p>
      </div>
    </section>
  );
}

const quick = ["Call to activate your radio", "Live cancellation help now", "Call for billing issue", "Cancel your subs today"];

export function CallDesk() {
  return (
    <section className="border-t border-foreground/15 py-20 md:py-28" aria-labelledby="calldesk-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-6">
          <p className="eyebrow text-muted-foreground">Need help?</p>
          <h2 id="calldesk-title" className="mt-4 text-5xl md:text-7xl lg:text-8xl">
            Call for <span className="font-serif font-normal normal-case italic text-primary">assistance</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/75">
            Representatives can help with common questions — activation, signal issues, subscription billing and plan options. Call the number below to speak with someone about your situation. Offers and availability may vary.</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {quick.map((q) => (
              <li key={q}>
                <a href={PHONE_HREF} className="inline-flex items-center gap-2 border border-foreground/40 px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground">
                  <Phone className="h-3.5 w-3.5" aria-hidden /> {q}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Reveal className="col-span-12 lg:col-span-6">
          <a href={PHONE_HREF} className="group relative block overflow-hidden bg-primary p-8 text-primary-foreground md:p-12">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[repeating-linear-gradient(90deg,var(--accent)_0_18px,transparent_18px_30px)]" aria-hidden />
            <p className="eyebrow flex items-center gap-2 text-primary-foreground/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden /> Toll-free number
            </p>
            <p className="mt-6 break-words font-display text-5xl font-black leading-none transition-colors group-hover:text-accent sm:text-6xl md:text-7xl">
              {PHONE_DISPLAY}
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Tap to call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
            </p>
            <p className="mt-8 border-t border-primary-foreground/25 pt-4 text-xs text-primary-foreground/65">
              Toll-free · Common radio models · Ask about hours when you call
            </p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
