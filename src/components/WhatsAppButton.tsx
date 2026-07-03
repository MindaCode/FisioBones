import { WHATSAPP_URL } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-ink/25 transition-transform duration-300 ease-out hover:scale-110 active:scale-95"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
