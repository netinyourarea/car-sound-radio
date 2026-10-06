import satellite from "@/assets/svc-satellite.jpg";
import upgrades from "@/assets/svc-upgrades.jpg";
import speakers from "@/assets/svc-speakers.jpg";
import infotainment from "@/assets/svc-infotainment.jpg";
import troubleshoot from "@/assets/svc-troubleshoot.jpg";
import personal from "@/assets/svc-personal.jpg";

export const PHONE_DISPLAY = "(855) 932-0777";
export const PHONE_HREF = "tel:+18559320777";
export const BRAND = "Car Sound Radio";

export const services = [
  {
    slug: "satellite-radio",
    no: "01",
    title: "Satellite Radio Setup & Assistance",
    short: "Get satellite radio working the way you expect — channels, reception and everyday use.",
    image: satellite,
    w: 1200,
    h: 1504,
    alt: "Driver on a sunny hill road seen from the back seat of a cream leather interior with the centre screen playing music",
    body: "We help you get satellite radio set up and running in your vehicle. That can mean walking through activation steps, checking whether your existing radio supports it, sorting out reception or antenna concerns, organising favourite channels, and explaining the controls so listening becomes second nature. If a subscription term, plan option or unexpected charge has you puzzled, we can help you make sense of the wording and know what to ask your provider.",
    points: ["Compatibility questions", "Setup and activation guidance", "Reception and signal concerns", "Channel and preset organisation", "Receivers, antennas and accessories", "Plan options and billing questions"],
  },
  {
    slug: "audio-upgrades",
    no: "02",
    title: "Car Audio Upgrades",
    short: "Explore upgrade paths for head units, amplification and components that suit your car.",
    image: upgrades,
    w: 1408,
    h: 1008,
    alt: "Unbranded car speaker woofer, tweeter and crossover laid out on a dark wooden workbench",
    body: "If your factory system feels flat, we talk through what an upgrade could look like for your specific vehicle — from replacing a head unit to adding components that improve how music fills the cabin. The goal is a system that fits your car, your budget and the way you listen.",
    points: ["Head unit replacement options", "Component and amplifier guidance", "Matching parts to your vehicle", "Keeping factory features where possible"],
  },
  {
    slug: "speaker-sound",
    no: "03",
    title: "Speaker & Sound Improvements",
    short: "Replace tired speakers and refine the way sound reaches every seat.",
    image: speakers,
    w: 1200,
    h: 1408,
    alt: "Hands fitting a replacement speaker into an open car door panel with exposed wiring",
    body: "Worn or blown speakers are one of the most common reasons a car sounds muddy or distorted. We help with speaker replacement and sound adjustments so vocals come through clearly and music feels balanced from the front seats to the back.",
    points: ["Speaker replacement", "Rattle and distortion concerns", "Balance and fader adjustments", "Equaliser and tone settings"],
  },
  {
    slug: "infotainment",
    no: "04",
    title: "Radio & Infotainment Assistance",
    short: "Make sense of touchscreens, menus, phone pairing and audio sources.",
    image: infotainment,
    w: 1408,
    h: 1008,
    alt: "Finger touching a music screen on a modern car infotainment display with physical buttons below",
    body: "Modern dashboards can be confusing. We help you understand your radio and infotainment system — pairing a phone, switching between sources, setting presets, adjusting audio settings and getting the features you already have to work for you.",
    points: ["Phone and Bluetooth pairing", "Switching audio sources", "Presets and menu settings", "Getting to know your controls"],
  },
  {
    slug: "troubleshooting",
    no: "05",
    title: "Audio System Troubleshooting",
    short: "No sound, crackling, dead speakers or a radio that won't power on — let's find out why.",
    image: troubleshoot,
    w: 1408,
    h: 1008,
    alt: "Hands testing wiring behind a removed car stereo with a multimeter under a work lamp",
    body: "When something stops working, we help narrow down the cause. Whether it's a radio that won't turn on, sound cutting in and out, one speaker gone quiet or static that won't clear, we work through the likely issues with you and point you toward the right fix.",
    points: ["No power or no sound", "Crackling and intermittent audio", "Single speaker failures", "Static and interference", "Satellite signal dropouts"],
  },
  {
    slug: "personalized",
    no: "06",
    title: "Personalized In-Car Audio Solutions",
    short: "Every vehicle and every listener is different. We start with yours.",
    image: personal,
    w: 1408,
    h: 1008,
    alt: "Vintage olive green station wagon with its doors open beside a picnic blanket on a countryside overlook",
    body: "Some drivers want a quiet commute with clear podcasts, others want a road-trip system for the whole family. We listen to how you use your car and help put together an audio approach that suits your vehicle, your habits and your priorities.",
    points: ["Commuters and road-trippers", "Classic and modern vehicles", "Family and passenger listening", "Advice tailored to your setup"],
  },
] as const;
