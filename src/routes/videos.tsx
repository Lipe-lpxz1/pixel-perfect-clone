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
  { id: "DZTir79OU3j", label: "Vídeo 01" },
  { id: "CtP301TvsG_", label: "Vídeo 02" },
  { id: "DOo0pdhjyu9", label: "Vídeo 03" },
  { id: "DZXlXSmse1J", label: "Vídeo 04" },
  { id: "LxvezRvn58", label: "Vídeo 05" },
];

const embedUrl = (id: string) => `https://www.instagram.com/reel/${id}/embed`;

function VideosPage() {
  const [active, setActive] = useState<number>(0);

  return (
    <section className="px-6 pt-40 pb-12 md:px-10 md:pb-16 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 max-w-3xl animate-fade-up">
          <SectionLabel index="05">Vídeos</SectionLabel>
          <h1 className="mt-6 font-display title-fluid text-balance">
            Clipes e <em>shows</em>.
          </h1>
        </header>

        <div className="mx-auto flex w-full max-w-[540px] flex-col gap-6">
          <div className="w-full overflow-hidden rounded-sm border border-brand-light/10 bg-brand-muted shadow-2xl shadow-black/20">
            <iframe
              key={videos[active].id}
              title={`Instagram - ${videos[active].label}`}
              src={embedUrl(videos[active].id)}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              scrolling="no"
              className="block h-[690px] w-full md:h-[760px] lg:h-[960px]"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 md:justify-center lg:flex-wrap lg:overflow-visible">
            {videos.map((v, i) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`shrink-0 border px-4 py-3 text-[10px] font-semibold uppercase tracking-luxury transition-colors ${
                  i === active
                    ? "border-brand-accent bg-brand-accent text-brand-dark"
                    : "border-brand-light/15 text-brand-light/60 hover:border-brand-accent hover:text-brand-light"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
