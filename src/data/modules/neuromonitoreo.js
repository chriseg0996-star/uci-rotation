// Módulo Clínico 1 — Neuromonitoreo (referencia de bolsillo de UCI).
// Estructura de decisión al pie de cama: overview, quick cards, figuras, high-yield,
// pitfalls, evidence, tools, caso y lecturas. Español clínico, nivel intensivista senior.
// Sin quizzes, sin lecciones largas. Reutiliza el mismo esquema para todos los módulos.

const neuromonitoreo = {
  dia: 1,
  slug: 'neuromonitoreo',
  titulo: 'Neuromonitoreo',
  subtitulo: 'Monitorización neurológica multimodal para detectar y prevenir la lesión secundaria.',

  // 1 — OVERVIEW (una pantalla)
  overview: {
    porque:
      'El daño neurológico en UCI es en su mayoría lesión secundaria prevenible: hipotensión, hipoxia, hipertensión intracraneal, fiebre y disnatremia. El neuromonitoreo existe para detectarla antes de que sea irreversible.',
    conceptos: [
      'PPC = PAM − PIC; nivela el transductor al trago y trata la PIC sostenida >22 mmHg.',
      'El examen neurológico vale por su tendencia: seriado y comparable, con FOUR score en el intubado.',
      'Una pupila nueva, dilatada y fija es herniación hasta demostrar lo contrario.',
      'El deterioro tardío en HSA (día 4–14) es vasoespasmo/DCI hasta descartar lo demás.',
      'Neuroprotección = evitar hipotensión, hipoxia, fiebre, disglucemia e hiponatremia.',
    ],
    normales: [
      { param: 'PIC', valor: '7–15 mmHg' },
      { param: 'PPC (objetivo)', valor: '60–70 mmHg' },
      { param: 'PbtO₂', valor: '>20 mmHg' },
      { param: 'Tratar PIC', valor: '>22 mmHg' },
      { param: 'VMF ACM', valor: '<120 cm/s' },
      { param: 'Osm. (manitol)', valor: '<320 mOsm/L' },
    ],
    redFlags: [
      'Pupila nueva dilatada y arreactiva (herniación).',
      'Tríada de Cushing: hipertensión + bradicardia + respiración irregular (tardío).',
      'Caída del GCS/FOUR ≥2 puntos.',
      'PIC >22 mmHg sostenida o PbtO₂ <15 mmHg.',
      'Nueva focalidad en HSA, día 4–14 (vasoespasmo/DCI).',
    ],
    acciones: [
      'Cabecera 30°, cuello neutro; normocapnia (PaCO₂ 35–40).',
      'Osmoterapia: manitol 0,5–1 g/kg o salino hipertónico según volemia/Na.',
      'Optimiza la PPC a 60–70; evita la hipotensión.',
      'Drena LCR por DVE si hidrocefalia o HIC.',
      'Aviso neuroquirúrgico ante signos de herniación.',
      'Trata fiebre y crisis; asegura sedación y analgesia.',
    ],
  },

  // 2 — QUICK CARDS (solo números)
  quickCards: [
    {
      titulo: 'PPC',
      icon: 'target',
      tono: 'steel',
      filas: [
        { k: 'Objetivo', v: '60–70 mmHg', tono: 'mint' },
        { k: 'Evitar', v: '<50 mmHg', tono: 'terra' },
        { k: 'No forzar', v: '>70 mmHg' },
      ],
      nota: 'PPC = PAM − PIC · transductor al trago.',
    },
    {
      titulo: 'PIC',
      icon: 'pulse',
      tono: 'steel',
      filas: [
        { k: 'Normal', v: '7–15 mmHg' },
        { k: 'Tratar', v: '>22 mmHg', tono: 'terra' },
        { k: 'Onda', v: 'P2 > P1 = baja compliance' },
      ],
    },
    {
      titulo: 'Sodio',
      icon: 'target',
      tono: 'pearl',
      filas: [
        { k: 'Objetivo', v: 'Normal-alta' },
        { k: 'Evitar', v: 'Hiponatremia', tono: 'terra' },
        { k: 'HIC/HSA', v: '145–155 mmol/L' },
      ],
      nota: 'La hiponatremia expande el edema cerebral.',
    },
    {
      titulo: 'PaCO₂',
      icon: 'pulse',
      tono: 'steel',
      filas: [
        { k: 'Objetivo', v: '35–40 mmHg', tono: 'mint' },
        { k: 'Puente HIC', v: '30–35 mmHg' },
        { k: 'Evitar', v: '<30 mmHg (isquemia)', tono: 'terra' },
      ],
    },
    {
      titulo: 'Temperatura',
      icon: 'flame',
      tono: 'terra',
      filas: [
        { k: 'Objetivo', v: 'Normotermia', tono: 'mint' },
        { k: 'Tratar fiebre', v: '>37,5–38 °C', tono: 'terra' },
        { k: 'Evitar', v: 'Hipertermia' },
      ],
    },
    {
      titulo: 'Presión arterial',
      icon: 'pulse',
      tono: 'steel',
      filas: [
        { k: 'Guía por PPC', v: '60–70 mmHg' },
        { k: 'TBI', v: 'Evitar PAS <90', tono: 'terra' },
        { k: 'HSA no asegurada', v: 'PAS <140–160' },
      ],
    },
    {
      titulo: 'Osmoterapia',
      icon: 'sliders',
      tono: 'pearl',
      filas: [
        { k: 'Manitol', v: '0,5–1 g/kg' },
        { k: 'Salino 3%', v: 'bolo 250 mL' },
        { k: 'Salino 23,4%', v: '30 mL' },
        { k: 'Osm límite', v: '<320 mOsm/L' },
      ],
    },
    {
      titulo: 'Doppler transcraneal',
      icon: 'waveform',
      tono: 'steel',
      filas: [
        { k: 'VMF ACM normal', v: '<120 cm/s', tono: 'mint' },
        { k: 'Vasoespasmo', v: '>120 cm/s', tono: 'pearl' },
        { k: 'Severo', v: '>200 cm/s', tono: 'terra' },
        { k: 'Lindegaard', v: '>3 (>6 severo)' },
      ],
    },
  ],

  // 3 — FIGURAS & ALGORITMOS
  figuras: [
    {
      id: 'monro-kellie',
      tipo: 'svg',
      diagram: 'monro-kellie',
      titulo: 'Doctrina de Monro-Kellie: curva presión–volumen',
      caption:
        'Agotada la compensación (desplazamiento de LCR y sangre venosa), pequeños incrementos de volumen disparan la PIC.',
      fuente: 'Diagrama esquemático',
      ref: 'concepto de Monro-Kellie',
    },
    {
      id: 'icp-waveform',
      tipo: 'svg',
      diagram: 'icp-waveform',
      titulo: 'Onda de PIC: normal vs. baja distensibilidad',
      caption: 'Cuando P2 supera a P1, la reserva de compensación está agotada.',
      fuente: 'Diagrama esquemático',
    },
    {
      id: 'autoregulation',
      tipo: 'svg',
      diagram: 'autoregulation',
      titulo: 'Autorregulación cerebral (FSC vs. PPC)',
      caption:
        'La meseta (~50–150 mmHg) se estrecha o desaparece en la lesión: el flujo se vuelve presión-dependiente.',
      fuente: 'Diagrama esquemático',
    },
    {
      id: 'herniation',
      tipo: 'svg',
      diagram: 'herniation',
      titulo: 'Herniación uncal → midriasis ipsilateral',
      caption: 'La compresión del III par por el uncus produce midriasis fija del mismo lado: emergencia.',
      fuente: 'Esquema',
    },
    {
      id: 'dtc-doppler',
      tipo: 'svg',
      diagram: 'dtc-doppler',
      titulo: 'Doppler transcraneal: espectro e índice de Lindegaard',
      caption: 'PSV/EDV/VMF; el índice de Lindegaard separa el vasoespasmo de la hiperemia.',
      fuente: 'Esquema',
    },
    {
      id: 'algo-hic',
      tipo: 'algorithm',
      titulo: 'Manejo escalonado de la hipertensión intracraneal',
      caption: 'Escalar de forma ordenada y simultánea; la hiperventilación agresiva o prolongada es isquémica.',
      fuente: 'Adaptado de BTF 2017',
      flow: [
        { kind: 'start', text: 'PIC >22 mmHg sostenida' },
        { kind: 'action', text: 'General: cabecera 30°, cuello neutro, normocapnia, sedación/analgesia, tratar fiebre y crisis' },
        {
          kind: 'decision',
          text: '¿PIC persiste elevada?',
          branches: [
            { label: 'No', kind: 'end', text: 'Mantener objetivos y reevaluar' },
            { label: 'Sí', kind: 'action', text: '1er nivel: drenaje de LCR (DVE) + osmoterapia' },
          ],
        },
        {
          kind: 'decision',
          text: '¿PIC refractaria?',
          branches: [
            { label: 'No', kind: 'end', text: 'Continuar y desescalar' },
            { label: 'Sí', kind: 'warn', text: '2º nivel: hiperventilación guiada, barbitúricos, hipotermia, craniectomía' },
          ],
        },
      ],
    },
    {
      id: 'algo-vasoespasmo',
      tipo: 'algorithm',
      titulo: 'Deterioro neurológico tardío en HSA',
      caption: 'Nueva focalidad día 4–14 = DCI hasta descartar hidrocefalia, crisis, hiponatremia y resangrado.',
      fuente: 'Adaptado de AHA/ASA 2023',
      flow: [
        { kind: 'start', text: 'Deterioro neurológico nuevo · día 4–14 de HSA' },
        { kind: 'action', text: 'Descartar: hidrocefalia · crisis (EEG) · hiponatremia · resangrado (TC)' },
        {
          kind: 'decision',
          text: '¿Causa alternativa?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Tratar la causa identificada' },
            { label: 'No', kind: 'action', text: 'Vasoespasmo/DCI → DTC (VMF, Lindegaard) ± angio-TC' },
          ],
        },
        { kind: 'action', text: 'Euvolemia + hipertensión inducida (elevar PAM/PPC)' },
        {
          kind: 'decision',
          text: '¿Mejora?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Mantener y vigilar' },
            { label: 'No', kind: 'warn', text: 'Rescate: angioplastia con balón o vasodilatador intraarterial' },
          ],
        },
      ],
    },
    {
      id: 'tc-hsa',
      tipo: 'image',
      modality: 'ct',
      titulo: 'TC: HSA difusa (Fisher IV)',
      caption: 'Sangre gruesa en cisternas + hemorragia intraventricular. Sustituye por tu imagen institucional.',
      fuente: 'Imagen de referencia',
    },
    {
      id: 'dsa-vasoespasmo',
      tipo: 'image',
      modality: 'angio',
      titulo: 'Angiografía (DSA): vasoespasmo de ACM',
      caption: 'Estrechamiento segmentario de la arteria cerebral media. Placeholder — añade la imagen real en el dato.',
      fuente: 'Imagen de referencia',
    },
  ],

  // 4 — HIGH-YIELD (≤10)
  highYield: [
    'PPC = PAM − PIC; nivela el transductor al trago, no al corazón.',
    'Trata tendencias, no valores aislados: el examen seriado manda.',
    'La PPC importa más que la PIC aislada; busca la PPC óptima individual.',
    'Una pupila nueva, dilatada y fija es herniación: actúa sin esperar la TC.',
    'La tríada de Cushing es un signo tardío; no esperes a verla.',
    'Velocidades altas con Lindegaard <3 son hiperemia, no vasoespasmo.',
    'La hiperventilación baja la PIC vasoconstriñendo… y por eso causa isquemia.',
    'La PbtO₂ cae con PIC/PPC normales: ve isquemia que la presión no ve.',
    'El nimodipino mejora el desenlace por neuroprotección, no revierte el espasmo angiográfico.',
    'En el neurocrítico, distingue SIADH de perdedor de sal por la volemia antes de tocar el agua.',
  ],

  // 5 — PITFALLS (≤10, errores reales)
  pitfalls: [
    'Nivelar el transductor de PA al corazón y subestimar la PPC.',
    'Atribuir el deterioro a la sedación sin descartar herniación, hidrocefalia o crisis.',
    'Hiperventilación profiláctica o prolongada (PaCO₂ <30) → isquemia.',
    'Forzar la PPC >70 con líquidos y presores → SDRA sin beneficio.',
    'Restringir agua de forma refleja ante hiponatremia sin evaluar la volemia.',
    'Leer velocidades altas del DTC como vasoespasmo sin calcular el Lindegaard.',
    'Confiar solo en la PIC e ignorar la PbtO₂.',
    'Suspender el nimodipino por hipotensión sin fraccionar la dosis antes.',
    'Sobresedar y perder la neuroevaluación seriada.',
    'Hacer el reflejo oculocefálico sin descartar lesión de columna cervical.',
  ],

  // 6 — EVIDENCE
  evidence: [
    {
      org: 'Brain Trauma Foundation',
      titulo: 'Guidelines for the Management of Severe Traumatic Brain Injury (4th ed.)',
      revista: 'Neurosurgery',
      anio: 2017,
      doi: '10.1227/NEU.0000000000001432',
      pubmed: '27654000',
      nivel: 'Guía',
      porque: 'Estándar del manejo de PIC/PPC en el TBI grave.',
      recomendacion: 'Tratar la PIC >22 mmHg; objetivo de PPC 60–70 mmHg.',
      cambio: 'Definió umbrales de PIC y PPC basados en evidencia.',
      url: 'https://braintrauma.org/',
    },
    {
      titulo: 'A Trial of Intracranial-Pressure Monitoring in Traumatic Brain Injury (BEST:TRIP)',
      revista: 'N Engl J Med',
      anio: 2012,
      doi: '10.1056/NEJMoa1207363',
      pubmed: '23234472',
      nivel: 'ECA',
      porque: 'Cuestionó el manejo guiado únicamente por la PIC.',
      recomendacion: 'El manejo guiado por PIC no fue superior al basado en examen + imagen.',
      cambio: 'Impulsó el neuromonitoreo multimodal frente a la PIC aislada.',
    },
    {
      org: 'AHA/ASA',
      titulo: '2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage',
      revista: 'Stroke',
      anio: 2023,
      doi: '10.1161/STR.0000000000000436',
      pubmed: '37212182',
      nivel: 'Guía',
      porque: 'Guía de referencia de la HSA aneurismática.',
      recomendacion: 'Nimodipino, aseguramiento precoz del aneurisma y euvolemia + hipertensión inducida en DCI.',
      cambio: 'Abandonó el “triple-H” clásico a favor de euvolemia + hipertensión.',
      url: 'https://www.ahajournals.org/',
    },
    {
      titulo: 'Cerebral arterial spasm — a controlled trial of nimodipine in aneurysmal SAH',
      revista: 'N Engl J Med',
      anio: 1983,
      doi: '10.1056/NEJM198303173081103',
      pubmed: '6338383',
      nivel: 'ECA',
      porque: 'Base de la evidencia del nimodipino en HSA.',
      recomendacion: 'El nimodipino reduce el déficit isquémico y mejora el desenlace.',
      cambio: 'Hizo del nimodipino un estándar en toda HSA aneurismática.',
    },
    {
      titulo: 'Brain Oxygen Optimization in Severe TBI (BOOST-II)',
      revista: 'Crit Care Med',
      anio: 2017,
      doi: '10.1097/CCM.0000000000002619',
      pubmed: '28806220',
      nivel: 'ECA',
      porque: 'Evaluó el manejo guiado por PbtO₂ además de la PIC.',
      recomendacion: 'Añadir la PbtO₂ redujo la carga de hipoxia cerebral.',
      cambio: 'Sustentó la monitorización de oxigenación tisular (base de BOOST-3).',
    },
  ],

  // 7 — CLINICAL TOOLS
  tools: [
    { tipo: 'calc', calc: 'ppc', titulo: 'Calculadora de PPC' },
    { tipo: 'calc', calc: 'lindegaard', titulo: 'Índice de Lindegaard' },
    {
      tipo: 'table',
      titulo: 'Objetivos por parámetro',
      table: {
        columnas: ['Parámetro', 'Objetivo', 'Evitar'],
        filas: [
          ['PIC', '<22 mmHg', '>22 sostenida'],
          ['PPC', '60–70 mmHg', '<50 · forzar >70'],
          ['PaCO₂', '35–40 mmHg', '<30 (isquemia)'],
          ['PbtO₂', '>20 mmHg', '<15'],
          ['Temperatura', 'Normotermia', 'Fiebre'],
          ['Glucosa', '140–180 mg/dL', '<140 · >180'],
          ['Sodio', 'Normal-alta', 'Hiponatremia'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Osmoterapia: manitol vs. salino hipertónico',
      table: {
        columnas: ['', 'Manitol', 'Salino hipertónico'],
        filas: [
          ['Dosis', '0,5–1 g/kg', 'NaCl 3% 250 mL o 23,4% 30 mL'],
          ['Efecto', 'Osmótico + diurético', 'Osmótico, expande volumen'],
          ['Usar si', 'Euvolemia, función renal ok', 'Hipovolemia / hipotensión'],
          ['Vigilar', 'Osm <320, hipovolemia, renal', 'Natremia, sobrecarga'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Sedación y objetivos',
      table: {
        columnas: ['Objetivo', 'Recomendación'],
        filas: [
          ['Analgesia', 'Primero (analgo-sedación)'],
          ['Agentes', 'Vida media corta: propofol, remifentanilo, dexmedetomidina'],
          ['Escala', 'RASS / CPOT por objetivo'],
          ['Ventana neurológica', 'Sí, si la PIC lo permite'],
          ['Evitar', 'Benzodiacepinas (delirium)'],
        ],
      },
    },
  ],

  // 8 — CLINICAL CASE (uno, premium)
  caso: {
    titulo: 'HSA aneurismática Fisher IV / WFNS V',
    contexto:
      'Mujer de 55 años, hipertensa y fumadora, con cefalea súbita descrita como “la peor de su vida” seguida de pérdida de conciencia. Formula tu conducta antes de revelar el análisis experto.',
    fases: [
      {
        titulo: 'Fase 1 — Llegada y clasificación',
        vineta:
          'A su llegada está en coma, no obedece órdenes y solo localiza mínimamente al dolor. Respira con patrón irregular. La TC muestra HSA difusa con sangre gruesa en cisternas, hemorragia intraventricular e hidrocefalia incipiente.',
        datos: [
          { k: 'GCS', v: '5 (O1 V1 M3)' },
          { k: 'Pupilas', v: '3 mm, reactivas' },
          { k: 'PA', v: '185/100 mmHg' },
          { k: 'FC', v: '58 lpm' },
          { k: 'FR', v: 'Irregular' },
          { k: 'SpO₂', v: '91% aire' },
        ],
        pregunta: '¿Clasificación de gravedad y prioridades inmediatas?',
        pista: 'Piensa en WFNS/Fisher, vía aérea, y por qué está en coma (¿solo el sangrado?).',
        analisis: [
          'WFNS V (GCS 3–6) y Fisher IV (HSA gruesa + HIV) → alto riesgo de vasoespasmo/DCI.',
          'Vía aérea: GCS ≤8 + patrón irregular + hipoxemia → intubación con neuroprotección.',
          'Hidrocefalia aguda (causa reversible del coma) → DVE urgente (mide PIC y drena LCR).',
          'Control de PA (PAS <140–160) para reducir resangrado, evitando hipotensión.',
        ],
        aprendizaje:
          'La DVE trata una causa reversible del coma y mide la PIC; asegurar la vía aérea y la presión previene la lesión secundaria y el resangrado.',
      },
      {
        titulo: 'Fase 2 — Tras la DVE',
        vineta:
          'Se coloca DVE con salida de LCR hemático; la PIC baja de 28 a 14 mmHg. Intubada y sedada con propofol/remifentanilo. Se inicia nimodipino.',
        datos: [
          { k: 'PIC', v: '14 mmHg' },
          { k: 'PAM', v: '95 mmHg' },
          { k: 'PPC', v: '81 mmHg' },
          { k: 'PbtO₂', v: '24 mmHg' },
        ],
        pregunta: '¿Metas de manejo y siguiente paso definitivo?',
        pista: 'PIC/PPC, aseguramiento del aneurisma y neuroprotección.',
        analisis: [
          'Metas: PIC <22, PPC 60–70, PbtO₂ >20, normocapnia, normotermia, normoglucemia.',
          'Definitivo: asegurar el aneurisma precozmente (coils o clip) para prevenir resangrado.',
          'Nimodipino 21 días; si hipotensión, fraccionar antes de suspender.',
        ],
        aprendizaje: 'Estabilizada la PIC, la prioridad es asegurar el aneurisma; neuroprotección en paralelo.',
      },
      {
        titulo: 'Fase 3 — Día 6: deterioro',
        vineta:
          'Aneurisma asegurado con coils el día 1. Al día 6, menor reactividad y nueva hemiparesia derecha. DTC: VMF ACM izquierda 220 cm/s, ACI extracraneal 30 cm/s.',
        datos: [
          { k: 'VMF ACM', v: '220 cm/s' },
          { k: 'Lindegaard', v: '7,3' },
          { k: 'PIC', v: '12 mmHg' },
          { k: 'Na', v: '133 mmol/L' },
        ],
        pregunta: 'Interpreta el DTC y define diagnóstico y manejo.',
        pista: 'Interpreta el índice de Lindegaard; descarta primero otras causas de deterioro.',
        analisis: [
          'Lindegaard 7,3 (>6) = vasoespasmo severo, no hiperemia; concuerda con la focalidad.',
          'Isquemia cerebral tardía (DCI): principal causa de deterioro días 4–14.',
          'Manejo: euvolemia + hipertensión inducida; rescate endovascular si no mejora.',
        ],
        aprendizaje:
          'El deterioro tardío es DCI hasta demostrar lo contrario; el Lindegaard confirma el vasoespasmo.',
      },
      {
        titulo: 'Fase 4 — Disnatremia',
        vineta:
          'A las 24 h el sodio cae a 128 mmol/L, con hipovolemia (balance negativo, poliuria, natriuresis elevada).',
        datos: [
          { k: 'Na', v: '128 mmol/L' },
          { k: 'Volemia', v: 'Baja' },
          { k: 'Diuresis', v: 'Poliuria' },
        ],
        pregunta: '¿SIADH o perdedor de sal cerebral? ¿Manejo?',
        pista: 'La diferencia clave es la volemia; el tratamiento es opuesto.',
        analisis: [
          'Hipovolemia + natriuresis → síndrome perdedor de sal cerebral (no SIADH euvolémico).',
          'En HSA, la hiponatremia/hipovolemia agravan el DCI: no restrinjas agua.',
          'Repón sodio y volumen (salino iso/hipertónico); considera fludrocortisona.',
        ],
        aprendizaje: 'Distingue SIADH del perdedor de sal por la volemia: en CSW se repone sal y volumen.',
      },
      {
        titulo: 'Fase 5 — Pase de visita',
        vineta: 'Se estabiliza con hipertensión inducida y corrección del sodio. Preséntala en el pase.',
        datos: [
          { k: 'Día UCI', v: '7' },
          { k: 'Aneurisma', v: 'Asegurado' },
          { k: 'Vasoespasmo', v: 'En manejo' },
        ],
        pregunta: '¿Cómo estructuras la presentación neurocrítica por sistemas?',
        pista: 'One-liner + examen seriado + tablero de neuromonitoreo + metas.',
        analisis: [
          'One-liner: “Mujer 55a, día 7 UCI por HSA WFNS V/Fisher IV, aneurisma asegurado, en manejo de vasoespasmo”.',
          'Neuro: examen seriado (GCS/FOUR, pupilas/NPi), DTC/Lindegaard, EEG, DVE; metas PIC/PPC.',
          'Hemodinámico: hipertensión inducida con objetivo de PPC, euvolemia, nimodipino.',
          'Metabólico: natremia objetivo (CSW: reposición), glucosa, temperatura.',
        ],
        aprendizaje:
          'La presentación neurocrítica combina un examen seriado como tendencia con un tablero de neuromonitoreo y metas por sistema.',
      },
    ],
  },

  // 9 — FURTHER READING (opcional)
  furtherReading: [
    { titulo: 'Internet Book of Critical Care — Neurocritical care / Elevated ICP', fuente: 'IBCC · EMCrit', url: 'https://emcrit.org/ibcc/' },
    { titulo: 'EMCrit — Neurocritical care', fuente: 'EMCrit', url: 'https://emcrit.org/' },
    { titulo: 'Subarachnoid haemorrhage', fuente: 'Life in the Fast Lane (LITFL)', url: 'https://litfl.com/' },
    { titulo: 'Guidelines & resources', fuente: 'Neurocritical Care Society', url: 'https://www.neurocriticalcare.org/' },
  ],
}

export default neuromonitoreo
