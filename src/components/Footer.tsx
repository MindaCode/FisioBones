import {
  ADDRESS,
  ADDRESS_REFERENCE,
  SCHEDULE,
  SOCIAL,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ColorBars from "@/components/ColorBars";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink">
      <ColorBars />

      {/* CTA de cierre */}
      <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <p
          className="font-vhs text-xl uppercase tracking-wider text-primary sm:text-2xl"
          data-reveal
        >
          ▚▚ ÚLTIMO CAPÍTULO ▚▚
        </p>
        <h2
          className="vhs-chroma mx-auto mt-5 max-w-4xl font-vhs uppercase leading-[0.92] text-cream [font-size:clamp(2.6rem,8vw,6.5rem)]"
          data-reveal="zoom"
          style={{ "--d": "100ms" } as React.CSSProperties}
        >
          ¿Listo para <span className="text-primary">vivir sin dolor</span>?
        </h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-vhs mt-10 border-primary bg-primary text-xl text-ink hover:bg-transparent hover:text-primary sm:text-2xl"
          data-reveal
          style={{ "--d": "200ms" } as React.CSSProperties}
        >
          <WhatsAppIcon className="h-5 w-5" />
          Agendar por WhatsApp ▶
        </a>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 border-t-2 border-cream/15 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <p className="font-vhs text-3xl uppercase text-cream">
            FISIO<span className="text-primary">BONES</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-cream/60">
            Fisioterapia y masajes terapéuticos para toda la familia.
          </p>
        </div>

        <div>
          <h3 className="font-vhs text-xl uppercase tracking-wider text-primary">
            Visítanos
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            {ADDRESS}
            <br />
            {ADDRESS_REFERENCE}
          </p>
        </div>

        <div>
          <h3 className="font-vhs text-xl uppercase tracking-wider text-primary">
            Horario
          </h3>
          <p className="mt-3 text-sm text-cream/70">
            Lunes a sábado
            <br />
            {SCHEDULE}
          </p>
        </div>

        <div>
          <h3 className="font-vhs text-xl uppercase tracking-wider text-primary">
            Contacto
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-cream/70">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {WHATSAPP_NUMBER.slice(2)}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline transition-colors hover:text-primary"
              >
                Facebook · {SOCIAL.facebook.label}
              </a>
            </li>
            <li>
              <a
                href={SOCIAL.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline transition-colors hover:text-primary"
              >
                TikTok · {SOCIAL.tiktok.label}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Wordmark gigante delineado */}
      <div className="select-none px-2" aria-hidden="true">
        <p className="text-outline whitespace-nowrap text-center font-vhs uppercase leading-[0.8] [font-size:clamp(4rem,15.5vw,15rem)]">
          FISIOBONES
        </p>
      </div>

      <div className="border-t-2 border-cream/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 font-vhs text-lg uppercase text-cream/50 sm:px-8">
          <span>■ FIN DE LA CINTA · © {new Date().getFullYear()} FISIOBONES</span>
          <a
            href="#inicio"
            className="link-underline text-primary transition-colors hover:text-cream"
          >
            ◀◀ Rebobinar
          </a>
        </div>
      </div>
    </footer>
  );
}
