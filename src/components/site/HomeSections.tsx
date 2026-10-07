import { ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

const topics = [
  {
    t: "A charge that looks off",
    pts: ["Renewal amounts that differ from what you expected", "Monthly versus yearly pricing explained in plain words", "What to ask your provider about payment details or a disputed charge"],
    cta: "Talk through a bill",
  },
  {
    t: "Ending or moving a subscription",
    pts: ["How cancellation terms and auto-renewal usually work", "Questions to ask before you stop a plan", "Carrying service over to a new car or replacement radio"],
    cta: "Ask about cancelling",
  },
  {
    t: "Choosing a plan",
    pts: ["Annual versus monthly options and who they suit", "Single-car, multi-car and family listening", "Making sense of promotions and channel line-ups"],
    cta: "Compare options",
  },
  {
    t: "Signal and reception trouble",
    pts: ["“No signal”, “check antenna” or endless loading messages", "A simple test-listening routine to rule out the basics", "Activation and refresh questions"],
    cta: "Get signal help",
  },
  {
    t: "Parts and accessories",
    pts: ["Antennas, power cords and Bluetooth docks", "Mounting cradles that fit your dashboard", "Compatibility advice for your make and model"],
    cta: "Ask about parts",
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
              What's on your <span className="font-serif font-normal normal-case italic text-primary">mind?</span>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground/70">
              Pick the topic closest to your question. One call to {PHONE_DISPLAY} covers every one of them.
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
  ["Listen together, pay less", "If several cars in your household use satellite radio, ask whether a combined arrangement could trim the total."],
  ["Look at yearly terms", "Paying for a year at once can cost less than month-to-month. Ask what's currently available and what conditions apply."],
  ["Sports without the sticker shock", "Follow your teams for less — ask what sports packages or promotions are running right now."],
  ["Right-size your plan", "A lighter plan may be all you need. We'll help you work out what you actually listen to."],
  ["Spend less time chasing deals", "We help you know what to ask for, so finding a better rate takes one conversation instead of several."],
];

export function SavingsIdeas() {
  return (
    <section className="bg-graphite py-20 text-ivory md:py-28" aria-labelledby="savings-title">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-metal">Smarter listening</p>
            <h2 id="savings-title" className="mt-4 text-5xl md:text-7xl lg:text-8xl">
              Turn the <span className="text-accent">cost</span> down
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            Five conversations worth having before your next renewal. What's on offer changes, so we'll help you ask the right questions.
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
          Car Sound Radio is an independent consultation service. We don't set prices or sell subscriptions, and no savings are guaranteed. Offers, eligibility and pricing are decided by your provider and change over time.
        </p>
      </div>
    </section>
  );
}

const quick = ["Activation help", "Billing questions", "Cancellation questions", "Signal troubleshooting"];

export function CallDesk() {
  return (
    <section className="border-t border-foreground/15 py-20 md:py-28" aria-labelledby="calldesk-title">
      <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-x-4 gap-y-10 px-5 md:px-10">
        <div className="col-span-12 lg:col-span-6">
          <p className="eyebrow text-muted-foreground">The call desk</p>
          <h2 id="calldesk-title" className="mt-4 text-5xl md:text-7xl lg:text-8xl">
            Prefer to <span className="font-serif font-normal normal-case italic text-primary">talk</span> it through?
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-foreground/75">
            Our advisors handle everyday satellite radio questions — getting set up, reception, bills and plan choices. Tell us about your car and what's going wrong, and we'll point you to the next step. Availability and offers may vary, so ask about hours when you call.
          </p>
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
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden /> Toll-free line
            </p>
            <p className="mt-6 break-words font-display text-5xl font-black leading-none transition-colors group-hover:text-accent sm:text-6xl md:text-7xl">
              {PHONE_DISPLAY}
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Tap to call <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden />
            </p>
            <p className="mt-8 border-t border-primary-foreground/25 pt-4 text-xs text-primary-foreground/65">
              Independent assistance, not affiliated with any satellite radio provider.
            </p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
