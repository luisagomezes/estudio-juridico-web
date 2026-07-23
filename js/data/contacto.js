/*
 * Datos de contacto del Estudio.
 * Editar aquí: WhatsApp, horario de atención y el endpoint del formulario
 * son los tres datos que Luisa debe completar antes de publicar
 * (ver PENDIENTES.md y README.md).
 */

const CONTACTO = {
  direccion: {
    lineas: [
      "Carrera 16 # 93 A 16, Piso 5",
      "Edificio Pasandú",
      "El Chico, cerca al Parque de la 93",
      "Bogotá D.C. — Colombia"
    ]
  },

  telefonosPBX: ["+57 (1) 616 8027", "+57 (1) 611 2519"],

  // Correos ya confirmados para contacto directo con cada abogado.
  correos: [
    { nombre: "Dr. José Fernando Gómez Posada", correo: "abogadogomez@gmail.com" },
    { nombre: "Dr. Fabio Hernán Forero López", correo: "fabiohforero@hotmail.com" }
  ],

  // [INFORMACIÓN PENDIENTE] — número en formato internacional sin signos,
  // ej. "573001234567". Mientras sea null, el botón de WhatsApp queda oculto.
  whatsappNumero: null,

  // [INFORMACIÓN PENDIENTE] — ej. "Lunes a viernes, 8:00 a.m. a 5:00 p.m."
  horarioAtencion: null,

  // [INFORMACIÓN PENDIENTE] — endpoint del servicio de envío de formularios
  // (Formspree, Netlify Forms, etc.). Mientras sea null, el formulario se
  // comporta como fallo de envío real y ofrece WhatsApp/correo. Ver README.md.
  formEndpoint: null
};
