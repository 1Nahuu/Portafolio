// Interacciones del portafolio.
// La línea que agrega la clase "js" al <html> queda en el <head> de index.html
// para que el navegador sepa que hay JavaScript antes de mostrar el contenido.

window.portafolioListo = true;

// Si el sistema pide menos movimiento, se desactivan las animaciones
// que dependen de JavaScript (escribir el nombre, inclinar la foto).
const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ============================================================
// 1. Aparición de los bloques al hacer scroll
// ============================================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Cada fila de las listas numeradas (datos del perfil, temas de los cursos)
// y cada etiqueta de proyecto lleva su número de orden dentro de su propio
// grupo, para que aparezcan una detrás de otra.
function numerarGrupos(selectorHijo, selectorPadre) {
  document.querySelectorAll(selectorPadre).forEach(padre => {
    padre.querySelectorAll(selectorHijo).forEach((hijo, i) => {
      hijo.style.setProperty('--n', i);
    });
  });
}
numerarGrupos('li', '.info-list');
numerarGrupos('li', '.curso-temas');
numerarGrupos('.tag', '.project-card');

// ============================================================
// 2. El nombre se escribe solo, como en una terminal
// ============================================================
const nombre = document.querySelector('.type');

if (nombre && !reducirMovimiento) {
  const texto = nombre.dataset.type || nombre.textContent;
  const rol = nombre.closest('.role');

  // El cursor se crea acá para que solo exista cuando hay JavaScript.
  const cursor = document.createElement('span');
  cursor.className = 'caret';
  cursor.setAttribute('aria-hidden', 'true');

  nombre.textContent = '';
  rol.appendChild(cursor);

  // Cada palabra va en su propio <span> para que el nombre pueda
  // pasar de línea entre palabras, pero nunca se parta al medio.
  let palabra = null;
  let i = 0;

  const escribir = () => {
    if (i > texto.length - 1) {
      rol.classList.add('is-typed');
      cursor.remove();
      return;
    }

    const letra = texto[i];
    if (letra === ' ') {
      palabra = null;
    } else {
      if (!palabra) {
        palabra = document.createElement('span');
        palabra.className = 'word';
        nombre.appendChild(palabra);
      }
      const ch = document.createElement('span');
      ch.className = 'ch';
      ch.textContent = letra;
      palabra.appendChild(ch);
    }

    i++;
    setTimeout(escribir, 65);
  };

  setTimeout(escribir, 500);
}

// ============================================================
// 3. Barra de progreso de lectura
// ============================================================
const progreso = document.querySelector('.nav-progress i');

function actualizarProgreso() {
  if (!progreso) return;
  const alto = document.documentElement.scrollHeight - window.innerHeight;
  const avance = alto > 0 ? window.scrollY / alto : 0;
  progreso.parentElement.style.setProperty('--p', Math.min(avance, 1));
}

// ============================================================
// 4. Indicador de la sección que se está leyendo
// ============================================================
const enlaces = Array.from(document.querySelectorAll('.nav-links a'));
const indicador = document.querySelector('.nav-indicator');
const secciones = enlaces
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function actualizarSeccion() {
  if (!secciones.length) return;

  // La sección activa es la última que ya pasó la línea de lectura.
  const linea = window.scrollY + window.innerHeight * 0.35;
  let activa = null;
  secciones.forEach(seccion => {
    if (seccion.offsetTop <= linea) activa = seccion;
  });

  enlaces.forEach(a => a.classList.remove('is-active'));
  if (!activa || !indicador) {
    if (indicador) indicador.classList.remove('is-on');
    return;
  }

  const enlace = enlaces.find(a => a.getAttribute('href') === '#' + activa.id);
  if (!enlace) return;

  enlace.classList.add('is-active');

  // El indicador se mueve hasta debajo del enlace activo.
  const caja = enlace.getBoundingClientRect();
  const contenedor = enlace.closest('.nav-links').getBoundingClientRect();
  indicador.style.setProperty('--x', (caja.left - contenedor.left) + 'px');
  indicador.style.width = caja.width + 'px';
  indicador.classList.add('is-on');
}

// ============================================================
// 5. Inclinación 3D de la foto al mover el cursor
// ============================================================
const foto = document.querySelector('[data-tilt]');

if (foto && !reducirMovimiento) {
  const zona = foto.parentElement;

  zona.addEventListener('pointermove', (event) => {
    const caja = foto.getBoundingClientRect();
    // Posición del cursor dentro de la foto, de 0 a 1.
    const x = (event.clientX - caja.left) / caja.width - 0.5;
    const y = (event.clientY - caja.top) / caja.height - 0.5;
    foto.style.setProperty('--rx', (-y * 10).toFixed(2) + 'deg');
    foto.style.setProperty('--ry', (x * 10).toFixed(2) + 'deg');
  });

  zona.addEventListener('pointerleave', () => {
    foto.style.setProperty('--rx', '0deg');
    foto.style.setProperty('--ry', '0deg');
  });
}

// ============================================================
// 6. El logo del nav aparece cuando ya se pasó la sección del hero
// ============================================================
const navLogo = document.getElementById('nav-logo');
const heroEl = document.querySelector('.hero');

function updateLogo(){
  const heroSalioDePantalla = heroEl.getBoundingClientRect().bottom <= 0;
  navLogo.classList.toggle('is-top', !heroSalioDePantalla);
}

// ============================================================
// Un solo manejador para todo lo que depende del scroll
// ============================================================
function alDesplazar() {
  actualizarProgreso();
  actualizarSeccion();
  updateLogo();
}

window.addEventListener('scroll', alDesplazar, {passive: true});
window.addEventListener('resize', alDesplazar, {passive: true});
alDesplazar();

// ============================================================
// 7. Selector de idioma (español / inglés)
// ============================================================
// El español vive en el HTML y el inglés en el atributo data-en.
// Así la página se puede leer aunque el JavaScript no se cargue.
const CLAVE_IDIOMA = 'portafolio-idioma';

const TITULO_PAGINA = {
  es: 'Nahuel Vailati — Desarrollador Backend Java',
  en: 'Nahuel Vailati — Backend Java Developer'
};

const DESCRIPCION_PAGINA = {
  es: 'Portafolio de Nahuel Vailati, estudiante de Ingeniería en Sistemas orientado al desarrollo backend con Java, Spring Boot y PostgreSQL. Proyectos, habilidades y contacto.',
  en: 'Portfolio of Nahuel Vailati, a Systems Engineering student focused on backend development with Java, Spring Boot, and PostgreSQL. Projects, skills, and contact details.'
};

const NOMBRE_SITIO = {
  es: 'Portafolio de Nahuel Vailati',
  en: 'Nahuel Vailati Portfolio'
};

// Se guarda el texto original de cada elemento para poder volver al español.
const textosTraducibles = Array.from(document.querySelectorAll('[data-en]')).map(elemento => ({
  elemento,
  textoEspanol: elemento.textContent
}));

// El CV tiene una versión en cada idioma: el enlace cambia según el idioma activo.
const enlaceCV = document.getElementById('cv-link');

function actualizarEnlaceCV(idioma) {
  if (!enlaceCV) return;
  const esIngles = idioma === 'en';
  enlaceCV.href = esIngles ? enlaceCV.dataset.cvEn : enlaceCV.dataset.cvEs;
  enlaceCV.setAttribute('download', esIngles ? enlaceCV.dataset.nombreEn : enlaceCV.dataset.nombreEs);
}

const selectorIdioma = document.getElementById('lang-switch');
const botonesIdioma = selectorIdioma
  ? Array.from(selectorIdioma.querySelectorAll('[data-idioma]'))
  : [];
const metaDescripcion = document.querySelector('meta[name="description"]');

function leerIdiomaGuardado() {
  try {
    const guardado = localStorage.getItem(CLAVE_IDIOMA);
    return guardado === 'es' || guardado === 'en' ? guardado : null;
  } catch (error) {
    // Algunos navegadores bloquean localStorage en file:// o en modo privado.
    return null;
  }
}

function guardarIdioma(idioma) {
  try {
    localStorage.setItem(CLAVE_IDIOMA, idioma);
  } catch (error) {
    // Si no se puede guardar, el cambio funciona igual durante esta visita.
  }
}

function aplicarIdioma(idioma) {
  const idiomaFinal = idioma === 'en' ? 'en' : 'es';
  document.documentElement.lang = idiomaFinal;

  textosTraducibles.forEach(({elemento, textoEspanol}) => {
    if (idiomaFinal === 'en' && elemento.hasAttribute('data-en')) {
      elemento.textContent = elemento.getAttribute('data-en');
    } else {
      elemento.textContent = textoEspanol;
    }
  });

  botonesIdioma.forEach(boton => {
    boton.setAttribute('aria-pressed', boton.dataset.idioma === idiomaFinal ? 'true' : 'false');
  });

  actualizarEnlaceCV(idiomaFinal);

  if (selectorIdioma) {
    selectorIdioma.setAttribute(
      'aria-label',
      idiomaFinal === 'en' ? 'Page language' : 'Idioma de la página'
    );
  }

  document.title = TITULO_PAGINA[idiomaFinal];

  if (metaDescripcion) {
    metaDescripcion.setAttribute('content', DESCRIPCION_PAGINA[idiomaFinal]);
  }

  const ogTitulo = document.querySelector('meta[property="og:title"]');
  const ogDescripcion = document.querySelector('meta[property="og:description"]');
  const ogSitio = document.querySelector('meta[property="og:site_name"]');
  const ogLocale = document.querySelector('meta[property="og:locale"]');

  if (ogTitulo) ogTitulo.setAttribute('content', TITULO_PAGINA[idiomaFinal]);
  if (ogDescripcion) ogDescripcion.setAttribute('content', DESCRIPCION_PAGINA[idiomaFinal]);
  if (ogSitio) ogSitio.setAttribute('content', NOMBRE_SITIO[idiomaFinal]);
  if (ogLocale) ogLocale.setAttribute('content', idiomaFinal === 'en' ? 'en_US' : 'es_AR');

  // Los enlaces del nav cambian de ancho al traducirse:
  // hay que volver a medir el indicador y el resto del scroll.
  alDesplazar();
}

if (selectorIdioma) {
  botonesIdioma.forEach(boton => {
    boton.addEventListener('click', () => {
      const idioma = boton.dataset.idioma;
      guardarIdioma(idioma);
      aplicarIdioma(idioma);
    });
  });

  aplicarIdioma(leerIdiomaGuardado() || 'es');
}
