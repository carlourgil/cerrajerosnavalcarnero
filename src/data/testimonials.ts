// Añade aquí opiniones REALES de clientes (copiadas con su permiso de tu
// ficha de Google Business, WhatsApp, etc). No inventes reseñas falsas:
// además de no ser ético, es publicidad engañosa y Google puede suspender
// la ficha de empresa si detecta el patrón.
export type Testimonial = {
  id: number;
  name: string;
  zone: string;
  rating: number;
  text: string;
  date: string;
  service: string;
};

export const testimonials: Testimonial[] = [];
