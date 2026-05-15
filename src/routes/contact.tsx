import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rida" },
      { name: "description", content: "Have an idea? Let's build it together." },
      { property: "og:title", content: "Contact — Rida" },
      { property: "og:description", content: "Have an idea? Let's build it together." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-24">
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" loading="lazy" width={1536} height={1024} className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-32 md:py-48 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">— Let's Collaborate</p>
          <h1 className="text-6xl md:text-9xl font-display font-light leading-[0.9] mb-12">
            Have an <em className="text-gold-gradient not-italic">idea</em>?<br />Let's build it.
          </h1>
          <a href="mailto:hello@rida.studio" className="inline-block text-2xl md:text-4xl font-display italic text-gold hover:underline underline-offset-8 decoration-gold/40">
            hello@rida.studio
          </a>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm tracking-widest uppercase text-muted-foreground">
            {["Instagram", "Behance", "GitHub", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="hover:text-gold transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
