# AGENTS.md — Portafolio Personal de Desarrollador

Web estática para presentar mi perfil profesional, habilidades técnicas, proyectos y formación como estudiante de Ingeniería en Sistemas. El objetivo es mostrar mis conocimientos y proyectos de manera clara, profesional y atractiva para conseguir mi primera oportunidad laboral como desarrollador de software.

## Stack y estructura

- HTML, CSS y JavaScript puros: sin frameworks, librerías, npm, bundlers ni procesos de build.
- `index.html`: estructura y contenido de la página.
- `styles.css`: diseño visual, colores, tipografía, animaciones y responsive.
- `app.js`: interacciones y funcionalidades de la interfaz.
- La web debe funcionar abriendo `index.html` con doble clic (`file://`).
- No utilizar módulos ES (`type="module"`), `fetch` a archivos locales ni funcionalidades que requieran un servidor.
- No incorporar dependencias externas sin autorización.
- Mantener el código organizado, simple y fácil de entender para alguien que está aprendiendo desarrollo web.

## Objetivo del portafolio

Crear una web personal que funcione como presentación profesional y permita a reclutadores y empresas conocer mi perfil, mis conocimientos y mis proyectos.

El diseño debe transmitir profesionalismo, claridad y una orientación hacia el desarrollo de software, especialmente Backend y Java.

## Secciones principales

- **Inicio:** nombre, presentación breve, perfil como desarrollador y botones para explorar proyectos o contactarme.
- **Sobre mí:** estudiante del último año de Ingeniería en Sistemas en la Universidad Nacional del Centro de la Provincia de Buenos Aires. Interés en el desarrollo de software, aprendizaje continuo y búsqueda de mi primera oportunidad laboral en tecnología.
- **Habilidades técnicas:** Java, Spring Boot, SQL, PostgreSQL, APIs REST, HTML, CSS, JavaScript, Python, Git, GitHub, Docker y conocimientos de AWS. Mostrar las tecnologías de forma clara, sin exagerar el nivel de experiencia.
- **Proyectos:** mostrar proyectos académicos y personales con nombre, descripción, tecnologías utilizadas, funcionalidades principales y enlaces disponibles a GitHub o a una demo.
- **Formación:** carrera universitaria, cursos y certificaciones relevantes.
- **Contacto:** enlaces a LinkedIn, GitHub y correo electrónico, utilizando los datos reales que proporcione el usuario.

Estas secciones son la estructura inicial. No inventar información, proyectos, certificaciones, experiencia laboral ni enlaces. Si falta algún dato, dejar un lugar claramente identificable para completarlo.

## Diseño y experiencia de usuario

- Diseño moderno, limpio, profesional y visualmente atractivo.
- Priorizar una estética tecnológica, con buena jerarquía visual, espacios equilibrados y tipografía legible.
- **Paleta: exclusivamente oscura con acento verde.** Es la única combinación permitida.
  No introducir otros colores, ni acentos secundarios, ni degradados de otros tonos.
  Cualquier valor nuevo tiene que ser un negro, un verde o un gris neutro derivado de estos.
- Utilizar tarjetas para los proyectos y las habilidades cuando mejoren la presentación.
- Incluir una navegación clara entre las secciones.
- Incorporar efectos sutiles de interacción y transiciones cuando aporten valor.
- Los botones y enlaces deben tener estados visuales al pasar el cursor y al recibir el foco.
- Evitar diseños genéricos, elementos decorativos innecesarios y animaciones excesivas.
- El contenido debe ser el protagonista: no sacrificar legibilidad por estética.
- No agregar imágenes, iconos o recursos externos que generen dependencias innecesarias.

## Responsive y accesibilidad

- La web debe funcionar correctamente en móviles, tablets y computadoras.
- Aplicar un enfoque mobile-first cuando sea conveniente.
- Evitar desbordamientos horizontales y textos cortados.
- Utilizar etiquetas HTML semánticas.
- Mantener buen contraste entre texto y fondo.
- Todos los elementos interactivos deben poder utilizarse con teclado.
- Agregar textos alternativos a las imágenes relevantes.
- Respetar la preferencia del sistema por reducir las animaciones.
- Mantener una estructura de encabezados lógica.

## Convenciones de código

- Los textos de la interfaz deben estar en español, salvo nombres propios de tecnologías y términos técnicos habituales.
- Usar nombres descriptivos para clases, variables y funciones.
- Mantener HTML, CSS y JavaScript separados en sus respectivos archivos.
- Escribir código legible y apropiado para un desarrollador principiante.
- Evitar duplicaciones innecesarias y funciones excesivamente complejas.
- Agregar comentarios únicamente cuando ayuden a entender decisiones o lógica no evidente.
- No modificar partes funcionales sin una razón concreta.
- No incluir información personal sensible ni credenciales en el código.

## Contenido y perfil profesional

- Presentar el perfil como estudiante de Ingeniería en Sistemas orientado al desarrollo de software.
- Dar prioridad a los proyectos que demuestren conocimientos prácticos.
- Destacar Java, Spring Boot, PostgreSQL y APIs REST cuando corresponda.
- Diferenciar claramente los conocimientos, los proyectos académicos y la experiencia profesional.
- Utilizar descripciones concretas de las funcionalidades implementadas y los problemas resueltos.
- No afirmar que una tecnología se domina profesionalmente si el usuario no lo ha indicado.
- No inventar métricas, resultados, clientes, empresas ni años de experiencia.
- Mantener los textos breves, naturales y profesionales, evitando frases genéricas que no aporten información.
- Los enlaces a GitHub, LinkedIn, correo y demos deben ser reales y verificables.

## SEO y rendimiento

- Definir un título y una descripción adecuados para el portafolio.
- Configurar correctamente el idioma del documento y los metadatos básicos.
- Utilizar HTML semántico y evitar código innecesario.
- Optimizar las imágenes si se incorporan.
- Evitar scripts y estilos que no se utilicen.
- No incorporar analítica, seguimiento de usuarios ni formularios que envíen datos a servicios externos sin autorización.
- No implementar funcionalidades que requieran backend en una web que debe funcionar de manera estática.

## Forma de trabajar

- Antes de realizar cambios, revisar los archivos existentes y comprender cómo está organizado el proyecto.
- Si existe `MEMORY.md`, leerlo antes de empezar para conocer el estado del proyecto y las decisiones previas.
- Hacer únicamente los cambios solicitados, sin agregar funcionalidades por cuenta propia.
- Preferir cambios pequeños, enfocados y fáciles de revisar.
- Reutilizar los componentes y estilos existentes cuando sea razonable.
- No reescribir archivos completos si alcanza con modificar una parte.
- Si una petición es ambigua y puede afectar significativamente el diseño o la estructura, consultar antes de decidir.
- Al terminar, resumir qué se modificó, qué archivos se tocaron y qué aspectos necesitan revisión.

## Memoria del proyecto

- Si existe `MEMORY.md`, mantenerlo actualizado al finalizar las tareas relevantes.
- Registrar brevemente el estado actual, las decisiones importantes y los errores que deben evitarse.
- Mantenerlo conciso, con un máximo aproximado de 50 líneas.
- Si una decisión se convierte en una regla permanente, proponer incorporarla a este archivo `AGENTS.md`.
- No guardar claves, tokens, contraseñas ni otros datos sensibles.
- No crear `MEMORY.md` ni otros archivos nuevos sin autorización previa.

## Límites

- Siempre: mantener el código simple, la web responsive y el contenido fiel a la información real del usuario.
- Siempre: conservar la compatibilidad con `file://`.
- Siempre: revisar que los enlaces, botones y funcionalidades implementadas funcionen.
- Preguntar antes: incorporar dependencias, crear archivos adicionales, cambiar significativamente el diseño o agregar servicios externos.
- Nunca: instalar frameworks, agregar un paso de build o requerir un servidor para visualizar la web.
- Nunca: inventar información profesional o publicar datos personales no proporcionados.
- Nunca: reemplazar funcionalidades existentes sin una justificación clara.

## Verificación

- Después de cada cambio, abrir `index.html` en el navegador y comprobar que la página se visualice correctamente.
- Revisar la consola del navegador para detectar errores de JavaScript.
- Probar los enlaces, botones, navegación y demás interacciones implementadas.
- Verificar la vista móvil y los tamaños de pantalla más habituales.
- Comprobar que no existan errores de diseño, desbordamientos horizontales ni textos ilegibles.
- Si está disponible MCP de Chrome DevTools, utilizarlo para inspeccionar la página, revisar errores y probar la vista responsive.
- Si no está disponible, realizar las comprobaciones manualmente en el navegador.
- Antes de finalizar, confirmar que el sitio sigue funcionando abriendo `index.html` directamente.