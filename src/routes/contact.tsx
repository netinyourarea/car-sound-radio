import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone } from "lucide-react";
import wheel from "@/assets/contact-wheel.jpg";
import { PHONE_DISPLAY, PHONE_HREF, services } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Car Sound Radio" },
      { name: "description", content: "Call (855) 932-0777 or send a message about your vehicle's audio or satellite radio." },
      { property: "og:title", content: "Contact Car Sound Radio" },
      { property: "og:description", content: "Tell us about your vehicle and audio setup. Call (855) 932-0777." },
    ],
  }),
  component: ContactPage,
});

const field = "w-full border-0 border-b border-foreground/30 bg-transparent px-0 py-3 text-base outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/70";
const label = "eyebrow text-muted-foreground";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 lg:grid-cols-12 lg:gap-6 md:px-10 md:py-16" aria-labelledby="contact-title">
      <div className="relative lg:col-span-5">
        <div className="anim-curtain overflow-hidden lg:sticky lg:top-8">
          <img src={wheel} alt="Thumb pressing audio buttons on a tan leather steering wheel" width={1200} height={1504} fetchPriority="high" className="aspect-[4/5] max-h-[70vh] w-full object-cover md:aspect-[4/3] lg:aspect-[4/5] lg:max-h-none" />
          <a href={PHONE_HREF} className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-between gap-2 bg-primary px-4 py-4 sm:px-6 sm:py-5 text-primary-foreground transition-colors hover:bg-graphite">
            <span className="eyebrow">Call now</span>
            <span className="flex items-center gap-2 font-display text-xl font-black min-[400px]:text-2xl sm:text-3xl lg:text-3xl xl:text-4xl"><Phone className="h-6 w-6" aria-hidden />{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        <p className="eyebrow text-muted-foreground">Contact</p>
        <h1 id="contact-title" className="anim-up mt-4 text-5xl sm:text-7xl lg:text-7xl xl:text-[8rem]">Let's talk <span className="font-serif font-normal normal-case italic text-primary">sound.</span></h1>
        <p className="mt-6 max-w-md text-foreground/75">
          The quickest way to reach us is by phone. Prefer to write? Tell us about your vehicle and what you'd like help with.
        </p>
        <a href={PHONE_HREF} className="mt-6 inline-block font-display text-4xl font-black tracking-tight hover:text-primary sm:text-5xl lg:text-6xl">{PHONE_DISPLAY}</a>

        {sent ? (
          <div className="mt-12 border-l-2 border-accent pl-6" role="status">
            <h2 className="text-4xl">Thanks — message noted.</h2>
            <p className="mt-3 text-sm text-foreground/75">For the fastest response, give us a call on {PHONE_DISPLAY}.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-12 grid gap-8 sm:grid-cols-2">
            <label className="block"><span className={label}>Name</span><input required name="name" autoComplete="name" className={field} /></label>
            <label className="block"><span className={label}>Phone</span><input required name="phone" type="tel" autoComplete="tel" className={field} /></label>
            <label className="block"><span className={label}>Email</span><input required name="email" type="email" autoComplete="email" className={field} /></label>
            <label className="block"><span className={label}>Vehicle / Car model</span><input name="vehicle" placeholder="e.g. 2019 hatchback" className={field} /></label>
            <label className="block sm:col-span-2"><span className={label}>Service needed</span>
              <select name="service" defaultValue="" className={field}>
                <option value="" disabled>Choose a service</option>
                {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="block sm:col-span-2"><span className={label}>Message</span><textarea name="message" rows={4} className={field} /></label>
            <button type="submit" className="w-fit bg-graphite px-8 py-4 font-display text-xl font-bold uppercase tracking-wide text-ivory transition-colors hover:bg-primary">Send message</button>
          </form>
        )}
      </div>
    </section>
  );
}
