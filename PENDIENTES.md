# Pendientes del sitio — Estudio Jurídico

Este archivo reúne todo lo marcado como `[INFORMACIÓN PENDIENTE]` en el sitio: información real que falta confirmar antes de publicar. Ningún dato aquí fue inventado — donde no había fuente confirmada, se dejó el marcador en su lugar.

Para cada punto se indica **qué falta**, **dónde completarlo** y **qué pasa mientras tanto**.

## 1. WhatsApp

- **Qué falta:** número de WhatsApp de contacto, en formato internacional sin signos (ej. `573001234567`).
- **Dónde completarlo:** `js/data/contacto.js`, propiedad `whatsappNumero`.
- **Mientras tanto:** todos los botones de WhatsApp del sitio (header, contacto, mensaje de fallback del formulario) se muestran atenuados y sin enlace activo, con un tooltip indicando que el número está pendiente.

## 2. Horario de atención

- **Qué falta:** horario de atención (ej. "Lunes a viernes, 8:00 a.m. a 5:00 p.m.").
- **Dónde completarlo:** `js/data/contacto.js`, propiedad `horarioAtencion`.
- **Mientras tanto:** en Contacto y en el pie de página se muestra el texto "Horario pendiente de confirmar".

## 3. Endpoint del formulario de contacto

- **Qué falta:** el endpoint de un servicio de envío de formularios sin backend (ej. Formspree, Netlify Forms).
- **Dónde completarlo:** `js/data/contacto.js`, propiedad `formEndpoint`. Instrucciones paso a paso en `README.md`.
- **Mientras tanto:** el formulario se comporta como un envío fallido real (nunca simula éxito) y ofrece de inmediato WhatsApp y los correos del equipo como alternativa.

## 4. Historia del estudio

- **Qué falta:** historia real (año de fundación, trayectoria, hitos).
- **Dónde completarlo:** `nosotros.html`, sección "Nuestra historia".

## 5. Misión, visión y valores

- **Qué falta:** misión, visión y de 3 a 5 valores que el estudio quiera comunicar.
- **Dónde completarlo:** `nosotros.html`, secciones "Misión", "Visión" y "Nuestros valores".

## 6. Detalle de la forma de trabajo

- **Qué falta:** detalle adicional de la metodología de trabajo (más allá del primer contacto, ya descrito).
- **Dónde completarlo:** `nosotros.html`, sección "Cómo trabajamos"; también el paso 4 de "Cómo trabajamos" en `index.html`.

## 7. Diferenciales del estudio

- **Qué falta:** qué distingue realmente al estudio (años de experiencia, tipo de casos, forma de acompañamiento, etc.).
- **Dónde completarlo:** `index.html`, sección "Diferenciales".

## 8. Presentación ampliada del estudio (Inicio)

- **Qué falta:** un texto de presentación más completo que el resumen actual.
- **Dónde completarlo:** `index.html`, sección "Quiénes somos".

## 9. Fotos y biografías del equipo

- **Qué falta:** foto y biografía breve de cada abogado (actualmente se muestran solo nombre y correo, con iniciales como placeholder de foto).
- **Dónde completarlo:** `js/data/equipo.js`, propiedades `foto`, `bio` y `cargo` de cada integrante.

## 10. Redes sociales

- **Qué falta:** URLs reales de LinkedIn e Instagram (o eliminar las que no existan).
- **Dónde completarlo:** `js/data/site.js`, array `redesSociales`.

## 11. Dominio y hosting

- **Qué falta:** decidir dónde se publicará el sitio (dominio propio, proveedor de hosting).
- **Dónde completarlo:** ver sección "Publicar el sitio" en `README.md` una vez decidido.

## 12. Descripciones específicas por área de práctica

- **Qué falta:** actualmente todas las tarjetas de "Áreas de práctica" usan el mismo texto genérico de acompañamiento. Si se desea un texto propio por área, hay que redactarlo.
- **Dónde completarlo:** `js/data/areas.js`, propiedad `descripcion` de cada área.
