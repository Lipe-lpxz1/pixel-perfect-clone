import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";

export const Route = createFileRoute("/discografia")({
  head: () => ({
    meta: [
      { title: "Discografia — Danella" },
      { name: "description", content: "Álbuns, EPs e singles de Danella." },
      { property: "og:title", content: "Discografia — Danella" },
      { property: "og:description", content: "Ouça toda a obra fonográfica." },
      { property: "og:url", content: "/discografia" },
    ],
    links: [{ rel: "canonical", href: "/discografia" }],
  }),
  component: DiscografiaPage,
});

const covers = [album1, album2, album3];

const records = [
  "1llghEvUCNeaDpNGu9jjd6",
  "1EzxTgjKg5mClRtxYWo6M2",
  "3lUkePCQeZkqqZlpVvC88b",
  "0bG0faeB4FqNZTqAUpZWxh",
  "68SRxFA8YQPBQyFUeXSL7i",
  "3LcpIspnFOud4b1auowP0x",
  "5VtkGXDG8D8lSt6QduhmDe",
  "6yZlU1y8SBKEEpmzWa3M4r",
  "1WcwUsiFkdjax48O9z5xIo",
  "2pYy1stj8fRLPCooBV0BEh",
].map((spotify, i) => ({
  cover: covers[i % covers.length],
  title: `Faixa ${i + 1}`,
  year: "",
  type: "Single",
  spotify,
}));

function DiscografiaPage() {
  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 max-w-3xl animate-fade-up">
          <SectionLabel index="04">Discografia</SectionLabel>
          <h1 className="mt-6 font-display title-fluid text-balance">
            Toda a <em>obra</em>.
          </h1>
        </header>

        <div className="space-y-20 md:space-y-32">
          {records.map((r, i) => (
            <article
              key={r.title}
              className={`grid grid-cols-2 items-center gap-6 md:gap-20 ${
                i % 2 === 1 ? "[&>figure]:order-2" : ""
              }`}
            >
              <figure className="group relative overflow-hidden">
                <img
                  src={r.cover}
                  alt={`Capa de ${r.title}`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </figure>
              <div>
                <p className="text-[10px] uppercase tracking-luxury text-brand-accent">
                  {String(i + 1).padStart(2, "0")} · {r.type}
                </p>
                <h2 className="mt-4 font-display title-fluid">
                  {r.title}
                </h2>
                <div className="mt-8 overflow-hidden rounded-sm">
                  <iframe
                    title={`Spotify ${r.title}`}
                    src={`https://open.spotify.com/embed/track/${r.spotify}?utm_source=generator&theme=0`}
                    className="block w-full"
                    height={152}
                    frameBorder={0}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
