import Image from "next/image";

const FEATURES = [
  "Salas cómodas y con luz natural",
  "Equipos de terapia manual y rehabilitación",
  "Atención para toda la familia",
];

export default function Facilities() {
  return (
    <section id="nosotros" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <figure data-reveal="clip">
              <div className="crt-frame relative">
                <Image
                  src="/images/instalaciones.png"
                  alt="Interior de las instalaciones de FisioBones con camillas y equipos de fisioterapia"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-vhs text-lg uppercase text-cream/60">
                FIG. 03 — INSTALACIONES
              </figcaption>
            </figure>
            <div
              className="crt-frame absolute -top-6 right-2 w-32 rotate-2 shadow-[6px_6px_0_rgba(36,29,21,0.8)] sm:-right-4 sm:w-44"
              data-reveal="zoom"
              style={{ "--d": "250ms" } as React.CSSProperties}
            >
              <Image
                src="/images/confianza.jpg"
                alt="Terapeuta de FisioBones junto a una paciente durante su sesión"
                width={400}
                height={400}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p
              className="font-vhs text-xl uppercase tracking-wider text-primary sm:text-2xl"
              data-reveal="right"
            >
              ▶ CAP. 04 · NOSOTROS
            </p>
            <h2
              className="vhs-chroma mt-4 font-vhs uppercase leading-[0.92] text-cream [font-size:clamp(2.5rem,6vw,5.2rem)]"
              data-reveal="right"
            >
              Un espacio pensado para tu{" "}
              <span className="text-primary">recuperación</span>
            </h2>
            <p
              className="mt-5 max-w-md text-lead text-cream/75"
              data-reveal="right"
              style={{ "--d": "120ms" } as React.CSSProperties}
            >
              Atendemos a toda la familia: desde niños en fisioterapia
              pediátrica hasta adultos mayores en recuperación post-fractura.
            </p>

            <ul className="mt-8 border-b-2 border-cream/15">
              {FEATURES.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-center gap-4 border-t-2 border-cream/15 py-3.5"
                  data-reveal="right"
                  style={{ "--d": `${180 + i * 90}ms` } as React.CSSProperties}
                >
                  <span className="font-vhs text-lg text-primary" aria-hidden="true">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span className="font-medium text-cream/90">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
