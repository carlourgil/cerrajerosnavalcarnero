# Cerrajeros Navalcarnero

Web estática (Astro) para el servicio de cerrajería 24h en Navalcarnero.
Dominio previsto: `cerrajerosnavalcarnero.madrid`

## Comandos

| Comando           | Acción                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Instala dependencias                      |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera la web en `./dist/`                |
| `npm run preview` | Previsualiza el build local               |

## Pendiente antes de publicar

Los siguientes datos aparecen como `[PENDIENTE: ...]` y se muestran tal cual en la web.
Todos viven en `src/lib/config.ts`:

- Teléfono, WhatsApp
- Dirección física (o retirar la sección si solo se atiende a domicilio)
- Razón social, NIF, domicilio social y datos registrales (necesarios para el aviso legal)
- Enlace a la ficha de Google Business

Además:

- `src/data/zones.ts` — revisar barrios y municipios cubiertos antes de publicar.
- `src/data/testimonials.ts` — está vacío a propósito. Añadir solo opiniones reales.
- `public/` — falta el logo y las imágenes propias. Hay marcadores `[PENDIENTE]` en
  `WhyUs.astro` (foto del equipo) y `LocationSection.astro` (mapa).

## Estructura

- `src/lib/config.ts` — datos del negocio, fuente única para toda la web.
- `src/data/` — servicios, zonas y testimonios.
- `src/pages/servicios/[slug].astro` y `src/pages/zonas/[slug].astro` — landings de SEO local.
- `src/styles/global.css` — sistema de estilos (sin framework CSS).
