import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Car Sound Radio" },
      { name: "description", content: "Answers to common questions about satellite radio setup, subscription wording, billing questions and in-car audio troubleshooting." },
      { property: "og:title", content: "Car Sound Radio FAQ" },
      { property: "og:description", content: "Common questions about satellite radio and in-car audio." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  ["Which number should I call, and who answers?", `Call ${PHONE_DISPLAY}. You'll reach Car Sound Radio, an independent information and consultation line. We're a guide to satellite radio, not the provider's own customer service desk.`],
  ["What should I have ready before I call about activation?", "Your vehicle's make, model and year, plus the radio ID if you can find it. With those to hand we can explain the activation steps and what to expect. Timing and offers differ from one provider to the next."],
  ["Who can help if my satellite signal is poor?", "We can talk through common reception and antenna checks for cars, and for home or boat setups too. If the fault turns out to be on the provider's side, we'll tell you what to ask them."],
  ["Is this website owned by a satellite radio company?", "No. Car Sound Radio is independent. We aren't owned, run or endorsed by any satellite radio provider or hardware maker, and brand names mentioned belong to their owners."],
  ["Can you tell me about current deals and discounts?", "We can explain the kinds of promotions that tend to exist and what to ask your provider. We can't promise any price or discount: rates change, conditions apply, and plans are usually bought separately from the receiver."],
  ["Is Car Sound Radio a satellite radio provider?", "No. We're an independent consultation and assistance service. We're not affiliated with any satellite radio provider or equipment manufacturer, and we can't change or cancel your subscription. We can help you understand your options and know what to ask."],
  ["Can you help me set up satellite radio in my vehicle?", "Yes. We can talk you through compatibility, activation steps, presets and everyday controls for your vehicle."],
  ["How do I know if my car's radio supports satellite?", "It depends on the make, model and year, and on whether the radio is factory-fitted or aftermarket. Tell us about your vehicle and we'll help you work out what you have."],
  ["I don't recognise a charge on my bill. Can you help?", "We can help you make sense of subscription wording and work out which questions to ask. Billing and account changes are handled by your provider, so we'd point you to them for those."],
  ["What do the terms on my plan mean?", "Terms like trial period, renewal and package can be confusing. Call us and we'll explain them in plain language."],
  ["My satellite signal keeps cutting out. What should I check?", "Start with a clear view of the sky, then check the antenna connection and whether the problem happens in one place or everywhere. If it continues, call us and we'll work through it with you."],
  ["Do you help with receivers and accessories?", "We can talk through receivers, antennas and related accessories, and help you work out what suits your vehicle."],
  ["Can you help with audio problems that aren't satellite related?", "Yes. That includes upgrades, speakers, infotainment and phone pairing, and troubleshooting such as no sound, crackling or a dead speaker."],
] as const;

function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-[1440px] px-5 pb-10 pt-10 md:px-10 md:pt-14" aria-labelledby="faq-title">
        <p className="eyebrow text-muted-foreground">Common questions</p>
        <h1 id="faq-title" className="anim-up mt-3 text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          FAQ<span className="text-accent">.</span>
        </h1>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-10 md:pb-24">
        <Accordion type="single" collapsible className="max-w-3xl border-t border-foreground/20">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`} className="border-foreground/20">
              <AccordionTrigger className="py-5 text-left font-sans text-base font-bold normal-case tracking-normal hover:no-underline md:text-lg">{q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-foreground/75">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="border-t border-foreground/15 bg-card">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-end md:px-10">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl">Still have<br />a question?</h2>
          <a href={PHONE_HREF} className="inline-flex items-center gap-3 bg-primary px-6 py-4 font-display text-2xl font-bold text-primary-foreground hover:bg-graphite">
            <Phone className="h-5 w-5" aria-hidden /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
