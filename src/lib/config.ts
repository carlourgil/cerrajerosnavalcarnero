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

  phone: "[PENDIENTE: teléfono]",
  phoneDisplay: "[PENDIENTE: teléfono]",
  whatsapp: "[PENDIENTE: WhatsApp con prefijo, ej. 34600000000]",
  email: "info@cerrajerosnavalcarnero.madrid",
  domain: "cerrajerosnavalcarnero.madrid",

  addressStreet: "[PENDIENTE: calle y número]",
  addressCity: "28600 Navalcarnero, Madrid",
  address: "[PENDIENTE: calle y número], 28600 Navalcarnero, Madrid",

  hours: "24 horas, todos los días",
  arrivalTime: "20-30 minutos",
  priceFrom: "[PENDIENTE: precio]",
  yearsActive: "[PENDIENTE: años]",

  gmbUrl: "[PENDIENTE: enlace a tu ficha de Google Business]",

  // Datos fiscales para el aviso legal y la política de privacidad.
  legalName: "[PENDIENTE: razón social]",
  nif: "[PENDIENTE: NIF]",
  legalAddress: "[PENDIENTE: domicilio social]",
  legalRegistry: "[PENDIENTE: datos registrales]",
} as const;
