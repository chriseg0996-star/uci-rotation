// Fuente única de verdad para navegación, currículo y métricas.
// Estructura por módulos temáticos de UCI (enseñanza institucional).
// Nota interna: el identificador numérico de cada módulo se conserva en el campo `dia`
// para no romper rutas (/temario/:dia) ni claves de localStorage existentes.
// Los conteos de progreso estáticos son placeholders; se conectarán a localStorage.

export const NAV = [
  { key: 'dashboard', label: 'Dashboard', path: '/', icon: 'grid' },
  { key: 'inicio', label: 'Inicio de la Rotación', path: '/inicio', icon: 'compass' },
  { key: 'temario', label: 'Módulos Clínicos', path: '/temario', icon: 'book' },
  { key: 'calculadoras', label: 'Calculadoras', path: '/calculadoras', icon: 'calc' },
  { key: 'biblioteca', label: 'Biblioteca', path: '/biblioteca', icon: 'library' },
  { key: 'casos', label: 'Casos clínicos', path: '/casos', icon: 'stethoscope' },
  { key: 'checklist', label: 'Checklist', path: '/checklist', icon: 'check' },
  { key: 'evaluacion', label: 'Evaluación Final', path: '/evaluacion', icon: 'clipboard' },
]

export const ROTATION = {
  title: 'UCI Rotation',
  subtitle: 'Currículo de Terapia Intensiva basado en los temas de enseñanza de la unidad.',
  audiencia: ['Medicina Interna R3', 'Urgencias R3', 'Anestesiología R2'],
}

// Currículo modular de UCI. `dia` = identificador numérico del módulo (1–8).
export const MODULES = [
  {
    dia: 1,
    titulo: 'Neuromonitoreo',
    objetivo:
      'Integrar la monitorización neurológica multimodal para detectar y prevenir la lesión cerebral secundaria en el paciente neurocrítico.',
    temas: [
      'Examen neurológico dirigido y escala de coma de Glasgow',
      'Presión intracraneal y presión de perfusión cerebral',
      'Doppler transcraneal y pupilometría cuantitativa',
      'EEG continuo y detección de crisis no convulsivas',
      'Oximetría cerebral (NIRS) y monitorización multimodal',
    ],
  },
  {
    dia: 2,
    titulo: 'Sepsis',
    objetivo:
      'Reconocer y tratar la sepsis y el choque séptico con reanimación guiada por perfusión y control de foco oportuno.',
    temas: [
      'Definiciones Sepsis-3 y tamizaje',
      'Paquete de la primera hora (Surviving Sepsis)',
      'Antimicrobiano empírico, control de foco y desescalamiento',
      'Reanimación guiada por perfusión y respuesta a volumen',
      'Biomarcadores y reevaluación dinámica',
    ],
  },
  {
    dia: 3,
    titulo: 'Ventilación: Bases y Programación',
    objetivo:
      'Programar la ventilación mecánica inicial sobre principios de ventilación protectora y fisiología respiratoria.',
    temas: [
      'Mecánica respiratoria: distensibilidad y resistencia',
      'Modos ventilatorios y variables de control',
      'Programación inicial y ventilación protectora',
      'Driving pressure, PEEP y reclutamiento',
      'Asincronías paciente-ventilador',
    ],
  },
  {
    dia: 4,
    titulo: 'Retiro de la ventilación mecánica',
    objetivo:
      'Ejecutar un destete y una extubación seguros, anticipando y manejando el fallo de destete.',
    temas: [
      'Criterios de destete y prueba de ventilación espontánea',
      'Índices predictivos (RSBI) y valoración de la mecánica',
      'Prueba de fuga y riesgo de estridor post-extubación',
      'Estrategia de extubación y soporte post-extubación',
      'Fallo de destete: causas cardíacas y respiratorias',
    ],
  },
  {
    dia: 5,
    titulo: 'Choque y Monitoreo Hemodinámico',
    objetivo:
      'Clasificar el choque por fenotipo y guiar la reanimación con la monitorización hemodinámica adecuada.',
    temas: [
      'Fenotipos de choque y diagnóstico diferencial',
      'Respuesta a volumen e índices dinámicos',
      'Vasopresores e inotrópicos: elección y titulación',
      'Gasto cardíaco y monitorización avanzada',
      'Objetivos de reanimación y reevaluación',
    ],
  },
  {
    dia: 6,
    titulo: 'Ácido-base',
    objetivo:
      'Interpretar de forma sistemática los trastornos del equilibrio ácido-base y orientar su manejo.',
    temas: [
      'Abordaje sistemático de la gasometría',
      'Trastornos primarios y compensación esperada',
      'Brecha aniónica y análisis delta-delta',
      'Acidosis metabólica: causas y manejo',
      'Enfoque de Stewart (iones fuertes)',
    ],
  },
  {
    dia: 7,
    titulo: 'Protocolo ECO: VExUS, BLUE, FAST',
    objetivo:
      'Aplicar la ecografía a pie de cama para evaluar congestión venosa, patrón pulmonar y trauma, e integrarla en la reanimación.',
    temas: [
      'BLUE-protocol: patrones pulmonares y perfiles',
      'VExUS: gradación de la congestión venosa sistémica',
      'FAST / eFAST en el paciente traumatizado',
      'Integración ecográfica con la reanimación hemodinámica',
      'Errores frecuentes e interpretación de artefactos',
    ],
  },
  {
    dia: 8,
    titulo: 'Poliurias',
    objetivo:
      'Estructurar el diagnóstico diferencial de la poliuria en UCI y su manejo hidroelectrolítico.',
    temas: [
      'Definición y abordaje inicial de la poliuria',
      'Diuresis osmótica vs. diuresis acuosa',
      'Diabetes insípida central y nefrogénica',
      'Poliuria post-obstructiva y de la recuperación de NTA',
      'Manejo de agua libre y electrolitos',
    ],
  },
]

// Métricas de progreso del currículo (8 módulos). El contador de módulos completados
// se conecta al progreso real en el Dashboard; el resto son placeholders.
export const PROGRESS = [
  { key: 'modulos', label: 'Módulos completados', done: 0, total: MODULES.length, unit: 'módulos' },
  { key: 'checklists', label: 'Checklists', done: 0, total: MODULES.length, unit: 'checklists' },
  { key: 'casos', label: 'Casos clínicos', done: 0, total: MODULES.length, unit: 'casos' },
  { key: 'quizzes', label: 'Autoevaluaciones', done: 0, total: MODULES.length, unit: 'quizzes' },
]
