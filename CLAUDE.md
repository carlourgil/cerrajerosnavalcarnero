# Notas del proyecto

Web estática en Astro para un negocio de cerrajería en Navalcarnero. Sin framework
de UI ni de CSS: todo el sistema visual vive en `src/styles/global.css`.

## Servidor de desarrollo

Arráncalo en segundo plano:

```
astro dev --background
```

Se gestiona con `astro dev stop`, `astro dev status` y `astro dev logs`.

## Reglas de contenido

- **Un solo sitio para los datos del negocio**: `src/lib/config.ts`. No escribas
  teléfonos, direcciones ni datos fiscales dentro de los componentes.
- **Nada inventado**: si falta un dato real (precio, años de experiencia, dirección),
  se deja como `[PENDIENTE: ...]` y se ve en la web. No se rellena con una
  estimación.
- **Sin reseñas falsas**: `src/data/testimonials.ts` solo admite opiniones reales de
  clientes. Es publicidad engañosa y Google suspende fichas por ello.
- **Nombres de barrios verificados**: cada entrada de `src/data/zones.ts` genera una
  landing de SEO local; comprobar que el barrio existe antes de añadirlo.

## Documentación

Astro: https://docs.astro.build — en concreto
[rutas](https://docs.astro.build/en/guides/routing/),
[componentes](https://docs.astro.build/en/basics/astro-components/) y
[estilos](https://docs.astro.build/en/guides/styling/).
