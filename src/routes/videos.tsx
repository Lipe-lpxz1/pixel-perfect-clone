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
  { id: "DZTir79OU3j", title: "Performance — Reel 01" },
  { id: "CtP301TvsG_", title: "Bastidores — Reel 02" },
  { id: "DOo0pdhjyu9", title: "Ao Vivo — Reel 03" },
  { id: "DZXlXSmse1J", title: "Estúdio — Reel 04" },
  { id: "LxvezRvn58", title: "Clipe — Reel 05" },
];

const embedUrl = (id: string) => `https://www.instagram.com/p/${id}/embed`;

function VideosPage() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="px-6 pt-40 pb-12 md:px-10 md:pb-16 md:pt-48 lg:pb-32">
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
            <div className="mx-auto w-full max-w-[540px] overflow-hidden bg-brand-muted lg:mx-0">
              <iframe
                key={videos[active].id}
                src={embedUrl(videos[active].id)}
                title={videos[active].title}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                scrolling="no"
                className="block h-[640px] w-full md:h-[720px]"
              />
            </div>
            <div className="mt-6 flex items-center justify-between border-b border-brand-light/10 pb-6">
              <h2 className="font-display text-xl md:text-2xl">
                {videos[active].title}
              </h2>
            </div>
          </div>

          {/* Lista de vídeos — vertical no desktop, scroll horizontal em mobile/tablet */}
          <div className="col-span-12 lg:col-span-4">
            <div className="flex gap-4 overflow-x-auto lg:hidden">
              {videos.map((v, i) => (
                <button
                  key={v.id + i}
                  onClick={() => setActive(i)}
                  className={`shrink-0 text-left transition-colors hover:text-brand-accent ${
                    i === active ? "text-brand-accent" : "text-brand-light"
                  }`}
                >
                  <div
                    className={`flex aspect-[9/16] w-28 items-end bg-brand-muted p-3 transition-colors ${
                      i === active ? "ring-1 ring-brand-accent" : ""
                    }`}
                  >
                    <span className="font-display text-3xl text-brand-light/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="mt-2 block font-display text-xs leading-snug">
                    {v.title}
                  </span>
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
