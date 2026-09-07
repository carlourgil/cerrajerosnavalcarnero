// Zonas de cobertura para páginas de SEO local.
// REVISA esta lista antes de publicar: confirma los barrios y municipios que
// realmente cubres y elimina los que no atiendas.
export type Zone = {
  slug: string;
  name: string;
  // "barrio" = zona dentro de Navalcarnero. "municipio" = localidad cercana.
  kind: "barrio" | "municipio";
};

export const zones: Zone[] = [
  { slug: "centro", name: "Centro", kind: "barrio" },
  { slug: "casco-antiguo", name: "Casco Antiguo", kind: "barrio" },
  { slug: "la-estacion", name: "La Estación", kind: "barrio" },
  { slug: "el-comendador", name: "El Comendador", kind: "barrio" },
  { slug: "poligono-alparrache", name: "Polígono Alparrache", kind: "barrio" },
  { slug: "arroyomolinos", name: "Arroyomolinos", kind: "municipio" },
  { slug: "sevilla-la-nueva", name: "Sevilla la Nueva", kind: "municipio" },
  { slug: "el-alamo", name: "El Álamo", kind: "municipio" },
  { slug: "moraleja-de-enmedio", name: "Moraleja de Enmedio", kind: "municipio" },
  { slug: "villamanta", name: "Villamanta", kind: "municipio" },
];
