import Image from "next/image";
import { waUrl } from "@/lib/site";

const SERVICES = [
  { name: "Masaje terapéutico", tag: "Masajes" },
  { name: "Masaje relajante", tag: "Masajes" },
  { name: "Masaje deportivo", tag: "Masajes" },
  { name: "Masaje reductor", tag: "Masajes" },
  { name: "Drenaje linfático", tag: "Masajes" },
  { name: "Fisioterapia pediátrica", tag: "Fisioterapia" },
  { name: "Fisioterapia neurológica", tag: "Fisioterapia" },
  { name: "Fisioterapia traumatológica", tag: "Fisioterapia" },
  { name: "Kinesiolifting facial", tag: "Bienestar" },
  { name: "Limpieza podal", tag: "Bienestar" },
  { name: "Reflexología podal", tag: "Bienestar" },
];

export default function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div>
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div className="lg:sticky lg:top-32" data-reveal="left">
              <p className="font-vhs text-xl uppercase tracking-wider text-primary sm:text-2xl">
                ▶ CAP. 01 · SERVICIOS
              </p>
              <h2 className="vhs-chroma mt-4 font-vhs uppercase leading-[0.92] text-cream [font-size:clamp(2.5rem,6vw,5.2rem)]">
                Terapias para cada etapa de la vida
              </h2>
              <p className="mt-5 max-w-md text-lead text-cream/75">
                Terapias manuales y fisioterapia especializada, desde niños
                hasta adultos mayores.
              </p>

              <figure
                className="mt-9 hidden lg:block"
                data-reveal="clip"
                style={{ "--d": "150ms" } as React.CSSProperties}
              >
                <div className="crt-frame relative">
                  <Image
                    src="/images/servicios.png"
                    alt="Terapeuta de FisioBones atendiendo a un paciente en camilla"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 font-vhs text-lg uppercase text-cream/60">
                  FIG. 01 — SALA DE TERAPIA
                </figcaption>
              </figure>
              <p className="mt-6 hidden font-vhs text-lg uppercase text-cream/60 lg:block">
                ▲ Toca un servicio para consultar por WhatsApp
              </p>
            </div>

            <ul className="border-b-2 border-cream/15">
              {SERVICES.map(({ name, tag }, i) => (
                <li
                  key={name}
                  data-reveal="right"
                  style={{ "--d": `${(i % 6) * 60}ms` } as React.CSSProperties}
                >
                  <a
                    href={waUrl(`Hola, quiero información sobre ${name} en FisioBones`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-4 border-t-2 border-cream/15 py-4 transition-colors duration-150 hover:bg-primary/15 sm:gap-6 sm:py-5"
                  >
                    <span className="font-vhs text-lg text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-vhs uppercase leading-none text-cream transition-transform duration-150 ease-out [font-size:clamp(1.4rem,1.1rem+1.3vw,2.3rem)] group-hover:translate-x-2 group-hover:text-primary">
                      {name}
                    </span>
                    <span className="ml-auto hidden shrink-0 font-vhs text-base uppercase tracking-wider text-cream/50 sm:block">
                      {tag}
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 self-center font-vhs text-xl text-primary opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                    >
                      ▶
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <figure className="mt-10 lg:hidden" data-reveal="clip">
            <div className="crt-frame relative">
              <Image
                src="/images/servicios.png"
                alt="Terapeuta de FisioBones atendiendo a un paciente en camilla"
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-vhs text-lg uppercase text-cream/60">
              FIG. 01 — SALA DE TERAPIA
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
