/*
 * Áreas de práctica del Estudio.
 * Cada objeto es una tarjeta. Para agregar, quitar o renombrar un área,
 * edite este array — no hay que tocar el HTML ni el CSS.
 * "descripcion" es un texto genérico común (no hay descripciones
 * particulares confirmadas por área todavía — ver PENDIENTES.md).
 */

const DESCRIPCION_GENERICA =
  "Conozca cómo podemos orientarle en este tema y qué pasos seguir para su caso.";

const AREAS = [
  { id: "danos-perjuicios", nombre: "Daños y perjuicios", descripcion: DESCRIPCION_GENERICA },
  { id: "responsabilidad-estado", nombre: "Responsabilidad del Estado", descripcion: DESCRIPCION_GENERICA },
  { id: "responsabilidad-civil", nombre: "Responsabilidad civil", descripcion: DESCRIPCION_GENERICA },
  { id: "indemnizaciones", nombre: "Indemnizaciones", descripcion: DESCRIPCION_GENERICA },
  { id: "reclamaciones-seguros", nombre: "Reclamaciones de seguros", descripcion: DESCRIPCION_GENERICA },
  { id: "contratos-administrativos", nombre: "Contratos administrativos", descripcion: DESCRIPCION_GENERICA },
  { id: "acciones-tutela", nombre: "Acciones de tutela", descripcion: DESCRIPCION_GENERICA },
  { id: "procesos-constitucionales", nombre: "Procesos constitucionales", descripcion: DESCRIPCION_GENERICA },
  { id: "procesos-electorales", nombre: "Procesos electorales", descripcion: DESCRIPCION_GENERICA },
  { id: "derecho-urbano-inmobiliario", nombre: "Derecho urbano e inmobiliario", descripcion: DESCRIPCION_GENERICA },
  { id: "derecho-notarial", nombre: "Derecho notarial", descripcion: DESCRIPCION_GENERICA },
  { id: "derecho-familia-sucesiones", nombre: "Derecho de familia y sucesiones", descripcion: DESCRIPCION_GENERICA },
  { id: "asesorias-empresas", nombre: "Asesorías jurídicas, estratégicas y logísticas para empresas", descripcion: DESCRIPCION_GENERICA },
  { id: "consultorias-generales", nombre: "Consultorías generales", descripcion: DESCRIPCION_GENERICA }
];

// Subconjunto destacado en Inicio (primeras del listado; ajustar libremente).
const AREAS_DESTACADAS_IDS = [
  "responsabilidad-civil",
  "derecho-familia-sucesiones",
  "contratos-administrativos",
  "acciones-tutela",
  "derecho-urbano-inmobiliario",
  "asesorias-empresas"
];
