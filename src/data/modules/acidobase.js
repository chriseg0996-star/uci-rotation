// Módulo Clínico 6 — Ácido-base (referencia de bolsillo de UCI).
// Estructura de decisión al pie de cama. Español clínico, nivel intensivista senior.
// Estilo AMBOSS + EMCrit + IBCC + fisiología del paciente crítico. Sin ensayos, sin quizzes.
// Mensaje central: no etiquetes solo el pH; identifica el trastorno primario, la compensación
// y los trastornos mixtos ocultos.

const acidobase = {
  dia: 6,
  slug: 'acido-base',
  titulo: 'Ácido-base',
  subtitulo: 'Interpretación rápida de la gasometría, reglas de compensación, brecha aniónica, delta-delta y trastornos mixtos.',

  // 1 — OVERVIEW
  overview: {
    porque:
      'Los trastornos ácido-base son señales de la fisiología subyacente. No etiquetes solo el pH: identifica el trastorno primario, comprueba la compensación esperada y descubre los trastornos mixtos ocultos. Un pH casi normal puede esconder dos procesos graves opuestos.',
    conceptos: [
      'Un pH casi normal puede ocultar dos trastornos graves opuestos.',
      'Corrige siempre la brecha aniónica por la albúmina.',
      'La compensación nunca sobrecorrige el pH: si lo hace, hay un segundo trastorno.',
      'La acidosis hiperclorémica tras salino es iatrogénica hasta demostrar lo contrario.',
      'En el paciente ventilado, la PaCO₂ suele ser un parámetro del ventilador.',
    ],
    bundleTitulo: 'Interpretación paso a paso',
    bundle: [
      '1. ¿Acidemia o alcalemia? (pH)',
      '2. Trastorno primario: PaCO₂ vs HCO₃',
      '3. Compensación esperada (¿adecuada?)',
      '4. Brecha aniónica corregida por albúmina',
      '5. Delta-delta (ΔAG/ΔHCO₃) → ¿mixto?',
      '6. Integrar con la clínica (lactato, tóxicos, cloro)',
    ],
    acciones: [
      'Tratar la causa, no el número (lactato, tóxico, cloro, ventilación).',
      'Corregir la brecha por albúmina antes de descartar una HAGMA.',
      'Comprobar la compensación esperada (Winter, reglas respiratorias).',
      'Revisar la carga de cloro y el balance en la acidosis sin brecha.',
      'Considerar tóxicos si hay brecha osmolar o HAGMA inexplicada.',
    ],
    redFlags: [
      'Acidemia grave (pH <7,20) o alcalemia grave (pH >7,55).',
      'Acidosis láctica en ascenso con shock.',
      'Brecha osmolar elevada (alcoholes tóxicos).',
      'Hipercapnia crónica “corregida” en exceso.',
      'pH normal con PaCO₂/HCO₃ muy anormales (trastorno mixto).',
    ],
    reevaluar: [
      'pH, PaCO₂ y HCO₃ tras cada intervención.',
      'Brecha aniónica corregida y delta-delta.',
      'En VM: ventilación minuto (Vt×FR) y auto-PEEP.',
      'Aclaramiento de lactato y perfusión.',
      'Potasio y cloro; función renal.',
    ],
  },

  // 2 — QUICK CARDS
  quickCards: [
    {
      titulo: 'Valores normales',
      icon: 'target',
      tono: 'mint',
      filas: [
        { k: 'pH', v: '7,35–7,45' },
        { k: 'PaCO₂', v: '35–45 mmHg' },
        { k: 'HCO₃⁻', v: '22–26 mmol/L' },
        { k: 'Exceso base', v: '−2 a +2' },
        { k: 'Lactato', v: '<2 mmol/L' },
      ],
    },
    {
      titulo: 'Brecha aniónica',
      icon: 'sliders',
      tono: 'steel',
      filas: [
        { k: 'Normal', v: '8–12 mmol/L' },
        { k: 'Fórmula', v: 'Na − (Cl + HCO₃)' },
        { k: 'Corrección', v: '+2,5 por 1 g/dL Alb <4' },
      ],
    },
    {
      titulo: 'Fórmula de Winter',
      icon: 'pulse',
      tono: 'pearl',
      filas: [{ k: 'PaCO₂ esperada', v: '1,5·HCO₃ + 8 (±2)' }],
      nota: 'Acidosis metabólica: fuera de rango = trastorno mixto.',
    },
    {
      titulo: 'Compensación respiratoria',
      icon: 'sliders',
      tono: 'steel',
      filas: [
        { k: 'Ac. aguda', v: 'HCO₃ ↑1 / 10 PaCO₂' },
        { k: 'Ac. crónica', v: 'HCO₃ ↑4 / 10' },
        { k: 'Alc. aguda', v: 'HCO₃ ↓2 / 10' },
        { k: 'Alc. crónica', v: 'HCO₃ ↓4–5 / 10' },
      ],
    },
    {
      titulo: 'Delta-delta',
      icon: 'sliders',
      tono: 'pearl',
      filas: [
        { k: '<0,4', v: 'sin brecha' },
        { k: '0,4–1', v: 'mixta' },
        { k: '1–2', v: 'HAGMA pura', tono: 'mint' },
        { k: '>2', v: '+ alcalosis / ac. resp crón.' },
      ],
    },
    {
      titulo: 'Brecha osmolar',
      icon: 'alert',
      tono: 'terra',
      filas: [
        { k: 'Significativa', v: '>10 mOsm', tono: 'terra' },
        { k: 'Sugiere', v: 'alcoholes tóxicos' },
      ],
    },
    {
      titulo: 'Umbrales de gravedad',
      icon: 'alert',
      tono: 'terra',
      filas: [
        { k: 'Acidemia grave', v: 'pH <7,20', tono: 'terra' },
        { k: 'Alcalemia grave', v: 'pH >7,55', tono: 'terra' },
      ],
    },
    {
      titulo: 'Bicarbonato',
      icon: 'sliders',
      tono: 'pearl',
      filas: [
        { k: 'Considerar', v: 'pH <7,1 (controvertido)' },
        { k: 'No', v: 'ac. láctica con shock' },
      ],
    },
    {
      titulo: 'Diálisis',
      icon: 'flame',
      tono: 'terra',
      filas: [
        { k: 'Acidosis', v: 'grave refractaria' },
        { k: 'Tóxicos', v: 'metanol · etilenglicol' },
        { k: 'LRA', v: 'acidosis / hiperK / sobrecarga' },
      ],
    },
  ],

  // 3 — FIGURAS & ALGORITMOS
  figuras: [
    {
      id: 'algo-gasometria',
      tipo: 'algorithm',
      titulo: 'Interpretación de la gasometría',
      caption: 'Seis pasos: pH → primario → compensación → brecha (corregida) → delta-delta → clínica.',
      fuente: 'Adaptado de IBCC / EMCrit',
      flow: [
        { kind: 'start', text: 'Gasometría (pH, PaCO₂, HCO₃)' },
        { kind: 'action', text: '1. ¿Acidemia (pH<7,35) o alcalemia (pH>7,45)?' },
        { kind: 'action', text: '2. Trastorno primario: PaCO₂ vs HCO₃' },
        { kind: 'action', text: '3. Compensación esperada (¿adecuada?)' },
        {
          kind: 'decision',
          text: '4. ¿Brecha aniónica (corregida) elevada?',
          branches: [
            { label: 'Sí', kind: 'action', text: '5. Delta-delta → ¿mixto?' },
            { label: 'No', kind: 'action', text: 'Acidosis sin brecha (Cl / GI / renal)' },
          ],
        },
        { kind: 'end', text: '6. Integrar con la clínica (lactato, tóxicos, cloro)' },
      ],
    },
    {
      id: 'algo-primario',
      tipo: 'algorithm',
      titulo: 'Identificación del trastorno primario',
      caption: 'Nombra el trastorno primario a partir del pH y de si domina la PaCO₂ o el HCO₃.',
      fuente: 'Adaptado de Adrogué/Madias',
      flow: [
        { kind: 'start', text: '¿pH?' },
        {
          kind: 'decision',
          text: '¿Acidemia o alcalemia?',
          branches: [
            { label: 'Acidemia', kind: 'action', text: 'PaCO₂ alta (resp) o HCO₃ baja (metab.)' },
            { label: 'Alcalemia', kind: 'action', text: 'PaCO₂ baja (resp) o HCO₃ alta (metab.)' },
          ],
        },
        { kind: 'end', text: 'Nombrar el trastorno primario, no solo el pH' },
      ],
    },
    {
      id: 'algo-compensacion',
      tipo: 'algorithm',
      titulo: 'Compensación esperada',
      caption: 'La compensación nunca normaliza del todo el pH; si está fuera de rango, hay un segundo trastorno.',
      fuente: 'Adaptado de Adrogué/Madias',
      flow: [
        { kind: 'start', text: 'Trastorno primario identificado' },
        { kind: 'action', text: 'Metabólica: Winter (PaCO₂ = 1,5·HCO₃ + 8 ±2)' },
        { kind: 'action', text: 'Respiratoria: ΔHCO₃ por cada 10 de PaCO₂ (agudo vs crónico)' },
        {
          kind: 'decision',
          text: '¿Compensación adecuada?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Trastorno simple con compensación' },
            { label: 'No', kind: 'warn', text: 'Trastorno mixto: hay un segundo proceso' },
          ],
        },
      ],
    },
    {
      id: 'algo-ag',
      tipo: 'algorithm',
      titulo: 'Brecha aniónica',
      caption: 'Corrige por albúmina antes de decidir; una albúmina baja enmascara la brecha.',
      fuente: 'Adaptado de Fencl/Stewart',
      flow: [
        { kind: 'start', text: 'AG = Na − (Cl + HCO₃)' },
        { kind: 'action', text: 'Corregir por albúmina: +2,5 por 1 g/dL <4' },
        {
          kind: 'decision',
          text: '¿AG corregida >12?',
          branches: [
            { label: 'Sí', kind: 'action', text: 'HAGMA (GOLDMARK) → delta-delta' },
            { label: 'No', kind: 'action', text: 'Sin brecha (hiperclorémica): Cl, GI, renal' },
          ],
        },
      ],
    },
    {
      id: 'fig-ag-albumin',
      tipo: 'svg',
      diagram: 'ag-albumin',
      titulo: 'Brecha aniónica corregida por albúmina',
      caption: 'Cada 1 g/dL de albúmina por debajo de 4 “oculta” ~2,5 mmol/L de brecha.',
      fuente: 'Esquema',
    },
    {
      id: 'fig-delta',
      tipo: 'svg',
      diagram: 'delta-ratio',
      titulo: 'Interpretación del delta-delta',
      caption: 'La relación ΔAG/ΔHCO₃ revela trastornos metabólicos añadidos a una acidosis con brecha.',
      fuente: 'Esquema',
    },
    {
      id: 'algo-mixto',
      tipo: 'algorithm',
      titulo: 'Detección de trastornos mixtos',
      caption: 'Compensación anómala, delta-delta fuera de rango o pH normal con valores muy anormales delatan un trastorno mixto.',
      fuente: 'Adaptado de IBCC',
      flow: [
        { kind: 'start', text: 'Sospecha de trastorno mixto' },
        { kind: 'action', text: 'Compensación fuera del rango esperado' },
        { kind: 'action', text: 'Delta-delta anómalo (<0,4 o >2)' },
        { kind: 'action', text: 'pH normal con PaCO₂/HCO₃ muy anormales' },
        { kind: 'end', text: 'Identificar cada proceso por separado' },
      ],
    },
    {
      id: 'algo-osmolar',
      tipo: 'algorithm',
      titulo: 'Brecha osmolar',
      caption: 'Una HAGMA inexplicada con brecha osmolar elevada obliga a descartar alcoholes tóxicos.',
      fuente: 'Adaptado de EXTRIP',
      flow: [
        { kind: 'start', text: 'HAGMA inexplicada' },
        { kind: 'action', text: 'Osm calc = 2·Na + glucosa/18 + BUN/2,8' },
        { kind: 'action', text: 'Brecha = Osm medida − calculada' },
        {
          kind: 'decision',
          text: '¿Brecha >10?',
          branches: [
            { label: 'Sí', kind: 'warn', text: 'Alcoholes tóxicos (metanol/etilenglicol) → fomepizol, diálisis' },
            { label: 'No', kind: 'action', text: 'Buscar otras causas de HAGMA' },
          ],
        },
      ],
    },
    {
      id: 'tab-goldmark',
      tipo: 'table',
      titulo: 'Acidosis con brecha: GOLDMARK',
      caption: 'Mnemónico moderno de las causas de acidosis metabólica con brecha aniónica.',
      fuente: 'GOLDMARK',
      table: {
        columnas: ['Letra', 'Causa'],
        filas: [
          ['G', 'Glicoles (etilenglicol, propilenglicol)'],
          ['O', 'Oxoprolina (paracetamol crónico)'],
          ['L', 'L-lactato'],
          ['D', 'D-lactato'],
          ['M', 'Metanol'],
          ['A', 'Aspirina (salicilatos)'],
          ['R', 'Renal (uremia)'],
          ['K', 'Cetoacidosis'],
        ],
      },
    },
    {
      id: 'algo-alcalosis',
      tipo: 'algorithm',
      titulo: 'Alcalosis metabólica: cloro',
      caption: 'El cloro urinario separa la alcalosis que responde a cloro de la resistente.',
      fuente: 'Adaptado de Kraut/Madias',
      flow: [
        { kind: 'start', text: 'Alcalosis metabólica' },
        { kind: 'action', text: 'Medir cloro urinario' },
        {
          kind: 'decision',
          text: '¿Cl urinario <20 (responde a cloro)?',
          branches: [
            { label: 'Sí', kind: 'action', text: 'Vómitos, diuréticos, SNG → reponer volumen/Cl (salino)' },
            { label: 'No', kind: 'warn', text: 'Resistente: HTA/hiperaldosteronismo, hipoK, mineralocorticoide' },
          ],
        },
      ],
    },
    {
      id: 'algo-resp-acidosis',
      tipo: 'algorithm',
      titulo: 'Acidosis respiratoria',
      caption: 'Distingue agudo de crónico; en VM, ajusta la ventilación sin romper la protección.',
      fuente: 'Adaptado de IBCC',
      flow: [
        { kind: 'start', text: 'Acidosis respiratoria (PaCO₂ ↑)' },
        { kind: 'action', text: '¿Agudo o crónico? (compensación de HCO₃)' },
        { kind: 'action', text: 'Causas: depresión SNC, fatiga, obstrucción, VM inadecuada' },
        {
          kind: 'decision',
          text: '¿En ventilación mecánica?',
          branches: [
            { label: 'Sí', kind: 'action', text: 'Revisar VE (Vt×FR), espacio muerto, auto-PEEP (mantener protección)' },
            { label: 'No', kind: 'warn', text: 'Soporte ventilatorio si acidemia grave / fatiga' },
          ],
        },
      ],
    },
    {
      id: 'algo-resp-alcalosis',
      tipo: 'algorithm',
      titulo: 'Alcalosis respiratoria',
      caption: 'La taquipnea que hiperventila suele señalar una causa grave: no la “calmes” sin más.',
      fuente: 'Adaptado de IBCC',
      flow: [
        { kind: 'start', text: 'Alcalosis respiratoria (PaCO₂ ↓)' },
        { kind: 'action', text: 'Causas: dolor/ansiedad, hipoxemia, sepsis, TEP, SNC, VM excesiva' },
        {
          kind: 'decision',
          text: '¿Hipoxemia o causa grave (sepsis/TEP)?',
          branches: [
            { label: 'Sí', kind: 'warn', text: 'Tratar la causa (no solo la taquipnea)' },
            { label: 'No', kind: 'action', text: 'Corregir la causa; ajustar VM si es iatrogénica' },
          ],
        },
      ],
    },
  ],

  // 4 — HIGH-YIELD
  highYield: [
    'Un pH casi normal puede ocultar dos trastornos graves opuestos.',
    'Corrige siempre la brecha aniónica por la albúmina.',
    'La compensación nunca sobrecorrige el pH: si lo hace, hay un segundo trastorno.',
    'La acidosis hiperclorémica tras salino es iatrogénica hasta demostrar lo contrario.',
    'En el paciente ventilado, la PaCO₂ suele ser un parámetro del ventilador.',
    'Trata la causa del lactato, no el número aislado.',
    'Una brecha osmolar elevada con HAGMA inexplicada obliga a descartar alcoholes tóxicos.',
    'El delta-delta revela una alcalosis metabólica o una acidosis sin brecha escondidas.',
    'No sobrecorrijas la hipercapnia crónica: bajarías el estímulo y el HCO₃ compensador.',
    'La gasometría venosa sirve para el pH/HCO₃ y para tamizar; confirma la PaCO₂ con arterial si es clave.',
  ],

  // 5 — PITFALLS
  pitfalls: [
    'Llamar “acidosis metabólica” a todo pH bajo sin identificar el trastorno primario.',
    'No comprobar la compensación esperada.',
    'Pasar por alto una HAGMA porque la albúmina es baja.',
    'Ignorar el delta-delta.',
    'Tratar la acidosis láctica con bicarbonato mientras el shock persiste.',
    'Sobrecorregir la hipercapnia crónica.',
    'No pensar en los alcoholes tóxicos.',
    'Ignorar la carga de cloro (acidosis hiperclorémica iatrogénica).',
    'Confundir la compensación renal con un trastorno mixto.',
    'Olvidar la mecánica del ventilador al “corregir” la PaCO₂.',
  ],

  // 6 — EVIDENCE
  evidence: [
    {
      titulo: 'Sodium Bicarbonate for Severe Metabolic Acidaemia in the ICU (BICAR-ICU)',
      revista: 'Lancet',
      anio: 2018,
      doi: '10.1016/S0140-6736(18)31080-8',
      pubmed: '29910040',
      nivel: 'ECA',
      porque: 'Ensayo de referencia del bicarbonato en acidemia grave.',
      recomendacion: 'Sin beneficio global; posible beneficio en el subgrupo con lesión renal aguda.',
      cambio: 'Reservó el bicarbonato a la acidemia grave con LRA, no de rutina.',
    },
    {
      titulo: 'Bicarbonato en acidemia metabólica grave — evidencia en evolución (post BICAR-ICU)',
      revista: 'Ensayos en curso / revisiones',
      anio: 2024,
      doi: null,
      pubmed: null,
      nivel: 'Revisión',
      porque: 'La indicación óptima del bicarbonato sigue en estudio.',
      recomendacion: 'A la espera de ensayos confirmatorios; individualizar según pH, LRA y causa.',
      cambio: 'Mantiene el bicarbonato como medida puente, no como tratamiento de la causa.',
    },
    {
      org: 'Kraut & Madias',
      titulo: 'Metabolic Acidosis: Pathophysiology, Diagnosis and Management',
      revista: 'Nat Rev Nephrol',
      anio: 2010,
      doi: '10.1038/nrneph.2010.33',
      pubmed: '20308999',
      nivel: 'Revisión',
      porque: 'Revisión de referencia de la acidosis metabólica.',
      recomendacion: 'Diagnóstico por brecha aniónica y delta-delta; tratar la causa.',
      cambio: 'Sistematizó el abordaje diagnóstico y terapéutico.',
    },
    {
      titulo: 'Metabolic Alkalosis: A Brief Pathophysiologic Review',
      revista: 'Clin J Am Soc Nephrol',
      anio: 2020,
      doi: '10.2215/CJN.16041219',
      pubmed: '32586924',
      nivel: 'Revisión',
      porque: 'Revisión práctica de la alcalosis metabólica.',
      recomendacion: 'Clasificar por respuesta al cloro (urinario) y corregir la causa.',
      cambio: 'Aclaró el abordaje cloro-responsivo vs cloro-resistente.',
    },
    {
      org: 'Stewart',
      titulo: 'Stewart Acid-Base: A Simplified Bedside Approach',
      revista: 'Anesth Analg',
      anio: 2016,
      doi: '10.1213/ANE.0000000000001261',
      pubmed: '27140683',
      nivel: 'Revisión',
      porque: 'Enfoque cuantitativo (iones fuertes) simplificado.',
      recomendacion: 'La diferencia de iones fuertes y los ácidos débiles explican trastornos que la brecha no ve.',
      cambio: 'Complementó el abordaje tradicional en el crítico.',
    },
    {
      org: 'Fencl/Stewart',
      titulo: 'Diagnosis of Metabolic Acid-Base Disturbances in Critically Ill Patients',
      revista: 'Am J Respir Crit Care Med',
      anio: 2000,
      doi: '10.1164/ajrccm.162.6.9904099',
      pubmed: '11112147',
      nivel: 'Revisión',
      porque: 'Aplicó el enfoque de Stewart al paciente crítico.',
      recomendacion: 'Cuantificar el efecto del cloro, la albúmina y los aniones no medidos.',
      cambio: 'Reveló acidosis ocultas por la hipoalbuminemia.',
    },
    {
      org: 'Adrogué & Madias',
      titulo: 'Secondary Responses to Altered Acid-Base Status: The Rules of Engagement',
      revista: 'J Am Soc Nephrol',
      anio: 2010,
      doi: '10.1681/ASN.2009121211',
      pubmed: '20431042',
      nivel: 'Revisión',
      porque: 'Reglas de compensación de los trastornos respiratorios y metabólicos.',
      recomendacion: 'Cada trastorno primario tiene una compensación secundaria predecible.',
      cambio: 'Base de las fórmulas de compensación de uso diario.',
    },
    {
      titulo: 'Clinical Use of Lactate Monitoring in Critically Ill Patients',
      revista: 'Ann Intensive Care',
      anio: 2013,
      doi: '10.1186/2110-5820-3-12',
      pubmed: '23663301',
      nivel: 'Revisión',
      porque: 'Interpretación del lactato en el crítico.',
      recomendacion: 'El lactato refleja hipoperfusión y otras causas; guía por su aclaramiento.',
      cambio: 'Consolidó el lactato como marcador dinámico, no como diana única.',
    },
    {
      org: 'KDIGO',
      titulo: 'Clinical Practice Guideline for Acute Kidney Injury (indicaciones de TRR)',
      revista: 'Kidney Int Suppl',
      anio: 2012,
      doi: '10.1038/kisup.2012.1',
      pubmed: null,
      nivel: 'Guía',
      porque: 'Marco de las indicaciones de terapia de reemplazo renal.',
      recomendacion: 'TRR ante acidosis, hiperpotasemia, sobrecarga o uremia refractarias.',
      cambio: 'Estandarizó las indicaciones de TRR en la LRA.',
      url: 'https://kdigo.org/guidelines/',
    },
    {
      org: 'EXTRIP',
      titulo: 'Extracorporeal Treatment for Methanol Poisoning — Recommendations (EXTRIP)',
      revista: 'Crit Care Med',
      anio: 2015,
      doi: '10.1097/CCM.0000000000000708',
      pubmed: '25493973',
      nivel: 'Consenso',
      porque: 'Guía del papel de la depuración extracorpórea en alcoholes tóxicos.',
      recomendacion: 'Diálisis en intoxicación grave por metanol (acidosis, brecha, visión).',
      cambio: 'Definió cuándo dializar en la intoxicación por alcoholes tóxicos.',
    },
  ],

  // 7 — CLINICAL TOOLS
  tools: [
    { tipo: 'calc', calc: 'aniongap', titulo: 'Brecha aniónica' },
    { tipo: 'calc', calc: 'correctedag', titulo: 'Brecha aniónica corregida por albúmina' },
    { tipo: 'calc', calc: 'deltaratio', titulo: 'Delta-delta (ΔAG/ΔHCO₃)' },
    { tipo: 'calc', calc: 'winter', titulo: 'Fórmula de Winter' },
    { tipo: 'calc', calc: 'expectedcompensation', titulo: 'Compensación esperada' },
    { tipo: 'calc', calc: 'osmolarity', titulo: 'Osmolaridad calculada' },
    { tipo: 'calc', calc: 'osmolargap', titulo: 'Brecha osmolar' },
    { tipo: 'calc', calc: 'baseexcess', titulo: 'Exceso de base — interpretación' },
    { tipo: 'calc', calc: 'bicarbdeficit', titulo: 'Déficit de bicarbonato' },
    { tipo: 'calc', calc: 'pfratio', titulo: 'PaO₂/FiO₂' },
    {
      tipo: 'table',
      titulo: 'Fórmulas de compensación',
      table: {
        columnas: ['Trastorno', 'Compensación esperada'],
        filas: [
          ['Acidosis metabólica', 'PaCO₂ = 1,5·HCO₃ + 8 (±2) [Winter]'],
          ['Alcalosis metabólica', 'PaCO₂ ↑ ~0,7 por cada 1 de HCO₃'],
          ['Ac. respiratoria aguda', 'HCO₃ ↑1 por 10 de PaCO₂'],
          ['Ac. respiratoria crónica', 'HCO₃ ↑4–5 por 10 de PaCO₂'],
          ['Alc. respiratoria aguda', 'HCO₃ ↓2 por 10 de PaCO₂'],
          ['Alc. respiratoria crónica', 'HCO₃ ↓4–5 por 10 de PaCO₂'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'GOLDMARK (acidosis con brecha)',
      table: {
        columnas: ['Letra', 'Causa'],
        filas: [
          ['G', 'Glicoles'],
          ['O', 'Oxoprolina'],
          ['L', 'L-lactato'],
          ['D', 'D-lactato'],
          ['M', 'Metanol'],
          ['A', 'Aspirina (salicilatos)'],
          ['R', 'Renal (uremia)'],
          ['K', 'Cetoacidosis'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Tamizaje de alcoholes tóxicos',
      table: {
        columnas: ['Clave', 'Hallazgo'],
        filas: [
          ['Brecha osmolar', '>10 mOsm'],
          ['Acidosis', 'con brecha, inexplicada'],
          ['Etilenglicol', 'oxalato · cristaluria · LRA'],
          ['Metanol', 'afectación visual'],
          ['Tratamiento', 'fomepizol · diálisis (EXTRIP)'],
        ],
        tonos: ['terra', 'terra', 'pearl', 'pearl', 'mint'],
      },
    },
    {
      tipo: 'table',
      titulo: 'Diferencia de iones fuertes (Stewart, simplificado)',
      table: {
        columnas: ['Concepto', 'Idea'],
        filas: [
          ['SID', '(Na+K+Ca+Mg) − (Cl+lactato)'],
          ['SID baja', 'acidosis (p. ej. hiperclorémica)'],
          ['SID alta', 'alcalosis'],
          ['Ácidos débiles', 'albúmina y fosfato'],
          ['Uso', 'complementa al abordaje tradicional'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Indicaciones de diálisis',
      table: {
        columnas: ['Indicación', 'Ejemplos'],
        filas: [
          ['Acidosis grave', 'refractaria al tratamiento'],
          ['Tóxicos dializables', 'metanol · etilenglicol · salicilatos · litio · metformina'],
          ['LRA', 'acidosis / hiperpotasemia / sobrecarga'],
          ['Uremia', 'sintomática'],
        ],
      },
    },
  ],

  // 8 — CLINICAL CASE
  caso: {
    titulo: 'Acidemia mixta en shock séptico con hipercloremia y LRA',
    contexto:
      'Varón de 48 años con shock séptico, lesión renal aguda e hipercloremia tras la reanimación, con acidemia que empeora en ventilación mecánica. Formula tu conducta antes de revelar el análisis experto.',
    fases: [
      {
        titulo: 'Fase 1 — Interpretación inicial',
        vineta:
          'Intubado y en ventilación mecánica tras reanimación con salino. Se obtiene una gasometría arterial.',
        datos: [
          { k: 'pH', v: '7,18' },
          { k: 'PaCO₂', v: '30 mmHg' },
          { k: 'HCO₃⁻', v: '11 mmol/L' },
          { k: 'Na⁺', v: '140' },
          { k: 'Cl⁻', v: '115' },
          { k: 'Lactato', v: '4,2 mmol/L' },
          { k: 'Albúmina', v: '2,0 g/dL' },
        ],
        pregunta: '¿Cuál es el trastorno primario y la compensación esperada?',
        pista: 'Sigue los pasos: pH → primario → Winter.',
        analisis: [
          'Acidemia (pH 7,18) con HCO₃ bajo → acidosis metabólica primaria.',
          'Winter: PaCO₂ esperada = 1,5·11 + 8 = 24,5 (±2) ≈ 22–27; la PaCO₂ medida es 30 → mayor de lo esperado.',
          'Por qué importa: una PaCO₂ más alta que la esperada indica una acidosis respiratoria añadida (compensación insuficiente), probablemente por la programación del ventilador.',
        ],
        aprendizaje: 'No etiquetes solo el pH: el trastorno primario es metabólico, pero la compensación insuficiente ya delata un componente respiratorio.',
      },
      {
        titulo: 'Fase 2 — Brecha aniónica',
        vineta: 'Analizas la brecha aniónica teniendo en cuenta la hipoalbuminemia.',
        datos: [
          { k: 'AG medida', v: '14' },
          { k: 'Albúmina', v: '2,0 g/dL' },
          { k: 'Cl⁻', v: '115' },
          { k: 'Lactato', v: '4,2' },
        ],
        pregunta: '¿Hay acidosis con brecha, sin brecha, o ambas?',
        pista: 'Corrige la brecha por la albúmina antes de decidir.',
        analisis: [
          'AG corregida = 14 + 2,5·(4 − 2,0) = 19 → brecha claramente elevada (la albúmina baja la enmascaraba).',
          'La hipercloremia (Cl 115) apunta además a una acidosis sin brecha (hiperclorémica) por el salino.',
          'Coexisten HAGMA (lactato) y acidosis sin brecha (hiperclorémica): trastorno metabólico mixto.',
        ],
        aprendizaje: 'Corregir por albúmina desenmascara una HAGMA; el cloro alto añade una acidosis sin brecha.',
      },
      {
        titulo: 'Fase 3 — Delta-delta y ventilador',
        vineta: 'Calculas el delta-delta y revisas la ventilación.',
        datos: [
          { k: 'AG corregida', v: '19' },
          { k: 'HCO₃⁻', v: '11' },
          { k: 'Δ-Δ', v: '≈0,6' },
          { k: 'Vt', v: '6 mL/kg · FR 20' },
        ],
        pregunta: '¿Qué te dice el delta-delta y cómo ajustas el ventilador?',
        pista: 'Un Δ-Δ <1 con HAGMA sugiere una acidosis sin brecha concurrente.',
        analisis: [
          'Δ-Δ = (19 − 12)/(24 − 11) ≈ 0,6 → confirma HAGMA + acidosis sin brecha concurrentes.',
          'Ventilador: la PaCO₂ 30 no basta para compensar; aumentar la ventilación minuto (subir FR con cautela) puede ayudar, pero sin romper la protección (Vt 6, meseta ≤30).',
          'Prioriza tratar la causa (perfusión/shock y carga de cloro), no solo bajar la PaCO₂.',
        ],
        aprendizaje: 'El delta-delta confirma el trastorno mixto; en VM, la PaCO₂ es un ajuste, pero la protección pulmonar manda.',
      },
      {
        titulo: 'Fase 4 — ¿Bicarbonato o TRR?',
        vineta:
          'La acidemia persiste (pH 7,15) pese a la reanimación; la LRA progresa con oliguria e hiperpotasemia leve.',
        datos: [
          { k: 'pH', v: '7,15' },
          { k: 'HCO₃⁻', v: '10' },
          { k: 'K⁺', v: '5,8' },
          { k: 'Diuresis', v: 'oligúrica' },
        ],
        pregunta: '¿Bicarbonato o terapia de reemplazo renal?',
        pista: 'Piensa en BICAR-ICU (subgrupo con LRA) y en las indicaciones de TRR.',
        analisis: [
          'Bicarbonato: no corrige la causa y en acidosis láctica con shock aporta poco; en BICAR-ICU solo hubo señal en el subgrupo con LRA.',
          'Aquí, la LRA con acidosis refractaria e hiperpotasemia orienta a TRR como tratamiento definitivo del componente renal.',
          'El bicarbonato puede ser un puente si el pH es muy bajo, pero la prioridad es la causa (shock) y la TRR por la LRA.',
        ],
        aprendizaje: 'En acidemia con LRA refractaria, la TRR trata la causa; el bicarbonato es, como mucho, un puente.',
      },
      {
        titulo: 'Fase 5 — Reconocer el trastorno mixto tras tratar',
        vineta:
          'Tras iniciar TRR y controlar el foco, el pH sube a 7,48 con HCO₃ 30 y persiste una PaCO₂ baja.',
        datos: [
          { k: 'pH', v: '7,48' },
          { k: 'PaCO₂', v: '30' },
          { k: 'HCO₃⁻', v: '30' },
          { k: 'Cl⁻', v: '100' },
        ],
        pregunta: '¿Qué trastorno domina ahora y por qué?',
        pista: 'HCO₃ alto + PaCO₂ baja con pH alcalémico: ¿qué se ha “destapado”?',
        analisis: [
          'Ahora hay alcalemia con HCO₃ alto (30) → alcalosis metabólica (por la reposición de bicarbonato de la TRR y la corrección del cloro).',
          'La PaCO₂ baja (30) que antes compensaba la acidosis ahora suma una alcalosis respiratoria (a menudo iatrogénica por el ventilador o la sepsis).',
          'Trastorno mixto post-tratamiento: reajustar el ventilador (permitir subir la PaCO₂) y no seguir alcalinizando.',
        ],
        aprendizaje: 'Los trastornos se “destapan” al tratar: reevalúa la gasometría completa y evita crear una alcalemia iatrogénica.',
      },
    ],
  },

  // 9 — FURTHER READING
  furtherReading: [
    { titulo: 'Internet Book of Critical Care — Acid-base', fuente: 'IBCC · EMCrit', url: 'https://emcrit.org/ibcc/' },
    { titulo: 'Rules of engagement (compensación) — Adrogué & Madias', fuente: 'J Am Soc Nephrol 2010', url: 'https://jasn.asnjournals.org/' },
    { titulo: 'EXTRIP — recomendaciones de depuración extracorpórea', fuente: 'EXTRIP workgroup', url: 'https://www.extrip-workgroup.org/' },
  ],

  // 🧠 ICU REASONING
  reasoning: {
    worries:
      'Una acidemia grave y no haber identificado aún todos los trastornos: un pH “casi normal” puede esconder dos procesos opuestos.',
    kills:
      'La causa no tratada (shock/lactato, tóxico, hiperpotasemia con LRA) y la sobrecorrección iatrogénica (bicarbonato o ventilador).',
    changes:
      'La brecha aniónica corregida por albúmina, el delta-delta, la compensación esperada (Winter/reglas) y la brecha osmolar.',
    trap:
      'Etiquetar solo el pH, no corregir la brecha por la albúmina y tratar el número (lactato/PaCO₂) en vez de la causa.',
    reassess:
      'La gasometría completa tras cada intervención, la ventilación minuto en VM, el potasio y el cloro, y el aclaramiento de lactato.',
  },
}

export default acidobase
