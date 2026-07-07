// Registro de módulos clínicos (referencia de bolsillo de UCI).
// Cada módulo usa el esquema de secciones del nuevo motor. El Módulo 1 (Neuromonitoreo) es la
// implementación de referencia; los Módulos 2–8 adoptan la misma estructura vacía (pendiente).
//
// Esquema por módulo:
//   { dia, slug, titulo, subtitulo, overview, quickCards, figuras, highYield, pitfalls,
//     evidence, tools, caso, furtherReading, pendiente }
import { MODULES } from './modules.js'
import neuromonitoreo from './modules/neuromonitoreo.js'
import sepsis from './modules/sepsis.js'

// Módulos con contenido completo. El resto adopta el esqueleto de secciones.
const DETAILED = {
  1: neuromonitoreo,
  2: sepsis,
}

// Convierte un módulo base (MODULES) en un esqueleto con el esquema de secciones.
function buildSkeleton(m) {
  return {
    dia: m.dia,
    slug: `modulo-${m.dia}`,
    titulo: m.titulo,
    subtitulo: m.objetivo,
    overview: null,
    quickCards: [],
    figuras: [],
    highYield: [],
    pitfalls: [],
    evidence: [],
    tools: [],
    caso: null,
    furtherReading: [],
    reasoning: null,
    pendiente: true,
  }
}

export const DIAS = MODULES.map((m) => DETAILED[m.dia] || buildSkeleton(m))

export const getDia = (n) => DIAS.find((d) => d.dia === Number(n)) || null
