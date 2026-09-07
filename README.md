# Cerrajeros Navalcarnero

Web estática de cerrajería 24 h en Navalcarnero, hecha con Astro y sin dependencias
de UI. Dominio previsto: `cerrajerosnavalcarnero.madrid`.
Despliegue: Vercel, conectado a este repositorio (cada push a `main` publica).

## Comandos

| Comando           | Qué hace                                    |
| ----------------- | ------------------------------------------- |
| `npm install`     | Instala dependencias                        |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`  |
| `npm run build`   | Genera la web estática en `dist/`           |
| `npm run preview` | Sirve el resultado del build                |

## Antes de publicar

Todo lo que ponga `[PENDIENTE]` sale tal cual en la web, a propósito. Está en
`src/lib/config.ts`:

- Teléfono y WhatsApp
- Dirección (o quitar la sección si solo se trabaja a domicilio)
- Precio de referencia y años de experiencia
- Razón social, NIF, domicilio social y datos registrales (obligatorio para el aviso legal)
- Enlace a la ficha de Google Business

Además:

- `public/robots.txt` bloquea la indexación mientras haya datos pendientes. **Bórralo
  antes del lanzamiento** o Google no indexará la web.
- `src/data/testimonials.ts` está vacío a propósito: solo opiniones reales.
- `src/data/zones.ts` genera una landing por zona. Revisa la lista.
- Faltan las fotos propias: hay marcadores en `WhyUs.astro` (foto del técnico) y
  `LocationSection.astro` (mapa).

## Estructura

```
src/
  lib/config.ts        Datos del negocio. Fuente única de toda la web.
  data/                Servicios, zonas y opiniones.
  styles/global.css    Sistema visual completo (tokens, tipografía, componentes).
  layouts/Layout.astro Cabecera, pie, barra fija móvil y metadatos.
  components/          Secciones de la home.
  pages/               Home, servicios, zonas, contacto y páginas legales.
```

Las landings de servicio y de zona se generan solas a partir de `src/data/`:
añadir una entrada crea su página.
