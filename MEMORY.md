# MEMORY.md — Portafolio Personal

## Estado

- Web estática `index.html` + `style.css` + `app.js`; funciona con doble clic (`file://`).
- Diseño de tarjetas, Syne + JetBrains Mono y paleta oscura con acento verde; habilidades en 6 tarjetas + 1 ancha.
- El sitio no depende de JS para leerse: `app.js` marca `portafolioListo`; si falla, el `<head>` quita `js` a los 1,5 s.
- Se probó un rediseño editorial sin tarjetas y no gustó: no volver a proponerlo sin pedido explícito.

## Idioma

- Español base en el HTML; inglés en `data-en` (solo elementos hoja) y aplicado por `app.js`.
- Selector ES/EN siempre visible en el nav, también en móvil. Clave: `portafolio-idioma`; por defecto `es`.
- Al cambiar: `<html lang>`, `aria-pressed`, título, meta description, `og:*` y `alDesplazar()`.
- Nombres oficiales (UNICEN, títulos, cursos y certificados) quedan en español.
- El selector no funciona sin JS; la página sigue siendo legible en español.

## Movimiento

- Concepto "arranque de compilación": hero escrito con cursor, títulos con máscara, nav con sección activa y avance de lectura.
- `clip-path` y `scaleX(0)` encogen el elemento y el IntersectionObserver deja de verlo: la máscara va en `.mask` interno y las separaciones usan `background-size`.
- Revelados con `animation`; stagger con `--n`. Todo respeta `prefers-reduced-motion`.

## Decisiones que no hay que revertir

- Paleta solo negro + verde (regla en `AGENTS.md`).
- Contraste AA: `--muted:#9b9bb2`; sobre verde, texto oscuro `--btn-text`; hover con `--accent-hover`.
- Habilidades sin porcentajes; AWS con "conocimientos básicos". IA última y ancha.
- Proyectos son `<article>` con enlaces adentro (`.project-links`), no tarjetas enlazadas.
- Formación en dos rejillas: títulos y cursos. Sin estilos inline en el HTML.

## Perfil y datos reales

- 5to año de Ingeniería en Sistemas (UNICEN); Técnico en Informática, orientación Persona y Profesional.
- Sin experiencia laboral: junior con proyectos propios. Especialidad: Backend Developer (Java).
- Cursos BIG School con certificados en `certificados/`: Prompt Engineering, "De O a Producción" y "El Nuevo Programador".
- Proyecto 1: BarberTrend AI (Java/Spring Boot, repo `1Nahuu/barbertrend-ai`); la etapa de IA está planificada, no implementada.
- Proyecto 2: Regalería Paris, demo y repo verificados.
- CV descargable: `CV_Nahuel_Vailati_V7.pdf` (ES) y `CV_Nahuel_Vailati_V7EN.pdf` (EN); el enlace `#cv-link` cambia de archivo y de nombre de descarga al cambiar de idioma. Los CV viejos (1.4 y .6) se borraron.

## Errores a evitar

- Recalcular contraste si se cambia un color. No usar `#00470A` ni violetas como texto.
- No volver a poner `style="..."`; no encoger con `clip-path`, `scaleX(0)` ni `width:0` lo que debe detectar el IntersectionObserver.
- Cuidado con los atajos `background:` y `animation:`: pisan imágenes o animaciones existentes.
- No poner `data-en` en elementos con hijos ni usar `innerHTML`; recalcular el nav tras cambiar idioma.
- Certificados recomprimidos a FlateDecode; si se descargan de nuevo, repetir el procedimiento.
- Commitear antes de una reescritura grande (ya hay git).

## Pendientes

- [ ] Revisar la redacción inglesa y decidir si se traducen los nombres oficiales.
- [ ] Enlaces de los proyectos 3 a 6; navegación móvil sin alternativa en ≤680 px.
- [ ] Enlace "saltar al contenido"; achicar imágenes; año del footer dinámico.
