import { SCHEDULE, WHATSAPP_URL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ColorBars from "@/components/ColorBars";

const PROOF = [
  "EVALUACIÓN INICIAL GRATUITA",
  `LUN–SÁB · ${SCHEDULE}`,
  "NIÑOS · ADULTOS · ADULTOS MAYORES",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8">
        <p
          className="hero-fade font-vhs text-xl uppercase tracking-wider text-primary sm:text-2xl"
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          ■ FISIOBONES PRESENTA · LIMA
        </p>

        <h1 className="mt-5 font-vhs uppercase leading-[0.92] text-cream [font-size:clamp(3.2rem,11.5vw,9.5rem)]">
          <span className="hero-line">
            <span
              className="hero-line-inner"
              style={{ "--d": "200ms" } as React.CSSProperties}
            >
              Muévete
            </span>
          </span>
          <span className="hero-line">
            <span
              className="hero-line-inner"
              style={{ "--d": "340ms" } as React.CSSProperties}
            >
              sin <span className="vhs-chroma text-primary">dolor</span>,
            </span>
          </span>
          <span className="hero-line">
            <span
              className="hero-line-inner"
              style={{ "--d": "480ms" } as React.CSSProperties}
            >
              vive mejor
              <span className="vhs-blink text-primary">▌</span>
            </span>
          </span>
        </h1>

        <p
          className="hero-fade mt-7 max-w-xl text-lead text-cream/85"
          style={{ "--d": "640ms" } as React.CSSProperties}
        >
          Desde fisioterapia pediátrica hasta rehabilitación post-fractura:
          tratamientos personalizados para cada edad y cada dolencia, en un
          solo lugar.
        </p>

        <div
          className="hero-fade mt-9 flex flex-wrap items-center gap-4"
          style={{ "--d": "780ms" } as React.CSSProperties}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vhs border-primary bg-primary text-xl text-ink hover:bg-transparent hover:text-primary sm:text-2xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Evaluación gratuita ▶
          </a>
          <a
            href="#servicios"
            className="btn-vhs text-xl text-cream hover:bg-cream hover:text-ink sm:text-2xl"
          >
            Ver servicios ▼
          </a>
        </div>

        <div
          className="hero-fade mt-14"
          style={{ "--d": "920ms" } as React.CSSProperties}
        >
          <ColorBars className="max-w-xs opacity-80" />
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {PROOF.map((item) => (
              <li
                key={item}
                className="font-vhs text-base uppercase tracking-wide text-cream/70 sm:text-lg"
              >
                <span className="text-primary">✚</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p
        className="hero-fade vhs-blink absolute bottom-8 left-1/2 -translate-x-1/2 font-vhs text-xl uppercase text-cream/80"
        style={{ "--d": "1100ms" } as React.CSSProperties}
        aria-hidden="true"
      >
        Sigue bajando ▼
      </p>
    </section>
  );
}
