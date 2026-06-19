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
  { id: "DZXlXSmse1J", label: "Vídeo 01" },
  { id: "DLxvezRvn58", label: "Vídeo 02" },
  { id: "DEU3R0rRfdi", label: "Vídeo 03" },
  { id: "C-KxKuxs2h8", label: "Vídeo 04" },
  { id: "DERvxroOVM0", label: "Vídeo 05" },
];

const embedUrl = (id: string) => `https://www.instagram.com/p/${id}/embed/`;

function VideosPage() {
  const [active, setActive] = useState<number>(0);
  const previewVideos = videos.filter((_, i) => i !== active);

  return (
    <section className="px-6 pt-40 pb-12 md:px-10 md:pb-16 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 max-w-3xl animate-fade-up">
          <SectionLabel index="05">Vídeos</SectionLabel>
          <h1 className="mt-6 font-display title-fluid text-balance">
            Clipes e <em>shows</em>.
          </h1>
        </header>

        <div className="mx-auto grid w-full max-w-[540px] gap-6 lg:max-w-6xl lg:grid-cols-[minmax(420px,540px)_minmax(360px,1fr)] lg:items-start lg:gap-8">
          <div className="w-full overflow-hidden rounded-sm border border-brand-light/10 bg-brand-muted shadow-2xl shadow-black/20">
            <iframe
              key={videos[active].id}
              title={`Instagram - ${videos[active].label}`}
              src={embedUrl(videos[active].id)}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-forms"
              scrolling="no"
              className="block h-[690px] w-full md:h-[760px] lg:h-[960px]"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 md:justify-center lg:grid lg:grid-cols-2 lg:content-start lg:overflow-visible lg:pb-0">
            {previewVideos.map((v) => {
              const index = videos.findIndex((video) => video.id === v.id);

              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setActive(index)}
                  className="group relative h-52 w-36 shrink-0 overflow-hidden border border-brand-light/15 bg-brand-muted text-left transition-colors hover:border-brand-accent focus-visible:border-brand-accent focus-visible:outline-none lg:h-64 lg:w-full"
                >
                  <iframe
                    title={`Preview - ${v.label}`}
                    src={embedUrl(v.id)}
                    sandbox="allow-scripts allow-same-origin"
                    scrolling="no"
                    tabIndex={-1}
                    className="pointer-events-none h-full w-full scale-[1.02]"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent px-4 pb-4 pt-10 text-[10px] font-semibold uppercase tracking-luxury text-brand-light transition-colors group-hover:text-brand-accent">
                    {v.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
