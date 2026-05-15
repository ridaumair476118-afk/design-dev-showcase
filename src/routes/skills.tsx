import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Rida" },
      { name: "description", content: "Brand identity, web design, front-end development, and art direction." },
      { property: "og:title", content: "Skills — Rida" },
      { property: "og:description", content: "Brand identity, web design, front-end development, and art direction." },
    ],
  }),
  component: SkillsPage,
});

const skills = [
  { n: "01", t: "Brand Identity", d: "Logos, visual systems, and guidelines that articulate a singular voice." },
  { n: "02", t: "Web Design", d: "Editorial interfaces composed with intent — every pixel deliberate." },
  { n: "03", t: "Front-End Dev", d: "React, TypeScript, and motion — performant code that feels alive." },
  { n: "04", t: "Art Direction", d: "Creative direction across campaigns, editorial, and digital products." },
];

function SkillsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">— Skills</p>
            <h1 className="text-5xl md:text-7xl font-display font-light leading-none">A studio of <em className="text-gold-gradient not-italic">one</em>.</h1>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-lg text-muted-foreground leading-relaxed self-end">
            Versatile end-to-end practice — I bridge the gap between design language and shipped product, so the vision you brief is the experience that ships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {skills.map((s) => (
            <div key={s.n} className="bg-background p-10 md:p-14 group hover:bg-card transition-colors">
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.n}</span>
                <span className="text-gold text-2xl group-hover:rotate-45 transition-transform duration-500">+</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display mb-4">{s.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
