"use client";

import { useEffect, useState } from "react";
import { HeartHandshake } from "lucide-react";
import { NAV_LINKS, SCHEDULE, WHATSAPP_URL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ColorBars from "@/components/ColorBars";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-ink/90">
        <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 text-cream sm:px-8">
          <a
            href="#inicio"
            className="group relative z-50 flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span
              className="btn-bevel inline-flex items-center !p-1.5 text-primary"
              aria-hidden="true"
            >
              <HeartHandshake className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block font-vhs text-2xl uppercase tracking-wide sm:text-3xl">
                FISIO<span className="text-primary">BONES</span>
              </span>
              <span className="mt-0.5 block font-vhs text-[0.7rem] uppercase tracking-[0.3em] text-cream/50 sm:text-xs">
                Masajes ✚ Fisioterapia
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link-90s font-vhs text-lg uppercase tracking-wider text-cream/85 transition-colors hover:text-primary"
                >
                  <span className="text-primary/70">0{i + 1}·</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bevel hidden items-center gap-2.5 text-lg text-cream sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              Agendar ▶
            </a>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`btn-bevel relative z-50 inline-flex items-center !px-2.5 !py-2 text-cream md:hidden ${
                open ? "burger-open" : ""
              }`}
              aria-expanded={open}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
            >
              <span>
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
              </span>
            </button>
          </div>
        </nav>
      </div>
      {/* Cierre del nav: mini patrón de barras de color */}
      <ColorBars className="!h-1" />

      {/* Menú móvil a pantalla completa */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 text-cream transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <ul className="space-y-3">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} className="overflow-hidden">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className={`block font-vhs text-5xl uppercase transition-all duration-300 ease-out hover:text-primary ${
                  open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                <span className="mr-3 text-2xl text-primary">0{i + 1}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={`space-y-5 transition-opacity duration-300 ${
            open ? "opacity-100 delay-300" : "opacity-0"
          }`}
        >
          <p className="font-vhs text-lg uppercase text-cream/60">
            LUN–SÁB · {SCHEDULE}
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="btn-bevel inline-flex items-center gap-3 text-xl text-cream"
          >
            <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
            Evaluación gratuita ▶
          </a>
        </div>
      </div>
    </header>
  );
}
