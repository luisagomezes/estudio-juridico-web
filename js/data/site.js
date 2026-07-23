/*
 * Datos generales del sitio: nombre, menú de navegación y redes sociales.
 * Editar aquí para cambiar textos del menú o agregar/quitar páginas y redes.
 * Ver README.md, sección "Editar contenido".
 */

const SITE = {
  nombre: "Estudio Jurídico",

  menu: [
    { label: "Inicio", href: "index.html" },
    { label: "Nosotros", href: "nosotros.html" },
    { label: "Áreas de práctica", href: "areas-de-practica.html" },
    { label: "Equipo", href: "equipo.html" },
    { label: "Contacto", href: "contacto.html" }
  ],

  ctaPrincipal: {
    texto: "Solicitar asesoría",
    href: "contacto.html"
  },

  // [INFORMACIÓN PENDIENTE] — pegar las URLs reales de las redes que existan.
  // Si una red no aplica, eliminar esa línea del array.
  redesSociales: [
    { label: "LinkedIn", href: null },
    { label: "Instagram", href: null }
  ]
};
