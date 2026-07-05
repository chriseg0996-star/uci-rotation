// Fuente única de verdad para navegación, currículo y métricas.
// Los conteos de progreso son placeholders; se conectarán a localStorage en el siguiente paso.

export const NAV = [
  { key: 'dashboard', label: 'Dashboard', path: '/', icon: 'grid' },
  { key: 'temario', label: 'Temario', path: '/temario', icon: 'book' },
  { key: 'checklist', label: 'Checklist', path: '/checklist', icon: 'check' },
  { key: 'calculadoras', label: 'Calculadoras', path: '/calculadoras', icon: 'calc' },
  { key: 'biblioteca', label: 'Biblioteca', path: '/biblioteca', icon: 'library' },
  { key: 'casos', label: 'Casos clínicos', path: '/casos', icon: 'stethoscope' },
  { key: 'evaluacion', label: 'Evaluación', path: '/evaluacion', icon: 'clipboard' },
]

export const ROTATION = {
  title: 'UCI Rotation',
  subtitle: 'Bootcamp de Terapia Intensiva para Residentes Rotantes',
  week: 1,
  totalWeeks: 1,
  audiencia: ['Medicina Interna R3', 'Urgencias R3', 'Anestesiología R2'],
}

export const MODULES = [
  {
    dia: 1,
    titulo: 'Evaluación inicial del paciente crítico',
    objetivo:
      'Estructurar el abordaje ABCDE, priorizar la reanimación guiada por perfusión y reconocer al paciente en deterioro.',
    temas: [
      'Abordaje ABCDE y triage de gravedad',
      'Monitorización hemodinámica básica y avanzada',
      'Perfusión tisular: lactato, llenado capilar, moteado',
      'Escalas: SOFA, APACHE II, NEWS2',
    ],
  },
  {
    dia: 2,
    titulo: 'Ventilación mecánica y gasometría',
    objetivo:
      'Interpretar la gasometría arterial e iniciar ventilación protectora en el paciente con insuficiencia respiratoria.',
    temas: [
      'Interpretación sistemática de gasometría',
      'Ventilación protectora: Vt, driving pressure, meseta',
      'PEEP, reclutamiento y oxigenación',
      'Modos ventilatorios y asincronías',
    ],
  },
  {
    dia: 3,
    titulo: 'Choque y vasopresores',
    objetivo:
      'Clasificar el choque por fenotipo, guiar la reanimación y titular vasopresores con objetivo de PAM.',
    temas: [
      'Fenotipos de choque y diagnóstico diferencial',
      'Fluidoterapia guiada por respuesta a volumen',
      'Noradrenalina primero: titulación y objetivos',
      'Vasopresores de segunda línea e inotrópicos',
    ],
  },
  {
    dia: 4,
    titulo: 'Sepsis y antimicrobianos',
    objetivo:
      'Aplicar el paquete de la primera hora y elegir esquema antimicrobiano empírico según foco y ecología local.',
    temas: [
      'Definiciones Sepsis-3 y tamizaje',
      'Paquete de la primera hora (Surviving Sepsis)',
      'Terapia antimicrobiana empírica y de-escalamiento',
      'Control de foco y biomarcadores',
    ],
  },
  {
    dia: 5,
    titulo: 'Lesión renal aguda y TRR',
    objetivo:
      'Estadificar la LRA, corregir causas reversibles y reconocer indicaciones e inicio de terapia de reemplazo renal.',
    temas: [
      'Criterios KDIGO y diagnóstico diferencial',
      'Manejo conservador y ajuste de fármacos',
      'Indicaciones y momento de inicio de TRR',
      'Modalidades: intermitente vs. continua',
    ],
  },
  {
    dia: 6,
    titulo: 'Neurocrítico y sedación',
    objetivo:
      'Manejar la sedoanalgesia por objetivos, prevenir el delirium y aplicar medidas de neuroprotección.',
    temas: [
      'Sedación por objetivos: RASS, CPOT, analgesia primero',
      'Prevención y manejo del delirium (CAM-ICU)',
      'Neuroprotección e hipertensión intracraneal',
      'Interrupción diaria y bundle ABCDEF',
    ],
  },
  {
    dia: 7,
    titulo: 'Caso integrador y evaluación final',
    objetivo:
      'Integrar el razonamiento clínico en un caso complejo y demostrar competencias mediante la evaluación final.',
    temas: [
      'Caso integrador multisistémico',
      'Toma de decisiones bajo incertidumbre',
      'Presentación y discusión estructurada',
      'Evaluación final de la rotación',
    ],
  },
]

// Métricas de progreso (placeholder — se poblará desde localStorage).
export const PROGRESS = [
  { key: 'temas', label: 'Temas completados', done: 0, total: 28, unit: 'temas' },
  { key: 'checklists', label: 'Checklists completadas', done: 0, total: 7, unit: 'checklists' },
  { key: 'casos', label: 'Casos discutidos', done: 0, total: 7, unit: 'casos' },
  { key: 'evaluacion', label: 'Evaluación final', done: 0, total: 1, unit: 'intento' },
]

export const TODAY = {
  dia: 1,
  objetivo: MODULES[0].objetivo,
}
