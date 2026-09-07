// Zonas de cobertura para páginas de SEO local.
// REVISA esta lista antes de publicar: confirma que atiendes todas estas zonas
// y añade las que falten (cada entrada genera su propia página /zonas/<slug>/).
export type Zone = {
  slug: string;
  name: string;
  // "barrio" = zona dentro de Navalcarnero. "municipio" = localidad cercana.
  kind: "barrio" | "municipio";
};

export const zones: Zone[] = [
  { slug: "centro", name: "Centro", kind: "barrio" },
  { slug: "el-pinar", name: "El Pinar", kind: "barrio" },
  { slug: "la-dehesa", name: "La Dehesa", kind: "barrio" },
  { slug: "san-andres", name: "San Andrés", kind: "barrio" },
  { slug: "san-isidro", name: "San Isidro", kind: "barrio" },
  { slug: "la-vereda", name: "La Vereda", kind: "barrio" },
  { slug: "navalcarnero-sur", name: "Navalcarnero Sur", kind: "barrio" },
  { slug: "poligono-alparrache", name: "Polígono Alparrache", kind: "barrio" },
  { slug: "arroyomolinos", name: "Arroyomolinos", kind: "municipio" },
  { slug: "sevilla-la-nueva", name: "Sevilla la Nueva", kind: "municipio" },
  { slug: "el-alamo", name: "El Álamo", kind: "municipio" },
  { slug: "moraleja-de-enmedio", name: "Moraleja de Enmedio", kind: "municipio" },
  { slug: "villamanta", name: "Villamanta", kind: "municipio" },
];
