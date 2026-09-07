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
    title: "Apertura de puertas",
    short: "Sin romper tu puerta",
    description:
      "¿Te has dejado las llaves dentro o se ha roto una en la cerradura? Abrimos la puerta sin destrozarla, con ganzúa o descarrile según el tipo de bombín.",
    bullets: [
      "La cerradura sigue funcionando después de abrir",
      "Precio cerrado por teléfono antes de salir",
      "También puertas blindadas y acorazadas",
      "Disponibles a cualquier hora del día",
    ],
  },
  {
    slug: "urgencias-24h",
    title: "Urgencias 24 horas",
    short: "Noches, fines de semana y festivos",
    description:
      "Quedarse fuera no entiende de horarios. Atendemos avisos urgentes en Navalcarnero de madrugada, en fin de semana y en festivos, los 365 días del año.",
    bullets: [
      "Atención a cualquier hora, también de madrugada",
      "Llegada media de 20 minutos",
      "Un técnico de guardia, no una centralita",
      "Festivos y agosto incluidos",
    ],
  },
  {
    slug: "apertura-de-coches",
    title: "Apertura de coches",
    short: "Llaves dentro del vehículo",
    description:
      "Te has dejado las llaves puestas dentro o has perdido la única que tenías. Abrimos el coche sin forzar la cerradura ni dañar la junta de la puerta.",
    bullets: [
      "Sin dañar la puerta, la junta ni la cerradura",
      "También furgonetas y vehículos comerciales",
      "Extracción de llaves partidas en el bombín",
      "Hay que acreditar que el vehículo es tuyo",
    ],
  },
  {
    slug: "apertura-de-cajas-fuertes",
    title: "Apertura de cajas fuertes",
    short: "Sin destruir el contenido",
    description:
      "¿Combinación olvidada, llave perdida o el teclado no responde? Abrimos la caja intentando siempre la manipulación antes que el taladro, para que puedas seguir usándola.",
    bullets: [
      "Primero manipulación; taladro solo si no hay alternativa",
      "Cajas de pared, empotradas y de hotel",
      "Cambio de combinación después de abrirla",
      "Hay que acreditar la propiedad de la caja",
    ],
  },
  {
    slug: "cambio-de-cerraduras",
    title: "Cambio de cerraduras",
    short: "Instalación y sustitución",
    description:
      "Sustituimos la cerradura completa cuando la actual está forzada, desgastada o no da la seguridad que necesitas. Trabajamos con marcas homologadas.",
    bullets: [
      "Cerraduras para puerta de vivienda, local y comunidad",
      "Ajuste del marco y de los puntos de anclaje",
      "Marcas homologadas de alta seguridad",
      "Garantía sobre la instalación",
    ],
  },
  {
    slug: "bombines-antibumping",
    title: "Bombines antibumping",
    short: "Cilindros de alta seguridad",
    description:
      "El bombín es la pieza que se ataca en la mayoría de los robos. Instalamos cilindros certificados que resisten el bumping, el ganzuado y el taladro.",
    bullets: [
      "Protección real contra bumping y ganzúa",
      "Cambio en menos de media hora",
      "Las llaves antiguas dejan de abrir",
      "No hace falta cambiar toda la cerradura",
    ],
  },
  {
    slug: "amaestramiento",
    title: "Amaestramientos",
    short: "Una llave para todas las puertas",
    description:
      "Olvídate del llavero enorme. Diseñamos un sistema de llaves jerarquizado para comunidades, oficinas y naves: cada persona abre solo lo que le corresponde.",
    bullets: [
      "Portal, trastero y garaje con una sola llave",
      "Accesos por niveles según quién sea",
      "Ideal para comunidades y empresas",
      "Control de las copias que se entregan",
    ],
  },
  {
    slug: "mantenimiento",
    title: "Mantenimiento",
    short: "Comunidades y empresas",
    description:
      "Revisión y ajuste periódico de puertas y cerraduras para comunidades de propietarios y negocios. Sale más barato mantener que reparar de urgencia.",
    bullets: [
      "Ajuste de muelles y cierrapuertas",
      "Revisión de cerraduras de portal y garaje",
      "Engrase y sustitución de piezas gastadas",
      "Presupuesto anual para la comunidad",
    ],
  },
];
