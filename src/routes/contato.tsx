import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionLabel } from "@/components/SectionLabel";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato & Contratação — Danella" },
      { name: "description", content: "Formulário de contratação e contatos da equipe." },
      { property: "og:title", content: "Contato — Danella" },
      { property: "og:description", content: "Booking, imprensa e parcerias." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [sent, setSent] = useState(false);

  return (
    <section className="px-6 pt-40 pb-32 md:px-10 md:pt-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="animate-fade-up lg:col-span-5">
          <SectionLabel index="06">Contato</SectionLabel>
          <h1 className="mt-6 font-display title-fluid text-balance">
            Vamos criar algo <em>memorável</em>.
          </h1>
          <p className="mt-8 max-w-md leading-relaxed text-brand-light/65">
            Para shows, festivais, imprensa e parcerias —
            entre em contato. Respondemos em até 48 horas.
          </p>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Booking</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href="mailto:Danielaribeirocontato@hotmail.com" className="hover:text-brand-accent break-all">
                  Danielaribeirocontato@hotmail.com
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Telefone</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href="tel:+5511988377539" className="hover:text-brand-accent">
                  (11) 98837-7539
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-luxury text-brand-accent">Instagram</dt>
              <dd className="mt-2 font-display text-2xl">
                <a href="https://www.instagram.com/danellaoficial/" target="_blank" rel="noreferrer" className="hover:text-brand-accent">
                  @danellaoficial
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-8 lg:col-span-6 lg:col-start-7"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <Field label="Nome">
              <input type="text" required className={inputCls} />
            </Field>
            <Field label="Empresa / Veículo">
              <input type="text" className={inputCls} />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <Field label="E-mail">
              <input type="email" required className={inputCls} />
            </Field>
            <Field label="Telefone">
              <input type="tel" className={inputCls} />
            </Field>
          </div>
          <Field label="Tipo de evento">
            <select className={inputCls + " appearance-none"} defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Show / Festival</option>
              <option>Imprensa</option>
              <option>Parceria</option>
            </select>
          </Field>
          <Field label="Mensagem">
            <textarea rows={5} required className={inputCls + " resize-none"} />
          </Field>

          <button
            type="submit"
            disabled={sent}
            className="min-h-12 w-full bg-brand-light px-6 py-5 text-center text-[10px] font-semibold uppercase tracking-luxury text-brand-dark transition-colors hover:bg-brand-accent disabled:opacity-60 sm:px-8"
          >
            {sent ? "Mensagem enviada — obrigada" : "Enviar solicitação"}
          </button>
        </form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full border-b border-border bg-transparent py-3 text-base text-brand-light outline-none transition-colors focus:border-brand-accent";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-[10px] uppercase tracking-luxury text-brand-light/50">{label}</span>
      {children}
    </label>
  );
}
