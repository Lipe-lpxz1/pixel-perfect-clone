import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos — Danella" },
      { name: "description", content: "Clipes oficiais e performances ao vivo." },
      { property: "og:title", content: "Vídeos — Danella" },
      { property: "og:description", content: "Assista clipes e ao vivo." },
      { property: "og:url", content: "/videos" },
    ],
    links: [{ rel: "canonical", href: "/videos" }],
  }),
  component: VideosPage,
});

const videos = [
  { id: "lTRiuFIWV54", title: "Ecos de Silêncio (Clipe Oficial)" },
  { id: "5qap5aO4i9A", title: "Sessão ao Vivo — Estúdio Vale" },
  { id: "DWcJFNfaw9c", title: "Hora de Veludo (Acústico)" },
  { id: "jfKfPfyJRdk", title: "Concerto Sala São Paulo" },
  { id: "lTRiuFIWV54", title: "Performance ao Vivo" },
];

const thumb = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

function VideosPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 max-w-3xl animate-fade-up">
          <SectionLabel index="05">Vídeos</SectionLabel>
          <h1 className="mt-6 font-display title-fluid text-balance">
            Clipes em <em>movimento</em>.
          </h1>
        </header>

        <div className="grid grid-cols-12 gap-3 md:gap-6">
          <button onClick={() => setActive(0)} className="gallery-tile group relative col-span-7 overflow-hidden">
            <img src={thumb(videos[0].id)} alt={videos[0].title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <button onClick={() => setActive(1)} className="gallery-tile group relative col-span-5 overflow-hidden">
            <img src={thumb(videos[1].id)} alt={videos[1].title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <button onClick={() => setActive(2)} className="gallery-tile group relative col-span-5 overflow-hidden">
            <img src={thumb(videos[2].id)} alt={videos[2].title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <button onClick={() => setActive(3)} className="gallery-tile group relative col-span-7 overflow-hidden">
            <img src={thumb(videos[3].id)} alt={videos[3].title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
          <button onClick={() => setActive(4)} className="gallery-tile group relative col-span-12 overflow-hidden">
            <img src={thumb(videos[4].id)} alt={videos[4].title} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </button>
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 px-4 py-8 backdrop-blur-md animate-quick-fade-in"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Fechar"
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 text-[10px] uppercase tracking-luxury text-brand-light/70 hover:text-brand-accent"
          >
            Fechar ✕
          </button>
          <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videos[active].id}?rel=0&autoplay=1`}
                title={videos[active].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
