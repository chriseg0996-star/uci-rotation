// Módulo Clínico 2 — Sepsis (referencia de bolsillo de UCI).
// Estructura de decisión al pie de cama. Español clínico, nivel intensivista senior.
// Estilo AMBOSS + EMCrit + Surviving Sepsis Campaign. Sin ensayos, sin quizzes.

const sepsis = {
  dia: 2,
  slug: 'sepsis',
  titulo: 'Sepsis',
  subtitulo: 'Reconocimiento, reanimación hemodinámica y control de foco en el paciente crítico.',

  // 1 — OVERVIEW
  overview: {
    porque:
      'La sepsis es una emergencia tiempo-dependiente: la mortalidad sube con cada hora de retraso en el antibiótico y la reanimación. Reconocerla temprano y restaurar la perfusión —no solo la presión— define el desenlace.',
    definiciones: [
      {
        termino: 'Sepsis (Sepsis-3)',
        texto:
          'Disfunción orgánica potencialmente mortal por una respuesta desregulada del huésped a la infección (aumento del SOFA ≥2 puntos).',
      },
      {
        termino: 'Shock séptico',
        texto:
          'Sepsis con hipotensión que requiere vasopresor para PAM ≥65 mmHg y lactato >2 mmol/L pese a reanimación con volumen adecuada.',
      },
    ],
    conceptos: [
      'Sepsis = disfunción orgánica por respuesta desregulada a la infección (SOFA ≥2).',
      'Reanima por perfusión (lactato, llenado capilar, diuresis), no por una cifra de presión.',
      'Antibiótico de amplio espectro en <1 h; hemocultivos antes, sin retrasarlo.',
      'Noradrenalina de primera línea; no esperes el acceso central.',
      'El control de foco no controlado anula cualquier reanimación.',
    ],
    redFlags: [
      'Hipotensión (PAM <65) o necesidad de vasopresor.',
      'Lactato >2 mmol/L (o >4: alto riesgo).',
      'Llenado capilar >3 s, moteado, piel fría.',
      'Alteración del estado mental, oliguria.',
      'qSOFA ≥2 o deterioro rápido.',
    ],
    acciones: [
      'Medir lactato; repetir a 2–4 h si >2.',
      'Hemocultivos antes del antibiótico (sin retrasarlo).',
      'Antibiótico de amplio espectro en <1 h.',
      'Cristaloide 30 mL/kg si hipotensión o lactato ≥4.',
      'Noradrenalina para PAM ≥65 si no responde a volumen.',
    ],
    bundle: [
      'Lactato (repetir si elevado).',
      'Hemocultivos previos al antibiótico.',
      'Antibiótico de amplio espectro.',
      'Cristaloide 30 mL/kg en hipotensión/lactato ≥4.',
      'Vasopresor para PAM ≥65 durante o tras el volumen.',
    ],
  },

  // 2 — QUICK CARDS
  quickCards: [
    {
      titulo: 'PAM objetivo',
      icon: 'target',
      tono: 'steel',
      filas: [
        { k: 'Objetivo', v: '≥65 mmHg', tono: 'mint' },
        { k: 'Individualizar', v: 'HTA crónica' },
        { k: 'Evitar', v: 'sobre-objetivo' },
      ],
    },
    {
      titulo: 'Lactato',
      icon: 'pulse',
      tono: 'pearl',
      filas: [
        { k: '>2 mmol/L', v: 'hipoperfusión', tono: 'pearl' },
        { k: '>4 mmol/L', v: 'alto riesgo', tono: 'terra' },
        { k: 'Meta', v: 'aclaramiento' },
        { k: 'Reevaluar', v: '2–4 h' },
      ],
    },
    {
      titulo: 'Diuresis',
      icon: 'target',
      tono: 'mint',
      filas: [{ k: 'Objetivo', v: '≥0,5 mL/kg/h', tono: 'mint' }],
    },
    {
      titulo: 'Llenado capilar (CRT)',
      icon: 'clock',
      tono: 'mint',
      filas: [
        { k: 'Normal', v: '<3 s', tono: 'mint' },
        { k: 'Diana', v: 'ANDROMEDA-SHOCK' },
      ],
    },
    {
      titulo: 'ScvO₂',
      icon: 'pulse',
      tono: 'steel',
      filas: [
        { k: 'Objetivo', v: '≥70%' },
        { k: 'No usar', v: 'como única meta' },
      ],
    },
    {
      titulo: 'Bolo de fluidos',
      icon: 'sliders',
      tono: 'steel',
      filas: [
        { k: 'Inicial', v: '30 mL/kg' },
        { k: 'Tipo', v: 'cristaloide balanceado' },
        { k: 'Bolo', v: '250–500 mL, reevaluar' },
      ],
    },
    {
      titulo: 'Albúmina',
      icon: 'sliders',
      tono: 'steel',
      filas: [
        { k: 'Considerar si', v: 'mucho cristaloide' },
        { k: 'Concentración', v: '4–5% (complemento)' },
      ],
    },
    {
      titulo: 'Secuencia de vasopresor',
      icon: 'list',
      tono: 'terra',
      filas: [
        { k: '1º', v: 'Noradrenalina' },
        { k: '2º', v: 'Vasopresina 0,03 U/min' },
        { k: '3º', v: 'Adrenalina' },
        { k: 'Refractario', v: 'valorar rescates' },
      ],
    },
    {
      titulo: 'Esteroides',
      icon: 'sliders',
      tono: 'pearl',
      filas: [
        { k: 'Fármaco', v: 'Hidrocortisona 200 mg/día' },
        { k: 'Indicación', v: 'vasopresor persistente' },
      ],
    },
    {
      titulo: 'Control de foco',
      icon: 'clock',
      tono: 'terra',
      filas: [
        { k: 'Momento', v: 'lo antes posible' },
        { k: 'Si factible', v: '<6–12 h', tono: 'terra' },
      ],
    },
    {
      titulo: 'Hemocultivos',
      icon: 'clock',
      tono: 'steel',
      filas: [
        { k: 'Momento', v: 'antes del antibiótico' },
        { k: 'Sin retrasar', v: '>45 min' },
      ],
    },
    {
      titulo: 'Antibiótico',
      icon: 'flame',
      tono: 'terra',
      filas: [
        { k: 'Shock séptico', v: '<1 h', tono: 'terra' },
        { k: 'Espectro', v: 'amplio empírico' },
        { k: 'Desescalar', v: '48–72 h' },
      ],
    },
  ],

  // 3 — FIGURAS & ALGORITMOS
  figuras: [
    {
      id: 'algo-reconocimiento',
      tipo: 'algorithm',
      titulo: 'Reconocimiento de sepsis',
      caption: 'Sospecha de infección + disfunción orgánica = sepsis; hipotensión/lactato pese a volumen = shock séptico.',
      fuente: 'Adaptado de Sepsis-3 / SSC 2021',
      flow: [
        { kind: 'start', text: 'Sospecha de infección + deterioro' },
        { kind: 'action', text: 'qSOFA / NEWS2 · medir lactato' },
        {
          kind: 'decision',
          text: '¿Disfunción orgánica (SOFA ≥2)?',
          branches: [
            { label: 'No', kind: 'end', text: 'Vigilar y reevaluar' },
            { label: 'Sí', kind: 'action', text: 'Sepsis → iniciar paquete de 1 h' },
          ],
        },
        {
          kind: 'decision',
          text: '¿Hipotensión o lactato >2 pese a volumen?',
          branches: [
            { label: 'No', kind: 'end', text: 'Sepsis: continuar tratamiento' },
            { label: 'Sí', kind: 'warn', text: 'Shock séptico → vasopresor + UCI' },
          ],
        },
      ],
    },
    {
      id: 'algo-bundle',
      tipo: 'algorithm',
      titulo: 'Paquete de la primera hora',
      caption: 'Las cinco medidas del bundle de 1 h de la Surviving Sepsis Campaign.',
      fuente: 'Adaptado de SSC 2021',
      flow: [
        { kind: 'start', text: 'Sepsis / shock séptico reconocido' },
        { kind: 'action', text: 'Medir lactato' },
        { kind: 'action', text: 'Hemocultivos antes del antibiótico' },
        { kind: 'action', text: 'Antibiótico de amplio espectro <1 h' },
        { kind: 'action', text: 'Cristaloide 30 mL/kg si hipotensión/lactato ≥4' },
        { kind: 'action', text: 'Vasopresor para PAM ≥65 si persiste' },
        { kind: 'end', text: 'Reevaluar perfusión a 2 h' },
      ],
    },
    {
      id: 'algo-fluidos',
      tipo: 'algorithm',
      titulo: 'Árbol de reanimación con fluidos',
      caption: 'Tras la carga inicial, cada bolo se guía por respuesta a volumen; detén el volumen si no responde.',
      fuente: 'Adaptado de SSC 2021 / CLASSIC',
      flow: [
        { kind: 'start', text: 'Hipoperfusión / hipotensión' },
        { kind: 'action', text: 'Cristaloide balanceado 30 mL/kg (bolos 250–500 mL)' },
        {
          kind: 'decision',
          text: '¿Respondedor a volumen? (PLR / índice dinámico)',
          branches: [
            { label: 'Sí', kind: 'action', text: 'Bolo adicional guiado; reevaluar' },
            { label: 'No', kind: 'warn', text: 'Detener volumen → vasopresor; evitar sobrecarga' },
          ],
        },
        {
          kind: 'decision',
          text: '¿PAM ≥65 y mejora la perfusión?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Mantener y vigilar' },
            { label: 'No', kind: 'action', text: 'Escalar vasopresor / reevaluar fenotipo' },
          ],
        },
      ],
    },
    {
      id: 'algo-noradrenalina',
      tipo: 'algorithm',
      titulo: 'Escalada de noradrenalina',
      caption: 'Noradrenalina temprana para PAM ≥65; si dosis alta persistente, añadir segundo agente.',
      fuente: 'Adaptado de SSC 2021',
      flow: [
        { kind: 'start', text: 'Hipotensión pese a volumen' },
        { kind: 'action', text: 'Noradrenalina (periférica/central) → PAM ≥65' },
        {
          kind: 'decision',
          text: '¿PAM ≥65?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Mantener dosis mínima eficaz' },
            { label: 'No', kind: 'action', text: 'Subir noradrenalina (~0,25–0,5 µg/kg/min)' },
          ],
        },
        {
          kind: 'decision',
          text: '¿Dosis alta persistente?',
          branches: [
            { label: 'No', kind: 'end', text: 'Continuar' },
            { label: 'Sí', kind: 'warn', text: 'Añadir vasopresina 0,03 U/min ± hidrocortisona' },
          ],
        },
      ],
    },
    {
      id: 'algo-vasopresores',
      tipo: 'algorithm',
      titulo: 'Escalada de vasopresores',
      caption: 'Secuencia: noradrenalina → vasopresina → adrenalina; esteroides y rescates si refractario.',
      fuente: 'Adaptado de SSC 2021',
      flow: [
        { kind: 'start', text: 'Shock séptico' },
        { kind: 'action', text: '1º Noradrenalina (primera línea)' },
        { kind: 'action', text: '2º Añadir vasopresina 0,03 U/min (ahorra catecolaminas)' },
        { kind: 'action', text: '3º Añadir adrenalina si gasto/PAM insuficiente' },
        {
          kind: 'decision',
          text: '¿Refractario?',
          branches: [
            { label: 'No', kind: 'end', text: 'Titular a la baja según perfusión' },
            { label: 'Sí', kind: 'warn', text: 'Hidrocortisona 200 mg/día; valorar angiotensina II / azul de metileno' },
          ],
        },
      ],
    },
    {
      id: 'algo-lactato',
      tipo: 'algorithm',
      titulo: 'Aclaramiento de lactato',
      caption: 'Un lactato que no aclara obliga a reevaluar foco, respuesta a volumen y otras causas.',
      fuente: 'Adaptado de SSC 2021',
      flow: [
        { kind: 'start', text: 'Lactato inicial elevado (>2)' },
        { kind: 'action', text: 'Reanimación guiada por perfusión' },
        {
          kind: 'decision',
          text: '¿Aclaramiento ≥10–20% a 2 h?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Buen curso: continuar y desescalar' },
            { label: 'No', kind: 'warn', text: '¿Foco no controlado? ¿Respuesta a volumen? ¿Otra causa de lactato?' },
          ],
        },
      ],
    },
    {
      id: 'algo-foco',
      tipo: 'algorithm',
      titulo: 'Control de foco',
      caption: 'Sin control del foco drenable, ninguna reanimación ni antibiótico funcionan.',
      fuente: 'Adaptado de SSC 2021',
      flow: [
        { kind: 'start', text: 'Sepsis con foco potencialmente controlable' },
        { kind: 'action', text: 'Identificar foco (imagen, examen)' },
        {
          kind: 'decision',
          text: '¿Foco drenable / removible?',
          branches: [
            { label: 'Sí', kind: 'warn', text: 'Control de foco lo antes posible (<6–12 h)' },
            { label: 'No', kind: 'action', text: 'Antibiótico + reevaluación seriada' },
          ],
        },
        { kind: 'end', text: 'Reevaluar tras el control del foco' },
      ],
    },
    {
      id: 'fig-hemodinamica',
      tipo: 'svg',
      diagram: 'hemodynamic-tank',
      titulo: 'Evaluación hemodinámica: tanque–bomba–tuberías',
      caption: 'POCUS RUSH: precarga (volumen), contractilidad (inotrópico) y tono (vasopresor) definen la palanca correcta.',
      fuente: 'Esquema (protocolo RUSH)',
    },
    {
      id: 'fig-fluidresp',
      tipo: 'svg',
      diagram: 'frank-starling',
      titulo: 'Respuesta a volumen (Frank-Starling)',
      caption: 'La misma ΔPrecarga eleva mucho el VS en la zona empinada (respondedor) y poco en la meseta (no respondedor).',
      fuente: 'Esquema',
    },
    {
      id: 'fig-fenotipos',
      tipo: 'svg',
      diagram: 'shock-phenotypes',
      titulo: 'Fenotipos de shock a pie de cama',
      caption: 'Distributivo, hipovolémico, cardiogénico y obstructivo: signos y POCUS orientan el tratamiento.',
      fuente: 'Esquema',
    },
  ],

  // 4 — HIGH-YIELD
  highYield: [
    'Normaliza la perfusión, no el lactato: el lactato es el marcador, no la meta en sí.',
    'La hipotensión persistente tras fluidos no siempre es hipovolemia: piensa en vasoplejía y disfunción miocárdica.',
    'Antibiótico en <1 h en shock séptico: cada hora de retraso aumenta la mortalidad.',
    'Cultivos antes del antibiótico, pero nunca retrases el antibiótico por obtenerlos.',
    'Noradrenalina primero y temprano; puede iniciarse por vía periférica gruesa.',
    'El mejor antibiótico no drena un absceso: sin control de foco no hay reanimación que valga.',
    '30 mL/kg es un punto de partida, no un dogma: después, reanima por respuesta a volumen.',
    'El llenado capilar como diana es tan válido como el lactato y responde más rápido (ANDROMEDA).',
    'Añade vasopresina temprano para ahorrar catecolaminas, no como último recurso.',
    'Reevalúa a las 2 h: el aclaramiento de lactato y la perfusión definen si escalar o desescalar.',
  ],

  // 5 — PITFALLS
  pitfalls: [
    'Sobrerreanimación con líquidos: bolos ciegos → edema, SDRA y peor desenlace.',
    'Retrasar el antibiótico por completar estudios o accesos.',
    'Ignorar el control de foco: tratar la sepsis solo con antibiótico.',
    'Repetir bolos sin evaluar la respuesta a volumen.',
    'Tratar la presión arterial en vez de la perfusión (moteado, lactato, diuresis).',
    'Retrasar el vasopresor esperando “llenar el tanque”.',
    'Perseguir la normalización del lactato con más volumen cuando ya no responde.',
    'Confundir qSOFA (tamizaje) con diagnóstico de sepsis.',
    'No repetir el lactato ni valorar su aclaramiento.',
    'Olvidar desescalar el antibiótico a las 48–72 h según cultivos.',
  ],

  // 6 — EVIDENCE
  evidence: [
    {
      org: 'SSC',
      titulo: 'Surviving Sepsis Campaign: International Guidelines 2021',
      revista: 'Crit Care Med / Intensive Care Med',
      anio: 2021,
      doi: '10.1097/CCM.0000000000005337',
      pubmed: '34605781',
      nivel: 'Guía',
      porque: 'Guía de referencia del manejo de sepsis y shock séptico.',
      recomendacion: 'Paquete de 1 h, reanimación guiada por perfusión y noradrenalina de primera línea.',
      cambio: 'Estandarizó el manejo y consolidó la reanimación guiada por perfusión.',
      url: 'https://www.sccm.org/SurvivingSepsisCampaign',
    },
    {
      titulo: 'Peripheral Perfusion vs Serum Lactate–Targeted Resuscitation (ANDROMEDA-SHOCK)',
      revista: 'JAMA',
      anio: 2019,
      doi: '10.1001/jama.2019.0071',
      pubmed: '30772908',
      nivel: 'ECA',
      porque: 'Comparó guiar la reanimación por llenado capilar vs lactato.',
      recomendacion: 'Guiar por llenado capilar no fue inferior, con tendencia a menor disfunción orgánica.',
      cambio: 'Validó el llenado capilar como diana de reanimación a pie de cama.',
    },
    {
      titulo: 'Restriction of Intravenous Fluid in ICU Patients with Septic Shock (CLASSIC)',
      revista: 'N Engl J Med',
      anio: 2022,
      doi: '10.1056/NEJMoa2202707',
      pubmed: '35709019',
      nivel: 'ECA',
      porque: 'Comparó fluidos restrictivos vs liberales en shock séptico.',
      recomendacion: 'Sin diferencia de mortalidad a 90 días entre estrategias.',
      cambio: 'Respaldó no sobrerreanimar: una estrategia restrictiva es segura.',
    },
    {
      titulo: 'Early Restrictive or Liberal Fluid Management for Sepsis-Induced Hypotension (CLOVERS)',
      revista: 'N Engl J Med',
      anio: 2023,
      doi: '10.1056/NEJMoa2212663',
      pubmed: '36688507',
      nivel: 'ECA',
      porque: 'Estrategia restrictiva (vasopresor temprano) vs liberal (fluidos).',
      recomendacion: 'Sin diferencia de mortalidad entre ambas estrategias.',
      cambio: 'El vasopresor temprano es una alternativa válida a más fluidos.',
    },
    {
      titulo: 'A Randomized Trial of Protocol-Based Care for Early Septic Shock (ProCESS)',
      revista: 'N Engl J Med',
      anio: 2014,
      doi: '10.1056/NEJMoa1401602',
      pubmed: '24635773',
      nivel: 'ECA',
      porque: 'EGDT protocolizada vs cuidado usual en EE. UU.',
      recomendacion: 'La EGDT protocolizada no mejoró la supervivencia.',
      cambio: 'Cuestionó el catéter venoso central y la ScvO₂ obligatorios.',
    },
    {
      titulo: 'Goal-Directed Resuscitation for Patients with Early Septic Shock (ARISE)',
      revista: 'N Engl J Med',
      anio: 2014,
      doi: '10.1056/NEJMoa1404380',
      pubmed: '25272316',
      nivel: 'ECA',
      porque: 'Replicó la evaluación de la EGDT en Australasia.',
      recomendacion: 'La EGDT no redujo la mortalidad a 90 días.',
      cambio: 'Junto a ProCESS y ProMISe, abandonó la EGDT rígida.',
    },
    {
      titulo: 'Trial of Early, Goal-Directed Resuscitation for Septic Shock (ProMISe)',
      revista: 'N Engl J Med',
      anio: 2015,
      doi: '10.1056/NEJMoa1500896',
      pubmed: '25776532',
      nivel: 'ECA',
      porque: 'Tercer gran ensayo sobre la EGDT (Reino Unido).',
      recomendacion: 'La EGDT no aportó beneficio y fue más costosa.',
      cambio: 'Cerró la era de la EGDT protocolizada.',
    },
    {
      titulo: 'Early Goal-Directed Therapy in the Treatment of Severe Sepsis (Rivers EGDT)',
      revista: 'N Engl J Med',
      anio: 2001,
      doi: '10.1056/NEJMoa010307',
      pubmed: '11794169',
      nivel: 'ECA',
      porque: 'Estudio germinal de la reanimación temprana en sepsis.',
      recomendacion: 'La reanimación temprana redujo la mortalidad frente al estándar de la época.',
      cambio: 'Instauró la reanimación precoz (luego matizada por ProCESS/ARISE/ProMISe).',
    },
    {
      titulo: 'Adjunctive Glucocorticoid Therapy in Patients with Septic Shock (ADRENAL)',
      revista: 'N Engl J Med',
      anio: 2018,
      doi: '10.1056/NEJMoa1705835',
      pubmed: '29347874',
      nivel: 'ECA',
      porque: 'Hidrocortisona en infusión en shock séptico.',
      recomendacion: 'Sin diferencia de mortalidad a 90 días; resolución más rápida del shock.',
      cambio: 'Apoya los esteroides para acelerar la reversión del shock, no para la mortalidad.',
    },
    {
      titulo: 'Hydrocortisone plus Fludrocortisone for Adults with Septic Shock (APROCCHSS)',
      revista: 'N Engl J Med',
      anio: 2018,
      doi: '10.1056/NEJMoa1705716',
      pubmed: '29490185',
      nivel: 'ECA',
      porque: 'Hidrocortisona + fludrocortisona en shock séptico.',
      recomendacion: 'Redujo la mortalidad a 90 días.',
      cambio: 'Sustenta los esteroides en el shock séptico dependiente de vasopresor.',
    },
  ],

  // 7 — CLINICAL TOOLS
  tools: [
    { tipo: 'calc', calc: 'map', titulo: 'Calculadora de PAM' },
    { tipo: 'calc', calc: 'shockindex', titulo: 'Índice de shock' },
    { tipo: 'calc', calc: 'qsofa', titulo: 'qSOFA' },
    {
      tipo: 'table',
      titulo: 'Vasopresores e inotrópicos',
      table: {
        columnas: ['Fármaco', 'Dosis', 'Papel'],
        filas: [
          ['Noradrenalina', '0,05–0,5 µg/kg/min', 'Primera línea'],
          ['Vasopresina', '0,03 U/min (fija)', 'Ahorra catecolaminas'],
          ['Adrenalina', '0,05–0,5 µg/kg/min', 'Segunda/tercera línea'],
          ['Dobutamina', '2,5–20 µg/kg/min', 'Disfunción miocárdica'],
          ['Hidrocortisona', '200 mg/día', 'Vasopresor persistente'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Pruebas de respuesta a volumen',
      table: {
        columnas: ['Prueba', 'Positiva si', 'Notas'],
        filas: [
          ['Elevación pasiva de piernas', 'ΔVS/GC >10%', 'Bolo reversible ~300 mL'],
          ['VPP / VVS', '>13%', 'Requiere VM, ritmo sinusal, sin ventilación espontánea'],
          ['Prueba de fluidos (250–500 mL)', 'ΔVS >10–15%', 'Evita bolos ciegos'],
          ['Colapsabilidad de VCI', 'Variabilidad alta', 'Limitaciones en ventilación/PA abdominal'],
          ['Llenado capilar', '<3 s / mejora', 'Diana de perfusión (ANDROMEDA)'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'qSOFA · SOFA (referencia)',
      table: {
        columnas: ['Escala', 'Criterios', 'Uso'],
        filas: [
          ['qSOFA', 'FR ≥22 · PAS ≤100 · alteración mental', 'Tamizaje (≥2 = riesgo)'],
          ['SOFA', 'Respiratorio, coagulación, hígado, CV, SNC, renal', 'Disfunción orgánica (≥2 sobre basal)'],
        ],
      },
    },
  ],

  // 8 — CLINICAL CASE
  caso: {
    titulo: 'Shock séptico por neumonía adquirida en la comunidad',
    contexto:
      'Varón de 55 años, hipertenso, con tos productiva, fiebre y disnea de 3 días. Llega confuso. Formula tu conducta antes de revelar el análisis experto.',
    fases: [
      {
        titulo: 'Fase 1 — Reconocimiento',
        vineta:
          'Taquipneico, con extremidades frías y moteado en rodillas; somnoliento pero orientado a preguntas simples. Radiografía con consolidación en el lóbulo inferior derecho.',
        datos: [
          { k: 'PA', v: '88/50 mmHg' },
          { k: 'PAM', v: '63 mmHg' },
          { k: 'FC', v: '118 lpm' },
          { k: 'FR', v: '30 rpm' },
          { k: 'SpO₂', v: '89% aire' },
          { k: 'Temp', v: '39,0 °C' },
          { k: 'Lactato', v: '3,8 mmol/L' },
          { k: 'Llenado capilar', v: '4 s' },
        ],
        pregunta: '¿Cuál es tu reconocimiento y tus primeras acciones (primera hora)?',
        pista: 'Calcula el qSOFA y piensa en el paquete de 1 h; ¿qué mata primero aquí?',
        analisis: [
          'qSOFA 3/3 (hipotensión, taquipnea, alteración mental) → sepsis con foco pulmonar; lactato 3,8 y moteado indican hipoperfusión → shock séptico probable.',
          'Por qué actuar ya: la mortalidad sube con cada hora sin antibiótico; el foco pulmonar es tratable.',
          'Primera hora: O₂ para SpO₂ ≥92%, hemocultivos + lactato, antibiótico de amplio espectro para NAC grave en <1 h, cristaloide balanceado guiado por respuesta.',
          'Prepara vasopresor (noradrenalina) si no alcanza PAM ≥65 tras la carga inicial.',
        ],
        aprendizaje: 'El reconocimiento precoz y el paquete de 1 h —antibiótico incluido— es lo que cambia el desenlace.',
      },
      {
        titulo: 'Fase 2 — Reanimación con volumen',
        vineta:
          'Tras 30 mL/kg de cristaloide, la PAM se mantiene en 62 mmHg y persisten el moteado y el lactato. Realizas una elevación pasiva de piernas.',
        datos: [
          { k: 'PAM', v: '62 mmHg' },
          { k: 'Lactato', v: '3,9 mmol/L' },
          { k: 'PLR (ΔVS)', v: '8%' },
          { k: 'Diuresis', v: '0,3 mL/kg/h' },
        ],
        pregunta: '¿Más fluidos o vasopresor? Justifica cómo decides.',
        pista: '¿Qué te dice la elevación pasiva de piernas sobre la respuesta a volumen?',
        analisis: [
          'PLR con ΔVS 8% (<10%) = NO respondedor a volumen: más bolos solo causarían sobrecarga.',
          'Por qué vasopresor ahora: hipotensión persistente con PAM <65 pese a carga adecuada → iniciar noradrenalina para PAM ≥65 (por vía periférica gruesa si el central se demora).',
          'La oliguria y el lactato sin aclarar confirman hipoperfusión activa: hay que restaurar el flujo, no repetir volumen.',
        ],
        aprendizaje: 'La ausencia de respuesta a volumen es la señal para detener bolos e iniciar vasopresor, no para insistir con líquidos.',
      },
      {
        titulo: 'Fase 3 — Vasopresor y fenotipo',
        vineta:
          'Con noradrenalina a 0,3 µg/kg/min la PAM sube a 66. POCUS: ventrículo izquierdo hiperdinámico, VCI no colapsable tras el volumen, líneas B bibasales incipientes.',
        datos: [
          { k: 'Noradrenalina', v: '0,3 µg/kg/min' },
          { k: 'PAM', v: '66 mmHg' },
          { k: 'Lactato', v: '3,2 mmol/L' },
          { k: 'POCUS', v: 'VI hiperdinámico, VCI llena' },
        ],
        pregunta: '¿Cómo interpretas el POCUS y qué ajustas?',
        pista: 'Integra el fenotipo: VI hiperdinámico + VCI llena + líneas B. ¿Hay margen para más volumen?',
        analisis: [
          'Fenotipo distributivo (séptico) con precarga ya optimizada: la VCI llena y las líneas B indican que no hay margen para más volumen.',
          'Por qué añadir vasopresina: dosis creciente de noradrenalina → añadir vasopresina 0,03 U/min para ahorrar catecolaminas y sostener la PAM.',
          'Vigila la congestión pulmonar (líneas B): evita la sobrecarga; el lactato empieza a aclarar (3,8 → 3,2), signo favorable.',
        ],
        aprendizaje: 'El POCUS convierte “dar más volumen” en una decisión guiada por fenotipo: aquí toca vasopresor, no líquidos.',
      },
      {
        titulo: 'Fase 4 — Lactato que no aclara',
        vineta:
          'A las 6 h empeora la oxigenación (PaO₂/FiO₂ 150) y el lactato se estanca en 3,5 pese al soporte. La fiebre persiste.',
        datos: [
          { k: 'Lactato', v: '3,5 mmol/L' },
          { k: 'PaO₂/FiO₂', v: '150' },
          { k: 'Noradrenalina', v: '0,3 + vasopresina' },
        ],
        pregunta: '¿Qué buscas ante un lactato que no aclara?',
        pista: 'Un lactato estancado obliga a revisar foco, adecuación antibiótica y otras causas.',
        analisis: [
          'Por qué reevaluar el foco: un lactato que no aclara sugiere foco no controlado (¿empiema, absceso?) o antibiótico inadecuado → imagen dirigida y revisar el esquema.',
          'Oxigenación en descenso (P/F 150) → SDRA: iniciar ventilación protectora (Vt 6 mL/kg, PEEP, driving pressure).',
          'Vasopresor persistente → considerar hidrocortisona 200 mg/día para acelerar la reversión del shock (ADRENAL/APROCCHSS).',
        ],
        aprendizaje: 'El lactato que no aclara es una alarma: descarta foco no controlado y reevalúa el antibiótico antes de “dar más de lo mismo”.',
      },
      {
        titulo: 'Fase 5 — Estabilización y pase de visita',
        vineta:
          'Se añade hidrocortisona, se optimiza la ventilación protectora y se confirma el foco pulmonar sin colección drenable. El shock empieza a revertir. Debes presentarlo en el pase.',
        datos: [
          { k: 'Día UCI', v: '1' },
          { k: 'Foco', v: 'NAC grave, sin colección' },
          { k: 'Soporte', v: 'Noradrenalina en descenso' },
        ],
        pregunta: '¿Cómo estructuras el pase por sistemas y el plan?',
        pista: 'One-liner + metas + de-escalamiento antibiótico + reevaluación.',
        analisis: [
          'One-liner: “Varón de 55 años, día 1 de UCI por shock séptico de foco pulmonar (NAC), con respuesta favorable y noradrenalina en descenso”.',
          'Respiratorio: ventilación protectora, objetivo SpO₂ 92–96%; imagen y cultivos respiratorios pendientes.',
          'Hemodinámico: noradrenalina en descenso + vasopresina, PAM ≥65, hidrocortisona; metas de perfusión (lactato, diuresis).',
          'Infectología: antibiótico empírico día 1; revisar cultivos a 48–72 h para desescalar; foco sin intervención quirúrgica requerida.',
        ],
        aprendizaje: 'El pase cierra el círculo: convierte la reanimación en un plan por sistemas con metas de perfusión y de-escalamiento antibiótico.',
      },
    ],
  },

  // 9 — FURTHER READING
  furtherReading: [
    { titulo: 'Surviving Sepsis Campaign 2021 — guía completa', fuente: 'SCCM / ESICM', url: 'https://www.sccm.org/SurvivingSepsisCampaign' },
    { titulo: 'Internet Book of Critical Care — Sepsis', fuente: 'IBCC · EMCrit', url: 'https://emcrit.org/ibcc/sepsis/' },
    { titulo: 'Sepsis and septic shock', fuente: 'Life in the Fast Lane (LITFL)', url: 'https://litfl.com/' },
  ],

  // 🧠 ICU REASONING
  reasoning: {
    worries:
      'La hipoperfusión activa (lactato alto, moteado, oliguria) pese a la presión, y cualquier retraso del antibiótico o del control de foco.',
    kills:
      'El shock refractario y el foco no controlado; en horas, la hipoxemia progresiva (SDRA) y la disfunción multiorgánica.',
    changes:
      'La respuesta a volumen (PLR/índice dinámico), el aclaramiento de lactato a 2 h y la identificación de un foco drenable.',
    trap:
      'Anclarse en una presión “normalizada” y seguir dando bolos, ignorando que el paciente ya no responde a volumen y necesita vasopresor y control de foco.',
    reassess:
      'Perfusión (llenado capilar, moteado, diuresis), PAM con vasopresor, y si el antibiótico y los cultivos ya se administraron; a las 2 h, el aclaramiento de lactato.',
  },
}

export default sepsis
