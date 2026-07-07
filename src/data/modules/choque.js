// Módulo Clínico 5 — Choque y Monitoreo Hemodinámico (referencia de bolsillo de UCI).
// Estructura de decisión al pie de cama. Español clínico, nivel intensivista senior.
// Estilo AMBOSS + EMCrit + SCCM + ESICM. Sin ensayos, sin quizzes.
// Mensaje central: trata la perfusión, no solo la presión arterial.

const choque = {
  dia: 5,
  slug: 'choque-hemodinamia',
  titulo: 'Choque y Monitoreo Hemodinámico',
  subtitulo: 'Evaluación del choque centrada en la perfusión, vasopresores, inotrópicos y monitorización hemodinámica a pie de cama.',

  // 1 — OVERVIEW
  overview: {
    porque:
      'El choque es hipoperfusión tisular, no una cifra de presión. Trata la perfusión, no solo la presión arterial: reconocerlo temprano, guiar la reanimación por respuesta y corregir la causa define el desenlace.',
    definiciones: [
      {
        termino: 'Choque',
        texto:
          'Hipoperfusión tisular que compromete la entrega de oxígeno, con o sin hipotensión; el lactato y la clínica de perfusión lo delatan.',
      },
      {
        termino: 'Fenotipos',
        texto: 'Distributivo · hipovolémico · cardiogénico · obstructivo (con frecuencia mixto).',
      },
    ],
    conceptos: [
      'El choque se define por hipoperfusión tisular, no por la hipotensión aislada.',
      'Una PAM normal no garantiza perfusión adecuada.',
      'El lactato es un marcador, no una meta de reanimación por sí solo.',
      'Reanima por respuesta a volumen dinámica; los bolos ciegos dañan.',
      'El vasopresor no es un fracaso; el vasopresor tardío sí lo es.',
    ],
    redFlags: [
      'Lactato >4 mmol/L o en ascenso.',
      'Llenado capilar >3 s, moteado, oliguria, confusión.',
      'Hipotensión que no responde a volumen.',
      'Choque obstructivo (VCI distendida, taponamiento / TEP / neumotórax).',
      'Fallo de ventrículo derecho.',
    ],
    acciones: [
      'Evaluar perfusión: llenado capilar, moteado, diuresis, lactato.',
      'Accesos y monitorización; POCUS para el fenotipo.',
      'Volumen guiado por respuesta dinámica (no bolos ciegos).',
      'Noradrenalina temprana para PAM ≥65.',
      'Identificar y tratar la causa/fenotipo (foco, obstrucción, corazón).',
    ],
    reevaluar: [
      'Perfusión: llenado capilar, moteado, diuresis.',
      'PAM con vasopresor y respuesta a la intervención.',
      'POCUS: VCI, contractilidad, congestión.',
      'Ritmo y frecuencia (arritmias).',
      'A 2 h: aclaramiento de lactato.',
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
        { k: 'Reevaluar', v: '2 h' },
      ],
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
      titulo: 'Diuresis',
      icon: 'target',
      tono: 'mint',
      filas: [{ k: 'Objetivo', v: '≥0,5 mL/kg/h', tono: 'mint' }],
    },
    {
      titulo: 'ScvO₂ / SvO₂',
      icon: 'pulse',
      tono: 'steel',
      filas: [
        { k: 'ScvO₂', v: '65–75%' },
        { k: 'SvO₂', v: '60–70%' },
        { k: 'Uso', v: 'no meta única' },
      ],
    },
    {
      titulo: 'PVC (limitaciones)',
      icon: 'alert',
      tono: 'terra',
      filas: [
        { k: 'Respuesta a volumen', v: 'no la predice', tono: 'terra' },
        { k: 'Uso', v: 'solo tendencia' },
      ],
    },
    {
      titulo: 'Respuesta a volumen',
      icon: 'sliders',
      tono: 'steel',
      filas: [
        { k: 'PLR (ΔVS/GC)', v: '>10%', tono: 'mint' },
        { k: 'VTI', v: 'Δ >10%' },
        { k: 'PPV / SVV', v: '>13%' },
      ],
      nota: 'PPV/SVV requieren VM, ritmo sinusal y sin esfuerzo espontáneo.',
    },
    {
      titulo: 'Vasopresores',
      icon: 'list',
      tono: 'terra',
      filas: [
        { k: 'Noradrenalina', v: '0,05–0,5 µg/kg/min' },
        { k: 'Vasopresina', v: '0,03 U/min' },
        { k: 'Adrenalina', v: '0,01–0,5 µg/kg/min' },
      ],
    },
    {
      titulo: 'Inotrópicos',
      icon: 'pulse',
      tono: 'pearl',
      filas: [
        { k: 'Dobutamina', v: '2,5–20 µg/kg/min' },
        { k: 'Milrinona', v: '0,125–0,75 µg/kg/min' },
      ],
    },
    {
      titulo: 'Esteroides',
      icon: 'sliders',
      tono: 'pearl',
      filas: [
        { k: 'Hidrocortisona', v: '200 mg/día' },
        { k: 'Si', v: 'vasopresor persistente' },
      ],
    },
    {
      titulo: 'Transfusión',
      icon: 'target',
      tono: 'steel',
      filas: [
        { k: 'Umbral', v: 'Hb <7 g/dL' },
        { k: 'Individualizar', v: 'hemorragia / SCA' },
      ],
    },
    {
      titulo: 'Reevaluación',
      icon: 'clock',
      tono: 'steel',
      filas: [
        { k: 'Tras cada', v: 'intervención' },
        { k: 'Lactato / CRT', v: '2 h' },
      ],
    },
  ],

  // 3 — FIGURAS & ALGORITMOS
  figuras: [
    {
      id: 'algo-reconocimiento',
      tipo: 'algorithm',
      titulo: 'Reconocimiento del choque',
      caption: 'El choque se reconoce por la perfusión (lactato, llenado capilar), no por la presión; puede existir con PAM normal.',
      fuente: 'Adaptado de SSC 2021 / ESICM',
      flow: [
        { kind: 'start', text: 'Sospecha de hipoperfusión' },
        { kind: 'action', text: 'Evaluar: llenado capilar, moteado, diuresis, estado mental, lactato' },
        {
          kind: 'decision',
          text: '¿Hipoperfusión (lactato >2 · CRT >3 s)?',
          branches: [
            { label: 'No', kind: 'end', text: 'Buscar otra causa; reevaluar' },
            { label: 'Sí', kind: 'action', text: 'Choque → reanimación por perfusión + identificar fenotipo' },
          ],
        },
        {
          kind: 'decision',
          text: '¿Hipotensión o vasopresor?',
          branches: [
            { label: 'No', kind: 'action', text: 'Choque con presión normal (críptico): actuar igual' },
            { label: 'Sí', kind: 'warn', text: 'Choque establecido → UCI y monitorización' },
          ],
        },
      ],
    },
    {
      id: 'fig-fenotipos',
      tipo: 'svg',
      diagram: 'shock-phenotypes',
      titulo: 'Clasificación del choque',
      caption: 'Distributivo, hipovolémico, cardiogénico y obstructivo: signos de cabecera y POCUS orientan el tratamiento.',
      fuente: 'Esquema',
    },
    {
      id: 'fig-perfusion',
      tipo: 'svg',
      diagram: 'perfusion-pressure',
      titulo: 'Perfusión vs. presión',
      caption: 'Una PAM aparentemente normal puede coexistir con hipoperfusión (moteado, oliguria, confusión, lactato).',
      fuente: 'Esquema',
    },
    {
      id: 'algo-fluidresp',
      tipo: 'algorithm',
      titulo: 'Respuesta a volumen (árbol de decisión)',
      caption: 'Da volumen solo si es respondedor por un índice dinámico; si no, escala vasopresor/inotrópico.',
      fuente: 'Adaptado de Monnet/Teboul',
      flow: [
        { kind: 'start', text: '¿Necesita volumen?' },
        { kind: 'action', text: 'Índice dinámico: PLR, VTI, PPV/SVV' },
        {
          kind: 'decision',
          text: '¿Respondedor (ΔVS/GC >10%)?',
          branches: [
            { label: 'Sí', kind: 'action', text: 'Bolo 250–500 mL y reevaluar' },
            { label: 'No', kind: 'warn', text: 'No dar volumen → vasopresor/inotrópico según fenotipo' },
          ],
        },
        { kind: 'end', text: 'Reevaluar perfusión tras cada intervención' },
      ],
    },
    {
      id: 'algo-plr',
      tipo: 'algorithm',
      titulo: 'Elevación pasiva de piernas (PLR)',
      caption: 'Un bolo reversible de ~300 mL: predice respuesta a volumen sin administrar líquido.',
      fuente: 'Adaptado de Monnet/Teboul',
      flow: [
        { kind: 'start', text: 'Elevación pasiva de piernas' },
        { kind: 'action', text: 'Semisentado 45° → tumbar y elevar piernas 45°' },
        { kind: 'action', text: 'Medir cambio de VS/GC (o VTI) en 60–90 s' },
        {
          kind: 'decision',
          text: '¿ΔVS/GC ≥10%?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Respondedor a volumen' },
            { label: 'No', kind: 'end', text: 'No respondedor: evita bolos ciegos' },
          ],
        },
      ],
    },
    {
      id: 'fig-vti',
      tipo: 'svg',
      diagram: 'vti-lvot',
      titulo: 'VTI / TSVI: volumen sistólico',
      caption: 'VS = área del TSVI × VTI; su variación con PLR o un bolo estima la respuesta a volumen.',
      fuente: 'Esquema',
    },
    {
      id: 'fig-vci',
      tipo: 'svg',
      diagram: 'vci',
      titulo: 'Interpretación de la VCI',
      caption: 'VCI pequeña y colapsable sugiere precarga baja; dilatada y sin colapso, presión alta o congestión.',
      fuente: 'Esquema',
    },
    {
      id: 'algo-vasopresores',
      tipo: 'algorithm',
      titulo: 'Escalada de vasopresores',
      caption: 'Noradrenalina primero; añade vasopresina temprano; esteroides y rescates si refractario.',
      fuente: 'Adaptado de SSC 2021',
      flow: [
        { kind: 'start', text: 'Hipotensión pese a volumen apropiado' },
        { kind: 'action', text: '1º Noradrenalina → PAM ≥65' },
        { kind: 'action', text: '2º Añadir vasopresina 0,03 U/min' },
        { kind: 'action', text: '3º Adrenalina si PAM/GC insuficiente' },
        {
          kind: 'decision',
          text: '¿Refractario?',
          branches: [
            { label: 'No', kind: 'end', text: 'Titular a la baja según perfusión' },
            { label: 'Sí', kind: 'warn', text: 'Hidrocortisona 200 mg/día · angiotensina II / azul de metileno' },
          ],
        },
      ],
    },
    {
      id: 'algo-inotropos',
      tipo: 'algorithm',
      titulo: 'Selección de inotrópico',
      caption: 'Asegura primero la presión: no des inotrópico en hipotensión sin vasopresor.',
      fuente: 'Adaptado de ESICM',
      flow: [
        { kind: 'start', text: 'Bajo gasto / disfunción miocárdica' },
        { kind: 'action', text: 'Asegurar PAM adecuada primero (vasopresor si hipotenso)' },
        {
          kind: 'decision',
          text: '¿Perfil hemodinámico?',
          branches: [
            { label: 'PAM ok', kind: 'action', text: 'Dobutamina 2,5–20 µg/kg/min' },
            { label: 'RVP alta / crónico', kind: 'action', text: 'Milrinona (vigilar hipotensión)' },
          ],
        },
        { kind: 'end', text: 'Reevaluar GC, perfusión y ritmo (arritmias)' },
      ],
    },
    {
      id: 'algo-lactato',
      tipo: 'algorithm',
      titulo: 'Reevaluación por lactato / CRT',
      caption: 'El aclaramiento de lactato y el llenado capilar a 2 h definen si el rumbo es correcto.',
      fuente: 'Adaptado de ANDROMEDA-SHOCK',
      flow: [
        { kind: 'start', text: 'Reanimación en curso' },
        { kind: 'action', text: 'Reevaluar a 2 h: aclaramiento de lactato y llenado capilar' },
        {
          kind: 'decision',
          text: '¿Aclaramiento ≥10–20% y CRT mejora?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Buen curso: desescalar y vigilar' },
            { label: 'No', kind: 'warn', text: 'Reevaluar fenotipo, foco y respuesta a volumen' },
          ],
        },
      ],
    },
    {
      id: 'tab-matriz',
      tipo: 'table',
      titulo: 'Matriz de fenotipos hemodinámicos',
      caption: 'Patrón esperado por fenotipo en VCI, contractilidad, resistencias y lactato.',
      fuente: 'Síntesis',
      table: {
        columnas: ['Fenotipo', 'VCI', 'Contractilidad', 'RVS', 'Lactato'],
        filas: [
          ['Distributivo', 'variable', 'hiperdinámica', 'baja', '↑'],
          ['Hipovolémico', 'colapsable', 'hiperdinámica', 'alta', '↑'],
          ['Cardiogénico', 'distendida', 'reducida', 'alta', '↑'],
          ['Obstructivo', 'distendida', 'variable', 'alta', '↑'],
        ],
        tonos: ['terra', 'steel', 'pearl', 'mint'],
      },
    },
    {
      id: 'fig-vexus',
      tipo: 'svg',
      diagram: 'vexus',
      titulo: 'VExUS: congestión venosa sistémica',
      caption: 'VCI dilatada + patrones Doppler de venas suprahepática, porta y renal gradúan la congestión (0–3).',
      fuente: 'Esquema (placeholder para imágenes reales)',
    },
  ],

  // 4 — HIGH-YIELD
  highYield: [
    'El choque se define por hipoperfusión tisular, no por la hipotensión aislada.',
    'Una PAM normal no garantiza perfusión adecuada.',
    'El lactato es un marcador, no una meta de reanimación por sí solo.',
    'Los bolos repetidos sin respuesta a volumen causan daño.',
    'El vasopresor no es un fracaso; el vasopresor tardío sí lo es.',
    'Un VTI bajo con presiones de llenado altas sugiere fallo de bomba, no falta de volumen.',
    'No des inotrópico en hipotensión sin asegurar antes la presión de perfusión.',
    'Piensa en el choque obstructivo y el fallo de VD antes de “dar más volumen”.',
    'Interpreta el lactato en contexto: fallo hepático, β-agonistas y crisis también lo elevan.',
    'Reevalúa la perfusión tras cada intervención: el aclaramiento manda.',
  ],

  // 5 — PITFALLS
  pitfalls: [
    'Tratar la PAM ignorando la perfusión (moteado, lactato, diuresis).',
    'Dar líquidos solo porque el paciente está hipotenso.',
    'Usar la PVC como prueba de respuesta a volumen.',
    'Ignorar el choque obstructivo (taponamiento, TEP, neumotórax).',
    'No reevaluar tras cada intervención.',
    'Retrasar la noradrenalina.',
    'Usar dobutamina sin una presión de perfusión adecuada.',
    'Pasar por alto el fallo de ventrículo derecho.',
    'Malinterpretar el lactato (fallo hepático, β-agonistas, crisis).',
    'Sobrerreanimar con volumen el choque séptico.',
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
      porque: 'Marco de reanimación del choque séptico.',
      recomendacion: 'Reanimación guiada por perfusión, noradrenalina de primera línea y esteroides si dependencia.',
      cambio: 'Consolidó el enfoque perfusión-primero.',
      url: 'https://www.sccm.org/SurvivingSepsisCampaign',
    },
    {
      titulo: 'Peripheral Perfusion vs Lactate–Targeted Resuscitation (ANDROMEDA-SHOCK)',
      revista: 'JAMA',
      anio: 2019,
      doi: '10.1001/jama.2019.0071',
      pubmed: '30772908',
      nivel: 'ECA',
      porque: 'Comparó guiar por llenado capilar vs lactato.',
      recomendacion: 'Guiar por llenado capilar no fue inferior, con tendencia a menor disfunción.',
      cambio: 'Validó la perfusión periférica como diana.',
    },
    {
      titulo: 'Early Use of Norepinephrine in Septic Shock Resuscitation (CENSER)',
      revista: 'Am J Respir Crit Care Med',
      anio: 2019,
      doi: '10.1164/rccm.201806-1034OC',
      pubmed: '30704260',
      nivel: 'ECA',
      porque: 'Evaluó la noradrenalina temprana.',
      recomendacion: 'La noradrenalina precoz mejoró el control del choque a las 6 h.',
      cambio: 'Apoyó iniciar el vasopresor temprano, no como último recurso.',
    },
    {
      titulo: 'Comparison of Dopamine and Norepinephrine in the Treatment of Shock (SOAP II)',
      revista: 'N Engl J Med',
      anio: 2010,
      doi: '10.1056/NEJMoa0907118',
      pubmed: '20200382',
      nivel: 'ECA',
      porque: 'Dopamina vs noradrenalina en el choque.',
      recomendacion: 'Más arritmias con dopamina; peor en el subgrupo cardiogénico.',
      cambio: 'Estableció la noradrenalina como vasopresor de elección.',
    },
    {
      titulo: 'Vasopressin versus Norepinephrine Infusion in Septic Shock (VASST)',
      revista: 'N Engl J Med',
      anio: 2008,
      doi: '10.1056/NEJMoa067373',
      pubmed: '18305265',
      nivel: 'ECA',
      porque: 'Vasopresina añadida a la noradrenalina.',
      recomendacion: 'Sin diferencia global de mortalidad; posible beneficio en choque menos grave.',
      cambio: 'Situó la vasopresina como ahorrador de catecolaminas.',
    },
    {
      titulo: 'Early Vasopressin vs Norepinephrine on Kidney Failure in Septic Shock (VANISH)',
      revista: 'JAMA',
      anio: 2016,
      doi: '10.1001/jama.2016.10485',
      pubmed: '27483065',
      nivel: 'ECA',
      porque: 'Vasopresina precoz y función renal.',
      recomendacion: 'Sin diferencia en días libres de fallo renal ni mortalidad.',
      cambio: 'No apoyó la vasopresina precoz para nefroprotección.',
    },
    {
      titulo: 'Transfusion Requirements in Critical Care (TRICC)',
      revista: 'N Engl J Med',
      anio: 1999,
      doi: '10.1056/NEJM199902113400601',
      pubmed: '9971864',
      nivel: 'ECA',
      porque: 'Umbral de transfusión en el crítico.',
      recomendacion: 'La estrategia restrictiva (Hb <7) fue al menos tan segura como la liberal.',
      cambio: 'Estableció el umbral restrictivo de transfusión.',
    },
    {
      titulo: 'Fluid Response Evaluation in Sepsis Hypotension and Shock (FRESH)',
      revista: 'Chest',
      anio: 2020,
      doi: '10.1016/j.chest.2020.04.025',
      pubmed: '32353418',
      nivel: 'ECA',
      porque: 'Reanimación guiada por respuesta a volumen (PLR).',
      recomendacion: 'Guiar por respuesta a volumen redujo el balance hídrico y eventos.',
      cambio: 'Apoyó el uso sistemático de índices dinámicos.',
    },
    {
      titulo: 'Prediction of Fluid Responsiveness: an Update (Monnet, Marik, Teboul)',
      revista: 'Ann Intensive Care',
      anio: 2016,
      doi: '10.1186/s13613-016-0216-7',
      pubmed: '27858374',
      nivel: 'Revisión',
      porque: 'Síntesis de los métodos de respuesta a volumen.',
      recomendacion: 'Prioriza índices dinámicos (PLR, VPP/VVS) sobre estáticos (PVC).',
      cambio: 'Marco de referencia de la respuesta a volumen.',
    },
    {
      org: 'ESICM',
      titulo: 'Consensus on Circulatory Shock and Hemodynamic Monitoring',
      revista: 'Intensive Care Med',
      anio: 2014,
      doi: '10.1007/s00134-014-3525-z',
      pubmed: '25392034',
      nivel: 'Consenso',
      porque: 'Consenso europeo de monitorización hemodinámica.',
      recomendacion: 'Guía la elección de monitorización según la fase y la complejidad del choque.',
      cambio: 'Estandarizó el abordaje de la monitorización hemodinámica.',
    },
  ],

  // 7 — CLINICAL TOOLS
  tools: [
    { tipo: 'calc', calc: 'map', titulo: 'Calculadora de PAM' },
    { tipo: 'calc', calc: 'shockindex', titulo: 'Índice de shock' },
    { tipo: 'calc', calc: 'lactateclearance', titulo: 'Aclaramiento de lactato' },
    { tipo: 'calc', calc: 'scvo2', titulo: 'ScvO₂ — interpretación' },
    { tipo: 'calc', calc: 'cao2', titulo: 'Contenido arterial de O₂ (CaO₂)' },
    { tipo: 'calc', calc: 'vtisv', titulo: 'Volumen sistólico por VTI' },
    { tipo: 'calc', calc: 'cardiacoutput', titulo: 'Gasto cardíaco' },
    { tipo: 'calc', calc: 'svr', titulo: 'Resistencia vascular sistémica' },
    {
      tipo: 'table',
      titulo: 'Entrega y consumo de oxígeno (referencia)',
      table: {
        columnas: ['Variable', 'Fórmula / valor'],
        filas: [
          ['DO₂', 'GC × CaO₂ × 10 (~1000 mL/min)'],
          ['VO₂', '≈ 250 mL/min'],
          ['CaO₂', '1,34·Hb·SaO₂ + 0,003·PaO₂'],
          ['ERO₂', 'VO₂/DO₂ (~25%)'],
          ['ScvO₂', '65–75%'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Vasopresores',
      table: {
        columnas: ['Fármaco', 'Dosis', 'Papel'],
        filas: [
          ['Noradrenalina', '0,05–0,5 µg/kg/min', 'Primera línea'],
          ['Vasopresina', '0,03 U/min (fija)', 'Ahorrador de catecolaminas'],
          ['Adrenalina', '0,01–0,5 µg/kg/min', 'Segunda/tercera línea'],
          ['Fenilefrina', 'bolo / infusión', 'Arritmias · puente'],
          ['Angiotensina II', 'según protocolo', 'Refractario'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Inotrópicos',
      table: {
        columnas: ['Fármaco', 'Dosis', 'Nota'],
        filas: [
          ['Dobutamina', '2,5–20 µg/kg/min', 'Disfunción con PAM adecuada'],
          ['Milrinona', '0,125–0,75 µg/kg/min', 'Vasodilatador; vigilar hipotensión'],
          ['Adrenalina', '0,01–0,5 µg/kg/min', 'Inotropía + presión'],
          ['Levosimendán', 'según protocolo', 'Casos seleccionados'],
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
          ['VTI (Doppler)', 'Δ >10%', 'Con PLR o bolo'],
          ['PPV / SVV', '>13%', 'VM · sinusal · sin esfuerzo'],
          ['Prueba de fluidos', 'ΔVS >10%', 'Evita bolos ciegos'],
          ['VCI', 'colapsable / variable', 'Limitaciones conocidas'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Fenotipos de choque',
      table: {
        columnas: ['Fenotipo', 'Clave', 'Tratamiento'],
        filas: [
          ['Distributivo', 'RVS baja · caliente', 'Volumen + noradrenalina · foco'],
          ['Hipovolémico', 'VCI colapsable · frío', 'Volumen / hemostasia'],
          ['Cardiogénico', 'contractilidad ↓ · congestión', 'Inotrópico · optimizar precarga'],
          ['Obstructivo', 'VCI distendida', 'Intervención dirigida (drenaje/trombólisis)'],
        ],
      },
    },
  ],

  // 8 — CLINICAL CASE
  caso: {
    titulo: 'Choque séptico con fibrilación auricular y LRA',
    contexto:
      'Mujer de 72 años con choque séptico, fibrilación auricular de reciente aparición, lesión renal aguda y lactato en ascenso pese a los primeros fluidos. Formula tu conducta antes de revelar el análisis experto.',
    fases: [
      {
        titulo: 'Fase 1 — Reconocimiento y prioridades',
        vineta:
          'Tras 30 mL/kg de cristaloide sigue moteada, con llenado capilar prolongado y confusa. FA rápida.',
        datos: [
          { k: 'PA', v: '82/48 mmHg' },
          { k: 'PAM', v: '59 mmHg' },
          { k: 'FC', v: '138 (FA)' },
          { k: 'Lactato', v: '4,6 mmol/L' },
          { k: 'Llenado capilar', v: '4 s' },
          { k: 'Diuresis', v: '0,2 mL/kg/h' },
        ],
        pregunta: '¿Cómo reconoces el choque y cuáles son tus prioridades?',
        pista: 'Mira la perfusión, no solo la presión; ¿qué falta por hacer ya?',
        analisis: [
          'Hipoperfusión franca (lactato 4,6, moteado, oliguria, confusión) con PAM <65 pese a volumen → choque establecido.',
          'Por qué actuar ya: la perfusión, no la cifra de PA, define el riesgo; el retraso del vasopresor empeora el desenlace.',
          'Prioridades: noradrenalina para PAM ≥65, POCUS para fenotipo, control del foco séptico y valorar la FA rápida.',
        ],
        aprendizaje: 'Reconoce el choque por la perfusión y no retrases la noradrenalina.',
      },
      {
        titulo: 'Fase 2 — Respuesta a volumen',
        vineta:
          'Antes de repetir bolos, realizas una elevación pasiva de piernas midiendo el VTI.',
        datos: [
          { k: 'VTI basal', v: '14 cm' },
          { k: 'VTI con PLR', v: '15 cm' },
          { k: 'ΔVTI', v: '7%' },
          { k: 'VCI', v: '2,1 cm, poco colapso' },
        ],
        pregunta: '¿Es respondedora a volumen? ¿Qué haces?',
        pista: 'Interpreta el ΔVTI con PLR y la VCI juntos.',
        analisis: [
          'ΔVTI 7% (<10%) con PLR = NO respondedora: más volumen no aumentará el gasto.',
          'La VCI dilatada y poco colapsable apoya que la precarga ya está optimizada.',
          'Por qué no más fluidos: los bolos ciegos causarían congestión (recuerda la LRA); pasa a vasopresor.',
        ],
        aprendizaje: 'La respuesta a volumen se demuestra; si es negativa, deja de dar líquidos.',
      },
      {
        titulo: 'Fase 3 — Estrategia de vasopresor',
        vineta:
          'Inicias noradrenalina. Persiste FA a 140 con hipotensión; te preguntas por la frecuencia y el segundo agente.',
        datos: [
          { k: 'Noradrenalina', v: '0,3 µg/kg/min' },
          { k: 'PAM', v: '63 mmHg' },
          { k: 'FC', v: '140 (FA)' },
          { k: 'Lactato', v: '4,4 mmol/L' },
        ],
        pregunta: '¿Cómo escalas el soporte y qué haces con la FA rápida?',
        pista: 'Piensa en el ahorrador de catecolaminas y en la tolerancia hemodinámica de la FA.',
        analisis: [
          'Añadir vasopresina 0,03 U/min como ahorrador de catecolaminas para alcanzar PAM ≥65.',
          'La FA rápida con hipotensión y lactato alto tiene mal componente hemodinámico: controlar frecuencia con cautela (evitar β-bloqueo agresivo en choque); si inestabilidad clara, cardioversión.',
          'Reevaluar perfusión y descartar que la taquiarritmia sea el motor del bajo gasto.',
        ],
        aprendizaje: 'Escala con vasopresina temprana y trata la arritmia según su impacto hemodinámico, no solo la cifra de FC.',
      },
      {
        titulo: 'Fase 4 — Hipoperfusión pese a PAM objetivo',
        vineta:
          'Con noradrenalina + vasopresina, la PAM es 68, pero el lactato sube a 5,1 y persiste el moteado.',
        datos: [
          { k: 'PAM', v: '68 mmHg' },
          { k: 'Lactato', v: '5,1 mmol/L' },
          { k: 'ScvO₂', v: '58%' },
          { k: 'Llenado capilar', v: '4 s' },
        ],
        pregunta: '¿Qué significa hipoperfusión con la PAM en objetivo? ¿Siguiente paso?',
        pista: 'PAM ≥65 no es lo mismo que perfusión; la ScvO₂ baja orienta.',
        analisis: [
          'PAM en objetivo con lactato en ascenso y ScvO₂ 58% (baja) → entrega de O₂ insuficiente: bajo gasto o extracción alta.',
          'Por qué reevaluar la bomba: la ScvO₂ baja sugiere componente de bajo gasto; hacer POCUS/ecografía de la contractilidad.',
          'Buscar también foco no controlado y descartar causa obstructiva; no “más de lo mismo”.',
        ],
        aprendizaje: 'Perfusión inadecuada con PAM en objetivo obliga a mirar el gasto y la causa, no a subir más la presión.',
      },
      {
        titulo: 'Fase 5 — Fenotipo hemodinámico',
        vineta:
          'El POCUS muestra ventrículo izquierdo hipocontráctil, VCI dilatada y sin derrame ni signos de TEP; hay líneas B bilaterales.',
        datos: [
          { k: 'VI', v: 'hipocontráctil' },
          { k: 'VCI', v: 'dilatada' },
          { k: 'Pulmón', v: 'líneas B bilaterales' },
          { k: 'ScvO₂', v: '58%' },
        ],
        pregunta: '¿Qué fenotipo predomina y cómo ajustas el tratamiento?',
        pista: 'Integra contractilidad, VCI, congestión y ScvO₂: ¿distributivo puro o mixto?',
        analisis: [
          'Choque mixto: distributivo (séptico) + componente cardiogénico (miocardiopatía séptica), con congestión (líneas B, VCI dilatada).',
          'Añadir inotrópico (dobutamina) para el bajo gasto, manteniendo la PAM con vasopresor (no dobutamina sin presión adecuada).',
          'No dar más volumen (no respondedora, congestión); controlar el foco y la frecuencia; reevaluar lactato/ScvO₂ y perfusión.',
        ],
        aprendizaje: 'El choque suele ser mixto: el POCUS define el fenotipo y evita tratar a ciegas (aquí, inotrópico sobre vasopresor, sin más volumen).',
      },
    ],
  },

  // 9 — FURTHER READING
  furtherReading: [
    { titulo: 'Surviving Sepsis Campaign 2021 — guía completa', fuente: 'SCCM / ESICM', url: 'https://www.sccm.org/SurvivingSepsisCampaign' },
    { titulo: 'Internet Book of Critical Care — Shock / hemodynamics', fuente: 'IBCC · EMCrit', url: 'https://emcrit.org/ibcc/' },
    { titulo: 'ESICM — Circulatory shock and hemodynamic monitoring', fuente: 'Intensive Care Med 2014', url: 'https://www.esicm.org/' },
  ],

  // 🧠 ICU REASONING
  reasoning: {
    worries:
      'La hipoperfusión activa (lactato en ascenso, moteado, oliguria) pese a la PAM, y no tener aún claro el fenotipo.',
    kills:
      'El choque refractario y la causa no corregida; un choque obstructivo (taponamiento/TEP) o un fallo de VD pasados por alto.',
    changes:
      'La respuesta a volumen dinámica (PLR/VTI), el fenotipo por POCUS (VCI, contractilidad, congestión), la ScvO₂ y el aclaramiento de lactato.',
    trap:
      'Tratar la PAM con bolos ignorando que ya no responde a volumen, y olvidar el choque obstructivo o el componente cardiogénico.',
    reassess:
      'Perfusión (llenado capilar, moteado, diuresis), PAM con vasopresor y la respuesta tras cada intervención; a 2 h, el aclaramiento de lactato.',
  },
}

export default choque
