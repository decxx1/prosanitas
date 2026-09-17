# Prosanitas Salud

Sitio estático construido con Astro, Bun y Tailwind CSS 4.

## Requisitos

- Bun 1.4 o superior

## Desarrollo

```bash
bun install
cp .env.example .env
bun run dev
```

En Windows PowerShell, reemplazá `cp` por:

```powershell
Copy-Item .env.example .env
```

Completá `SITE_KEY` en `.env` para habilitar Google reCAPTCHA v3. Si la variable queda vacía, el script no se carga.

## Comandos

| Comando | Acción |
| --- | --- |
| `bun run dev` | Inicia el servidor de desarrollo. |
| `bun run build` | Valida tipos y genera el sitio en `dist/`. |
| `bun run preview` | Previsualiza el build de producción. |
| `bun run check` | Ejecuta las comprobaciones de Astro. |

## SEO

`src/layouts/BaseLayout.astro` centraliza los metadatos SEO, Open Graph, Twitter, favicons, preloads, datos estructurados y reCAPTCHA. Cada página debe pasar, como mínimo, `title` y `metaDescription`.

El sitemap y `robots.txt` se generan durante el build usando `https://prosanitassalud.com.ar` como URL base.

Los PNG de compatibilidad incluidos son marcadores provisionales. Reemplazalos por las versiones finales de marca en `public/images/logos/favicon/`:

- `faviconx16.png`
- `faviconx32.png`
- `faviconx56.png`
- `faviconx180.png`
