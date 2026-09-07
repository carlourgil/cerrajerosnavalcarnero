// Barrios y zonas de Navalcarnero. Cada entrada genera su landing en
// /zonas/<slug>/ para posicionamiento local.
// Solo Navalcarnero: no se añaden municipios de alrededor, para que la señal
// geográfica que recibe Google no se diluya.
export type Zone = {
  slug: string;
  name: string;
};

export const zones: Zone[] = [
  { slug: "centro", name: "Centro" },
  { slug: "el-pinar", name: "El Pinar" },
  { slug: "la-dehesa", name: "La Dehesa" },
  { slug: "san-andres", name: "San Andrés" },
  { slug: "san-isidro", name: "San Isidro" },
  { slug: "la-vereda", name: "La Vereda" },
  { slug: "navalcarnero-sur", name: "Navalcarnero Sur" },
  { slug: "poligono-alparrache", name: "Polígono Alparrache" },
];
