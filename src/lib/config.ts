// Datos del negocio. Es la única fuente de verdad de toda la web:
// cámbialos aquí y se actualizan la home, las landings y las páginas legales.
// Lo que ponga [PENDIENTE] se ve tal cual en la web, a propósito, para que no
// se publique nada inventado.
export const SITE = {
  businessName: "CerraNexo Cerrajeros Navalcarnero",
  brandFirst: "CERRA",
  brandLast: "NEXO",
  tagline: "Cerrajeros 24h en Navalcarnero",
  description:
    "Cerrajeros 24 horas en Navalcarnero. Apertura de puertas sin daños, cambio de cerraduras y bombines antibumping. Llegamos en 20-30 minutos.",

  location: "Navalcarnero",
  serviceArea: "Navalcarnero y alrededores",
  landmark: "Plaza de Segovia",
  postalCode: "28600",

  phone: "919932895",
  phoneDisplay: "919 93 28 95",
  // Con prefijo y sin espacios (ej. 34600000000). Mientras esté pendiente, los
  // botones de WhatsApp no se muestran, para no dejar enlaces muertos.
  whatsapp: "[PENDIENTE: WhatsApp con prefijo]",
  email: "info@cerrajerosnavalcarnero.madrid",
  domain: "cerrajerosnavalcarnero.madrid",

  addressStreet: "[PENDIENTE: calle y número]",
  addressCity: "28600 Navalcarnero, Madrid",
  address: "[PENDIENTE: calle y número], 28600 Navalcarnero, Madrid",

  hours: "24 horas, todos los días",
  arrivalTime: "20-30 minutos",
  // Tarifa de apertura de puertas. El precio mostrado cambia según la hora
  // (hora de Madrid), calculado en el navegador.
  priceDay: 79,
  priceNight: 109,
  dayStart: 9,
  dayEnd: 20,
  foundedYear: 2000,

  gmbUrl: "[PENDIENTE: enlace a tu ficha de Google Business]",

  // Datos fiscales para el aviso legal y la política de privacidad.
  legalName: "Urgil 24 SL",
  nif: "B86864147",
  legalAddress:
    "Calle General Álvarez de Castro, 41, Esc. Izqda, Planta 1, Oficina 10, 28010 Madrid",
  legalRegistry:
    "Inscrita en el Registro Mercantil de Madrid, al Tomo 31698, Folio 176, Sección 8, Hoja M-570410, Inscripción 1ª.",
} as const;
