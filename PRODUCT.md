# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Familias, empresas y ART (aseguradoras de riesgos del trabajo) en Argentina que buscan atención médica en el hogar, en el ámbito laboral o como parte de un convenio ART.

## Product Purpose

Prosanitas Salud ofrece soluciones médicas integrales: atención en el hogar, servicios para empresas y cobertura para ART. El sitio presenta la organización, sus servicios, CADEID y un canal de contacto.

## Positioning

Atención médica que llega al hogar y a la empresa, con un frente específico para ART, en lugar de una clínica a la que el paciente tiene que ir.

## Capabilities and Constraints

- Sitio estático en Astro; el menú vive en el layout y el hero de inicio es un carrusel de dos diapositivas.
- Las rutas de Quiénes somos, Servicios, CADEID y Contacto aún no existen; el menú apunta a anclas de la home hasta que esas páginas se construyan.
- No hay testimonios, precios ni listados de prestaciones confirmados: no inventarlos.

## Brand Commitments

- Nombre: Prosanitas / Prosanitas Salud.
- Wordmark verboso: `public/images/logos/prosanitas-cyan.svg` (cian `#4693b6`).
- Isotipo overlay del hero: `public/images/icons/shape-transparent-iso.svg`.
- Voz: clara, profesional, en español rioplatense.
- Composición del primer viewport fijada por mockup del cliente: barra crema, wordmark a la izquierda, navegación en mayúsculas a la derecha, foto a sangre, titular blanco a la izquierda, isotipo a la derecha.

## Evidence on Hand

- Hero 1: `public/images/hero/soluciones-medicas.webp` — “Soluciones médicas integrales para el hogar, las empresas y las ART.” (todo en bold).
- Hero 2: `public/images/hero/cuidar-tu-salud.webp` — “Innovando en la forma de cuidar tu salud” (bold) y “En tu hogar • En tu empresa” (regular, siempre en la línea siguiente, sin margen extra).
- Navegación del mockup: Quiénes somos, Servicios, CADEID, Contacto.

## Product Principles

- El cuidado se muestra en escena (fotos reales), no con iconografía genérica de clínica.
- El lenguaje nombra tres ámbitos: hogar, empresa y ART.
- No fabricar prueba social, precios ni capacidades no confirmadas.
- La marca se reconoce por el wordmark cian sobre crema, no por un logotipo inventado.

## Accessibility & Inclusion

Sitio público en español (es-AR). El carrusel debe pausarse con `prefers-reduced-motion` y ser operable por teclado.
