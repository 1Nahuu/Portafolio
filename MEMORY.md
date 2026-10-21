# MEMORY.md — Portafolio Personal

## Estado

- Web estática: `index.html` + `style.css` + `app.js`. Funciona con doble clic (`file://`).
- Diseño: **secciones con tarjetas**, tipografías Syne (títulos) y JetBrains Mono
  (etiquetas), paleta oscura con acento verde.
- Se intentó un rediseño editorial (tipo dossier, sin tarjetas, barra lateral lateral)
  el [fecha de esta sesión] y **no fue del agrado del usuario: se volvió atrás**.
  No volver a proponer esa dirección sin que la pida explícitamente.
- El sitio **no depende de JS para leerse**: nada arranca en `opacity:0` sin la clase
  `js`, que agrega una línea en el `<head>`.
- **Sistema de movimiento** (agregado a pedido del usuario): la web se comporta como
  un programa arrancando. Ver la sección "Movimiento" más abajo.

## Movimiento

- Concepto: "arranque de compilación". El hero se escribe letra por letra con cursor
  de terminal, los títulos se revelan con máscara, las separaciones se dibinan, el nav
  marca la sección actual y el avance de lectura.
- **Regla clave: `clip-path` y `scaleX(0)` encogen el elemento, y el
  IntersectionObserver deja de detectarlo.** Por eso la máscara de los `h2` va en un
  `<span class="mask">` interno y las separaciones se dibujan con `background-size`,
  no con `transform`. Si se olvida, el contenido queda invisible.
- Los revelados usan `animation` (no `transition`) para no pisar las transiciones
  propias de cada tarjeta al pasar el cursor.
- El stagger se logra con `--n` (índice dentro del grupo) que asigna `app.js`.
- Todo respeta `prefers-reduced-motion`: se apagan animaciones y transiciones, y el
  contenido queda en su estado final.
- `app.js` pone `window.portafolioListo = true`; si no carga, el `<head>` quita la
  clase `js` a los 1,5 s para que la web se lea igual.


## Decisiones que no hay que revertir

- **Paleta solo negro + verde.** Está escrito en `AGENTS.md`.
- Contraste: todo el texto cumple AA. `--muted` es `#9b9bb2`; sobre el verde claro se
  usa texto oscuro (`--btn-text`), nunca blanco. El hover del botón aclara el verde
  (`--accent-hover`): oscurecerlo daba 3.5:1.
- Habilidades **sin barras de porcentaje** (autoinventario). Lista agrupada por
  categoría (`.skill-group`); AWS lleva la nota "conocimientos básicos".
- Proyectos **no son enlaces**: son `<article>` con los enlaces adentro
  (`.project-links`), para poder tener demo y repo sin anidar `<a>`.
- Formación en dos rejillas: títulos (universidad + secundaria) y los 3 cursos.
- Sin estilos inline en el HTML. La única línea de JS inline es la del `<head>`.

## Perfil y datos reales

- Estudiante de 5to año de Ingeniería en Sistemas (UNICEN); egresado de Técnico en
  Informática, orientación Persona y Profesional. Sin experiencia laboral: se presenta
  como junior con proyectos propios. Especialidad: Backend Developer (Java).
- Cursos de BIG School, cada uno con su certificado en `certificados/`: Prompt
  Engineering para desarrolladores (el certificado real dice "Curso de Iniciación al
  Desarrollo con IA", se aclara abajo), "De O a Producción" y "El Nuevo Programador".
- Proyecto 1 (Regalería Paris) tiene demo y repo en GitHub, ambos verificados.
- CV que se descarga: `CV_Nahuel_Vailati_.6f.pdf`; el "1.4" es viejo.

## Errores a evitar

- Si se cambia un color, recalcular contraste antes de dar por bueno.
- No usar `#00470A` ni violetas como color de texto: eran ilegibles (1.7:1).
- No volver a poner `style="..."` en el HTML.
- **No encoger con `clip-path`, `scaleX(0)` ni `width:0` el elemento que el
  IntersectionObserver tiene que detectar.** Es la causa clásica de "quedó invisible".
- **Cuidado con el atajo `background:`**: resetea `background-image` y borra los
  barridos de luz de los botones. Usar `background-color:`.
- Cuidado con el atajo `animation:`: reemplaza la animación anterior del elemento.
  Si un elemento ya rebotaba, listar las dos animaciones separadas por coma.
- Los certificados venían con RunLengthDecode (8-9 MB). Ya se recomprimieron a
  FlateDecode (~280 KB) verificando que las imágenes son idénticas. Si se vuelven a
  descargar de BIG School, repetir el procedimiento.
- **No hay control de versiones en este proyecto.** Antes de una reescritura grande,
  hacer una copia de `index.html`, `style.css` y `app.js`, o inicializar git.

## Pendientes

- [ ] Enlaces de los proyectos 2 a 5 (los pega el usuario).
- [ ] Navegación móvil: en ≤680px el menú del nav se oculta y no hay alternativa.
- [ ] Enlace "saltar al contenido".
- [ ] Achicar `icono.png` (775 KB) y `2.jpg` (183 KB).
- [ ] Borrar los dos CV viejos y poner el año del footer dinámico.

Mantener breve. Las reglas permanentes van en `AGENTS.md`.