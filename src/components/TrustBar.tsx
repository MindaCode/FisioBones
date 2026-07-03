import { SCHEDULE } from "@/lib/site";

const ITEMS = [
  "EVALUACIÓN GRATUITA",
  `ATENCIÓN L–S ${SCHEDULE}`,
  "+13 DOLENCIAS TRATADAS",
  "FISIOTERAPIA PARA TODA LA FAMILIA",
  "SESIÓN DESDE S/60",
];

function Track({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-track" aria-hidden={ariaHidden || undefined}>
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-[var(--gap)] whitespace-nowrap font-vhs text-xl uppercase tracking-wider sm:text-2xl"
        >
          {item}
          <span aria-hidden="true" className="text-primary">
            ▚▚
          </span>
        </span>
      ))}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section
      aria-label="Por qué elegirnos"
      className="relative border-y-2 border-cream/20 py-3.5 text-cream/90"
    >
      <div
        className="marquee"
        style={{ "--gap": "2.5rem", "--speed": "30s" } as React.CSSProperties}
      >
        <Track />
        <Track ariaHidden />
      </div>
    </section>
  );
}
