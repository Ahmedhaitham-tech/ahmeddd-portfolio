import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahmed Elbadawy — Web Developer & Automation" },
      { name: "description", content: "Portfolio of Ahmed Elbadawy: web development, WhatsApp automation, and custom digital solutions." },
      { property: "og:title", content: "Ahmed Elbadawy — Web Developer & Automation" },
      { property: "og:description", content: "Portfolio of Ahmed Elbadawy: web development, WhatsApp automation, and custom digital solutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="Ahmed Elbadawy — Portfolio"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
