// Módulo Clínico 3 — Ventilación: Bases y Programación (referencia de bolsillo de UCI).
// Estructura de decisión al pie de cama. Español clínico, nivel intensivista senior.
// Estilo AMBOSS + EMCrit + IBCC + ARDSnet + ATS/ESICM. Sin ensayos, sin quizzes.

const ventilacion = {
  dia: 3,
  slug: 'ventilacion',
  titulo: 'Ventilación: Bases y Programación',
  subtitulo: 'Programación inicial del ventilador, ventilación protectora e interpretación de la mecánica a pie de cama.',

  // 1 — OVERVIEW
  overview: {
    porque:
      'La ventilación mecánica salva vidas, pero también puede lesionar el pulmón (VILI). Una programación protectora desde el primer minuto —Vt bajo por peso predicho, presión meseta y driving pressure limitadas— pesa sobre el desenlace tanto como la enfermedad de base.',
    conceptos: [
      'Calcula el peso corporal predicho (PCP) por la talla y el sexo, nunca el peso real.',
      'Protectora: Vt 6 mL/kg PCP, presión meseta ≤30, driving pressure ≤15 cmH₂O.',
      'El driving pressure (Pmeseta − PEEP) integra el Vt y la compliance: mejor predictor de VILI.',
      'No corrijas la hipoxemia solo con FiO₂: optimiza PEEP, reclutamiento y trata la causa.',
      'Tras intubar, mide la mecánica de inmediato: meseta, driving pressure y auto-PEEP.',
    ],
    acciones: [
      'Confirmar posición del tubo (capnografía, auscultación).',
      'Programación protectora inicial (Vt 6 mL/kg PCP).',
      'Objetivo SpO₂ 92–96%; bajar FiO₂ guiado por SpO₂.',
      'Pausa inspiratoria: medir presión meseta y driving pressure.',
      'Analgosedación adecuada; vigilar hipotensión post-intubación.',
    ],
    bundleTitulo: 'Programación inicial',
    bundle: [
      'Modo A/C volumen control',
      'Vt 6 mL/kg PCP',
      'PEEP 5 (o según tabla PEEP/FiO₂)',
      'FiO₂ 100% → titular a SpO₂',
      'FR 16–20 rpm',
      'Meseta ≤30 · ΔP ≤15',
    ],
    redFlags: [
      'Presión meseta >30 cmH₂O.',
      'Driving pressure >15 cmH₂O.',
      'Hipoxemia refractaria pese a FiO₂ alta (P/F <150).',
      'Auto-PEEP / hiperinsuflación dinámica.',
      'Hipotensión tras intubar o subir PEEP.',
      'Asincronía marcada (doble disparo, esfuerzo inefectivo).',
    ],
    reevaluar: [
      'Meseta y driving pressure (pausa inspiratoria).',
      'SpO₂/FiO₂ para bajar el oxígeno.',
      'Auto-PEEP (pausa espiratoria) si obstructivo.',
      'Hemodinamia: hipotensión post-intubación.',
      'Sincronía y confort del paciente.',
      'Gasometría a 30 min tras los primeros ajustes.',
    ],
  },

  // 2 — QUICK CARDS
  quickCards: [
    {
      titulo: 'Volumen tidal',
      icon: 'sliders',
      tono: 'steel',
      filas: [
        { k: 'Protector', v: '6 mL/kg PCP', tono: 'mint' },
        { k: 'Rango', v: '4–8 mL/kg' },
        { k: 'Base', v: 'peso predicho' },
      ],
    },
    {
      titulo: 'Presión meseta',
      icon: 'target',
      tono: 'steel',
      filas: [
        { k: 'Objetivo', v: '≤30 cmH₂O', tono: 'mint' },
        { k: 'Alarma', v: '>30', tono: 'terra' },
        { k: 'Medir', v: 'pausa inspiratoria' },
      ],
    },
    {
      titulo: 'Driving pressure',
      icon: 'pulse',
      tono: 'pearl',
      filas: [
        { k: 'Objetivo', v: '≤15 cmH₂O', tono: 'mint' },
        { k: 'Riesgo VILI', v: '>15', tono: 'terra' },
        { k: 'Fórmula', v: 'Pmeseta − PEEP' },
      ],
    },
    {
      titulo: 'PEEP inicial',
      icon: 'layers',
      tono: 'steel',
      filas: [
        { k: 'Inicio', v: '5 cmH₂O' },
        { k: 'ARDS', v: 'tabla PEEP/FiO₂' },
      ],
    },
    {
      titulo: 'FiO₂ inicial',
      icon: 'flame',
      tono: 'terra',
      filas: [
        { k: 'Inicio', v: '100%' },
        { k: 'Titular', v: 'a SpO₂' },
        { k: 'Meta', v: 'la menor posible' },
      ],
    },
    {
      titulo: 'Frecuencia',
      icon: 'clock',
      tono: 'steel',
      filas: [
        { k: 'Inicio', v: '16–20 rpm' },
        { k: 'Ajustar', v: 'por PaCO₂/pH' },
        { k: 'Obstructivo', v: 'baja', tono: 'terra' },
      ],
    },
    {
      titulo: 'SpO₂ objetivo',
      icon: 'target',
      tono: 'mint',
      filas: [
        { k: 'Objetivo', v: '92–96%', tono: 'mint' },
        { k: 'Evitar', v: 'hiperoxia' },
      ],
    },
    {
      titulo: 'PaO₂ objetivo',
      icon: 'target',
      tono: 'mint',
      filas: [
        { k: 'Objetivo', v: '55–80 mmHg' },
        { k: 'ARDS', v: 'permisivo' },
      ],
    },
    {
      titulo: 'pH (hipercapnia permisiva)',
      icon: 'pulse',
      tono: 'pearl',
      filas: [
        { k: 'Tolerar', v: 'pH ≥7,20' },
        { k: 'Prioridad', v: 'Vt bajo/meseta' },
      ],
    },
    {
      titulo: 'Relación I:E',
      icon: 'sliders',
      tono: 'steel',
      filas: [
        { k: 'Habitual', v: '1:2' },
        { k: 'Obstructivo', v: '1:3–1:4' },
      ],
    },
    {
      titulo: 'Flujo inspiratorio',
      icon: 'waveform',
      tono: 'steel',
      filas: [
        { k: 'VC', v: '40–60 L/min' },
        { k: 'Ajustar', v: 'confort / I:E' },
      ],
    },
    {
      titulo: 'Alarmas',
      icon: 'alert',
      tono: 'terra',
      filas: [
        { k: 'Presión alta', v: 'meseta +5–10' },
        { k: 'Vol. minuto', v: 'bajo / alto' },
        { k: 'Apnea', v: 'respaldo' },
      ],
    },
    {
      titulo: 'Reevaluación',
      icon: 'clock',
      tono: 'steel',
      filas: [
        { k: 'Mecánica', v: 'tras cada cambio' },
        { k: 'Gasometría', v: '30 min' },
      ],
    },
  ],

  // 3 — FIGURAS & ALGORITMOS
  figuras: [
    {
      id: 'algo-setup',
      tipo: 'algorithm',
      titulo: 'Programación inicial del ventilador',
      caption: 'Del tubo a la mecánica: programa protector y verifica meseta y driving pressure con una pausa inspiratoria.',
      fuente: 'Adaptado de ARDSnet / ATS 2017',
      flow: [
        { kind: 'start', text: 'Paciente intubado' },
        { kind: 'action', text: 'Confirmar tubo (capnografía) · A/C volumen control' },
        { kind: 'action', text: 'Vt 6 mL/kg PCP · FR 16–20 · PEEP 5 · FiO₂ 100%' },
        { kind: 'action', text: 'Pausa inspiratoria: medir Pmeseta y ΔP' },
        {
          kind: 'decision',
          text: '¿Pmeseta ≤30 y ΔP ≤15?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Titular FiO₂/PEEP por SpO₂ · gasometría 30 min' },
            { label: 'No', kind: 'warn', text: 'Bajar Vt (hacia 4–5 mL/kg) y reevaluar' },
          ],
        },
      ],
    },
    {
      id: 'algo-pbw',
      tipo: 'algorithm',
      titulo: 'Peso predicho y selección del Vt',
      caption: 'El Vt se dosifica por el pulmón (talla), no por el peso real del paciente.',
      fuente: 'Adaptado de ARDSnet',
      flow: [
        { kind: 'start', text: 'Programar el volumen tidal' },
        { kind: 'action', text: 'Medir la talla (no el peso real)' },
        { kind: 'action', text: 'PCP: ♂ 50 + 0,91·(cm−152,4) · ♀ 45,5 + 0,91·(cm−152,4)' },
        { kind: 'action', text: 'Vt = 6 mL/kg PCP (rango 4–8)' },
        {
          kind: 'decision',
          text: '¿ΔP >15 o Pmeseta >30?',
          branches: [
            { label: 'No', kind: 'end', text: 'Mantener Vt' },
            { label: 'Sí', kind: 'warn', text: 'Reducir Vt a 5 (o 4) mL/kg PCP' },
          ],
        },
      ],
    },
    {
      id: 'fig-vcpc',
      tipo: 'svg',
      diagram: 'vc-vs-pc',
      titulo: 'Volumen control vs. Presión control',
      caption: 'VC entrega flujo constante (Vt fijo, presión variable); PC entrega flujo desacelerado (presión fija, Vt variable).',
      fuente: 'Esquema',
    },
    {
      id: 'algo-protectora',
      tipo: 'algorithm',
      titulo: 'Ventilación protectora',
      caption: 'Cuatro límites que protegen el pulmón; tolera la hipercapnia si el pH lo permite.',
      fuente: 'Adaptado de ARDSnet / Amato',
      flow: [
        { kind: 'start', text: 'Ventilación protectora' },
        { kind: 'action', text: 'Vt 6 mL/kg PCP' },
        { kind: 'action', text: 'Presión meseta ≤30 cmH₂O' },
        { kind: 'action', text: 'Driving pressure ≤15 cmH₂O' },
        { kind: 'action', text: 'PEEP adecuada (tabla PEEP/FiO₂)' },
        { kind: 'end', text: 'Hipercapnia permisiva si pH ≥7,20' },
      ],
    },
    {
      id: 'fig-ardsnet-table',
      tipo: 'table',
      titulo: 'Tabla ARDSnet PEEP/FiO₂ (PEEP baja)',
      caption: 'Combinaciones de PEEP y FiO₂ para titular la oxigenación en ARDS.',
      fuente: 'ARDSnet',
      table: {
        columnas: ['FiO₂', 'PEEP (cmH₂O)'],
        filas: [
          ['0,3', '5'],
          ['0,4', '5–8'],
          ['0,5', '8–10'],
          ['0,6', '10'],
          ['0,7', '10–14'],
          ['0,8', '14'],
          ['0,9', '14–18'],
          ['1,0', '18–24'],
        ],
      },
    },
    {
      id: 'fig-drivingpressure',
      tipo: 'svg',
      diagram: 'driving-pressure',
      titulo: 'Cálculo del driving pressure',
      caption: 'ΔP es la presión que realmente distiende el pulmón por encima de la PEEP; objetivo ≤15 cmH₂O.',
      fuente: 'Esquema',
    },
    {
      id: 'fig-compliance',
      tipo: 'svg',
      diagram: 'compliance',
      titulo: 'Cálculo de la compliance estática',
      caption: 'Crs = Vt / (Pmeseta − PEEP): la pendiente de la relación presión–volumen del sistema respiratorio.',
      fuente: 'Esquema',
    },
    {
      id: 'algo-hipoxemia',
      tipo: 'algorithm',
      titulo: 'Hipoxemia: resolución de problemas',
      caption: 'Verifica lo básico, optimiza PEEP y, si es refractaria, prono; no subas solo la FiO₂.',
      fuente: 'Adaptado de PROSEVA / ATS 2017',
      flow: [
        { kind: 'start', text: 'Hipoxemia (SpO₂ baja / P/F ↓)' },
        { kind: 'action', text: 'Verificar: FiO₂, circuito, posición del tubo, secreciones' },
        {
          kind: 'decision',
          text: '¿Corrige con maniobras básicas?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Titular FiO₂ a la baja' },
            { label: 'No', kind: 'action', text: 'Optimizar PEEP; descartar neumotórax' },
          ],
        },
        {
          kind: 'decision',
          text: '¿P/F <150 refractaria?',
          branches: [
            { label: 'No', kind: 'end', text: 'Continuar y reevaluar' },
            { label: 'Sí', kind: 'warn', text: 'Prono ≥16 h · bloqueo NM si asincronía · valorar rescate' },
          ],
        },
      ],
    },
    {
      id: 'algo-hipercapnia',
      tipo: 'algorithm',
      titulo: 'Hipercapnia: resolución de problemas',
      caption: 'Distingue obstrucción/auto-PEEP de hipoventilación; en el obstructivo, da tiempo espiratorio.',
      fuente: 'Adaptado de IBCC / EMCrit',
      flow: [
        { kind: 'start', text: 'Hipercapnia (PaCO₂ ↑ / pH ↓)' },
        { kind: 'action', text: 'Revisar ventilación minuto (Vt × FR) y espacio muerto' },
        {
          kind: 'decision',
          text: '¿Obstrucción / auto-PEEP?',
          branches: [
            { label: 'Sí', kind: 'warn', text: 'Dar tiempo espiratorio: bajar FR, I:E 1:3–1:4; tratar broncoespasmo' },
            { label: 'No', kind: 'action', text: 'Subir FR (cuidar auto-PEEP) o Vt dentro de límites' },
          ],
        },
        { kind: 'end', text: 'Tolerar hipercapnia permisiva si pH ≥7,20' },
      ],
    },
    {
      id: 'fig-waveforms',
      tipo: 'svg',
      diagram: 'vent-waveforms',
      titulo: 'Ondas básicas: normal, obstrucción, baja compliance',
      caption: 'En obstrucción el flujo espiratorio no vuelve a cero (auto-PEEP); la baja compliance eleva las presiones.',
      fuente: 'Esquema',
    },
    {
      id: 'fig-asincronia',
      tipo: 'svg',
      diagram: 'asynchrony',
      titulo: 'Asincronías paciente–ventilador',
      caption: 'Doble disparo (dos ciclos apilados) y esfuerzo inefectivo (muesca sin ciclo): reconoce antes de sedar.',
      fuente: 'Esquema',
    },
    {
      id: 'fig-mechpower',
      tipo: 'svg',
      diagram: 'mechanical-power',
      titulo: 'Potencia mecánica (concepto)',
      caption: 'La energía por minuto integra Vt, driving pressure, PEEP, frecuencia y flujo; umbral de riesgo ~17 J/min.',
      fuente: 'Esquema',
    },
  ],

  // 4 — HIGH-YIELD
  highYield: [
    'Calcula siempre el PCP por la talla, no el peso real: el Vt se dosifica por pulmón, no por grasa.',
    'El driving pressure integra Vt y compliance: mantenlo ≤15 cmH₂O.',
    'Una SpO₂ normal no significa mecánica segura: mide meseta y driving pressure.',
    'No arregles la hipoxemia solo con FiO₂: sube PEEP y trata la causa.',
    'Tras intubar, reevalúa la mecánica de inmediato (pausa inspiratoria).',
    'Pico alto con meseta normal es resistencia; pico y meseta altos es baja compliance.',
    'En obstructivos, más frecuencia empeora el atrapamiento: da tiempo espiratorio.',
    'Sospecha auto-PEEP ante hipotensión o disparo fallido: haz una pausa espiratoria.',
    'La hipercapnia permisiva es aceptable (pH ≥7,20) si protege el pulmón.',
    'La sedación no arregla un ventilador mal programado: corrige los ajustes primero.',
  ],

  // 5 — PITFALLS
  pitfalls: [
    'Usar el peso real en lugar del PCP para el Vt.',
    'No medir la presión meseta (mirar solo el pico).',
    'Ignorar el auto-PEEP y la hiperinsuflación dinámica.',
    'Sobresedar en vez de corregir la programación del ventilador.',
    'Tratar todo pico de presión alto por igual (resistencia vs compliance).',
    'Dejar la FiO₂ al 100% sin titular.',
    'No reconocer la hiperinsuflación dinámica en el obstructivo.',
    'Subir la frecuencia a ciegas en enfermedad obstructiva.',
    'Perseguir una PaCO₂ normal a costa de Vt y meseta altos.',
    'No reevaluar la mecánica tras cada cambio de parámetros.',
  ],

  // 6 — EVIDENCE
  evidence: [
    {
      titulo: 'Ventilation with Lower Tidal Volumes for Acute Lung Injury and ARDS (ARDSNet/ARMA)',
      revista: 'N Engl J Med',
      anio: 2000,
      doi: '10.1056/NEJM200005043421801',
      pubmed: '10793162',
      nivel: 'ECA',
      porque: 'Base de la ventilación protectora.',
      recomendacion: 'Vt 6 mL/kg PCP con meseta ≤30 redujo la mortalidad vs 12 mL/kg.',
      cambio: 'Convirtió el Vt bajo en el estándar del ARDS.',
    },
    {
      org: 'Amato',
      titulo: 'Driving Pressure and Survival in the Acute Respiratory Distress Syndrome',
      revista: 'N Engl J Med',
      anio: 2015,
      doi: '10.1056/NEJMsa1410639',
      pubmed: '25693014',
      nivel: 'Revisión',
      porque: 'Análisis de mediación de múltiples ensayos.',
      recomendacion: 'El driving pressure fue el predictor más fuerte de mortalidad.',
      cambio: 'Estableció ΔP ≤15 cmH₂O como objetivo.',
    },
    {
      titulo: 'Prone Positioning in Severe Acute Respiratory Distress Syndrome (PROSEVA)',
      revista: 'N Engl J Med',
      anio: 2013,
      doi: '10.1056/NEJMoa1214103',
      pubmed: '23688302',
      nivel: 'ECA',
      porque: 'Prono precoz y prolongado en ARDS grave.',
      recomendacion: 'El prono (≥16 h) redujo la mortalidad en ARDS con P/F <150.',
      cambio: 'Hizo del prono un estándar en el ARDS grave.',
    },
    {
      titulo: 'Neuromuscular Blockers in Early ARDS (ACURASYS)',
      revista: 'N Engl J Med',
      anio: 2010,
      doi: '10.1056/NEJMoa1005372',
      pubmed: '20843245',
      nivel: 'ECA',
      porque: 'Cisatracurio precoz en ARDS moderado-grave.',
      recomendacion: 'Mejoró la mortalidad ajustada sin aumentar la debilidad.',
      cambio: 'Introdujo el bloqueo NM precoz (luego matizado por ROSE).',
    },
    {
      titulo: 'Early Neuromuscular Blockade in ARDS (ROSE)',
      revista: 'N Engl J Med',
      anio: 2019,
      doi: '10.1056/NEJMoa1901686',
      pubmed: '31112383',
      nivel: 'ECA',
      porque: 'Reevaluó el bloqueo NM de rutina con sedación ligera.',
      recomendacion: 'El bloqueo NM de rutina no mejoró la mortalidad.',
      cambio: 'Reservó la paralización para casos seleccionados, no de rutina.',
    },
    {
      titulo: 'Lung Open Ventilation to Decrease Mortality in ARDS (LOVS)',
      revista: 'JAMA',
      anio: 2008,
      doi: '10.1001/jama.299.6.637',
      pubmed: '18270352',
      nivel: 'ECA',
      porque: 'PEEP alta + maniobras de reclutamiento.',
      recomendacion: 'Sin diferencia de mortalidad; mejor oxigenación y rescate.',
      cambio: 'La PEEP alta no es universal: individualizar.',
    },
    {
      titulo: 'Positive End-Expiratory Pressure Setting in ARDS (EXPRESS)',
      revista: 'JAMA',
      anio: 2008,
      doi: '10.1001/jama.299.6.646',
      pubmed: '18270353',
      nivel: 'ECA',
      porque: 'Estrategia de PEEP alta guiada por presión meseta.',
      recomendacion: 'Sin beneficio de mortalidad; más días libres de ventilador.',
      cambio: 'Reforzó la individualización de la PEEP.',
    },
    {
      titulo: 'Lung Recruitment and Titrated PEEP vs Low PEEP in ARDS (ART)',
      revista: 'JAMA',
      anio: 2017,
      doi: '10.1001/jama.2017.14171',
      pubmed: '28973363',
      nivel: 'ECA',
      porque: 'Reclutamiento máximo + PEEP titulada.',
      recomendacion: 'Aumentó la mortalidad frente a PEEP baja.',
      cambio: 'Desaconsejó el reclutamiento agresivo sistemático.',
    },
    {
      titulo: 'Epidemiology and Patterns of Care in ARDS (LUNG SAFE)',
      revista: 'JAMA',
      anio: 2016,
      doi: '10.1001/jama.2016.0291',
      pubmed: '26903337',
      nivel: 'Revisión',
      porque: 'Estudio observacional global del ARDS real.',
      recomendacion: 'ARDS infradiagnosticado y ventilación protectora infrautilizada.',
      cambio: 'Llamó a reconocer el ARDS y aplicar la protección de forma consistente.',
    },
    {
      org: 'ATS/ESICM/SCCM',
      titulo: 'Mechanical Ventilation in Adult Patients with ARDS — Clinical Practice Guideline',
      revista: 'Am J Respir Crit Care Med',
      anio: 2017,
      doi: '10.1164/rccm.201703-0548ST',
      pubmed: '28459336',
      nivel: 'Guía',
      porque: 'Guía de referencia del manejo ventilatorio del ARDS.',
      recomendacion: 'Vt bajo, presiones limitadas y prono en el ARDS grave.',
      cambio: 'Consolidó el marco de la ventilación protectora.',
    },
  ],

  // 7 — CLINICAL TOOLS
  tools: [
    { tipo: 'calc', calc: 'pbw', titulo: 'Peso corporal predicho (PCP)' },
    { tipo: 'calc', calc: 'tidalvolume', titulo: 'Volumen tidal por PCP' },
    { tipo: 'calc', calc: 'drivingpressure', titulo: 'Driving pressure' },
    { tipo: 'calc', calc: 'compliance', titulo: 'Compliance estática' },
    { tipo: 'calc', calc: 'pfratio', titulo: 'PaO₂/FiO₂ y gravedad' },
    { tipo: 'calc', calc: 'mechpower', titulo: 'Potencia mecánica (simplificada)' },
    {
      tipo: 'table',
      titulo: 'Clasificación de ARDS (Berlín)',
      table: {
        columnas: ['Gravedad', 'PaO₂/FiO₂', 'Nota'],
        filas: [
          ['Leve', '200–300', 'PEEP/CPAP ≥5'],
          ['Moderado', '100–200', 'PEEP ≥5'],
          ['Severo', '<100', 'considerar prono'],
        ],
        tonos: ['mint', 'pearl', 'terra'],
      },
    },
    {
      tipo: 'table',
      titulo: 'Pico vs meseta (interpretación)',
      table: {
        columnas: ['Escenario', 'Pico', 'Meseta', 'Sugiere'],
        filas: [
          ['Alta resistencia', '↑', 'normal', 'broncoespasmo · secreciones · tubo'],
          ['Baja compliance', '↑', '↑', 'ARDS · edema · neumotórax · atelectasia'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Programación inicial (referencia)',
      table: {
        columnas: ['Parámetro', 'Valor'],
        filas: [
          ['Modo', 'A/C volumen control'],
          ['Vt', '6 mL/kg PCP'],
          ['PEEP', '5 (o tabla)'],
          ['FiO₂', '100% → titular'],
          ['FR', '16–20 rpm'],
          ['Flujo', '40–60 L/min'],
          ['I:E', '1:2'],
          ['Meseta', '≤30 · ΔP ≤15'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Inicio en enfermedad obstructiva',
      table: {
        columnas: ['Parámetro', 'Valor'],
        filas: [
          ['Vt', '6–8 mL/kg PCP'],
          ['FR', 'baja (10–14)'],
          ['I:E', '1:3–1:4'],
          ['Flujo', 'alto (60–80 L/min)'],
          ['PEEP', 'baja (0–5)'],
          ['CO₂', 'hipercapnia permisiva'],
          ['Vigilar', 'auto-PEEP (pausa esp.)'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Tabla ARDSnet PEEP/FiO₂',
      table: {
        columnas: ['FiO₂', 'PEEP'],
        filas: [
          ['0,3', '5'],
          ['0,4', '5–8'],
          ['0,5', '8–10'],
          ['0,6', '10'],
          ['0,7', '10–14'],
          ['0,8', '14'],
          ['0,9', '14–18'],
          ['1,0', '18–24'],
        ],
      },
    },
  ],

  // 8 — CLINICAL CASE
  caso: {
    titulo: 'Insuficiencia respiratoria hipoxémica por neumonía grave',
    contexto:
      'Varón de 58 años, talla 175 cm, recién intubado por neumonía bilateral con insuficiencia respiratoria hipoxémica aguda. Formula tu conducta antes de revelar el análisis experto.',
    fases: [
      {
        titulo: 'Fase 1 — Programación post-intubación',
        vineta:
          'Acaba de ser intubado. Está en modo A/C y debes programar el ventilador. Talla 175 cm, sexo masculino.',
        datos: [
          { k: 'Talla', v: '175 cm' },
          { k: 'Sexo', v: 'M' },
          { k: 'Modo', v: 'A/C VC' },
          { k: 'SpO₂', v: '90% con FiO₂ 100%' },
        ],
        pregunta: '¿Cómo calculas el Vt y qué parámetros iniciales programas?',
        pista: 'Calcula el peso corporal predicho por la talla, no el peso real.',
        analisis: [
          'PCP (♂, 175 cm) = 50 + 0,91·(175 − 152,4) ≈ 71 kg → Vt 6 mL/kg ≈ 424 mL.',
          'Por qué PCP: el pulmón escala con la talla; usar el peso real sobredistiende y causa VILI.',
          'Inicial: PEEP 5–8, FiO₂ 100% titulando a SpO₂ 92–96%, FR 18–20; pausa inspiratoria para medir meseta y ΔP.',
          'Vigila la hipotensión post-intubación (sedantes + presión positiva).',
        ],
        aprendizaje: 'La programación protectora empieza en el primer minuto y se dosifica por el peso predicho.',
      },
      {
        titulo: 'Fase 2 — Primera gasometría',
        vineta:
          'A los 30 minutos, con FiO₂ 80% y PEEP 8, obtienes la gasometría y mides la mecánica.',
        datos: [
          { k: 'pH', v: '7,30' },
          { k: 'PaCO₂', v: '48 mmHg' },
          { k: 'PaO₂', v: '68 mmHg' },
          { k: 'FiO₂', v: '0,8' },
          { k: 'Pmeseta', v: '26 cmH₂O' },
          { k: 'ΔP', v: '18 cmH₂O' },
        ],
        pregunta: '¿Cómo interpretas la oxigenación y la mecánica? ¿Qué ajustas?',
        pista: 'Calcula el P/F y valora el driving pressure; ¿el pH necesita corrección?',
        analisis: [
          'P/F = 68 / 0,8 = 85 → ARDS severo.',
          'ΔP 18 (>15) con meseta 26 → el problema es el driving pressure: baja el Vt hacia 5 mL/kg para ΔP ≤15.',
          'Ajusta PEEP según la tabla PEEP/FiO₂ para reducir la FiO₂ manteniendo la protección.',
          'pH 7,30 es hipercapnia permisiva aceptable: no subas el Vt para “normalizar” la PaCO₂.',
        ],
        aprendizaje: 'Un P/F bajo define la gravedad, pero el driving pressure define cuánto daño hace tu programación.',
      },
      {
        titulo: 'Fase 3 — Meseta alta / baja compliance',
        vineta:
          'Subes la PEEP a 12 buscando oxigenación. Ahora la meseta es 33, el ΔP 21 y la compliance está baja.',
        datos: [
          { k: 'Pmeseta', v: '33 cmH₂O' },
          { k: 'PEEP', v: '12 cmH₂O' },
          { k: 'ΔP', v: '21 cmH₂O' },
          { k: 'Vt', v: '420 mL' },
          { k: 'Crs', v: '≈20 mL/cmH₂O' },
        ],
        pregunta: '¿Qué haces ante meseta 33 y ΔP 21?',
        pista: 'Ambos superan los límites protectores; ¿qué palanca mueves primero?',
        analisis: [
          'Meseta >30 y ΔP >15 → riesgo de VILI: reduce el Vt (a 5 o incluso 4 mL/kg PCP).',
          'Reevalúa la PEEP: subirla mejoró la oxigenación pero elevó la meseta; evita la sobredistensión (ART advierte contra el reclutamiento agresivo).',
          'Crs ≈20 mL/cmH₂O confirma un pulmón rígido (ARDS); mide el ΔP tras cada cambio.',
          'No persigas una PaCO₂ normal a costa de presiones lesivas.',
        ],
        aprendizaje: 'Cuando meseta y ΔP suben juntos, el pulmón es el límite: baja el Vt antes que forzar la PEEP.',
      },
      {
        titulo: 'Fase 4 — Hipoxemia refractaria',
        vineta:
          'Pese a FiO₂ 100% y PEEP optimizada, la oxigenación empeora: P/F 90, SpO₂ 88%.',
        datos: [
          { k: 'FiO₂', v: '1,0' },
          { k: 'PEEP', v: '12 cmH₂O' },
          { k: 'P/F', v: '90' },
          { k: 'Pmeseta', v: '30 cmH₂O' },
          { k: 'ΔP', v: '15 cmH₂O' },
        ],
        pregunta: '¿Cuál es el siguiente paso ante la hipoxemia refractaria?',
        pista: '¿Qué intervención tiene beneficio de mortalidad en ARDS grave?',
        analisis: [
          'Hipoxemia refractaria en ARDS severo (P/F <100 sostenido) → prono ≥16 h: la intervención con beneficio de mortalidad (PROSEVA).',
          'Antes: descarta causas reversibles (neumotórax, tapón mucoso, mala posición del tubo).',
          'Mantén la protección (Vt bajo, ΔP ≤15) durante todo; el prono no sustituye la ventilación protectora.',
          'Valora el bloqueo NM si hay asincronía o hipoxemia grave (no de rutina; ROSE).',
        ],
        aprendizaje: 'La hipoxemia refractaria en ARDS grave se trata con prono, no subiendo más la FiO₂.',
      },
      {
        titulo: 'Fase 5 — Reevaluación integral',
        vineta:
          'Decides pronar. Revisas la sedación, la necesidad de paralización y si hay lugar para reclutamiento.',
        datos: [
          { k: 'Prono', v: 'iniciado ≥16 h' },
          { k: 'Sedación', v: 'profunda para tolerar' },
          { k: 'Bloqueo NM', v: 'si asincronía' },
        ],
        pregunta: '¿Cómo integras prono, sedación, paralización y reclutamiento?',
        pista: 'Cada intervención tiene su evidencia: úsala con criterio.',
        analisis: [
          'Prono ≥16 h en ARDS severo (P/F <150): la mayor evidencia de beneficio (PROSEVA).',
          'Sedación profunda para tolerar el prono; bloqueo NM solo si hay asincronía o hipoxemia grave, no de rutina (ROSE).',
          'Reclutamiento máximo + PEEP alta NO de rutina: ART aumentó la mortalidad; individualiza la PEEP.',
          'Mantén siempre Vt 6 mL/kg, meseta ≤30 y ΔP ≤15 como columna vertebral del manejo.',
        ],
        aprendizaje: 'El manejo del ARDS grave combina prono con protección continua; el reclutamiento agresivo se evita salvo indicación clara.',
      },
    ],
  },

  // 9 — FURTHER READING
  furtherReading: [
    { titulo: 'ATS/ESICM/SCCM — Mechanical Ventilation in ARDS (guía)', fuente: 'AJRCCM 2017', url: 'https://www.atsjournals.org/' },
    { titulo: 'Internet Book of Critical Care — Mechanical ventilation / ARDS', fuente: 'IBCC · EMCrit', url: 'https://emcrit.org/ibcc/' },
    { titulo: 'ARDSNet — ventilator protocols', fuente: 'NHLBI ARDS Network', url: 'http://www.ardsnet.org/' },
  ],

  // 🧠 ICU REASONING
  reasoning: {
    worries:
      'La hipoxemia grave y una mecánica lesiva: presión meseta y driving pressure altos que dañan el pulmón mientras intento oxigenar.',
    kills:
      'El barotrauma/neumotórax y la hiperinsuflación dinámica con colapso hemodinámico; a medio plazo, el VILI y la hipoxemia refractaria.',
    changes:
      'La presión meseta y el driving pressure (pausa inspiratoria), el auto-PEEP (pausa espiratoria) y la relación PaO₂/FiO₂.',
    trap:
      'Perseguir una SpO₂ o una PaCO₂ “bonitas” subiendo Vt, FiO₂ o frecuencia, ignorando que la mecánica ya es lesiva.',
    reassess:
      'Meseta, driving pressure y auto-PEEP tras cada cambio; SpO₂/FiO₂ para bajar el oxígeno; y la sincronía y la hemodinamia del paciente.',
  },
}

export default ventilacion
