export const WHATSAPP_NUMBER = "51901765185";

export const waUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_MESSAGE =
  "Hola, quiero agendar mi evaluación gratuita en FisioBones";

export const WHATSAPP_URL = waUrl(WHATSAPP_MESSAGE);

export const ADDRESS =
  "Psje. Luis Banchero N.° 164, entre Cuzco y Ferrocarril, Lima";

export const ADDRESS_REFERENCE = "Ref. Sanidad Policial";

export const SCHEDULE = "9:00 am – 7:30 pm";

export const MAPS_QUERY = "Banchero 164, Huancayo 12001, Perú";

export const MAPS_URL =
  "https://www.google.com/maps?q=" + encodeURIComponent(MAPS_QUERY);

export const SOCIAL = {
  facebook: {
    label: "FisioBones C",
    url: "https://www.facebook.com/FisioBonesC",
  },
  tiktok: {
    label: "Fisiobones1",
    url: "https://www.tiktok.com/@fisiobones1",
  },
};

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];
