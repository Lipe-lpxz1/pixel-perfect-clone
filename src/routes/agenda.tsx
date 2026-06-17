import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda de Shows — Danella" },
      { name: "description", content: "Próximas apresentações e turnê de Danella." },
      { property: "og:title", content: "Agenda — Danella" },
      { property: "og:description", content: "Datas, cidades e ingressos." },
      { property: "og:url", content: "/agenda" },
    ],
    links: [{ rel: "canonical", href: "/agenda" }],
  }),
  component: AgendaPage,
});

const shows = [
  { date: "14 Jun", city: "São Paulo, BR", venue: "Sala São Paulo", status: "Ingressos" },
  { date: "22 Jun", city: "Rio de Janeiro, BR", venue: "Theatro Municipal", status: "Esgotado" },
  { date: "05 Jul", city: "Lisboa, PT", venue: "Centro Cultural de Belém", status: "Ingressos" },
  { date: "18 Jul", city: "Paris, FR", venue: "Théâtre des Bouffes du Nord", status: "Ingressos" },
  { date: "02 Ago", city: "Londres, UK", venue: "Cadogan Hall", status: "Em breve" },
  { date: "20 Ago", city: "Berlin, DE", venue: "Funkhaus Nalepastraße", status: "Ingressos" },
];

export function AgendaPage() {
  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-6xl">
        <header className="mb-20 flex flex-row items-end justify-between gap-6">
          <div className="animate-fade-up">
            <SectionLabel index="02">Ao vivo</SectionLabel>
            <h1 className="mt-6 font-display title-fluid text-balance">
              Turnê <em>Ecos de Silêncio</em>
            </h1>
          </div>
          <p className="border-b border-brand-accent pb-1 text-[10px] uppercase tracking-luxury text-brand-light/50">
            Temporada 2025 · Mundial
          </p>
        </header>

        <ul className="divide-y divide-border border-y border-border">
          {shows.map((s) => (
            <li
              key={`${s.date}-${s.city}`}
              className="group grid grid-cols-12 items-center gap-3 py-8 transition-all md:gap-6 md:py-10 md:hover:pl-4"
            >
              <span className="col-span-2 font-display text-xl italic text-brand-accent md:text-2xl">
                {s.date}
              </span>
              <div className="col-span-5">
                <p className="font-display text-xl text-brand-light md:text-3xl">{s.city}</p>
              </div>
              <p className="col-span-3 text-xs text-brand-light/55 md:text-sm">{s.venue}</p>
              <div className="col-span-2 text-right">
                <button
                  disabled={s.status !== "Ingressos"}
                  className="min-h-10 w-full border border-brand-light/25 px-1 py-2.5 text-center text-[8px] uppercase tracking-[0.08em] transition-colors enabled:hover:bg-brand-light enabled:hover:text-brand-dark disabled:opacity-40 md:px-5 md:text-[10px] md:tracking-luxury"
                >
                  {s.status}
                </button>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-md text-sm text-brand-light/55">
          Para shows, festivais ou novas datas, escreva para{" "}
          <a href="mailto:booking@danella.com" className="text-brand-accent hover:underline">
            booking@danella.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
