// Registro de días de la rotación (motor educativo).
// Día 1 usa el esquema completo (./days/dia1.js). Los Días 2–7 se generan como
// esquemas compatibles desde MODULES, listos para poblarse con el mismo formato.
//
// Esquema por día (todos los campos salvo dia/titulo son opcionales):
//   { dia, titulo, tiempoEstimado, intro, objetivos, lecciones,
//     pearls, errores, skills, caso, quiz, referencias, quickReview, pendiente }
import { MODULES } from './modules.js'
import dia1 from './days/dia1.js'

const DETAILED = {
  1: dia1,
}

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
