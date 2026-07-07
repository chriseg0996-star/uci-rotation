// Módulo Clínico 4 — Retiro de la ventilación mecánica (referencia de bolsillo de UCI).
// Estructura de decisión al pie de cama. Español clínico, nivel intensivista senior.
// Estilo AMBOSS + EMCrit + ATS/ACCP + ESICM. Sin ensayos, sin quizzes.

const retiro = {
  dia: 4,
  slug: 'retiro-ventilacion',
  titulo: 'Retiro de la ventilación mecánica',
  subtitulo: 'Disposición, prueba de ventilación espontánea, decisión de extubar y soporte post-extubación.',

  // 1 — OVERVIEW
  overview: {
    porque:
      'Liberar de la ventilación mecánica a tiempo reduce neumonía, delirium, debilidad y mortalidad; hacerlo tarde o de forma precipitada también daña. El retiro es una decisión diaria y estructurada, no un evento único.',
    conceptos: [
      'Superar una SBT no es lo mismo que estar listo para extubar: falta valorar la vía aérea.',
      'El fracaso de extubación suele ser fallo de vía aérea, secreciones, corazón o neurológico.',
      'No extubes a quien no protege la vía aérea (conciencia, tos, secreciones).',
      'El alto riesgo necesita soporte planificado (HFNC/VNI profilácticos), no soporte de rescate.',
      'El retraso en reintubar tras un fracaso claro aumenta la mortalidad.',
    ],
    acciones: [
      'Interrupción diaria de la sedación (despertar) + tamizaje de disposición.',
      'Confirmar oxigenación (FiO₂ ≤0,4–0,5 · PEEP ≤5–8) y hemodinamia estable.',
      'Elegir SBT: presión de soporte baja o pieza en T, 30–120 min.',
      'Antes de extubar: conciencia, tos, secreciones y prueba de fuga si procede.',
      'Planificar el soporte post-extubación según el riesgo.',
    ],
    bundleTitulo: 'Tamizaje de disposición diaria',
    bundle: [
      'Causa de la insuficiencia respiratoria en resolución',
      'FiO₂ ≤0,4–0,5 · PEEP ≤5–8 · P/F >150',
      'SpO₂ ≥90% · pH aceptable',
      'Hemodinamia estable (vasopresor mínimo o nulo)',
      'Despierto y obedece órdenes',
      'Tos y secreciones manejables',
    ],
    redFlags: [
      'Taquipnea creciente y trabajo respiratorio en la SBT.',
      'Tos débil o secreciones abundantes.',
      'Bajo nivel de conciencia / no obedece.',
      'Prueba de fuga negativa (riesgo de edema laríngeo).',
      'Edema pulmonar de destete (fallo cardíaco al liberar).',
      'Desaturación, taquicardia o hipertensión durante la SBT.',
    ],
    reevaluar: [
      'Trabajo respiratorio, FR, Vt y SpO₂ tras extubar.',
      'Estridor / signos de obstrucción de vía aérea alta.',
      'Manejo de secreciones y eficacia de la tos.',
      'Hemodinamia y signos de fallo cardíaco.',
      'Gasometría a 30–60 min si dudas.',
      'Umbral bajo para reintubar ante fracaso claro.',
    ],
  },

  // 2 — QUICK CARDS
  quickCards: [
    {
      titulo: 'Oxigenación para SBT',
      icon: 'target',
      tono: 'steel',
      filas: [
        { k: 'FiO₂', v: '≤0,4–0,5' },
        { k: 'PEEP', v: '≤5–8 cmH₂O' },
        { k: 'P/F', v: '>150–200' },
      ],
    },
    {
      titulo: 'SpO₂ / PaO₂',
      icon: 'target',
      tono: 'mint',
      filas: [
        { k: 'SpO₂', v: '≥90–92%', tono: 'mint' },
        { k: 'PaO₂', v: '≥60 mmHg' },
      ],
    },
    {
      titulo: 'Hemodinamia',
      icon: 'pulse',
      tono: 'steel',
      filas: [
        { k: 'Estado', v: 'estable' },
        { k: 'Vasopresor', v: 'mínimo o nulo' },
        { k: 'Noradrenalina', v: '≤0,1 µg/kg/min' },
      ],
    },
    {
      titulo: 'Neurológico',
      icon: 'brain',
      tono: 'steel',
      filas: [
        { k: 'Conciencia', v: 'despierto' },
        { k: 'Órdenes', v: 'obedece' },
        { k: 'RASS', v: '−1 a 0' },
      ],
    },
    {
      titulo: 'Vía aérea',
      icon: 'stethoscope',
      tono: 'terra',
      filas: [
        { k: 'Tos', v: 'eficaz' },
        { k: 'Secreciones', v: 'escasas' },
        { k: 'Aspiración', v: '> cada 2 h', tono: 'terra' },
      ],
    },
    {
      titulo: 'RSBI',
      icon: 'sliders',
      tono: 'pearl',
      filas: [
        { k: 'Favorable', v: '<105', tono: 'mint' },
        { k: 'Desfavorable', v: '≥105', tono: 'terra' },
        { k: 'Fórmula', v: 'FR / Vt(L)' },
      ],
    },
    {
      titulo: 'NIF / MIP',
      icon: 'pulse',
      tono: 'pearl',
      filas: [
        { k: 'Favorable', v: '≤ −25 a −30' },
        { k: 'Débil', v: '> −20', tono: 'terra' },
      ],
    },
    {
      titulo: 'Capacidad vital · P0.1',
      icon: 'waveform',
      tono: 'steel',
      filas: [
        { k: 'CV', v: '>10 mL/kg' },
        { k: 'P0.1', v: '<3,5–4 cmH₂O' },
      ],
    },
    {
      titulo: 'Prueba de fuga',
      icon: 'sliders',
      tono: 'terra',
      filas: [
        { k: 'Adecuada', v: '>110 mL o >10–15%', tono: 'mint' },
        { k: 'Riesgo estridor', v: '<110 mL', tono: 'terra' },
      ],
    },
    {
      titulo: 'SBT',
      icon: 'clock',
      tono: 'steel',
      filas: [
        { k: 'Duración', v: '30–120 min' },
        { k: 'Modo', v: 'PS baja o pieza en T' },
      ],
    },
    {
      titulo: 'Ventana de fracaso',
      icon: 'clock',
      tono: 'terra',
      filas: [
        { k: 'Vigilar', v: '48–72 h' },
        { k: 'Reintubar', v: 'sin demora', tono: 'terra' },
      ],
    },
    {
      titulo: 'Alto riesgo',
      icon: 'alert',
      tono: 'terra',
      filas: [
        { k: 'Criterios', v: '>65 · cardio/resp' },
        { k: 'VM', v: '>7 días' },
        { k: 'Otros', v: 'tos débil · secreciones' },
      ],
    },
    {
      titulo: 'Soporte post-extubación',
      icon: 'layers',
      tono: 'steel',
      filas: [
        { k: 'Bajo riesgo', v: 'O₂ / HFNC' },
        { k: 'Alto riesgo', v: 'HFNC ± VNI' },
        { k: 'Hipercápnico/EPOC', v: 'VNI profiláctica' },
      ],
    },
  ],

  // 3 — FIGURAS & ALGORITMOS
  figuras: [
    {
      id: 'algo-screening',
      tipo: 'algorithm',
      titulo: 'Tamizaje diario de liberación',
      caption: 'Cada día: causa en resolución, oxigenación, hemodinamia y neurológico; si cumple, SBT.',
      fuente: 'Adaptado de ATS/ACCP 2017',
      flow: [
        { kind: 'start', text: 'Paciente en VM · tamizaje diario' },
        { kind: 'action', text: 'Causa de la IR en resolución' },
        { kind: 'action', text: 'FiO₂ ≤0,4–0,5 · PEEP ≤5–8 · SpO₂ ≥90%' },
        { kind: 'action', text: 'Hemodinamia estable · despierto y obedece' },
        {
          kind: 'decision',
          text: '¿Cumple criterios?',
          branches: [
            { label: 'No', kind: 'end', text: 'Optimizar; interrupción diaria de sedación; reevaluar' },
            { label: 'Sí', kind: 'action', text: 'Prueba de ventilación espontánea (SBT)' },
          ],
        },
      ],
    },
    {
      id: 'tab-readiness',
      tipo: 'table',
      titulo: 'Criterios de disposición para la SBT',
      caption: 'Requisitos por dominio antes de iniciar la prueba de ventilación espontánea.',
      fuente: 'ATS/ACCP 2017',
      table: {
        columnas: ['Dominio', 'Criterio'],
        filas: [
          ['Causa', 'Insuficiencia respiratoria en resolución'],
          ['Oxigenación', 'FiO₂ ≤0,4–0,5 · PEEP ≤5–8 · P/F >150'],
          ['SpO₂ / pH', '≥90% · pH aceptable'],
          ['Hemodinamia', 'Estable · vasopresor mínimo o nulo'],
          ['Neurológico', 'Despierto · obedece órdenes'],
          ['Vía aérea', 'Tos eficaz · secreciones manejables'],
        ],
      },
    },
    {
      id: 'algo-sbt',
      tipo: 'algorithm',
      titulo: 'Prueba de ventilación espontánea (SBT)',
      caption: 'PS baja o pieza en T, 30–120 min; vigila tolerancia; superarla habilita valorar la extubación.',
      fuente: 'Adaptado de Esteban / ATS-ACCP',
      flow: [
        { kind: 'start', text: 'SBT indicada' },
        { kind: 'action', text: 'PS baja (5–8) o pieza en T · 30–120 min' },
        { kind: 'action', text: 'Vigilar FR, Vt, RSBI, SpO₂, FC, PA, trabajo, confort' },
        {
          kind: 'decision',
          text: '¿Tolera la SBT?',
          branches: [
            { label: 'Sí', kind: 'action', text: 'Evaluar extubación (vía aérea, tos, secreciones, neuro)' },
            { label: 'No', kind: 'warn', text: 'Fracaso de SBT → volver a soporte de reposo' },
          ],
        },
      ],
    },
    {
      id: 'algo-sbt-fail',
      tipo: 'algorithm',
      titulo: 'Fracaso de la SBT',
      caption: 'Descansa el diafragma, busca la causa (con frecuencia cardíaca) y reintenta a diario.',
      fuente: 'Adaptado de ATS/ACCP',
      flow: [
        { kind: 'start', text: 'Fracaso de SBT' },
        { kind: 'action', text: 'Reposo 24 h en modo confortable' },
        { kind: 'action', text: 'Buscar causa: carga/capacidad, corazón, secreciones, delirium, metabólico' },
        {
          kind: 'decision',
          text: '¿Edema pulmonar de destete (cardíaco)?',
          branches: [
            { label: 'Sí', kind: 'warn', text: 'Optimización cardíaca / diuréticos · ECO / BNP' },
            { label: 'No', kind: 'action', text: 'Corregir fuerza, secreciones, sedación, nutrición' },
          ],
        },
        { kind: 'end', text: 'Reintentar SBT diariamente' },
      ],
    },
    {
      id: 'algo-extubacion',
      tipo: 'algorithm',
      titulo: 'Decisión de extubación',
      caption: 'Superar la SBT no basta: valora conciencia, tos, secreciones y la fuga del cuff.',
      fuente: 'Adaptado de ATS/ACCP',
      flow: [
        { kind: 'start', text: 'SBT superada' },
        { kind: 'action', text: 'Conciencia: despierto, obedece' },
        { kind: 'action', text: 'Tos eficaz y manejo de secreciones' },
        { kind: 'action', text: 'Prueba de fuga si riesgo de edema laríngeo' },
        {
          kind: 'decision',
          text: '¿Protege la vía aérea?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Extubar; planificar soporte según riesgo' },
            { label: 'No', kind: 'warn', text: 'No extubar; optimizar; valorar traqueostomía si prolongado' },
          ],
        },
      ],
    },
    {
      id: 'algo-postext',
      tipo: 'algorithm',
      titulo: 'Soporte post-extubación',
      caption: 'El soporte profiláctico se planifica antes; la VNI de rescate en fracaso establecido retrasa la reintubación.',
      fuente: 'Adaptado de HIGH-WEAN / Hernández',
      flow: [
        { kind: 'start', text: 'Extubación' },
        {
          kind: 'decision',
          text: '¿Alto riesgo o hipercápnico?',
          branches: [
            { label: 'No', kind: 'action', text: 'O₂ convencional o HFNC' },
            { label: 'Sí', kind: 'warn', text: 'HFNC ± VNI profiláctica planificada' },
          ],
        },
        { kind: 'action', text: 'Vigilar 48–72 h' },
        {
          kind: 'decision',
          text: '¿Fracaso establecido?',
          branches: [
            { label: 'No', kind: 'end', text: 'Desescalar soporte' },
            { label: 'Sí', kind: 'warn', text: 'Reintubar sin demora (no VNI de rescate)' },
          ],
        },
      ],
    },
    {
      id: 'algo-altoriesgo',
      tipo: 'algorithm',
      titulo: 'Extubación de alto riesgo',
      caption: 'Optimiza antes, aplica soporte profiláctico planificado y vigila estrechamente.',
      fuente: 'Adaptado de HIGH-WEAN',
      flow: [
        { kind: 'start', text: 'Alto riesgo (>65, cardio/resp, VM >7 d, tos débil)' },
        { kind: 'action', text: 'Optimizar: fuerza, secreciones, cardíaco, fuga de cuff' },
        { kind: 'action', text: 'HFNC + VNI alternante profilácticas' },
        {
          kind: 'decision',
          text: '¿Signos de fracaso?',
          branches: [
            { label: 'No', kind: 'end', text: 'Continuar y desescalar' },
            { label: 'Sí', kind: 'warn', text: 'Reintubar sin demora' },
          ],
        },
      ],
    },
    {
      id: 'algo-viaaerea',
      tipo: 'algorithm',
      titulo: 'Protección de la vía aérea',
      caption: 'Conciencia, fuerza de la tos y carga de secreciones deciden si la vía aérea es protegible.',
      fuente: 'Adaptado de ATS/ACCP',
      flow: [
        { kind: 'start', text: '¿Protege la vía aérea?' },
        { kind: 'action', text: 'Nivel de conciencia (obedece órdenes)' },
        { kind: 'action', text: 'Fuerza de la tos (pico flujo de tos / prueba de la tarjeta)' },
        { kind: 'action', text: 'Carga de secreciones (frecuencia de aspiración)' },
        {
          kind: 'decision',
          text: '¿Tos eficaz + secreciones manejables + despierto?',
          branches: [
            { label: 'Sí', kind: 'end', text: 'Vía aérea protegible → extubable' },
            { label: 'No', kind: 'warn', text: 'Riesgo por vía aérea → no extubar' },
          ],
        },
      ],
    },
    {
      id: 'fig-cuffleak',
      tipo: 'svg',
      diagram: 'cuff-leak',
      titulo: 'Prueba de fuga del cuff',
      caption: 'Con el cuff desinflado, poca fuga (<110 mL o <10–15%) sugiere edema laríngeo y riesgo de estridor.',
      fuente: 'Esquema',
    },
    {
      id: 'fig-diafragma',
      tipo: 'svg',
      diagram: 'diaphragm-us',
      titulo: 'Ecografía diafragmática',
      caption: 'Excursión >10–12 mm y fracción de engrosamiento >30–36% predicen éxito del destete.',
      fuente: 'Esquema',
    },
    {
      id: 'tab-indices',
      tipo: 'table',
      titulo: 'RSBI / NIF / P0.1 — interpretación',
      caption: 'Índices de destete y sus umbrales; ninguno debe usarse de forma aislada.',
      fuente: 'Literatura de destete',
      table: {
        columnas: ['Índice', 'Favorable', 'Desfavorable'],
        filas: [
          ['RSBI (FR/Vt L)', '<105', '≥105'],
          ['NIF / MIP', '≤ −25 a −30', '> −20'],
          ['P0.1', '<3,5–4', '>4'],
          ['Capacidad vital', '>10 mL/kg', '<10 mL/kg'],
        ],
        tonos: ['steel', 'steel', 'steel', 'steel'],
      },
    },
    {
      id: 'algo-traqueo',
      tipo: 'algorithm',
      titulo: 'Consideración de traqueostomía',
      caption: 'Reevalúa a diario; considera la traqueostomía en el destete prolongado, con el momento individualizado.',
      fuente: 'Adaptado de ATS / WIND',
      flow: [
        { kind: 'start', text: 'VM prolongada / destete difícil' },
        { kind: 'action', text: 'Reevaluar a diario la causa del destete difícil' },
        {
          kind: 'decision',
          text: '¿Destete prolongado (≥3 fracasos o >7 d tras el 1er SBT)?',
          branches: [
            { label: 'No', kind: 'action', text: 'Continuar intentos diarios de SBT' },
            { label: 'Sí', kind: 'warn', text: 'Considerar traqueostomía (confort, sedación, higiene bronquial)' },
          ],
        },
        { kind: 'end', text: 'Individualizar el momento; la muy precoz no aporta beneficio claro' },
      ],
    },
  ],

  // 4 — HIGH-YIELD
  highYield: [
    'Superar una SBT no es lo mismo que estar listo para extubar: falta la vía aérea.',
    'El fracaso de extubación suele ser vía aérea, secreciones, corazón o neurológico.',
    'No extubes a quien no protege la vía aérea, por buena que sea la mecánica.',
    'El alto riesgo necesita soporte planificado, no soporte de rescate.',
    'El retraso en reintubar tras un fracaso claro aumenta la mortalidad.',
    'El RSBI ayuda, pero no debe ser el único criterio de la decisión.',
    'Piensa en el edema pulmonar de destete: el corazón también falla al liberar.',
    'La VNI previene el fracaso en el hipercápnico/EPOC, pero no rescata el fracaso establecido.',
    'La prueba de fuga negativa avisa de edema laríngeo antes del estridor.',
    'La traqueostomía se decide con reevaluación diaria, no tras semanas de inercia.',
  ],

  // 5 — PITFALLS
  pitfalls: [
    'Equiparar parámetros bajos del ventilador con disposición para extubar.',
    'Ignorar la carga de secreciones.',
    'Ignorar la fuerza de la tos.',
    'Extubar bajo sedación profunda.',
    'No valorar el riesgo de edema laríngeo (prueba de fuga).',
    'Usar el RSBI como único criterio.',
    'Retrasar la reintubación tras un fracaso claro.',
    'Usar VNI de rescate en el fracaso post-extubación ya establecido.',
    'Olvidar el fracaso cardíaco del destete.',
    'Plantear la traqueostomía solo tras un fracaso prolongado, sin reevaluación diaria.',
  ],

  // 6 — EVIDENCE
  evidence: [
    {
      org: 'ATS/ACCP',
      titulo: 'Liberation from Mechanical Ventilation in Critically Ill Adults — Clinical Practice Guideline',
      revista: 'Am J Respir Crit Care Med / Chest',
      anio: 2017,
      doi: '10.1164/rccm.201610-2075ST',
      pubmed: '27762595',
      nivel: 'Guía',
      porque: 'Guía de referencia del retiro de la VM.',
      recomendacion: 'SBT con presión de soporte, protocolos de destete, interrupción de sedación y VNI/soporte en alto riesgo.',
      cambio: 'Estandarizó el tamizaje diario y la SBT como pilares de la liberación.',
      url: 'https://www.thoracic.org/statements/',
    },
    {
      titulo: 'Epidemiology of Weaning Outcome according to a New Definition (WIND)',
      revista: 'Am J Respir Crit Care Med',
      anio: 2017,
      doi: '10.1164/rccm.201602-0320OC',
      pubmed: '27626706',
      nivel: 'Revisión',
      porque: 'Redefinió las categorías de destete en la práctica real.',
      recomendacion: 'Clasificó el destete en simple, difícil y prolongado, con distinto pronóstico.',
      cambio: 'Dio un lenguaje común y pronóstico al proceso de destete.',
    },
    {
      titulo: 'Effect of Spontaneous Breathing Trial Duration on Outcome of Attempts to Discontinue MV (Esteban)',
      revista: 'Am J Respir Crit Care Med',
      anio: 1999,
      doi: '10.1164/ajrccm.159.2.9803106',
      pubmed: '9927366',
      nivel: 'ECA',
      porque: 'Definió la duración de la SBT.',
      recomendacion: 'Una SBT de 30 min fue equivalente a 120 min.',
      cambio: 'Consolidó la SBT breve (30–120 min) como estándar.',
    },
    {
      titulo: 'Noninvasive Ventilation after Extubation in Hypercapnic Patients (Ferrer)',
      revista: 'Lancet',
      anio: 2009,
      doi: '10.1016/S0140-6736(09)61038-2',
      pubmed: '19716964',
      nivel: 'ECA',
      porque: 'VNI profiláctica en pacientes hipercápnicos/EPOC de riesgo.',
      recomendacion: 'La VNI precoz tras extubar redujo la insuficiencia respiratoria y la mortalidad en hipercápnicos.',
      cambio: 'Estableció la VNI profiláctica en el hipercápnico de riesgo (no como rescate).',
    },
    {
      titulo: 'High-Flow Nasal Oxygen With NIV vs HFNC Alone in High-Risk Extubation (HIGH-WEAN)',
      revista: 'JAMA',
      anio: 2019,
      doi: '10.1001/jama.2019.14901',
      pubmed: '31577036',
      nivel: 'ECA',
      porque: 'Soporte profiláctico en extubación de alto riesgo.',
      recomendacion: 'HFNC + VNI alternante redujo la reintubación frente a HFNC solo.',
      cambio: 'Apoyó la combinación HFNC + VNI en el alto riesgo.',
    },
    {
      titulo: 'High-Flow Oxygen through Nasal Cannula in Acute Hypoxemic Respiratory Failure (FLORALI)',
      revista: 'N Engl J Med',
      anio: 2015,
      doi: '10.1056/NEJMoa1503326',
      pubmed: '25981908',
      nivel: 'ECA',
      porque: 'Base de evidencia del HFNC en insuficiencia hipoxémica.',
      recomendacion: 'HFNC mejoró desenlaces frente a O₂ estándar y VNI en hipoxémicos.',
      cambio: 'Situó al HFNC como opción de primera línea en la hipoxemia.',
    },
    {
      titulo: 'Postextubation High-Flow Nasal Cannula vs Conventional Oxygen in Low-Risk Patients (Hernández)',
      revista: 'JAMA',
      anio: 2016,
      doi: '10.1001/jama.2016.2711',
      pubmed: '26975498',
      nivel: 'ECA',
      porque: 'HFNC específicamente tras la extubación.',
      recomendacion: 'El HFNC redujo la reintubación frente al O₂ convencional en bajo riesgo.',
      cambio: 'Extendió el uso del HFNC al periodo post-extubación.',
    },
    {
      titulo: 'Risk Factors for and Prediction of Extubation Failure in ICU Patients (Thille)',
      revista: 'Crit Care Med',
      anio: 2015,
      doi: '10.1097/CCM.0000000000000748',
      pubmed: '25479115',
      nivel: 'Revisión',
      porque: 'Caracterizó a los pacientes de alto riesgo de fracaso.',
      recomendacion: 'Edad, cardiopatía, enfermedad respiratoria y VM prolongada predicen el fracaso.',
      cambio: 'Definió la población que se beneficia de soporte profiláctico.',
    },
    {
      titulo: 'Cuff-Leak Test for the Diagnosis of Upper Airway Obstruction in Adults (meta-análisis)',
      revista: 'Intensive Care Med',
      anio: 2009,
      doi: '10.1007/s00134-009-1501-9',
      pubmed: '19399474',
      nivel: 'Revisión',
      porque: 'Evaluó el rendimiento de la prueba de fuga.',
      recomendacion: 'Una fuga baja identifica riesgo de estridor, con especificidad razonable.',
      cambio: 'Justificó la prueba de fuga en pacientes de riesgo de edema laríngeo.',
    },
    {
      titulo: 'Diaphragm and Lung Ultrasound to Predict Weaning Outcome (meta-análisis)',
      revista: 'Chest',
      anio: 2017,
      doi: '10.1016/j.chest.2017.08.028',
      pubmed: '28864053',
      nivel: 'Revisión',
      porque: 'Sintetizó el valor de la ecografía diafragmática.',
      recomendacion: 'La excursión y la fracción de engrosamiento predicen el resultado del destete.',
      cambio: 'Añadió la ecografía diafragmática al arsenal de predicción del destete.',
    },
  ],

  // 7 — CLINICAL TOOLS
  tools: [
    { tipo: 'calc', calc: 'rsbi', titulo: 'Índice de respiración rápida y superficial (RSBI)' },
    { tipo: 'calc', calc: 'nif', titulo: 'NIF / MIP — interpretación' },
    { tipo: 'calc', calc: 'vitalcapacity', titulo: 'Capacidad vital (mL/kg)' },
    { tipo: 'calc', calc: 'p01', titulo: 'P0.1 — interpretación' },
    { tipo: 'calc', calc: 'cuffleak', titulo: 'Fuga del cuff (%)' },
    { tipo: 'calc', calc: 'pfratio', titulo: 'PaO₂/FiO₂' },
    { tipo: 'calc', calc: 'highriskextub', titulo: 'Riesgo de fracaso de extubación' },
    {
      tipo: 'table',
      titulo: 'Disposición para la SBT (checklist)',
      table: {
        columnas: ['Dominio', 'Criterio'],
        filas: [
          ['Causa', 'IR en resolución'],
          ['Oxigenación', 'FiO₂ ≤0,4–0,5 · PEEP ≤5–8 · P/F >150'],
          ['Hemodinamia', 'Estable · vasopresor mínimo'],
          ['Neurológico', 'Despierto · obedece'],
          ['Vía aérea', 'Tos eficaz · secreciones manejables'],
        ],
      },
    },
    {
      tipo: 'table',
      titulo: 'Selección de soporte post-extubación',
      table: {
        columnas: ['Escenario', 'Soporte'],
        filas: [
          ['Bajo riesgo', 'O₂ convencional o HFNC'],
          ['Alto riesgo', 'HFNC ± VNI profiláctica'],
          ['Hipercápnico / EPOC', 'VNI profiláctica'],
          ['Fracaso establecido', 'Reintubar (no VNI de rescate)'],
        ],
        tonos: ['mint', 'pearl', 'steel', 'terra'],
      },
    },
    {
      tipo: 'table',
      titulo: 'Consideración de traqueostomía',
      table: {
        columnas: ['Factor', 'Consideración'],
        filas: [
          ['Destete prolongado', '≥3 fracasos o >7 d tras el 1er SBT'],
          ['Secreciones', 'Abundantes / higiene bronquial'],
          ['Conciencia', 'Bajo nivel · protección de vía aérea'],
          ['Confort', 'Menos sedación · comunicación'],
          ['Momento', 'Individualizado; la muy precoz sin beneficio claro'],
        ],
      },
    },
  ],

  // 8 — CLINICAL CASE
  caso: {
    titulo: 'Destete tras shock séptico y neumonía',
    contexto:
      'Mujer de 64 años, en recuperación de un shock séptico por neumonía, tras 6 días de ventilación mecánica. Formula tu conducta antes de revelar el análisis experto.',
    fases: [
      {
        titulo: 'Fase 1 — Tamizaje de disposición',
        vineta:
          'Al sexto día está afebril, con la infección controlada y sin vasopresor. Despierta y obedece órdenes. Se plantea el tamizaje diario.',
        datos: [
          { k: 'FiO₂', v: '0,4' },
          { k: 'PEEP', v: '6 cmH₂O' },
          { k: 'SpO₂', v: '95%' },
          { k: 'Vasopresor', v: 'ninguno' },
          { k: 'RASS', v: '0' },
        ],
        pregunta: '¿Cumple criterios para una SBT? ¿Qué verificas?',
        pista: 'Repasa los dominios del tamizaje: causa, oxigenación, hemodinamia y neurológico.',
        analisis: [
          'Cumple: causa en resolución, FiO₂ ≤0,4/PEEP ≤8, SpO₂ ≥90%, sin vasopresor, despierta y obedece.',
          'Por qué el tamizaje diario: identifica a quién probar hoy y evita prolongar la VM innecesariamente.',
          'Asegura la interrupción de la sedación (despertar) y programa la SBT.',
        ],
        aprendizaje: 'El tamizaje diario, combinado con el despertar, es lo que acorta la ventilación mecánica.',
      },
      {
        titulo: 'Fase 2 — Elección y monitorización de la SBT',
        vineta: 'Inicias una SBT con presión de soporte de 7 cmH₂O. A los 10 minutos está cómoda.',
        datos: [
          { k: 'Modo SBT', v: 'PS 7 / PEEP 5' },
          { k: 'FR', v: '18 rpm' },
          { k: 'Vt', v: '380 mL' },
          { k: 'RSBI', v: '≈47' },
          { k: 'SpO₂', v: '96%' },
        ],
        pregunta: '¿Qué monitorizas durante la SBT y cuánto la mantienes?',
        pista: 'Piensa en los signos de intolerancia y en la duración basada en evidencia.',
        analisis: [
          'Duración 30–120 min (Esteban): 30 min suele bastar.',
          'Monitoriza FR, Vt, RSBI, SpO₂, FC, PA, trabajo respiratorio y confort.',
          'RSBI ≈47 (<105) es favorable, pero es solo un dato: la decisión es global.',
        ],
        aprendizaje: 'La SBT no es solo “aguantar”: se vigila la tolerancia con parámetros y clínica.',
      },
      {
        titulo: 'Fase 3 — SBT en el límite',
        vineta:
          'A los 25 minutos aparece taquipnea progresiva, uso de musculatura accesoria y sensación de disnea, con leve desaturación.',
        datos: [
          { k: 'FR', v: '34 rpm' },
          { k: 'Vt', v: '260 mL' },
          { k: 'RSBI', v: '≈131' },
          { k: 'SpO₂', v: '90%' },
          { k: 'Trabajo', v: 'aumentado' },
        ],
        pregunta: '¿Continúas la SBT o la detienes? ¿Qué haces después?',
        pista: 'La taquipnea con RSBI creciente y trabajo respiratorio define intolerancia.',
        analisis: [
          'Fracaso de SBT: detener y volver a un modo de reposo confortable (no reentrenar hasta el agotamiento).',
          'Buscar la causa: carga/capacidad, edema pulmonar de destete (cardíaco), secreciones, delirium, metabólico.',
          'El edema pulmonar de destete es una causa frecuente y tratable: valora ECO/BNP y optimización cardíaca.',
          'Reintentar la SBT a diario tras corregir la causa.',
        ],
        aprendizaje: 'Un fracaso de SBT es información: descansa el diafragma, encuentra la causa y reintenta mañana.',
      },
      {
        titulo: 'Fase 4 — Nueva SBT y decisión de extubar',
        vineta:
          'Al día siguiente, optimizada la volemia, supera una SBT de 30 min. Ahora valoras la extubación: está despierta, con tos moderada y secreciones que requieren aspiración cada 3–4 h.',
        datos: [
          { k: 'SBT', v: 'superada 30 min' },
          { k: 'Conciencia', v: 'despierta, obedece' },
          { k: 'Tos', v: 'moderada' },
          { k: 'Aspiración', v: 'cada 3–4 h' },
          { k: 'Fuga de cuff', v: 'presente' },
        ],
        pregunta: '¿La extubas? ¿Qué evalúas de la vía aérea?',
        pista: 'Superar la SBT no basta: conciencia, tos, secreciones y fuga del cuff.',
        analisis: [
          'Vía aérea protegible: despierta y obedece, tos presente, secreciones manejables (aspiración cada 3–4 h) y fuga de cuff presente.',
          'Por qué evaluar la vía aérea: el fracaso de extubación suele ser de vía aérea/secreciones, no de mecánica.',
          'Decisión: extubar, planificando el soporte post-extubación según el riesgo.',
        ],
        aprendizaje: 'La extubación se decide por la vía aérea tanto como por la mecánica: conciencia, tos y secreciones.',
      },
      {
        titulo: 'Fase 5 — Soporte post-extubación',
        vineta:
          'Tiene 64 años, cardiopatía y 7 días de VM, por lo que es de alto riesgo. Planificas el soporte tras extubar.',
        datos: [
          { k: 'Riesgo', v: 'alto (edad, cardio, VM 7 d)' },
          { k: 'CO₂', v: 'normocápnica' },
          { k: 'Plan', v: 'HFNC ± VNI' },
        ],
        pregunta: '¿HFNC, VNI, reintubación o traqueostomía? Justifica.',
        pista: 'El soporte del alto riesgo se planifica antes; la VNI de rescate no.',
        analisis: [
          'Alto riesgo → soporte profiláctico planificado: HFNC + VNI alternante (HIGH-WEAN) desde la extubación.',
          'En el hipercápnico/EPOC, la VNI profiláctica es preferente (Ferrer); aquí es normocápnica, así que HFNC ± VNI.',
          'Vigila 48–72 h; si hay fracaso establecido, reintuba sin demora (el retraso aumenta la mortalidad; la VNI de rescate no debe retrasarla).',
          'Si el destete se hace prolongado (≥3 fracasos), reevalúa a diario y considera traqueostomía.',
        ],
        aprendizaje: 'El alto riesgo se maneja con soporte profiláctico planificado y un umbral bajo para reintubar.',
      },
    ],
  },

  // 9 — FURTHER READING
  furtherReading: [
    { titulo: 'ATS/ACCP — Liberation from Mechanical Ventilation (guía)', fuente: 'AJRCCM / Chest 2017', url: 'https://www.thoracic.org/statements/' },
    { titulo: 'Internet Book of Critical Care — Weaning / extubation', fuente: 'IBCC · EMCrit', url: 'https://emcrit.org/ibcc/' },
    { titulo: 'Weaning from mechanical ventilation', fuente: 'Life in the Fast Lane (LITFL)', url: 'https://litfl.com/' },
  ],

  // 🧠 ICU REASONING
  reasoning: {
    worries:
      'Que superar la SBT me haga extubar sin valorar la vía aérea: conciencia, fuerza de la tos y carga de secreciones.',
    kills:
      'La obstrucción de vía aérea alta (edema laríngeo/estridor) y el fracaso post-extubación con reintubación tardía; también el edema pulmonar de destete.',
    changes:
      'La tolerancia a la SBT (FR/RSBI/trabajo), la protección de la vía aérea (tos, secreciones), la prueba de fuga y el nivel de riesgo del paciente.',
    trap:
      'Equiparar parámetros bajos del ventilador con “listo para extubar” y usar la VNI como rescate cuando el fracaso ya está establecido.',
    reassess:
      'Tras extubar: trabajo respiratorio, estridor, manejo de secreciones y hemodinamia; y mantén un umbral bajo para reintubar.',
  },
}

export default retiro
