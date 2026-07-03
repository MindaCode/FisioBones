import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const STEPS = [
  {
    title: "Agenda por WhatsApp",
    text: "Escríbenos y elige el horario que mejor te acomode, sin llamadas ni esperas.",
  },
  {
    title: "Evaluación gratuita",
    text: "Un fisioterapeuta evalúa tu caso para entender el origen de tu dolencia.",
  },
  {
    title: "Plan de tratamiento personalizado",
    text: "Recibes un plan a tu medida, con sesiones y ejercicios pensados para ti.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <figure className="order-2 mx-auto w-full max-w-md lg:order-1">
            <div className="crt-frame relative" data-reveal="clip">
              <Image
                src="/images/proceso.jpg"
                alt="Fisioterapeuta guiando ejercicios de rehabilitación a un paciente"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 font-vhs text-lg uppercase text-cream/60">
              FIG. 02 — SESIÓN EN CURSO
            </figcaption>
          </figure>

          <div className="order-1 lg:order-2">
            <p
              className="font-vhs text-xl uppercase tracking-wider text-primary sm:text-2xl"
              data-reveal="right"
            >
              ▶ CAP. 03 · CÓMO FUNCIONA
            </p>
            <h2
              className="vhs-chroma mt-4 font-vhs uppercase leading-[0.92] text-cream [font-size:clamp(2.5rem,6vw,5.2rem)]"
              data-reveal="right"
            >
              Empezar es <span className="text-primary">muy fácil</span>
            </h2>

            <ol className="mt-9 space-y-7">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-5"
                  data-reveal="right"
                  style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
                >
                  <span
                    className="flex h-12 w-14 shrink-0 items-center justify-center border-2 border-primary font-vhs text-2xl text-primary"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-vhs text-2xl uppercase leading-tight text-cream sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-sm leading-relaxed text-cream/70">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-vhs mt-10 border-primary bg-primary text-xl text-ink hover:bg-transparent hover:text-primary sm:text-2xl"
              data-reveal="right"
              style={{ "--d": "300ms" } as React.CSSProperties}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Empieza hoy ▶
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
