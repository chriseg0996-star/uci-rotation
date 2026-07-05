// Contenido educativo por día. Día 1 completo (contenido ICU real, nivel senior).
// Días 2–7 heredan encabezado/objetivos/temas de MODULES y se marcan como pendientes
// de desarrollo de contenido detallado.
import { MODULES } from './modules.js'

const DIA_1 = {
  dia: 1,
  titulo: 'Evaluación inicial del paciente crítico',
  tiempoEstimado: '90 min',
  objetivos: [
    'Aplicar un abordaje ABCDE sistemático priorizando amenazas vitales conforme se detectan.',
    'Reconocer hipoperfusión tisular por signos clínicos: llenado capilar, moteado y lactato.',
    'Diferenciar los fenotipos de choque durante la evaluación inicial.',
    'Calcular e interpretar qSOFA y SOFA, y ubicar su valor pronóstico real.',
    'Establecer prioridades de reanimación en la primera hora, guiadas por perfusión.',
    'Definir criterios de ingreso a UCI y el nivel de monitorización requerido.',
  ],
  temas: [
    {
      titulo: 'Fisiología',
      puntos: [
        'Entrega de oxígeno (DO₂ = GC × CaO₂) vs. consumo (VO₂); la dependencia patológica DO₂/VO₂ define la hipoperfusión.',
        'Determinantes de la PAM: gasto cardíaco × resistencias vasculares sistémicas. Presión no es igual a flujo.',
        'Deuda de oxígeno y perfusión regional: la macrohemodinámica normal no garantiza microcirculación adecuada.',
        'El lactato refleja hipoperfusión, estrés adrenérgico y aclaramiento hepático reducido; interpretar en contexto, no de forma aislada.',
      ],
    },
    {
      titulo: 'Diagnóstico',
      puntos: [
        'Secuencia ABCDE: identificar y tratar la amenaza vital en el momento en que se detecta, no al final.',
        'Signos de hipoperfusión: llenado capilar >3 s, moteado (escala de Mottling), extremidades frías, alteración del estado mental, oliguria.',
        'Marcadores: lactato inicial y su aclaramiento a 2 h; ScvO₂; gap venoarterial de CO₂ (>6 mmHg sugiere flujo insuficiente).',
        'POCUS inicial (protocolo RUSH): bomba (contractilidad, derrame), tanque (VCI, líneas B, líquido libre) y tuberías (aorta, TVP).',
        'Escalas: qSOFA como tamizaje (≥2), SOFA para gravedad/pronóstico, NEWS2 para deterioro en piso.',
      ],
    },
    {
      titulo: 'Manejo inicial',
      puntos: [
        'Vía aérea y oxigenación: asegurar SpO₂ y ventilación antes de perseguir la presión.',
        'Accesos: dos vías periféricas gruesas; no retrasar el vasopresor por esperar acceso central.',
        'Cristaloides balanceados en bolos de 250–500 mL evaluando respuesta; evitar bolos ciegos repetidos.',
        'Objetivo inicial: PAM ≥65 mmHg; individualizar más alto solo en hipertensión crónica documentada.',
        'Cultivos y lactato antes del antibiótico, sin retrasar el antimicrobiano si hay sospecha de sepsis.',
      ],
    },
    {
      titulo: 'Manejo avanzado',
      puntos: [
        'Evaluar respuesta a volumen con índices dinámicos: VPP/VVS (si aplica), elevación pasiva de piernas, colapsabilidad de VCI.',
        'Noradrenalina como vasopresor de primera línea; iniciarla temprano, incluso por vía periférica gruesa mientras se coloca acceso central.',
        'Monitorización avanzada según trayectoria: gasto cardíaco, ecocardiografía seriada, presión de pulso.',
        'Control de foco: la fuente no controlada anula cualquier reanimación (drenaje, cirugía, retiro de dispositivo).',
      ],
    },
  ],
  pearls: [
    'Lactato >2 mmol/L con hipotensión es hipoperfusión hasta demostrar lo contrario. Repite a 2–4 h: el aclaramiento manda sobre el valor absoluto.',
    'El llenado capilar >3 s predice desenlace tan bien como el lactato y responde más rápido a la reanimación (ANDROMEDA-SHOCK).',
    'La elevación pasiva de piernas es un bolo reversible de ~300 mL: predice respuesta a volumen sin administrar líquido.',
    'Inicia noradrenalina por vía periférica gruesa si el acceso central se retrasa. No esperes.',
    'PAM 65 es el objetivo inicial por defecto; súbelo solo con justificación fisiológica individual, no por reflejo.',
  ],
  errores: [
    'Perseguir la PVC como meta de reanimación: no predice respuesta a volumen.',
    'Bolos de líquido repetidos sin reevaluar respuesta → sobrecarga hídrica, edema tisular y peor desenlace.',
    'Retrasar el vasopresor con la lógica de “primero llenar el tanque”.',
    'Normalizar la presión arterial sin evaluar perfusión: presión no es flujo.',
    'No repetir el lactato ni valorar su aclaramiento a las 2 h.',
    'Confundir qSOFA (tamizaje) con diagnóstico de sepsis o de choque.',
  ],
  caso: {
    titulo: 'Choque en el paciente febril',
    resumen:
      'Hombre de 62 años, DM2, con fiebre y disnea de 2 días. FC 122, PA 78/44 (PAM 55), FR 28, SpO₂ 89% al aire, Tº 38.9 °C. Moteado en rodillas, llenado capilar 4 s, desorientado. Lactato 4.8 mmol/L.',
    discusion: [
      'qSOFA 3/3 (hipotensión, taquipnea, alteración del estado mental): tamizaje positivo, alta sospecha de choque séptico con foco pulmonar probable.',
      'Primera hora: oxígeno para SpO₂ objetivo, dos accesos periféricos, hemocultivos + lactato, antimicrobiano empírico de amplio espectro en <1 h.',
      'Volumen: cristaloide balanceado 500 mL evaluando respuesta con elevación pasiva de piernas y POCUS (VCI, contractilidad), no bolos ciegos.',
      'Noradrenalina temprana para PAM ≥65 si persiste hipotensión tras el primer bolo; iniciar periférica si el acceso central se demora.',
      'POCUS RUSH: descartar disfunción de VD/derrame, estimar precarga por VCI y buscar líneas B como pista del foco.',
      'Reevaluar a 2 h: aclaramiento de lactato, llenado capilar y estado mental definen si escalar o desescalar.',
    ],
  },
  quickReview: [
    'ABCDE primero: trata cada amenaza vital en el momento en que la encuentras.',
    'Presión no es perfusión: guíate por lactato, llenado capilar y moteado.',
    'Reanima por respuesta a volumen dinámica, nunca por PVC.',
    'Noradrenalina temprana; no la retrases por sobrecargar líquidos.',
    'Reevaluación a 2 h: el aclaramiento de lactato y la perfusión definen el rumbo.',
  ],
}

// Construye el registro completo: día 1 detallado, resto con encabezado + objetivos base.
const DETAILED = { 1: DIA_1 }

export const DIAS = MODULES.map((m) => {
  const detail = DETAILED[m.dia]
  if (detail) return detail
  return {
    dia: m.dia,
    titulo: m.titulo,
    tiempoEstimado: '—',
    objetivos: [m.objetivo],
    temas: m.temas.map((t) => ({ titulo: t, puntos: [] })),
    pearls: [],
    errores: [],
    caso: null,
    quickReview: [],
    pendiente: true,
  }
})

export const getDia = (n) => DIAS.find((d) => d.dia === Number(n)) || null
