import { WHATSAPP_URL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ColorBars from "@/components/ColorBars";

export default function Promo() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className="border-4 border-ink bg-primary p-7 text-ink shadow-[10px_10px_0_rgba(250,245,236,0.25)] sm:p-12"
          data-reveal="zoom"
        >
          <ColorBars className="max-w-[10rem]" />
          <p className="mt-6 font-vhs text-xl uppercase tracking-wider sm:text-2xl">
            ▚▚ OFERTA ESPECIAL ▚▚
          </p>
          <h2 className="mt-3 max-w-4xl font-vhs uppercase leading-[0.92] [font-size:clamp(2.6rem,7vw,6rem)]">
            Evaluación gratuita + sesión desde{" "}
            <span className="bg-ink px-3 text-primary">S/60</span>
          </h2>

          <div className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vhs border-ink bg-ink text-xl text-cream hover:bg-transparent hover:text-ink sm:text-2xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              La quiero ▶
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-ink/75">
              Da el primer paso hacia una vida sin dolor. Precio referencial,
              sujeto a evaluación previa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
