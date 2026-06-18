import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { SmartImage } from "@/components/SmartImage";

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
  { id: "DWcJFNfaw9c", title: "Hora de Veludo (Acústico)" },
  { id: "jfKfPfyJRdk", title: "Concerto Sala São Paulo" },
  { id: "lTRiuFIWV54", title: "Performance ao Vivo" },
];

const thumb = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

function VideosPage() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 max-w-3xl animate-fade-up">
          <SectionLabel index="05">Vídeos</SectionLabel>
          <h1 className="mt-6 font-display title-fluid text-balance">
            Clipes e <em>shows</em>.
          </h1>
        </header>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Player principal */}
          <div className="col-span-12 lg:col-span-8">
            <div className="aspect-video w-full overflow-hidden bg-brand-muted">
              <iframe
                key={videos[active].id}
                src={`https://www.youtube.com/embed/${videos[active].id}?rel=0`}
                title={videos[active].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <div className="mt-6 flex items-center justify-between border-b border-brand-light/10 pb-6">
              <h2 className="font-display text-xl md:text-2xl">
                {videos[active].title}
              </h2>
            </div>
          </div>

          {/* Lista de vídeos — vertical no desktop, scroll horizontal em mobile/tablet */}
          <div className="col-span-12 flex flex-col divide-y divide-brand-light/10 lg:col-span-4 lg:flex lg:flex-col lg:divide-y">
            <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory lg:hidden lg:pb-0">
              {videos.map((v, i) => (
                <button
                  key={v.id + i}
                  onClick={() => setActive(i)}
                  className={`shrink-0 text-left snap-start transition-colors hover:text-brand-accent ${
                    i === active ? "text-brand-accent" : "text-brand-light"
                  }`}
                >
                  <div className="relative w-36 overflow-hidden">
                    <SmartImage
                      src={thumb(v.id)}
                      alt={v.title}
                      loading="lazy"
                      className="aspect-video w-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-col lg:divide-y lg:divide-brand-light/10">
              {videos.map((v, i) => (
                <button
                  key={v.id + i}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 py-4 text-left transition-colors hover:text-brand-accent ${
                    i === active ? "text-brand-accent" : "text-brand-light"
                  }`}
                >
                  <span className="font-display text-2xl text-brand-light/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative w-28 shrink-0 overflow-hidden">
                    <SmartImage
                      src={thumb(v.id)}
                      alt={v.title}
                      loading="lazy"
                      className="aspect-video w-full object-cover"
                    />
                  </div>
                  <span className="font-display text-sm leading-snug md:text-base">
                    {v.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
