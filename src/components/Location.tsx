import { Clock, MapPin, Navigation } from "lucide-react";
import {
  ADDRESS,
  ADDRESS_REFERENCE,
  MAPS_QUERY,
  MAPS_URL,
  SCHEDULE,
  SOCIAL,
} from "@/lib/site";

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=" + encodeURIComponent(MAPS_QUERY) + "&output=embed";

export default function Location() {
  return (
    <section id="contacto" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p
              className="font-vhs text-xl uppercase tracking-wider text-primary sm:text-2xl"
              data-reveal="left"
            >
              ▶ CAP. 05 · CONTACTO
            </p>
            <h2
              className="vhs-chroma mt-4 font-vhs uppercase leading-[0.92] text-cream [font-size:clamp(2.5rem,6vw,5.2rem)]"
              data-reveal="left"
            >
              Estamos <span className="text-primary">cerca de ti</span>
            </h2>

            <dl className="mt-9 border-b-2 border-cream/15">
              <div
                className="flex gap-5 border-t-2 border-cream/15 py-5"
                data-reveal="left"
              >
                <MapPin
                  className="mt-1.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-vhs text-2xl uppercase text-cream">
                    Dirección
                  </dt>
                  <dd className="mt-1 leading-relaxed text-cream/70">
                    {ADDRESS}
                    <br />
                    {ADDRESS_REFERENCE}
                  </dd>
                </div>
              </div>

              <div
                className="flex gap-5 border-t-2 border-cream/15 py-5"
                data-reveal="left"
                style={{ "--d": "100ms" } as React.CSSProperties}
              >
                <Clock
                  className="mt-1.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-vhs text-2xl uppercase text-cream">
                    Horario
                  </dt>
                  <dd className="mt-1 text-cream/70">
                    Lunes a sábado · {SCHEDULE}
                  </dd>
                </div>
              </div>

              <div
                className="flex gap-5 border-t-2 border-cream/15 py-5"
                data-reveal="left"
                style={{ "--d": "200ms" } as React.CSSProperties}
              >
                <Navigation
                  className="mt-1.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <dt className="font-vhs text-2xl uppercase text-cream">
                    Síguenos
                  </dt>
                  <dd className="mt-1 flex gap-6">
                    <a
                      href={SOCIAL.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-cream/70 transition-colors hover:text-primary"
                    >
                      Facebook
                    </a>
                    <a
                      href={SOCIAL.tiktok.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-cream/70 transition-colors hover:text-primary"
                    >
                      TikTok
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vhs mt-9 text-xl text-cream hover:bg-cream hover:text-ink sm:text-2xl"
              data-reveal="left"
              style={{ "--d": "300ms" } as React.CSSProperties}
            >
              Cómo llegar ▶
            </a>
          </div>

          <figure data-reveal="right" className="lg:pl-6">
            <div className="monitor-3d monitor-bezel flex h-[26rem] flex-col lg:h-full lg:min-h-[560px]">
              <iframe
                src={MAP_EMBED_URL}
                title="Ubicación de FisioBones en Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-0 w-full flex-1 border-2 border-black/60"
              />
              {/* Panel frontal del monitor */}
              <div className="flex items-center justify-between pt-2.5 font-vhs text-base uppercase tracking-wider text-cream/70">
                <span>FISIOVISION 2000</span>
                <span className="flex items-center gap-2">
                  MONITOR 01 · EN VIVO
                  <span
                    className="vhs-blink h-2.5 w-2.5 rounded-full bg-[#3dfa7e]"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
            <figcaption className="mt-4 font-vhs text-lg uppercase text-cream/60">
              ▲ Muévete por el mapa para ubicarnos
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
