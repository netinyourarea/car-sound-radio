import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Car Sound Radio" },
      { name: "description", content: "Terms for using the Car Sound Radio website and services." },
      { property: "og:title", content: "Terms of Service — Car Sound Radio" },
      { property: "og:description", content: "Terms for using our website and services." },
    ],
  }),
  component: () => (
    <LegalPage title="Terms of Service">
      <p>By using this website you agree to these terms.</p>
      <h2>Information on this site</h2>
      <p>Content on this website is provided for general information about the services we offer. Suitability of any solution depends on your specific vehicle and existing equipment.</p>
      <h2>Third-party services</h2>
      <p>Satellite radio subscriptions and vehicle manufacturer systems are provided by their respective companies and are subject to their own terms.</p>
      <h2>Limitation of liability</h2>
      <p>We are not responsible for losses arising from reliance on general information published on this website.</p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. Continued use of the site means you accept the current version.</p>
    </LegalPage>
  ),
});
