export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "apertura-de-puertas",
    title: "Apertura de Puertas",
    short: "Sin romper tu puerta",
    description:
      "Abrimos tu puerta sin causar daños, usando técnicas profesionales de ganzuado y descarrile. Presupuesto cerrado antes de empezar.",
    bullets: [
      "Apertura sin destrozar la cerradura",
      "Presupuesto cerrado por teléfono",
      "Servicio urgente las 24 horas",
    ],
  },
  {
    slug: "cambio-de-bombin",
    title: "Cambio de Bombín",
    short: "Sistemas antibumping",
    description:
      "Sustituimos tu bombín por uno de alta seguridad certificado, resistente a técnicas de bumping, ganzuado y taladro.",
    bullets: [
      "Bombines antibumping certificados",
      "Instalación en menos de 30 minutos",
      "Mayor seguridad sin cambiar la cerradura",
    ],
  },
  {
    slug: "cambio-de-cerraduras",
    title: "Cambio de Cerraduras",
    short: "Seguridad completa",
    description:
      "Instalamos cerraduras nuevas de máxima seguridad para vivienda, comunidad o negocio, adaptadas a tu puerta.",
    bullets: [
      "Cerraduras para todo tipo de puerta",
      "Marcas homologadas de alta seguridad",
      "Garantía en instalación",
    ],
  },
  {
    slug: "amaestramiento",
    title: "Amaestramiento de Llaves",
    short: "Un llavero, todas las puertas",
    description:
      "Diseñamos sistemas de amaestramiento para comunidades y negocios: una jerarquía de llaves que da acceso controlado a cada zona.",
    bullets: [
      "Ideal para comunidades y empresas",
      "Control de accesos por zonas",
      "Gestión de duplicados centralizada",
    ],
  },
  {
    slug: "urgencias-24h",
    title: "Urgencias 24 Horas",
    short: "Noches, fines de semana y festivos",
    description:
      "Nos quedamos fuera de casa a cualquier hora. Nuestro servicio de urgencias en Navalcarnero atiende 24 horas, los 365 días del año.",
    bullets: [
      "Disponibles noche y día",
      "Llegada media en 20-30 minutos",
      "Atención también festivos",
    ],
  },
];
