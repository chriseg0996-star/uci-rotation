// Módulo Clínico 1 — Neuromonitoreo.
// Contenido educativo de nivel intensivista senior para residentes rotantes
// (R3 Medicina Interna, R3 Urgencias, R2 Anestesiología). Español clínico. Sin relleno.
// Usa el esquema estándar del motor educativo; id de módulo = 1 (localStorage skills:1 / quiz:1).

const neuromonitoreo = {
  dia: 1,
  titulo: 'Neuromonitoreo',
  tiempoEstimado: '90–120 min',

  // 1 — Introducción
  intro: {
    texto: [
      'El cerebro lesionado tolera muy mal las agresiones sistémicas. La mayor parte del daño neurológico en la UCI no ocurre por la lesión primaria, sino por la lesión secundaria —hipotensión, hipoxia, hipertensión intracraneal, fiebre, disnatremia— que sí es prevenible. El neuromonitoreo existe para detectar esa lesión secundaria antes de que sea irreversible.',
      'Monitorizar el cerebro es difícil porque el examen clínico, nuestra mejor herramienta, se apaga con la sedación y la intubación justo cuando el paciente está más grave. Por eso el neurointensivista combina un examen neurológico dirigido y seriado con monitores que informan de presión (PIC/PPC), oxigenación (PbtO₂), flujo (Doppler transcraneal) y actividad eléctrica (EEG).',
      'Este módulo entrena la lógica del neuromonitoreo: entender la fisiología de Monro-Kellie y la presión de perfusión, reconocer y escalar el manejo de la hipertensión intracraneal, integrar el monitoreo multimodal, usar el Doppler transcraneal para el vasoespasmo, y aplicar neuroprotección sistémica sin cegar el examen que necesitamos para vigilar al paciente.',
    ],
    claves: [
      'El objetivo del neuromonitoreo es prevenir la lesión secundaria, no solo medir números.',
      'El examen neurológico vale por su tendencia: seriado, reproducible y comparable.',
      'Ningún monitor aislado basta; el valor está en integrar presión, oxigenación, flujo y actividad.',
      'La neuroprotección es, sobre todo, evitar hipotensión, hipoxia, fiebre, disglucemia e hiponatremia.',
    ],
  },

  // 2 — Objetivos de aprendizaje (6)
  objetivos: [
    'Realizar una exploración neurológica dirigida y seriada en el paciente crítico, integrando GCS/FOUR, pupilas y reflejos de tallo.',
    'Interpretar la fisiología de la PIC y la PPC (doctrina de Monro-Kellie, autorregulación) y sus umbrales de tratamiento.',
    'Reconocer y manejar de forma escalonada la hipertensión intracraneal y los signos de herniación.',
    'Integrar el neuromonitoreo multimodal (PIC, PPC, PbtO₂, EEG, Doppler transcraneal) para detectar la lesión secundaria.',
    'Aplicar el Doppler transcraneal para detectar vasoespasmo mediante velocidades, índice de Lindegaard e índices de pulsatilidad.',
    'Ejecutar neuroprotección sistémica y titular la sedación para permitir la neuroevaluación, presentando al paciente neurocrítico por sistemas.',
  ],

  // 3 — Lecciones nucleares (10)
  lecciones: [
    {
      id: 'examen-dirigido',
      titulo: 'Exploración neurológica dirigida en UCI',
      intro:
        'En la UCI el examen neurológico es una herramienta de monitoreo: no busca un diagnóstico topográfico exhaustivo, sino detectar cambios que anticipen deterioro. Su valor está en la tendencia, no en un hallazgo aislado.',
      bloques: [
        {
          subtitulo: 'Principios',
          puntos: [
            'Examen dirigido y seriado, documentado en condiciones comparables (mismo nivel de sedación, hora, examinador si es posible).',
            'Un cambio respecto al examen previo pesa más que cualquier hallazgo puntual: la comparación es el dato.',
            'Correlaciona siempre con el contexto: sedación, bloqueo neuromuscular, temperatura y estado metabólico.',
          ],
        },
        {
          subtitulo: 'Componentes esenciales',
          puntos: [
            'Nivel de conciencia (GCS o FOUR score).',
            'Pupilas: tamaño, simetría y reactividad; reflejos de tallo.',
            'Respuesta motora, focalización y patrón respiratorio.',
          ],
        },
        {
          subtitulo: 'Trampas del entorno UCI',
          puntos: [
            'La sedación y la analgesia deprimen el examen; el bloqueo neuromuscular impide valorar el componente motor.',
            'Causas sistémicas que imitan lesión estructural: hipoglucemia, hiponatremia, uremia, hipotermia, fármacos.',
            'Descarta lo reversible y lo metabólico antes de atribuir un deterioro a la lesión intracraneal.',
          ],
        },
      ],
      clave:
        'La exploración neurológica en UCI vale por su tendencia: examina seriado, en condiciones comparables, y actúa sobre el cambio.',
    },
    {
      id: 'gcs-four',
      titulo: 'Glasgow, FOUR score y limitaciones bajo sedación',
      intro:
        'El GCS es el estándar histórico, pero pierde validez en el paciente intubado o sedado. El FOUR score se diseñó precisamente para cubrir esas limitaciones.',
      bloques: [
        {
          subtitulo: 'Escala de coma de Glasgow',
          puntos: [
            'Apertura ocular (1–4), respuesta verbal (1–5) y respuesta motora (1–6); rango total 3–15.',
            'La respuesta motora es el componente con mayor valor pronóstico.',
            'Documenta por componentes (p. ej. O3 V-T M5), no solo el total.',
          ],
        },
        {
          subtitulo: 'Limitaciones del GCS',
          puntos: [
            'El componente verbal no es evaluable en el intubado (se marca “T”), perdiendo información.',
            'Se confunde con afasia, edema periorbitario, sedación y bloqueo neuromuscular.',
            'No evalúa reflejos de tallo ni patrón respiratorio.',
          ],
        },
        {
          subtitulo: 'FOUR score y GCS-P',
          puntos: [
            'FOUR (Full Outline of UnResponsiveness): respuesta Ocular, Motora, reflejos de Tronco y Respiración, 0–4 cada uno (0–16).',
            'Evaluable en el intubado; detecta el síndrome de enclaustramiento (locked-in) por seguimiento ocular/parpadeo a la orden, y valora reflejos de tronco y patrón/ventilador.',
            'El GCS-P resta la reactividad pupilar (0–2) al GCS para afinar el pronóstico en el TBI.',
          ],
        },
      ],
      clave:
        'En el paciente intubado o sedado, el FOUR score aporta lo que el GCS no puede: reflejos de tronco, patrón respiratorio y detección del locked-in.',
    },
    {
      id: 'pupilas-tallo',
      titulo: 'Pupilas, reflejos de tallo y focalización',
      intro:
        'Las pupilas y los reflejos de tallo son la ventana no farmacológica al tronco encefálico; su deterioro sigue una progresión rostro-caudal predecible que marca el nivel y la urgencia.',
      bloques: [
        {
          subtitulo: 'Pupilas',
          puntos: [
            'Valora tamaño, simetría y reactividad; la anisocoria >1 mm con midriasis arreactiva ipsilateral sugiere herniación uncal (compresión del III par).',
            'Pupilas puntiformes reactivas: protuberancia u opioides. Midriasis bilateral fija: herniación grave, lesión mesencefálica o anoxia.',
            'La pupilometría cuantitativa (NPi <3 anormal) reduce la variabilidad entre observadores y detecta cambios precoces.',
          ],
        },
        {
          subtitulo: 'Reflejos de tallo',
          puntos: [
            'Fotomotor (II–III), corneal (V–VII), oculocefálico —“ojos de muñeca” (VIII–III/VI)— y oculovestibular/calóricos (más potente), nauseoso y tusígeno (IX–X).',
            'No realices el reflejo oculocefálico si no has descartado lesión de la columna cervical.',
          ],
        },
        {
          subtitulo: 'Focalización y progresión',
          puntos: [
            'Hemiparesia y asimetrías; postura de decorticación (flexora) frente a descerebración (extensora, peor pronóstico).',
            'La progresión rostro-caudal (diencéfalo → mesencéfalo → protuberancia → bulbo) orienta el nivel de la lesión y la urgencia.',
          ],
        },
      ],
      clave:
        'Una pupila nueva, dilatada y arreactiva es una emergencia de herniación hasta demostrar lo contrario: actúa, no esperes la TC.',
    },
    {
      id: 'pic-ppc',
      titulo: 'Presión intracraneal, PPC y fisiología básica',
      intro:
        'Comprender la doctrina de Monro-Kellie y la presión de perfusión cerebral es la base para interpretar cualquier neuromonitoreo.',
      bloques: [
        {
          subtitulo: 'Doctrina de Monro-Kellie',
          puntos: [
            'El cráneo es un compartimento rígido de volumen fijo: parénquima (~80%), LCR (~10%) y sangre (~10%).',
            'El aumento de un componente exige la salida de otro (LCR y sangre venosa); agotada la compensación, la curva presión-volumen se vuelve exponencial.',
            'En ese punto, pequeños incrementos de volumen disparan la PIC.',
          ],
        },
        {
          subtitulo: 'Valores y umbrales de PIC',
          puntos: [
            'PIC normal 7–15 mmHg; se trata la elevación sostenida por encima de 22 mmHg (Brain Trauma Foundation).',
            'La morfología de la onda (P2 > P1) indica baja distensibilidad y reserva agotada.',
          ],
        },
        {
          subtitulo: 'Presión de perfusión cerebral (PPC)',
          puntos: [
            'PPC = PAM − PIC; objetivo 60–70 mmHg.',
            'Evita PPC <50 mmHg (isquemia) y no fuerces >70 con líquidos/presores (riesgo de SDRA).',
            'Nivela el transductor de presión arterial al trago (agujero de Monro), no al corazón, o subestimarás la PPC.',
          ],
        },
        {
          subtitulo: 'Autorregulación',
          puntos: [
            'Mantiene el flujo constante entre PPC ~50–150 mmHg; en la lesión se pierde y el flujo se vuelve presión-dependiente.',
            'La reactividad de presión (PRx) permite estimar la PPC óptima individual, en lugar de un número universal.',
          ],
        },
      ],
      clave:
        'PPC = PAM − PIC; nivela el transductor al trago y busca la PPC óptima individual, no un umbral universal.',
    },
    {
      id: 'hic-manejo',
      titulo: 'Hipertensión intracraneal: reconocimiento y manejo inicial',
      intro:
        'La hipertensión intracraneal (HIC) es una emergencia tiempo-dependiente; el manejo es escalonado y simultáneo a la búsqueda de la causa.',
      bloques: [
        {
          subtitulo: 'Reconocimiento',
          puntos: [
            'Deterioro del GCS/FOUR, anisocoria o midriasis, postura anómala y PIC >22 mmHg sostenida.',
            'La tríada de Cushing (hipertensión, bradicardia, respiración irregular) es un signo tardío: no esperes a verla para actuar.',
          ],
        },
        {
          subtitulo: 'Medidas de primer nivel',
          puntos: [
            'Cabecera a 30° y cuello neutro para favorecer el drenaje venoso yugular.',
            'Normalizar la PaCO₂ (35–40 mmHg), asegurar sedación y analgesia, tratar fiebre y crisis.',
            'Drenaje de LCR por derivación ventricular externa (DVE) y osmoterapia.',
          ],
        },
        {
          subtitulo: 'Osmoterapia',
          puntos: [
            'Manitol 0,5–1 g/kg: osmótico y diurético; vigila hipovolemia, función renal y gap osmolar (osmolaridad <320).',
            'Salino hipertónico (bolo de NaCl 3% o 23,4%): útil si hipovolemia o hipotensión; vigila la natremia.',
            'Elige el agente según la volemia y el sodio del paciente.',
          ],
        },
        {
          subtitulo: 'Medidas de segundo nivel',
          puntos: [
            'Hiperventilación optimizada (PaCO₂ 30–35 mmHg como puente, guiada por PbtO₂/SjvO₂; nunca profiláctica prolongada).',
            'Barbitúricos, hipotermia terapéutica y craniectomía descompresiva (RESCUEicp/DECRA: reduce PIC y mortalidad a costa de mayor discapacidad).',
          ],
        },
      ],
      clave:
        'Escala de forma ordenada y simultánea; la hiperventilación agresiva o prolongada causa isquemia: úsala solo como puente y guiada.',
    },
    {
      id: 'multimodal',
      titulo: 'Neuromonitoreo multimodal',
      intro:
        'Ningún monitor aislado captura la complejidad del cerebro lesionado. El neuromonitoreo multimodal integra presión, oxigenación, flujo y actividad eléctrica para detectar la lesión secundaria.',
      bloques: [
        {
          subtitulo: 'PIC y PPC',
          puntos: [
            'Catéter intraparenquimatoso o ventricular (la DVE además es terapéutica por drenaje de LCR).',
            'Es la base del manejo escalonado; indicado en TBI grave con TC anormal (BTF).',
          ],
        },
        {
          subtitulo: 'Oxigenación cerebral (PbtO₂)',
          puntos: [
            'Presión tisular de oxígeno: normal >20 mmHg; hipoxia tisular <15–20 mmHg.',
            'Complementa a la PIC: detecta isquemia con PIC y PPC “normales”.',
            'Se optimiza con PPC, PaO₂, hemoglobina y sedación (BOOST-II/-3).',
          ],
        },
        {
          subtitulo: 'EEG continuo',
          puntos: [
            'Las crisis no convulsivas son frecuentes en el neurocrítico (HSA, TBI, coma inexplicado).',
            'Detecta el estado epiléptico no convulsivo y guía la supresión de brotes (burst suppression) con barbitúricos/hipotermia.',
          ],
        },
        {
          subtitulo: 'Doppler transcraneal',
          puntos: [
            'Evaluación no invasiva y seriada del flujo cerebral a pie de cama.',
            'Detección de vasoespasmo y estimación indirecta de la PIC/perfusión.',
          ],
        },
      ],
      clave:
        'El monitor correcto responde una pregunta: PIC/PPC vigilan la presión, la PbtO₂ la oxigenación, el EEG la actividad y el DTC el flujo. Intégralos, no los aísles.',
    },
    {
      id: 'doppler-transcraneal',
      titulo: 'Doppler transcraneal: ACM, IP, RI, Lindegaard',
      intro:
        'El DTC es la herramienta de cabecera para vigilar el vasoespasmo y estimar la resistencia cerebrovascular; requiere técnica y contexto para no malinterpretarlo.',
      bloques: [
        {
          subtitulo: 'Técnica y arteria cerebral media (ACM)',
          puntos: [
            'Ventana temporal, insonación de la ACM a ~50–55 mm de profundidad.',
            'Se mide la velocidad media de flujo (VMF); compara siempre de forma seriada y con el lado contralateral.',
          ],
        },
        {
          subtitulo: 'Vasoespasmo y velocidades',
          puntos: [
            'VMF de la ACM >120 cm/s sugiere vasoespasmo leve; >200 cm/s, severo.',
            'Un ascenso rápido (>50 cm/s por día) es tan relevante como el valor absoluto.',
          ],
        },
        {
          subtitulo: 'Índice de Lindegaard',
          puntos: [
            'Lindegaard = VMF ACM / VMF de la carótida interna extracraneal.',
            '>3 indica vasoespasmo; >6, vasoespasmo severo.',
            'Distingue el vasoespasmo (índice alto) de la hiperemia (velocidades altas con índice <3).',
          ],
        },
        {
          subtitulo: 'Índices de pulsatilidad y resistencia',
          puntos: [
            'IP = (velocidad sistólica − diastólica) / VMF; normal ~0,6–1,1; un IP elevado sugiere aumento de la PIC o de la resistencia distal.',
            'RI = (sistólica − diastólica) / sistólica.',
            'El flujo diastólico ausente o invertido indica paro circulatorio cerebral y apoya el diagnóstico de muerte encefálica.',
          ],
        },
      ],
      clave:
        'Velocidades altas no siempre son vasoespasmo: usa el índice de Lindegaard para separarlo de la hiperemia y valora la tendencia diaria.',
    },
    {
      id: 'sedacion-neuroeval',
      titulo: 'Sedación, analgesia y neuroevaluación seriada',
      intro:
        'En el neurocrítico la sedación es una espada de doble filo: controla la PIC y la demanda metabólica, pero enmascara el examen que necesitamos para detectar deterioro.',
      bloques: [
        {
          subtitulo: 'Principios',
          puntos: [
            'Analgesia primero (analgo-sedación); titula por objetivo (RASS, CPOT).',
            'Usa agentes de vida media corta (propofol, remifentanilo, dexmedetomidina) para permitir ventanas de neuroevaluación.',
            'Evita las benzodiacepinas por su asociación con delirium.',
          ],
        },
        {
          subtitulo: 'Ventana neurológica',
          puntos: [
            'Interrupción controlada para examinar, ponderando el riesgo de picos de PIC.',
            'En la HIC grave la ventana puede diferirse; la sedación profunda o el burst suppression se reservan para la PIC refractaria.',
          ],
        },
        {
          subtitulo: 'Consideraciones específicas',
          puntos: [
            'El propofol reduce el metabolismo y la PIC (vigila la hipotensión y el síndrome por infusión de propofol).',
            'La dexmedetomidina permite un paciente más cooperador y examinable.',
            'Evita la hipotensión inducida por la sedación, que compromete la PPC.',
          ],
        },
      ],
      clave:
        'Seda lo justo para proteger el cerebro sin cegar el examen: agentes cortos, objetivo claro y ventanas de neuroevaluación cuando la PIC lo permita.',
    },
    {
      id: 'neuroproteccion',
      titulo: 'Neuroprotección sistémica',
      intro:
        'La mayor parte del daño neurológico en la UCI es lesión secundaria prevenible; la neuroprotección consiste en optimizar el entorno sistémico del cerebro.',
      bloques: [
        {
          subtitulo: 'Oxigenación y presión',
          puntos: [
            'Evita la hipoxemia (PaO₂ >60–100 mmHg, SpO₂ ≥94%) y también la hiperoxia.',
            'Evita la hipotensión: una sola PAS <90 mmHg duplica la mortalidad en el TBI grave.',
            'Mantén la PPC objetivo.',
          ],
        },
        {
          subtitulo: 'CO₂ y temperatura',
          puntos: [
            'Normocapnia (PaCO₂ 35–40 mmHg), salvo hiperventilación puente en herniación.',
            'Trata agresivamente la fiebre —empeora el desenlace— con normotermia dirigida.',
          ],
        },
        {
          subtitulo: 'Glucosa y sodio',
          puntos: [
            'Evita la hipo y la hiperglucemia (objetivo ~140–180 mg/dL).',
            'Evita la hiponatremia porque expande el edema cerebral.',
            'Distingue el SIADH (euvolémico, se restringe agua) del síndrome perdedor de sal cerebral (hipovolémico, se repone sal y volumen).',
          ],
        },
        {
          subtitulo: 'Otros',
          puntos: [
            'Hemoglobina suficiente para la entrega de oxígeno, control de crisis y cabeza/cuello neutros.',
          ],
        },
      ],
      clave:
        'El cerebro lesionado no tolera hipotensión, hipoxia, fiebre, disglucemia ni hiponatremia: la neuroprotección es, sobre todo, evitar la lesión secundaria.',
    },
    {
      id: 'pase-neurocritico',
      titulo: 'Presentación del paciente neurocrítico en pase de visita',
      intro:
        'La presentación neurocrítica añade, a la estructura por sistemas, un examen neurológico seriado y un tablero de neuromonitoreo orientado a metas.',
      bloques: [
        {
          subtitulo: 'Encabezado y examen',
          puntos: [
            'One-liner: edad, diagnóstico neurológico y día de UCI.',
            'Examen seriado con tendencia (GCS/FOUR, pupilas/NPi, focalidad) comparado con el turno previo.',
          ],
        },
        {
          subtitulo: 'Tablero de neuromonitoreo',
          puntos: [
            'PIC/PPC (valor, tendencia y objetivo), PbtO₂, DTC (VMF de la ACM, Lindegaard) y EEG (crisis, patrón).',
            'DVE: débito, nivel de transducción y permeabilidad.',
          ],
        },
        {
          subtitulo: 'Plan por metas',
          puntos: [
            'Objetivos de PIC/PPC, sodio/osmolaridad, sedación y ventana, profilaxis de crisis, temperatura y glucosa.',
            'En HSA: nimodipino, estado del aneurisma y vigilancia de vasoespasmo/isquemia cerebral tardía (DCI).',
          ],
        },
      ],
      clave:
        'Presenta el examen neurológico como una tendencia y el neuromonitoreo como un tablero con metas; en HSA incluye siempre aneurisma, nimodipino y vigilancia de vasoespasmo.',
    },
  ],

  // 4 — ICU Pearls
  pearls: [
    'PPC = PAM − PIC; nivela el transductor de presión arterial al trago (agujero de Monro), no al corazón, o subestimarás la PPC.',
    'Una pupila nueva, dilatada y arreactiva es herniación uncal hasta demostrar lo contrario: osmoterapia y aviso a neurocirugía sin esperar la TC.',
    'La tríada de Cushing (hipertensión, bradicardia, respiración irregular) es un signo tardío de HIC; no esperes a verla para actuar.',
    'En el paciente intubado, el FOUR score informa lo que el GCS “T” oculta: reflejos de tronco y patrón respiratorio.',
    'Velocidades altas en el DTC con Lindegaard <3 son hiperemia, no vasoespasmo; el índice separa uno del otro.',
    'La hiperventilación baja la PIC vasoconstriñendo… y por eso causa isquemia: úsala solo como puente y guiada por PbtO₂/SjvO₂.',
    'La PbtO₂ puede caer con PIC y PPC “normales”: detecta isquemia tisular que la presión no ve.',
    'El nimodipino mejora el desenlace en la HSA por neuroprotección, no por revertir el vasoespasmo angiográfico; si causa hipotensión, fracciona la dosis antes de suspenderlo.',
    'La hiponatremia expande el edema cerebral; en el neurocrítico casi nunca se restringe agua a ciegas: distingue SIADH de perdedor de sal por la volemia.',
    'Una sola PAS <90 mmHg duplica la mortalidad en el TBI grave: la hipotensión es enemiga del cerebro lesionado.',
    'Las crisis no convulsivas son frecuentes y solo se ven con EEG continuo: sospéchalas ante coma o fluctuación inexplicada.',
    'En la HSA, el deterioro tardío (días 4–14) es vasoespasmo/DCI hasta descartar hidrocefalia, crisis, hiponatremia y resangrado.',
  ],

  // 5 — Errores frecuentes
  errores: [
    'Nivelar el transductor de presión arterial al corazón en lugar del trago, subestimando la PPC.',
    'Atribuir el deterioro neurológico a la sedación sin descartar herniación, hidrocefalia o crisis.',
    'Usar hiperventilación profiláctica o prolongada (PaCO₂ <30 mmHg) y provocar isquemia cerebral.',
    'Forzar la PPC por encima de 70 mmHg con líquidos y presores agresivos, causando SDRA sin beneficio neurológico.',
    'Restringir agua de forma refleja ante una hiponatremia sin evaluar la volemia (peligroso en el perdedor de sal).',
    'Interpretar velocidades altas en el DTC como vasoespasmo sin calcular el índice de Lindegaard (confundir con hiperemia).',
    'Confiar solo en la PIC e ignorar la PbtO₂, perdiendo isquemia tisular con presión normal.',
    'Suspender el nimodipino por hipotensión sin fraccionar antes la dosis.',
    'Sobresedar al paciente y perder la neuroevaluación seriada, retrasando la detección del deterioro.',
    'Permitir la fiebre, la hiperglucemia o la hipoglucemia, favoreciendo la lesión secundaria.',
    'Realizar el reflejo oculocefálico (“ojos de muñeca”) sin haber descartado lesión de la columna cervical.',
    'Retrasar el drenaje de LCR (DVE) en la hidrocefalia aguda por HSA con deterioro.',
  ],

  // 6 — Checklist de habilidades prácticas (14)
  skills: [
    {
      texto: 'Realizar y documentar un GCS por componentes y un FOUR score en un paciente intubado.',
    },
    {
      texto: 'Explorar pupilas e interpretar la pupilometría cuantitativa',
      detalle: 'Tamaño, simetría, reactividad e índice pupilar neurológico (NPi).',
    },
    {
      texto: 'Evaluar los reflejos de tallo de forma segura',
      detalle: 'Fotomotor, corneal, oculocefálico/oculovestibular, nauseoso y tusígeno.',
    },
    {
      texto: 'Reconocer signos de herniación e iniciar el manejo de emergencia de la HIC',
      detalle: 'Cabecera 30°, osmoterapia y aviso neuroquirúrgico.',
    },
    {
      texto: 'Calcular e interpretar la PPC nivelando correctamente el transductor al trago.',
    },
    { texto: 'Interpretar la curva y los umbrales de tratamiento de la PIC.' },
    {
      texto: 'Administrar osmoterapia eligiendo el agente según volemia y natremia',
      detalle: 'Manitol vs. salino hipertónico.',
    },
    {
      texto: 'Ajustar la ventilación para normocapnia y reconocer el papel y el peligro de la hiperventilación.',
    },
    {
      texto: 'Realizar un Doppler transcraneal básico de la ACM y medir la VMF',
      detalle: 'Ventana temporal, profundidad ~50–55 mm.',
    },
    { texto: 'Calcular el índice de Lindegaard y distinguir vasoespasmo de hiperemia.' },
    {
      texto: 'Titular sedación y analgesia por objetivo y ejecutar una ventana de neuroevaluación segura.',
    },
    {
      texto: 'Manejar una derivación ventricular externa (DVE)',
      detalle: 'Nivel de transducción, débito y permeabilidad.',
    },
    {
      texto: 'Aplicar un paquete de neuroprotección sistémica',
      detalle: 'Oxigenación, presión, temperatura, glucosa y sodio.',
    },
    {
      texto: 'Presentar al paciente neurocrítico en el pase con examen seriado y tablero de neuromonitoreo.',
    },
  ],

  // 7 — Caso clínico interactivo
  caso: {
    titulo: 'HSA aneurismática Fisher IV / WFNS V',
    contexto:
      'Mujer de 55 años, hipertensa y fumadora, con cefalea súbita descrita como “la peor de su vida” seguida de pérdida de conciencia. Trabajarás el caso por fases: en cada una, formula tu conducta antes de revelar el análisis experto.',
    fases: [
      {
        titulo: 'Fase 1 — Llegada y clasificación',
        vineta:
          'A su llegada está en coma, no obedece órdenes y solo localiza mínimamente al dolor. Respira con patrón irregular. La TC muestra HSA difusa con sangre gruesa en cisternas, hemorragia intraventricular e hidrocefalia incipiente.',
        datos: [
          { k: 'GCS', v: '5 (O1 V1 M3)' },
          { k: 'Pupilas', v: '3 mm, simétricas, reactivas' },
          { k: 'PA', v: '185/100 mmHg' },
          { k: 'FC', v: '58 lpm' },
          { k: 'FR', v: 'Irregular' },
          { k: 'SpO₂', v: '91% aire' },
          { k: 'TC', v: 'HSA Fisher IV + HIV + hidrocefalia' },
        ],
        pregunta: '¿Cuál es tu clasificación de gravedad y cuáles son tus prioridades inmediatas?',
        pista:
          'Piensa en WFNS y Fisher, en la vía aérea, y en por qué está en coma (¿solo el sangrado?).',
        analisis: [
          'Clasificación: WFNS V (GCS 3–6) y Fisher modificada IV (HSA gruesa con hemorragia intraventricular) → alto riesgo de vasoespasmo/DCI y mal pronóstico.',
          'Vía aérea: GCS ≤8 con patrón respiratorio irregular e hipoxemia → intubación de secuencia rápida con neuroprotección, evitando tanto la hipotensión como los picos hipertensivos.',
          'Causa reversible del coma: además del sangrado, la hidrocefalia aguda por hemorragia intraventricular es tratable → interconsulta neuroquirúrgica urgente para derivación ventricular externa (DVE), diagnóstica (mide PIC) y terapéutica (drena LCR).',
          'Presión: la hipertensión extrema aumenta el riesgo de resangrado antes de asegurar el aneurisma; controla la PA con agentes titulables (objetivo PAS <140–160) tras asegurar analgesia, evitando la hipotensión.',
        ],
        aprendizaje:
          'En la HSA grave con hidrocefalia, la DVE trata una causa reversible del coma y permite medir la PIC; asegurar la vía aérea y controlar la presión previenen la lesión secundaria y el resangrado.',
      },
      {
        titulo: 'Fase 2 — Tras la DVE y control inicial',
        vineta:
          'Se coloca una DVE con salida de LCR hemático; la PIC inicial era de 28 mmHg y baja a 14 tras el drenaje. La paciente está intubada y sedada con propofol y remifentanilo. Se inicia nimodipino.',
        datos: [
          { k: 'PIC', v: '14 mmHg' },
          { k: 'PAM', v: '95 mmHg' },
          { k: 'PPC', v: '81 mmHg' },
          { k: 'PbtO₂', v: '24 mmHg' },
          { k: 'Na', v: '139 mmol/L' },
          { k: 'Nimodipino', v: 'Iniciado' },
        ],
        pregunta: '¿Cuáles son tus metas de manejo en esta fase y cuál es el siguiente paso definitivo?',
        pista: 'Piensa en PIC/PPC, en el aseguramiento del aneurisma y en la neuroprotección.',
        analisis: [
          'Metas: PIC <22, PPC 60–70 (aquí adecuada), PbtO₂ >20 (adecuada), normocapnia, normotermia, normoglucemia y natremia normal-alta; evita la hipotensión.',
          'Paso definitivo: asegurar el aneurisma precozmente (embolización con coils o clipaje quirúrgico) para prevenir el resangrado, principal causa de muerte temprana; angiografía/angio-TC para localizarlo.',
          'Nimodipino: mantener 21 días por su beneficio en el desenlace; si causa hipotensión, fracciona la dosis antes de suspenderlo.',
          'Sedación: agentes cortos para permitir una ventana neurológica cuando la PIC lo permita.',
        ],
        aprendizaje:
          'Estabilizada la PIC, la prioridad es asegurar el aneurisma; el nimodipino y la neuroprotección corren en paralelo, no después.',
      },
      {
        titulo: 'Fase 3 — Día 6: deterioro neurológico nuevo',
        vineta:
          'El aneurisma se aseguró con coils el día 1. Al día 6, durante una ventana de sedación, presenta menor reactividad y una nueva hemiparesia derecha. El DTC muestra una VMF de la ACM izquierda de 220 cm/s, con carótida interna extracraneal de 30 cm/s.',
        datos: [
          { k: 'VMF ACM izq', v: '220 cm/s' },
          { k: 'Lindegaard', v: '7,3' },
          { k: 'PIC', v: '12 mmHg' },
          { k: 'PPC', v: '70 mmHg' },
          { k: 'Na', v: '133 mmol/L' },
          { k: 'EEG', v: 'Sin crisis' },
          { k: 'TC', v: 'Sin resangrado ni nueva hidrocefalia' },
        ],
        pregunta: 'Interpreta el DTC y define tu diagnóstico y tu manejo.',
        pista:
          'Interpreta el índice de Lindegaard; ¿qué causas de deterioro tardío debes descartar antes?',
        analisis: [
          'DTC: VMF 220 cm/s con Lindegaard 7,3 (>6) = vasoespasmo severo (no hiperemia), en el territorio de la nueva focalidad.',
          'Diagnóstico: isquemia cerebral tardía (DCI) por vasoespasmo, la principal causa de deterioro entre los días 4 y 14; ya se descartaron resangrado, hidrocefalia y crisis, y hay una hiponatremia leve que corregir.',
          'Manejo médico: asegurar euvolemia e iniciar hipertensión inducida (elevar la PAM/PPC con vasopresores) para mejorar la perfusión del territorio en riesgo; el clásico “triple-H” se ha abandonado a favor de euvolemia + hipertensión.',
          'Rescate: si no mejora, angiografía con angioplastia con balón o vasodilatador intraarterial.',
        ],
        aprendizaje:
          'El deterioro tardío en la HSA es vasoespasmo/DCI hasta demostrar lo contrario; el índice de Lindegaard confirma el vasoespasmo, y la hipertensión inducida con euvolemia es la primera línea, con rescate endovascular si falla.',
      },
      {
        titulo: 'Fase 4 — Disnatremia',
        vineta:
          'En las siguientes 24 h el sodio cae a 128 mmol/L. La paciente muestra signos de hipovolemia: balance hídrico negativo, PVC baja y poliuria con natriuresis elevada.',
        datos: [
          { k: 'Na', v: '128 mmol/L' },
          { k: 'Volemia', v: 'Baja (poliuria, balance −)' },
          { k: 'Osm. urinaria', v: 'Elevada' },
          { k: 'Ácido úrico', v: 'Bajo' },
        ],
        pregunta: '¿SIADH o síndrome perdedor de sal cerebral? ¿Cómo lo manejas?',
        pista: 'La diferencia clave es la volemia; el tratamiento es opuesto.',
        analisis: [
          'Diagnóstico: el cuadro hipovolémico con poliuria y natriuresis apunta a síndrome perdedor de sal cerebral (CSW), no a SIADH (que es euvolémico o hipervolémico).',
          'Riesgo: en la HSA, la hiponatremia y la hipovolemia agravan el vasoespasmo/DCI; restringir agua (tratamiento del SIADH) sería peligroso aquí.',
          'Manejo: repón volumen y sodio con salino isotónico/hipertónico; considera fludrocortisona; corrige la natremia de forma controlada, evitando correcciones rápidas.',
        ],
        aprendizaje:
          'En el neurocrítico, distingue el SIADH del perdedor de sal por la volemia: en el CSW se repone sal y volumen, nunca se restringe agua.',
      },
      {
        titulo: 'Fase 5 — Pase de visita',
        vineta:
          'La paciente se estabiliza con hipertensión inducida y corrección del sodio. Debes presentarla en el pase de visita.',
        datos: [
          { k: 'Día UCI', v: '7' },
          { k: 'Aneurisma', v: 'Asegurado (coils)' },
          { k: 'Vasoespasmo', v: 'En manejo' },
          { k: 'DVE', v: 'Funcionante' },
        ],
        pregunta: '¿Cómo estructuras la presentación neurocrítica por sistemas?',
        pista: 'One-liner + examen seriado + tablero de neuromonitoreo + metas.',
        analisis: [
          'One-liner: “Mujer de 55 años, día 7 de UCI por HSA aneurismática WFNS V/Fisher IV, aneurisma asegurado, en manejo de vasoespasmo sintomático.”',
          'Neurológico: examen seriado (GCS/FOUR, pupilas/NPi, focalidad) con tendencia; DTC (VMF/Lindegaard) y EEG; DVE (débito, nivel, permeabilidad); metas de PIC/PPC.',
          'Cardiovascular/hemodinámico: hipertensión inducida con objetivo de PAM/PPC, euvolemia y nimodipino.',
          'Metabólico: natremia objetivo y estrategia (CSW: reposición), glucosa y temperatura.',
          'Plan y contingencias: vigilancia de DCI, criterios de rescate endovascular, profilaxis y pendientes.',
        ],
        aprendizaje:
          'La presentación neurocrítica combina un examen seriado leído como tendencia con un tablero de neuromonitoreo y metas explícitas por sistema.',
      },
    ],
  },

  // 8 — Autoevaluación (10 preguntas)
  quiz: [
    {
      pregunta:
        'Paciente con TBI grave, PAM 90 mmHg y PIC 25 mmHg. ¿Cuál es la PPC y la conducta correcta?',
      opciones: [
        'PPC 65 mmHg; es adecuada y no requiere ajustes',
        'PPC 65 mmHg; tratar la PIC elevada (>22) además de vigilar la PPC',
        'PPC 115 mmHg; reducir la PAM',
        'PPC 25 mmHg; iniciar vasopresores',
      ],
      correcta: 1,
      explicacion:
        'PPC = PAM − PIC = 65 mmHg (en el rango 60–70), pero la PIC de 25 mmHg supera el umbral de tratamiento (>22) y debe tratarse: una PPC adecuada no exime de bajar la PIC.',
    },
    {
      pregunta:
        '¿Cuál es el umbral de PIC a partir del cual se recomienda tratamiento sostenido en el TBI grave (Brain Trauma Foundation)?',
      opciones: ['>10 mmHg', '>15 mmHg', '>22 mmHg', '>40 mmHg'],
      correcta: 2,
      explicacion:
        'Las guías de la Brain Trauma Foundation recomiendan tratar la PIC sostenida por encima de 22 mmHg.',
    },
    {
      pregunta:
        'Paciente con deterioro y pupila derecha de 6 mm arreactiva, izquierda de 3 mm reactiva. La causa más probable es:',
      opciones: [
        'Lesión de protuberancia',
        'Herniación uncal con compresión del III par derecho',
        'Intoxicación por opioides',
        'Sección medular',
      ],
      correcta: 1,
      explicacion:
        'La midriasis unilateral arreactiva por compresión del III par indica herniación uncal ipsilateral; es una emergencia que exige osmoterapia y aviso neuroquirúrgico inmediatos.',
    },
    {
      pregunta: '¿Cuál es la ventaja principal del FOUR score sobre el GCS en el paciente intubado?',
      opciones: [
        'Es más rápido de calcular',
        'Evalúa reflejos de tronco y patrón respiratorio y no depende de la respuesta verbal',
        'Predice mejor el vasoespasmo',
        'Sustituye a la tomografía',
      ],
      correcta: 1,
      explicacion:
        'El FOUR score evalúa reflejos de tronco y el patrón respiratorio y no requiere respuesta verbal, por lo que es útil en el intubado; además detecta el síndrome de enclaustramiento (locked-in).',
    },
    {
      pregunta: 'DTC con VMF de la ACM de 210 cm/s e índice de Lindegaard de 2,5. La interpretación es:',
      opciones: [
        'Vasoespasmo severo',
        'Hiperemia (velocidades altas por flujo elevado, no vasoespasmo)',
        'Paro circulatorio cerebral',
        'Artefacto de insonación',
      ],
      correcta: 1,
      explicacion:
        'Un índice de Lindegaard <3 con velocidades altas indica hiperemia, no vasoespasmo; el índice separa el vasoespasmo (>3, severo >6) del flujo elevado.',
    },
    {
      pregunta: 'Respecto a la hiperventilación en la hipertensión intracraneal:',
      opciones: [
        'Es una medida profiláctica de primera línea de forma prolongada',
        'Reduce la PIC por vasoconstricción, pero de forma agresiva o prolongada causa isquemia',
        'No tiene efecto sobre la PIC',
        'Debe llevar la PaCO₂ por debajo de 25 mmHg',
      ],
      correcta: 1,
      explicacion:
        'La hiperventilación reduce la PIC por vasoconstricción cerebral, pero de forma agresiva o prolongada provoca isquemia; se usa solo como puente y guiada (PbtO₂/SjvO₂), nunca como profilaxis prolongada.',
    },
    {
      pregunta: 'La presión tisular de oxígeno cerebral (PbtO₂) es útil porque:',
      opciones: [
        'Sustituye a la medición de la PIC',
        'Detecta isquemia tisular incluso con PIC y PPC normales',
        'Mide la actividad eléctrica cerebral',
        'Solo sirve para el diagnóstico de muerte encefálica',
      ],
      correcta: 1,
      explicacion:
        'La PbtO₂ detecta hipoxia/isquemia tisular que la PIC/PPC pueden no reflejar; un valor <15–20 mmHg indica compromiso y se optimiza con PPC, PaO₂, hemoglobina y sedación.',
    },
    {
      pregunta: 'Sobre el nimodipino en la HSA aneurismática:',
      opciones: [
        'Revierte el vasoespasmo angiográfico',
        'Mejora el desenlace neurológico por neuroprotección y debe mantenerse ~21 días',
        'No tiene evidencia que respalde su uso',
        'Se suspende al asegurar el aneurisma',
      ],
      correcta: 1,
      explicacion:
        'El nimodipino mejora el desenlace neurológico (efecto neuroprotector) aunque no revierte el vasoespasmo angiográfico; se mantiene ~21 días y, si causa hipotensión, se fracciona la dosis antes de suspenderlo.',
    },
    {
      pregunta:
        'Paciente con HSA, hiponatremia, hipovolemia, poliuria y natriuresis elevada. El diagnóstico y manejo más probables son:',
      opciones: [
        'SIADH; restringir agua',
        'Síndrome perdedor de sal cerebral; reponer sal y volumen',
        'Diabetes insípida; desmopresina',
        'Hiperaldosteronismo; espironolactona',
      ],
      correcta: 1,
      explicacion:
        'La hipovolemia con natriuresis indica síndrome perdedor de sal cerebral; el manejo es reponer sodio y volumen. Restringir agua (tratamiento del SIADH euvolémico) sería peligroso en este contexto.',
    },
    {
      pregunta: 'Al día 7 de una HSA, un paciente desarrolla nueva focalidad neurológica. La primera sospecha es:',
      opciones: [
        'Isquemia cerebral tardía por vasoespasmo',
        'Infarto agudo de miocardio',
        'Neumonía asociada a la ventilación',
        'Delirium simple',
      ],
      correcta: 0,
      explicacion:
        'Entre los días 4 y 14, el deterioro con nueva focalidad es isquemia cerebral tardía (DCI) por vasoespasmo hasta descartar hidrocefalia, resangrado, crisis e hiponatremia.',
    },
  ],

  // 9 — Referencias
  referencias: [
    {
      titulo: 'Guidelines for the Management of Severe Traumatic Brain Injury, 4th Edition',
      fuente: 'Carney N, et al. Brain Trauma Foundation. Neurosurgery',
      anio: 2017,
      tipo: 'guia',
    },
    {
      titulo: '2023 Guideline for the Management of Patients With Aneurysmal Subarachnoid Hemorrhage',
      fuente: 'Hoh BL, et al. AHA/ASA. Stroke',
      anio: 2023,
      tipo: 'guia',
    },
    {
      titulo:
        'Consensus Summary Statement of the International Multidisciplinary Consensus Conference on Multimodality Monitoring in Neurocritical Care',
      fuente: 'Le Roux P, et al. Neurocritical Care',
      anio: 2014,
      tipo: 'consenso',
    },
    {
      titulo: 'A Trial of Intracranial-Pressure Monitoring in Traumatic Brain Injury (BEST:TRIP)',
      fuente: 'Chesnut RM, et al. N Engl J Med',
      anio: 2012,
      tipo: 'eca',
    },
    {
      titulo: 'Brain Oxygen Optimization in Severe Traumatic Brain Injury, Phase-II (BOOST-II)',
      fuente: 'Okonkwo DO, et al. Crit Care Med',
      anio: 2017,
      tipo: 'eca',
    },
    {
      titulo: 'Trial of Decompressive Craniectomy for Traumatic Intracranial Hypertension (RESCUEicp)',
      fuente: 'Hutchinson PJ, et al. N Engl J Med',
      anio: 2016,
      tipo: 'eca',
    },
    {
      titulo: 'Cerebral arterial spasm: a controlled trial of nimodipine in aneurysmal subarachnoid hemorrhage',
      fuente: 'Allen GS, et al. N Engl J Med',
      anio: 1983,
      tipo: 'eca',
    },
    {
      titulo: 'Validation of a New Coma Scale: The FOUR Score',
      fuente: 'Wijdicks EFM, et al. Ann Neurol',
      anio: 2005,
      tipo: 'revision',
    },
    {
      titulo:
        'Cerebral vasospasm after subarachnoid haemorrhage investigated by means of transcranial Doppler ultrasound (índice de Lindegaard)',
      fuente: 'Lindegaard KF, et al. Acta Neurochirurgica',
      anio: 1989,
      tipo: 'revision',
    },
  ],

  // Repaso rápido
  quickReview: [
    'PPC = PAM − PIC con el transductor al trago; trata la PIC >22 y busca la PPC óptima individual.',
    'Una pupila nueva, dilatada y fija es herniación: osmoterapia y neurocirugía sin esperar la TC.',
    'El índice de Lindegaard separa vasoespasmo (>3) de hiperemia; el deterioro tardío en HSA es DCI hasta descartar lo demás.',
    'Neuroprotección = evitar hipotensión, hipoxia, fiebre, disglucemia e hiponatremia.',
    'Seda con agentes cortos y abre ventanas de neuroevaluación cuando la PIC lo permita.',
  ],
}

export default neuromonitoreo
