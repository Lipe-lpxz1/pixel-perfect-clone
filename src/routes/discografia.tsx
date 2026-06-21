import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { SmartImage } from "@/components/SmartImage";
import album1 from "@/assets/album-1.webp";
import album2 from "@/assets/album-2.webp";
import album3 from "@/assets/album-3.webp";

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

const records = [
  {
    cover: album1,
    title: "Estamos Longe",
    year: "2026",
    type: "Single",
    spotify: "1DFixLWuPkv3KT3TnV35m3",
    description:
      "Inspirada no clássico 'Creep' mas com o ritmo contagiante do forró e do baião, a música 'Estamos Longe' é uma celebração da conexão energética e da liberdade de ser quem se é. Ela narra a história de um amor onde não é preciso 'pisar em ovos', onde a distância apenas intensifica a saudade gostosa e a certeza de um sentimento conectado e verdadeiro. Uma música para cantar, dançar e celebrar a beleza de um amor correspondido.",
  },
  {
    cover: album2,
    title: "Te Amo na Minha Cabeça",
    year: "2026",
    type: "Single",
    spotify: "1DFixLWuPkv3KT3TnV35m3",
    description:
      "A música 'Te Amo na Minha Cabeça' é um mergulho profundo na doçura e na melancolia de um amor vivido em segredo. Ela conta a história de quem, por entrelaçar sentimentos platônicos e o desejo de estar perto, escolhe cuidar e servir em silêncio. É uma narrativa sobre a plenitude encontrada na imaginação e sobre a esperança secreta de que, talvez, esse sentimento seja recíproco. Uma música para se deixar levar pelas emoções e sonhar com o que existe apenas no imaginário.",
  },
  {
    cover: album3,
    title: "Nosso Amor",
    year: "2025",
    type: "Single",
    spotify: "1DFixLWuPkv3KT3TnV35m3",
    description:
      "Fruto de uma parceria emocionante com o icônico rapper Pepeu, a música 'Nosso Amor' é uma ode a um amor de outras eras. Com uma fusão envolvente, a canção celebra a conexão telepática, o desejo intenso e a certeza de que algumas almas foram feitas para se encontrar. Uma música para sentir, dançar e celebrar a plenitude de um amor indescritível.",
  },
];

function splitDescription(text: string): [string, string] {
  const mid = Math.floor(text.length / 2);
  const spaceIdx = text.lastIndexOf(" ", mid);
  const splitAt = spaceIdx > 0 ? spaceIdx : mid;
  return [text.slice(0, splitAt), text.slice(splitAt + 1)];
}

function SpotifyPlayer({ title, compact = false }: { title: string; compact?: boolean }) {
  return (
    <div className="overflow-hidden rounded-sm">
      <iframe
        title={`Spotify ${title}`}
        src="https://open.spotify.com/embed/playlist/16P1nQXM2VTPz4ugAQ1LaW?utm_source=generator&theme=0"
        className="discografia-player block w-full"
        height={compact ? 232 : 352}
        frameBorder={0}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="eager"
      />
    </div>
  );
}

function DiscografiaPage() {
  return (
    <section className="px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-3xl animate-fade-up md:mb-16 lg:mb-20">
          <SectionLabel index="04">Discografia</SectionLabel>
          <h1 className="mt-6 font-display title-fluid text-balance">
            Músicas <em>autorais</em>.
          </h1>
        </header>

        <div className="space-y-12 md:space-y-20 lg:space-y-32">
          {records.map((r, i) => {
            const [firstHalf, secondHalf] = splitDescription(r.description);
            return (
              <article
                key={r.title}
                className={`discografia-record md:grid md:grid-cols-[minmax(260px,42%)_1fr] md:gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="discografia-cover group relative float-left mr-4 mb-2 w-[38%] overflow-hidden md:float-none md:mb-0 md:mr-0 md:w-full">
                  <SmartImage
                    src={r.cover}
                    alt={`Capa do álbum ${r.title}`}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </figure>
                <div className="discografia-copy min-w-0 self-center md:self-auto">
                  <p className="text-[10px] uppercase tracking-luxury text-brand-accent">
                    {r.year} · {r.type}
                  </p>
                  <h2 className="mt-4 font-display title-fluid">
                    {r.title}
                  </h2>

                  <div className="md:hidden">
                    <p className="discografia-description mt-6 max-w-none leading-relaxed text-brand-light/65">
                      {firstHalf}
                    </p>
                    <div className="float-right ml-3 mb-3 mt-3 w-[52%]">
                      <SpotifyPlayer title={r.title} />
                    </div>
                    <p className="discografia-description max-w-none leading-relaxed text-brand-light/65">
                      {secondHalf}
                    </p>
                    <div className="clear-both" />
                  </div>

                  <div className="hidden md:block">
                    <p className="discografia-description mt-6 max-w-md leading-relaxed text-brand-light/65">
                      {r.description}
                    </p>
                    <div className="mt-5 md:mt-8">
                      <SpotifyPlayer title={r.title} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
