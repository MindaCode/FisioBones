import { waUrl } from "@/lib/site";

const ROW_A = [
  "Cervicalgia",
  "Dorsalgia",
  "Lumbalgia",
  "Lumbociatalgia",
  "Hernia discal",
  "Estrés",
  "Dolor muscular",
];

const ROW_B = [
  "Alteraciones posturales",
  "Pie plano",
  "Prolapso",
  "Esguince",
  "Post fractura",
  "Displasia de cadera",
];

function Pills({
  items,
  ariaHidden = false,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {items.map((item, i) => (
        <span
          key={item}
          className={`whitespace-nowrap border-2 bg-ink/80 px-6 py-2.5 font-vhs text-2xl uppercase sm:text-3xl ${
            i % 3 === 1
              ? "vhs-chroma border-primary text-primary"
              : "border-cream/30 text-cream/90"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Treatments() {
  return (
    <section
      id="tratamientos"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8" data-reveal="left">
        <p className="font-vhs text-xl uppercase tracking-wider text-primary sm:text-2xl">
          ▶ CAP. 02 · DOLENCIAS
        </p>
        <h2 className="vhs-chroma mt-4 max-w-3xl font-vhs uppercase leading-[0.95] text-cream [font-size:clamp(2.2rem,5.5vw,4.5rem)]">
          Si te duele, es probable que{" "}
          <span className="text-primary">podamos ayudarte</span>
        </h2>
      </div>

      {/* Lista accesible para lectores de pantalla; la marquesina es decorativa */}
      <ul className="sr-only">
        {[...ROW_A, ...ROW_B].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-12 space-y-4" aria-hidden="true">
        <div
          className="marquee"
          style={{ "--gap": "1rem", "--speed": "42s" } as React.CSSProperties}
        >
          <Pills items={ROW_A} />
          <Pills items={ROW_A} ariaHidden />
        </div>
        <div
          className="marquee marquee-reverse"
          style={{ "--gap": "1rem", "--speed": "48s" } as React.CSSProperties}
        >
          <Pills items={ROW_B} />
          <Pills items={ROW_B} ariaHidden />
        </div>
      </div>

      <div
        className="mx-auto mt-12 flex max-w-7xl flex-wrap items-baseline gap-x-4 gap-y-2 px-5 sm:px-8"
        data-reveal="right"
      >
        <p className="text-lead text-cream/70">¿No encuentras tu dolencia?</p>
        <a
          href={waUrl("Hola, tengo una dolencia y quiero saber si pueden ayudarme")}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline font-vhs text-2xl uppercase text-primary"
        >
          Escríbenos ▶ la evaluación es gratis
        </a>
      </div>
    </section>
  );
}
