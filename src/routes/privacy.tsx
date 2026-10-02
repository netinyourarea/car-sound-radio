import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Car Sound Radio" },
      { name: "description", content: "How Car Sound Radio handles information you share with us." },
      { property: "og:title", content: "Privacy Policy — Car Sound Radio" },
      { property: "og:description", content: "How we handle the information you share with us." },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p>This policy explains how Car Sound Radio handles information you provide when you call us or use this website.</p>
      <h2>Information we collect</h2>
      <p>When you contact us, you may share your name, phone number, email address, vehicle details and a description of your request. We only use this to respond and to help with your enquiry.</p>
      <h2>How we use it</h2>
      <p>We use your details to answer questions, discuss your vehicle's audio setup and follow up on your request. We do not sell your personal information.</p>
      <h2>Cookies</h2>
      <p>This website may use basic technical cookies required for it to function properly.</p>
      <h2>Your choices</h2>
      <p>You can ask us to update or delete the information you've shared by calling {PHONE_DISPLAY}.</p>
    </LegalPage>
  ),
});
