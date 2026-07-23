/*
 * Lógica compartida del sitio: header/footer, menú mobile, tarjetas de
 * áreas/equipo, y formulario de contacto. Depende de los datos definidos
 * en js/data/site.js, areas.js, equipo.js y contacto.js (cargarlos antes
 * que este archivo en cada página).
 */

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str == null ? "" : String(str);
  return div.innerHTML;
}

function whatsappHref(numero, mensaje) {
  const texto = encodeURIComponent(mensaje || "Hola, quisiera solicitar una asesoría jurídica.");
  return "https://wa.me/" + numero + "?text=" + texto;
}

function renderWhatsappBoton(clases, etiqueta, compacto) {
  if (CONTACTO.whatsappNumero) {
    return (
      '<a class="' + clases + '" href="' + whatsappHref(CONTACTO.whatsappNumero) +
      '" target="_blank" rel="noopener">' + etiqueta + "</a>"
    );
  }
  const sufijo = compacto ? "" : ' <span class="pendiente">pendiente</span>';
  return (
    '<span class="' + clases + '" aria-disabled="true" title="Número de WhatsApp pendiente de confirmar">' +
    etiqueta + sufijo + "</span>"
  );
}

function paginaActualHref() {
  const partes = window.location.pathname.split("/");
  const archivo = partes[partes.length - 1] || "index.html";
  return archivo === "" ? "index.html" : archivo;
}

function renderHeader() {
  const contenedor = document.getElementById("site-header");
  if (!contenedor) return;

  const actual = paginaActualHref();

  const itemsDesktop = SITE.menu
    .map(function (item) {
      const activo = item.href === actual ? ' aria-current="page"' : "";
      return '<li><a href="' + item.href + '"' + activo + ">" + escapeHtml(item.label) + "</a></li>";
    })
    .join("");

  const itemsMobile = SITE.menu
    .map(function (item) {
      const activo = item.href === actual ? ' aria-current="page"' : "";
      return '<li><a href="' + item.href + '"' + activo + ">" + escapeHtml(item.label) + "</a></li>";
    })
    .join("");

  contenedor.innerHTML =
    '<div class="container">' +
      '<a class="logo-link" href="index.html" aria-label="' + escapeHtml(SITE.nombre) + ', ir a Inicio">' +
        '<img src="assets/img/logo.png" alt="' + escapeHtml(SITE.nombre) + '">' +
      "</a>" +
      '<nav class="nav-desktop" aria-label="Principal"><ul>' + itemsDesktop + "</ul></nav>" +
      '<div class="nav-actions">' +
        renderWhatsappBoton("btn btn-whatsapp btn-compacto", "WhatsApp", true) +
        '<a class="btn btn-primario btn-compacto" href="' + SITE.ctaPrincipal.href + '">' + escapeHtml(SITE.ctaPrincipal.texto) + "</a>" +
      "</div>" +
      '<button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-mobile" aria-label="Abrir menú">' +
        "<span></span>" +
      "</button>" +
    "</div>" +
    '<nav class="nav-mobile" id="nav-mobile" aria-label="Principal móvil">' +
      "<ul>" + itemsMobile + "</ul>" +
      '<div class="nav-mobile-cta">' +
        '<a class="btn btn-primario btn-block" href="' + SITE.ctaPrincipal.href + '">' + escapeHtml(SITE.ctaPrincipal.texto) + "</a>" +
      "</div>" +
    "</nav>";

  const toggle = document.getElementById("nav-toggle");
  const menuMobile = document.getElementById("nav-mobile");
  toggle.addEventListener("click", function () {
    const abierto = menuMobile.classList.toggle("abierto");
    toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
}

function renderFooter() {
  const contenedor = document.getElementById("site-footer");
  if (!contenedor) return;

  const redes = SITE.redesSociales
    .map(function (red) {
      if (red.href) {
        return '<li><a href="' + red.href + '" target="_blank" rel="noopener">' + escapeHtml(red.label) + "</a></li>";
      }
      return '<li>' + escapeHtml(red.label) + ' <span class="pendiente">pendiente</span></li>';
    })
    .join("");

  const horario = CONTACTO.horarioAtencion
    ? escapeHtml(CONTACTO.horarioAtencion)
    : '<span class="pendiente">Horario pendiente de confirmar</span>';

  contenedor.innerHTML =
    '<div class="container">' +
      '<div class="footer-grid">' +
        "<div>" +
          "<h3>" + escapeHtml(SITE.nombre) + "</h3>" +
          "<p>" + CONTACTO.direccion.lineas.map(escapeHtml).join("<br>") + "</p>" +
        "</div>" +
        "<div>" +
          "<h3>Contacto</h3>" +
          "<p>" +
            CONTACTO.telefonosPBX.map(function (t) {
              return '<a href="tel:' + t.replace(/[^+\d]/g, "") + '">' + escapeHtml(t) + "</a>";
            }).join("<br>") +
          "</p>" +
          "<p>" + horario + "</p>" +
        "</div>" +
        "<div>" +
          "<h3>Redes</h3>" +
          '<ul class="footer-redes">' + redes + "</ul>" +
        "</div>" +
      "</div>" +
      '<div class="footer-legal">' +
        "© " + new Date().getFullYear() + " " + escapeHtml(SITE.nombre) + ". Esta página tiene fines informativos y no constituye asesoría jurídica." +
      "</div>" +
    "</div>";
}

function renderWhatsappFlotante() {
  const contenedor = document.getElementById("whatsapp-flotante");
  if (!contenedor || !CONTACTO.whatsappNumero) return;
  contenedor.innerHTML =
    '<a class="whatsapp-flotante" href="' + whatsappHref(CONTACTO.whatsappNumero) +
    '" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">WA</a>';
}

function tarjetaAreaHtml(area) {
  return (
    '<a class="tarjeta-area" href="contacto.html?area=' + encodeURIComponent(area.id) + '">' +
      "<h3>" + escapeHtml(area.nombre) + "</h3>" +
      "<p>" + escapeHtml(area.descripcion) + "</p>" +
      '<span class="tarjeta-link">Solicitar asesoría en esta área →</span>' +
    "</a>"
  );
}

function renderAreasDestacadas() {
  const contenedor = document.getElementById("areas-destacadas-grid");
  if (!contenedor) return;
  const destacadas = AREAS.filter(function (a) {
    return AREAS_DESTACADAS_IDS.indexOf(a.id) !== -1;
  });
  contenedor.innerHTML = destacadas.map(tarjetaAreaHtml).join("");
}

function renderAreasTodas() {
  const contenedor = document.getElementById("areas-grid");
  if (!contenedor) return;
  contenedor.innerHTML = AREAS.map(tarjetaAreaHtml).join("");
}

function renderEquipo() {
  const contenedor = document.getElementById("equipo-grid");
  if (!contenedor) return;

  contenedor.innerHTML = EQUIPO.map(function (persona) {
    const iniciales = persona.nombre
      .replace(/^Dr\.?a?\.?\s*/i, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map(function (p) { return p[0]; })
      .join("")
      .toUpperCase();

    const cargo = persona.cargo
      ? '<span class="cargo">' + escapeHtml(persona.cargo) + "</span>"
      : '<span class="cargo pendiente">Cargo pendiente</span>';

    const bio = persona.bio
      ? "<p>" + escapeHtml(persona.bio) + "</p>"
      : '<p class="pendiente">Biografía pendiente de confirmar.</p>';

    const foto = persona.foto
      ? '<img class="foto-placeholder" src="' + escapeHtml(persona.foto) + '" alt="' + escapeHtml(persona.nombre) + '">'
      : '<div class="foto-placeholder" aria-hidden="true">' + escapeHtml(iniciales) + "</div>";

    return (
      '<div class="tarjeta-persona">' +
        foto +
        "<h3>" + escapeHtml(persona.nombre) + "</h3>" +
        cargo +
        bio +
        '<a class="correo" href="mailto:' + escapeHtml(persona.correo) + '">' + escapeHtml(persona.correo) + "</a>" +
      "</div>"
    );
  }).join("");
}

/* ---------- Formulario de contacto ---------- */

function poblarSelectAreas(select) {
  AREAS.forEach(function (area) {
    const opt = document.createElement("option");
    opt.value = area.id;
    opt.textContent = area.nombre;
    select.appendChild(opt);
  });
  const optPendiente = document.createElement("option");
  optPendiente.value = "no-seguro";
  optPendiente.textContent = "No estoy seguro del área jurídica";
  select.appendChild(optPendiente);
}

function preseleccionarAreaDesdeUrl(select) {
  const params = new URLSearchParams(window.location.search);
  const area = params.get("area");
  if (area && select.querySelector('option[value="' + CSS.escape(area) + '"]')) {
    select.value = area;
  }
}

function validarCampo(campo) {
  const wrapper = campo.closest(".form-campo");
  let valido = true;

  if (campo.hasAttribute("required") && !campo.value.trim()) {
    valido = false;
  }

  if (valido && campo.type === "email" && campo.value.trim()) {
    valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim());
  }

  if (valido && campo.id === "campo-telefono" && campo.value.trim()) {
    const digitos = campo.value.replace(/\D/g, "");
    valido = digitos.length >= 7 && digitos.length <= 15;
  }

  wrapper.classList.toggle("con-error", !valido);
  return valido;
}

function iniciarFormularioContacto() {
  const form = document.getElementById("form-contacto");
  if (!form) return;

  const selectArea = form.querySelector("#campo-area");
  poblarSelectAreas(selectArea);
  preseleccionarAreaDesdeUrl(selectArea);

  const horarioEl = document.getElementById("aviso-horario-texto");
  if (horarioEl) {
    horarioEl.textContent = CONTACTO.horarioAtencion
      ? "Nuestro horario de atención es: " + CONTACTO.horarioAtencion + ". Los mensajes recibidos fuera de ese horario se responderán el siguiente día hábil."
      : "Horario de atención: [INFORMACIÓN PENDIENTE]. Los mensajes recibidos fuera de horario se responderán el siguiente día hábil.";
  }

  const mensaje = document.getElementById("form-mensaje");
  const camposObligatorios = ["campo-nombre", "campo-email", "campo-telefono", "campo-ciudad", "campo-area", "campo-descripcion"];

  camposObligatorios.forEach(function (id) {
    const campo = document.getElementById(id);
    campo.addEventListener("blur", function () { validarCampo(campo); });
  });

  function mostrarMensaje(tipo, html) {
    mensaje.className = "form-mensaje visible " + tipo;
    mensaje.innerHTML = html;
    mensaje.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function mensajeFallbackContacto() {
    let botones = '<div class="form-mensaje-acciones">';
    botones += renderWhatsappBoton("btn btn-whatsapp", "Escribir por WhatsApp");
    CONTACTO.correos.forEach(function (c) {
      botones += '<a class="btn btn-secundario" href="mailto:' + escapeHtml(c.correo) + '">Escribir a ' + escapeHtml(c.nombre) + "</a>";
    });
    botones += "</div>";
    return botones;
  }

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let todoValido = true;
    camposObligatorios.forEach(function (id) {
      const campo = document.getElementById(id);
      if (!validarCampo(campo)) todoValido = false;
    });

    if (!todoValido) {
      mostrarMensaje(
        "error",
        "<p>Revise los campos marcados: falta información o el formato no es válido.</p>"
      );
      return;
    }

    const datos = {
      nombre: document.getElementById("campo-nombre").value.trim(),
      email: document.getElementById("campo-email").value.trim(),
      telefono: document.getElementById("campo-telefono").value.trim(),
      ciudad: document.getElementById("campo-ciudad").value.trim(),
      area: document.getElementById("campo-area").value,
      descripcion: document.getElementById("campo-descripcion").value.trim()
    };

    if (!CONTACTO.formEndpoint) {
      mostrarMensaje(
        "error",
        "<p>En este momento no fue posible enviar el formulario. Por favor escríbanos directamente:</p>" +
          mensajeFallbackContacto()
      );
      return;
    }

    const botonEnviar = form.querySelector('button[type="submit"]');
    botonEnviar.disabled = true;

    fetch(CONTACTO.formEndpoint, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(datos)
    })
      .then(function (respuesta) {
        botonEnviar.disabled = false;
        if (respuesta.ok) {
          form.reset();
          mostrarMensaje(
            "exito",
            "<p>Gracias, recibimos su solicitud. Un miembro del equipo se pondrá en contacto pronto.</p>" +
              "<p>Recuerde: el envío de este formulario no crea una relación abogado-cliente ni implica la aceptación del caso.</p>"
          );
        } else {
          mostrarMensaje(
            "error",
            "<p>No pudimos enviar su solicitud. Por favor escríbanos directamente:</p>" + mensajeFallbackContacto()
          );
        }
      })
      .catch(function () {
        botonEnviar.disabled = false;
        mostrarMensaje(
          "error",
          "<p>No pudimos enviar su solicitud (posible problema de conexión). Por favor escríbanos directamente:</p>" +
            mensajeFallbackContacto()
        );
      });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderHeader();
  renderFooter();
  renderWhatsappFlotante();
  renderAreasDestacadas();
  renderAreasTodas();
  renderEquipo();
  iniciarFormularioContacto();
});
