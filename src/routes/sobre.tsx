import { createFileRoute } from "@tanstack/react-router";
import aboutImg from "@/assets/about.jpg";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Danella" },
      {
        name: "description",
        content:
          "A trajetória de Danella: formação, influências e o caminho até Ecos de Silêncio.",
      },
      { property: "og:title", content: "Sobre Danella" },
      { property: "og:description", content: "Biografia da cantora Danella." },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <article className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <header className="mb-20 max-w-3xl animate-fade-up">
          <SectionLabel index="01">Biografia</SectionLabel>
          <h1 className="mt-6 font-display title-fluid text-balance">
            Onde Tudo se Conecta
          </h1>
        </header>

        <div className="grid grid-cols-12 gap-6 md:gap-16">
          <figure className="col-span-5">
            <img
              src={aboutImg}
              alt="Retrato editorial de Danella"
              loading="lazy"
              width={1200}
              height={1500}
              className="w-full object-cover"
            />
            <figcaption className="mt-4 text-[10px] uppercase tracking-luxury text-brand-light/40">
              Retrato — São Paulo, 2024
            </figcaption>
          </figure>

          <div className="col-span-6 col-start-7 space-y-4 text-sm leading-relaxed text-brand-light/75 md:space-y-6 md:text-lg">
            <p>
              De Goiás para São Paulo, <strong>Danella</strong> traçou um
              caminho próprio na música — guiada pela escuta atenta, pela
              clareza de propósito e por uma entrega que se desenha
              inteira no palco.
            </p>
            <p>
              Cantora e compositora, é à frente do projeto{" "}
              <em>Danella Connect in</em> que dá forma ao seu trabalho
              autoral: encontros pensados para virar memória, onde a
              canção se torna experiência compartilhada.
            </p>
            <p>
              Sua identidade nasce das raízes brasileiras e se afirma em
              performances que aproximam — emoção que pulsa, energia que
              contagia, presença que convida o público a habitar a música
              com ela.
            </p>
            <p>
              Com consistência e propósito, Danella vem consolidando seu
              nome entre as artistas em ascensão do cenário nacional.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-border pt-12">
              <div>
                <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Origem</dt>
                <dd className="mt-2 font-display text-2xl">Goiás, BR</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Base</dt>
                <dd className="mt-2 font-display text-2xl">São Paulo, BR</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Projeto</dt>
                <dd className="mt-2 font-display text-2xl">Danella Connect in</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Atuação</dt>
                <dd className="mt-2 font-display text-2xl">Cantora · Compositora</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
}
