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
  { id: "DZTir79OU3j" },
  { id: "CtP301TvsG_" },
  { id: "DOo0pdhjyu9" },
  { id: "DZXlXSmse1J" },
  { id: "LxvezRvn58" },
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
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                scrolling="no"
                className="block h-[640px] w-full md:h-[720px]"
              />
            </div>
          </div>

          {/* Thumbnails — scroll horizontal em todos os breakpoints */}
          <div className="col-span-12 lg:col-span-4">
            <div className="flex gap-4 overflow-x-auto">
              {videos.map((v, i) => (
                <button
                  key={v.id + i}
                  onClick={() => setActive(i)}
                  className={`shrink-0 transition-opacity hover:opacity-80 ${
                    i === active ? "opacity-100" : "opacity-60"
                  }`}
                >
                  <div
                    className={`aspect-[9/16] w-28 overflow-hidden bg-brand-muted md:w-32 ${
                      i === active ? "ring-1 ring-brand-accent" : ""
                    }`}
                  >
                    <iframe
                      src={embedUrl(v.id)}
                      scrolling="no"
                      className="pointer-events-none h-full w-full"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
