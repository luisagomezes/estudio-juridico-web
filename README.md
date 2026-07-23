# Sitio web — Estudio Jurídico

Sitio institucional estático (sin backend, sin plataforma): 5 páginas — Inicio, Nosotros, Áreas de práctica, Equipo y Contacto.

Antes de publicar, revisar [`PENDIENTES.md`](PENDIENTES.md): lista todo lo marcado como `[INFORMACIÓN PENDIENTE]` en el sitio (WhatsApp, horario, misión/visión/valores, etc.) con el archivo exacto donde completarlo.

## Previsualizar el sitio en su computador

No requiere instalación ni "build". Solo necesita servir la carpeta como sitio estático (abrir los archivos `.html` directamente con doble clic también funciona, pero algunos navegadores restringen JavaScript al abrir así, por eso se recomienda un servidor local simple):

```bash
python3 -m http.server 4173
```

Luego abra `http://localhost:4173/index.html` en el navegador. Para detenerlo, `Ctrl + C` en la terminal.

## Editar contenido

Toda la información que cambia con frecuencia vive en archivos de datos dentro de `js/data/`, separados del diseño (HTML/CSS). No hace falta saber programar para editarlos: son listas simples de datos entre comillas.

| Qué quiere cambiar | Archivo a editar |
|---|---|
| WhatsApp, horario de atención, dirección, teléfonos, correos, endpoint del formulario | `js/data/contacto.js` |
| Áreas de práctica (agregar, quitar, renombrar) | `js/data/areas.js` |
| Integrantes del equipo (agregar, quitar, foto, biografía, cargo) | `js/data/equipo.js` |
| Menú de navegación, redes sociales, texto del botón principal | `js/data/site.js` |
| Textos largos de cada página (historia, misión, visión, valores, diferenciales, etc.) | El archivo `.html` de la página correspondiente (`index.html`, `nosotros.html`, etc.) — buscar el texto y reemplazarlo directamente |

### Ejemplo: agregar un área de práctica nueva

Abrir `js/data/areas.js` y agregar una línea al array `AREAS`, siguiendo el mismo formato que las existentes:

```js
{ id: "nueva-area", nombre: "Nombre del área", descripcion: DESCRIPCION_GENERICA },
```

La tarjeta aparece automáticamente en la página "Áreas de práctica" — no hay que tocar el HTML.

### Ejemplo: agregar un integrante del equipo

Abrir `js/data/equipo.js` y agregar un objeto al array `EQUIPO`:

```js
{
  nombre: "Dra. Nombre Apellido",
  cargo: "Cargo",
  correo: "correo@ejemplo.com",
  foto: null, // o la ruta a una imagen en assets/img/
  bio: "Breve biografía."
}
```

### Ejemplo: activar WhatsApp

Abrir `js/data/contacto.js` y reemplazar:

```js
whatsappNumero: null,
```

por el número real, sin signos ni espacios, con indicativo de país:

```js
whatsappNumero: "573001234567",
```

Todos los botones de WhatsApp del sitio se activan automáticamente.

## Configurar el envío del formulario de contacto

El sitio no tiene servidor propio, así que el formulario de Contacto necesita un servicio externo gratuito que reciba el envío y lo entregue por correo. Mientras esto no esté configurado, el formulario sigue siendo seguro de usar: en vez de fingir que el envío funcionó, muestra un aviso claro y ofrece WhatsApp y correo como alternativa.

Pasos con **Formspree** (gratuito, sin backend propio):

1. Crear una cuenta en [formspree.io](https://formspree.io) con el correo del estudio.
2. Crear un nuevo formulario ("New Form") y copiar el endpoint que Formspree entrega (algo como `https://formspree.io/f/xxxxxxxx`).
3. Abrir `js/data/contacto.js` y reemplazar:
   ```js
   formEndpoint: null,
   ```
   por:
   ```js
   formEndpoint: "https://formspree.io/f/xxxxxxxx",
   ```
4. Probar el formulario en el sitio publicado con un envío de prueba y confirmar que llega el correo.

Si en cambio el sitio se publica en **Netlify**, se puede usar su manejador de formularios nativo en lugar de Formspree — en ese caso, pedir ayuda puntual para adaptar el envío del formulario a ese mecanismo.

## Publicar el sitio

Es un sitio 100% estático (HTML, CSS y JavaScript planos), por lo que puede publicarse en cualquier servicio de hosting estático gratuito, por ejemplo:

- **Netlify** o **Vercel**: arrastrar la carpeta del proyecto a su panel (o conectarla a un repositorio) y queda publicado con una URL gratuita; después se puede conectar un dominio propio.
- **GitHub Pages**: subir el proyecto a un repositorio de GitHub y activar Pages desde la configuración del repositorio.

El dominio definitivo (ej. `www.estudiojuridico.com`) y el proveedor de hosting quedan como [INFORMACIÓN PENDIENTE] en `PENDIENTES.md` — cualquiera de las opciones anteriores funciona igual con este sitio tal como está construido.

## Estructura del proyecto

```
index.html                  Inicio
nosotros.html                Nosotros
areas-de-practica.html       Áreas de práctica
equipo.html                  Equipo
contacto.html                Contacto + formulario
css/styles.css               Estilos e identidad visual (paleta, tipografía)
js/main.js                   Lógica compartida (menú, tarjetas, formulario)
js/data/site.js               Menú, redes sociales, textos generales
js/data/areas.js              Áreas de práctica
js/data/equipo.js             Integrantes del equipo
js/data/contacto.js           Datos de contacto y configuración del formulario
assets/img/                  Logo y foto de la oficina
PENDIENTES.md                 Información real pendiente de confirmar
```
