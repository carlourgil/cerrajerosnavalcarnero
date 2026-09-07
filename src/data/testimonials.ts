// Solo opiniones REALES de clientes, copiadas con su permiso de tu ficha de
// Google Business o de WhatsApp. No inventes reseñas: es publicidad engañosa y
// Google suspende fichas cuando detecta el patrón.
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
