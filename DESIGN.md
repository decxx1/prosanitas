---
name: Prosanitas Salud
description: Sitio de soluciones médicas para el hogar, las empresas y las ART.
colors:
  cream: "#f3f3ee"
  cyan: "#4693b6"
  cyan-dark: "#2f6f8c"
  ink: "#143246"
  hero-veil: "#163044"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Inter Tight Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.5vw, 3.65rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  nav:
    fontFamily: "Inter Tight Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.16em"
  body:
    fontFamily: "Inter Tight Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
spacing:
  header: "4.5rem"
  page-x: "4rem"
  page-x-sm: "1.25rem"
components:
  site-header:
    backgroundColor: "{colors.cream}"
    height: "{spacing.header}"
  nav-link:
    textColor: "{colors.cyan}"
    typography: "{typography.nav}"
  hero-headline:
    textColor: "{colors.white}"
    typography: "{typography.display}"
---

# Design System: Prosanitas Salud

## Overview

El primer viewport es una barra crema con el wordmark cian y, debajo, una foto a sangre. No hay tarjetas, kickers ni CTAs en caja. La marca se lee por el wordmark horizontal y el isotipo marfil (casa + corazón) sobre la fotografía.

## Colors

- **cream** `#f3f3ee`: barra de navegación, fondo del documento e isotipo.
- **cyan** `#4693b6`: wordmark y enlaces del menú (mismo valor que el SVG de marca).
- **cyan-dark** `#2f6f8c`: hover de navegación.
- **ink** `#143246`: texto de página.
- **hero-veil** `#163044`: velo sobre la foto para sostener el titular blanco.
- El verde de `--color-brand-*` existe en el tema y no se usa en este viewport.

## Typography

Una sola cara: Inter Tight Variable. El display del hero va en bold, blanco, tracking negativo. El segundo slide deja en regular la línea «En tu hogar • En tu empresa», pegada al titular con un `<br>` (sin margen extra). La navegación va en mayúsculas con tracking amplio.

## Layout

Header sticky de 4.5rem. El hero ocupa `100svh` menos esa altura. Márgenes horizontales compartidos: 1.25rem → 2rem → 3rem → 4rem. Titular a la izquierda (máximo 35rem). Isotipo anclado a la derecha. En viewports menores a 1024px el menú pasa a panel crema bajo el header.

## Elevation & Depth

Sin sombras en el header. El menú móvil usa `0 12px 28px rgba(20, 50, 70, 0.12)`. El hero cruza diapositivas solo con opacidad (0.9s) y un zoom lento en la foto activa.

## Shapes

Sin radios en header ni hero. El único recorte orgánico es el SVG `shape-transparent-iso.svg` (opacidad 50% en el archivo). Los puntos del carrusel son círculos de 10px, trazo crema.

## Components

- **SiteHeader:** wordmark a la izquierda, nav a la derecha, hamburguesa autorada en SVG.
- **HeroCarousel:** dos fotos, velo, isotipo fijo, titular por slide, puntos abajo a la izquierda.

## Do's and Don'ts

Do: alinear logo y titular al mismo inset. Do: pausar el autoplay con `prefers-reduced-motion`. Don't: devolver el header de ejemplo (pastilla verde «PS»). Don't: poner el isotipo dentro de cada slide (debe quedar quieto al cruzar).
