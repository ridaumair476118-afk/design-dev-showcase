import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/rida-logo.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rida" },
      { name: "description", content: "Half designer, half developer — get to know Rida." },
      { property: "og:title", content: "About — Rida" },
      { property: "og:description", content: "Half designer, half developer — get to know Rida." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full" />
            <img src={logo} alt="Rida" className="relative w-full rounded-3xl ring-1 ring-gold/30 shadow-[var(--shadow-deep)]" />
          </div>
          <div className="md:col-span-7 md:pl-12">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">— About</p>
            <h1 className="text-5xl md:text-7xl font-display font-light mb-8 leading-tight">
              Half <em className="text-gold-gradient not-italic">designer</em>,<br />half <em className="italic">developer</em>.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I move fluidly between Figma and the editor. My practice is rooted in editorial design, typography, and the conviction that interfaces deserve the same craft as a printed page.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              From identity systems to production-ready React applications — I deliver work that's considered, performant, and unmistakably itself.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[["50+", "Projects"], ["6yrs", "Experience"], ["∞", "Curiosity"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-3xl md:text-4xl font-display text-gold-gradient">{n}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
