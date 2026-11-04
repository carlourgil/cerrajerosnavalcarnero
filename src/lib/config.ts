// Datos del negocio. Es la única fuente de verdad de toda la web:
// cámbialos aquí y se actualizan la home, las landings y las páginas legales.
// Lo que ponga [PENDIENTE] se ve tal cual en la web, a propósito, para que no
// se publique nada inventado.
export const SITE = {
  // Nombre descriptivo provisional: CerraNexo es la marca de Alcorcón y
  // Navalcarnero llevará la suya propia cuando esté creada.
  businessName: "Cerrajeros Navalcarnero",
  tagline: "Cerrajero urgente 24 h",
  description:
    "Cerrajeros 24 horas en Navalcarnero. Apertura de puertas sin daños, cambio de cerraduras y bombines antibumping. Llegamos en 20-30 minutos.",

  location: "Navalcarnero",
  serviceArea: "todo Navalcarnero",
  landmark: "Plaza de Segovia",
  postalCode: "28600",

  phone: "919932895",
  phoneDisplay: "919 93 28 95",
  // Con prefijo y sin espacios. Mientras esté pendiente, los botones y el
  // formulario de WhatsApp no se muestran, para no dejar enlaces muertos.
  whatsapp: "34628022929",
  whatsappDisplay: "628 02 29 29",
  email: "info@cerrajerosnavalcarnero.madrid",
  domain: "cerrajerosnavalcarnero.madrid",

  // Negocio que trabaja solo a domicilio: no hay local abierto al público, así
  // que no se publica calle ni número. Google lo llama "negocio con área de
  // servicio" (SAB) y la ficha de Google Business hay que crearla igual, con
  // Navalcarnero como zona y la dirección oculta. Poner una calle que no sea
  // una tienda real es motivo de suspensión de la ficha.
  addressCity: "28600 Navalcarnero, Madrid",
  addressNote: "Servicio a domicilio en todo Navalcarnero. Sin tienda abierta al público.",

  hours: "24 horas, todos los días",
  arrivalTime: "20-30 minutos",
  // Tarifa de apertura de puertas. El precio que se ve en la web lo decide el
  // navegador con la hora de Madrid, no la del móvil del visitante.
  //
  // Comercial: de lunes a viernes, de 8:00 a 21:00.
  // Urgencia: noches, desde el viernes a las 21:00 hasta el lunes a las 8:00,
  //           y festivos completos.
  priceDay: 80,
  priceNight: 120,
  dayStart: 8,
  dayEnd: 21,
  dayHoursLabel: "lunes a viernes, de 8:00 a 21:00",
  nightHoursLabel: "noches, fines de semana y festivos",

  // Festivos de tarifa de urgencia, en formato MM-DD: nacionales y de la
  // Comunidad de Madrid. Jueves y Viernes Santo no van aquí porque cambian de
  // fecha cada año: los calcula sola la web.
  holidays: [
    "01-01", // Año Nuevo
    "01-06", // Reyes
    "05-01", // Fiesta del Trabajo
    "05-02", // Comunidad de Madrid
    "07-25", // Santiago Apóstol
    "08-15", // Asunción
    "10-12", // Fiesta Nacional
    "11-01", // Todos los Santos
    "12-06", // Constitución
    "12-08", // Inmaculada
    "12-25", // Navidad
  ],
  // Hueco para fiestas locales de Navalcarnero o festivos trasladados de un año
  // concreto, en formato YYYY-MM-DD (ej.: "2027-03-19"). Se deja vacío a
  // propósito: esos días se cobran como laborables. Si algún día interesa
  // cobrarlos como urgencia, basta con añadir aquí las fechas.
  localHolidays: [],
  foundedYear: 2000,
  technicianName: "Carlos",

  gmbUrl: "[PENDIENTE: enlace a tu ficha de Google Business]",

  // Datos fiscales para el aviso legal y la política de privacidad.
  legalName: "Urgil 24 SL",
  nif: "B86864147",
  legalAddress:
    "Calle General Álvarez de Castro, 41, Esc. Izqda, Planta 1, Oficina 10, 28010 Madrid",
  legalRegistry:
    "Inscrita en el Registro Mercantil de Madrid, al Tomo 31698, Folio 176, Sección 8, Hoja M-570410, Inscripción 1ª.",
} as const;
