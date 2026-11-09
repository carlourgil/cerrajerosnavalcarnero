import { SITE } from "../lib/config";

// Se usan en dos sitios: la sección visible de la home y el schema FAQPage.
// Manteniéndolas aquí, lo que lee Google y lo que lee el cliente no se separan.
export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: `¿Llegáis rápido a cualquier zona de ${SITE.location}?`,
    a: `Sí. Trabajamos en ${SITE.serviceArea}, del Centro al Polígono Alparrache, y la llegada media es de ${SITE.arrivalTime}, festivos incluidos.`,
  },
  {
    q: "¿Cuánto cuesta la apertura de puertas?",
    a: `La apertura cuesta ${SITE.priceDay} € de lunes a viernes, de ${SITE.dayStart}:00 a ${SITE.dayEnd}:00. El resto del tiempo —noches, desde el viernes a las ${SITE.dayEnd}:00 hasta el lunes a las ${SITE.dayStart}:00, y festivos— son ${SITE.priceNight} €. En la web verás siempre el precio que toca a esa hora, y te lo confirmamos por teléfono antes de salir.`,
  },
  {
    q: "¿Abrís la puerta sin romper la cerradura?",
    a: "En la mayoría de los casos sí: usamos ganzúa o descarrile según el tipo de bombín, y la cerradura sigue funcionando después. Solo se taladra cuando la cerradura ya está rota o bloqueada por dentro, y te avisamos antes de tocarla.",
  },
  {
    q: "¿Hacéis cambios de bombín antibumping?",
    a: "Es de lo que más hacemos. Instalamos bombines certificados contra bumping, ganzuado y taladro, y las llaves antiguas dejan de abrir en el momento.",
  },
  {
    q: "¿Atendéis urgencias de madrugada?",
    a: `Sí, el servicio de urgencias está disponible ${SITE.hours}. De noche y en festivos se aplica la tarifa de urgencias, que también te decimos por teléfono antes de ir.`,
  },
  {
    q: `¿Tenéis tienda abierta en ${SITE.location}?`,
    a: `No, y es a propósito: trabajamos solo a domicilio en ${SITE.serviceArea}. El taller va en la furgoneta, así que en lugar de pedirte que te acerques a un local con la puerta bloqueada, vamos nosotros a tu portal. Si hace falta una cerradura o un bombín concreto, lo llevamos al aviso.`,
  },
  {
    q: "¿Trabajáis con comunidades y con naves del Polígono Alparrache?",
    a: `Sí. Además de viviendas, atendemos comunidades de propietarios, locales y naves industriales de ${SITE.location}: aperturas, cambio de las cerraduras del portal o del garaje y bombines antibumping para los accesos comunes.`,
  },
  {
    q: "¿Qué necesito para que me abráis el coche o una caja fuerte?",
    a: "Que puedas acreditar que son tuyos: el permiso de circulación en el caso del coche, o una factura o documento de la caja fuerte. Es el procedimiento legal y protege a todo el mundo, también a ti.",
  },
];
