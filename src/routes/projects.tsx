import { createFileRoute } from "@tanstack/react-router";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import workFb from "@/assets/work-fb.jpg";
import workFlyer from "@/assets/work-flyer.jpg";
import workPhoto from "@/assets/work-photo.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rida" },
      { name: "description", content: "Selected projects across brand identity, web, and editorial design." },
      { property: "og:title", content: "Projects — Rida" },
      { property: "og:description", content: "Selected projects across brand identity, web, and editorial design." },
    ],
  }),
  component: ProjectsPage,
});

const works = [
  { img: workFb, title: "Facebook Cover", category: "Social Media Design", year: "2025" },
  { img: workFlyer, title: "Flyer", category: "Print Design", year: "2025" },
  { img: workPhoto, title: "Photo Manipulation", category: "Photoshop", year: "2025" },
  { img: work1, title: "Choco Brew", category: "Brand Identity · Coming Soon", year: "2025" },
  { img: work2, title: "Pixel Perfect Production", category: "Web Development · Coming Soon", year: "2025" },
  { img: work3, title: "Onyx Stationery", category: "Print & Brand", year: "2024" },
  { img: work4, title: "Fragment Series", category: "Poster Design", year: "2024" },
];

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">— Selected Work</p>
            <h1 className="text-5xl md:text-7xl font-display font-light">Recent <em className="text-gold-gradient not-italic">projects</em>.</h1>
          </div>
          <p className="max-w-sm text-muted-foreground">A curated selection of work spanning visual identity, web interfaces, and editorial design.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {works.map((w, i) => (
            <article key={w.title} className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}>
              <div className="relative overflow-hidden rounded-2xl bg-card aspect-[4/5]">
                <img src={w.img} alt={w.title} loading="lazy" width={1024} height={1024} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-gold mb-2">{w.category}</p>
                    <h3 className="text-3xl font-display">{w.title}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{w.year}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
