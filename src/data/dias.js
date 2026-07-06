// Registro de módulos clínicos del currículo (motor educativo).
// Todos los módulos (1–8) parten como esqueletos estructurados desde MODULES, listos para
// poblarse con el esquema completo. Los fundamentos de cuidados críticos viven ahora en el
// onboarding (../data/onboarding.js), no en el Módulo 1.
//
// Esquema por módulo (todos los campos salvo dia/titulo son opcionales):
//   { dia, titulo, tiempoEstimado, intro, objetivos, lecciones,
//     pearls, errores, skills, caso, quiz, referencias, quickReview, pendiente }
import { MODULES } from './modules.js'

// Módulos con contenido completo. Vacío por ahora: el Módulo 1 (Neuromonitoreo) quedó
// como esqueleto estructurado, listo para recibir su contenido real.
const DETAILED = {}

// Convierte un módulo base (MODULES) en un esqueleto con el nuevo esquema.
function buildSkeleton(m) {
  return {
    dia: m.dia,
    titulo: m.titulo,
    tiempoEstimado: '—',
    intro: null,
    objetivos: [m.objetivo],
    lecciones: m.temas.map((t, i) => ({
      id: `tema-${i}`,
      titulo: t,
      intro: '',
      bloques: [],
    })),
    pearls: [],
    errores: [],
    skills: [],
    caso: null,
    quiz: [],
    referencias: [],
    quickReview: [],
    pendiente: true,
  }
}

export const DIAS = MODULES.map((m) => DETAILED[m.dia] || buildSkeleton(m))

export const getDia = (n) => DIAS.find((d) => d.dia === Number(n)) || null
