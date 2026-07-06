// Inicio de la Rotación — sección de onboarding obligatoria antes del currículo clínico.
// Reúne los fundamentos de cuidados críticos (antes ubicados en el Módulo 1) reutilizando
// el mismo motor educativo: lecciones, perlas, errores, habilidades, caso, quiz y referencias.
// Español clínico, nivel intensivista senior. Sin relleno.

const onboarding = {
  id: 'inicio',
  titulo: 'Inicio de la Rotación',
  resumen:
    'Onboarding obligatorio: fundamentos, ABCDE, evaluación inicial, priorización, pase de visita y monitorización básica antes de entrar al currículo clínico.',
  tiempoEstimado: '90–120 min',

  // Introducción: por qué importa
  intro: {
    texto: [
      'Antes de entrar a los módulos clínicos, todo residente rotante debe dominar los fundamentos que se aplican a cualquier paciente crítico, sin importar el diagnóstico. Este onboarding entrena ese sustrato común: cómo pensar, cómo evaluar y cómo comunicar en la UCI.',
      'Las intervenciones de la primera hora —asegurar la vía aérea, corregir la hipoxemia, restaurar la perfusión, iniciar el tratamiento correcto— pesan más sobre el desenlace que casi cualquier decisión posterior. El residente suele ser quien ve primero al paciente que se deteriora; su capacidad de estructurar el abordaje y reconocer la amenaza vital determina si esa ventana se aprovecha o se pierde.',
      'El error dominante en el novato no es la falta de conocimiento, sino la ausencia de método bajo presión: fijarse en un dato llamativo, perseguir cifras en lugar de fisiología y normalizar la presión arterial sin evaluar si hay flujo. Un abordaje sistemático (ABCDE), repetido y priorizado por lo que mata primero, convierte una escena caótica en una secuencia de decisiones defendibles.',
    ],
    claves: [
      'Completa este onboarding antes de iniciar los módulos clínicos.',
      'El método (ABCDE) previene el error de fijación bajo estrés.',
      'Guía la reanimación por perfusión —lactato, llenado capilar, moteado— no por la presión aislada.',
      'Reevaluar tras cada intervención es parte del diagnóstico, no un paso opcional.',
    ],
  },

  // Objetivos de aprendizaje (6)
  objetivos: [
    'Ejecutar un abordaje ABCDE sistemático, tratando cada amenaza vital en el momento en que se detecta.',
    'Reconocer al paciente críticamente enfermo y el shock oculto por signos de hipoperfusión, no solo por la presión arterial.',
    'Establecer prioridades de estabilización en la primera hora guiadas por perfusión y respuesta dinámica a volumen.',
    'Seleccionar e interpretar la monitorización básica adecuada al nivel de gravedad, incluyendo POCUS y parámetros de perfusión.',
    'Aplicar razonamiento clínico estructurado, reconociendo sesgos cognitivos y manejando la incertidumbre.',
    'Presentar al paciente crítico por sistemas en el pase de visita, con un plan orientado a metas del día.',
  ],

  // Lecciones nucleares del onboarding (9)
  lecciones: [
    {
      id: 'bienvenida',
      titulo: 'Bienvenido a la UCI',
      intro:
        'La UCI es un entorno de alta densidad de decisiones y bajo margen de error. Antes de la fisiología, importan la seguridad del paciente, el trabajo en equipo y una forma disciplinada de trabajar.',
      bloques: [
        {
          subtitulo: 'Tu rol en la unidad',
          puntos: [
            'El residente rotante es parte del equipo: observa, propone y ejecuta bajo supervisión, y comunica de forma cerrada.',
            'Pedir ayuda temprano no es debilidad: la escalada oportuna es una competencia, no un fracaso.',
            'La seguridad del paciente está por encima de la jerarquía: si algo no cuadra, dilo.',
          ],
        },
        {
          subtitulo: 'Cultura y seguridad',
          puntos: [
            'Higiene de manos, verificación de identidad y de procedimientos, y uso de checklists reducen daño evitable.',
            'Cultura justa: se reportan errores y cuasi-fallos para aprender del sistema, no para culpar a la persona.',
            'Prevención por defecto: profilaxis tromboembólica y de úlcera de estrés, y revisión diaria de la necesidad de catéteres.',
          ],
        },
        {
          subtitulo: 'Cómo usar este onboarding',
          puntos: [
            'Recorre las lecciones, marca las habilidades a demostrar a pie de cama y resuelve el caso interactivo.',
            'Cierra con la autoevaluación; completa el onboarding antes de avanzar a los módulos clínicos.',
          ],
        },
      ],
      clave: 'Completa este onboarding antes de entrar al currículo clínico de la unidad.',
    },
    {
      id: 'pensar-intensivista',
      titulo: 'Cómo pensar como intensivista',
      intro:
        'El razonamiento en cuidados críticos combina el reconocimiento rápido de patrones con el análisis fisiológico deliberado. Conocer los sesgos propios es parte de la competencia técnica.',
      bloques: [
        {
          subtitulo: 'Dos sistemas y sus sesgos',
          puntos: [
            'Sistema 1 (intuitivo, veloz) y Sistema 2 (analítico, lento): el experto alterna entre ambos y sabe cuándo desconfiar del reflejo.',
            'Sesgos frecuentes: anclaje (fijarse en el primer diagnóstico), cierre prematuro, disponibilidad (el último caso visto) y confirmación (buscar solo lo que apoya la hipótesis).',
            'Antídoto: formular explícitamente un diagnóstico diferencial y buscar activamente datos que lo refuten.',
          ],
        },
        {
          subtitulo: 'Razonamiento fisiológico',
          puntos: [
            'Pensar en términos de entrega (DO₂ = GC × CaO₂) y consumo (VO₂) de oxígeno, y de PA = gasto cardíaco × resistencias.',
            'Ante hipotensión, descomponer: ¿problema de precarga, de contractilidad, de resistencia o de obstrucción? La conducta cambia con la respuesta.',
            'Prueba terapéutica (trial of therapy): tratar lo reversible mientras se completa el diagnóstico, con un punto de reevaluación definido.',
          ],
        },
        {
          subtitulo: 'Incertidumbre y metacognición',
          puntos: [
            'Reevaluar tras cada intervención: ¿respondió como esperaba? Si no, reformular la hipótesis en lugar de repetir la maniobra.',
            'Comunicar la incertidumbre de forma explícita al equipo y a la familia mejora la seguridad y la toma de decisiones.',
            'La ausencia de respuesta esperada es información diagnóstica, no un fracaso a ignorar.',
          ],
        },
      ],
      clave:
        'Trata lo reversible mientras diagnosticas, pero define siempre cuándo y cómo reevaluar; la falta de respuesta es un dato, no un ruido.',
    },
    {
      id: 'abcde',
      titulo: 'ABCDE',
      intro:
        'Secuencia jerárquica que ordena la evaluación por lo que amenaza la vida más rápido. Es cíclica: se reinicia tras cada intervención y ante cualquier deterioro. La regla de oro es tratar el problema en el momento en que se identifica, no al terminar el recorrido.',
      bloques: [
        {
          subtitulo: 'A — Vía aérea (con control cervical si trauma)',
          puntos: [
            'Evaluar permeabilidad y capacidad de protección: el paciente que habla con frases completas tiene vía aérea permeable en ese instante.',
            'Signos de obstrucción: estridor, voz apagada, uso de musculatura, movimiento paradójico, ausencia de flujo aéreo.',
            'Indicación de vía aérea avanzada: incapacidad de proteger (Glasgow ≤8 como referencia, no dogma), obstrucción no resuelta, hipoxemia/hipercapnia refractarias o trayectoria clínica de fallo inminente.',
            'Preoxigenar siempre antes de intubar; anticipar la vía aérea difícil y el colapso hemodinámico post-inducción (resucitar antes de intubar).',
          ],
        },
        {
          subtitulo: 'B — Ventilación y oxigenación',
          puntos: [
            'Medir SpO₂, frecuencia y trabajo respiratorio; auscultar y observar simetría torácica.',
            'Descartar causas rápidamente mortales: neumotórax a tensión (descompresión inmediata, no esperar radiografía), hemotórax masivo, broncoespasmo grave.',
            'Objetivo de SpO₂ 92–96% en la mayoría; 88–92% en riesgo de hipercapnia crónica. Evitar tanto la hipoxemia como la hiperoxia.',
            'La taquipnea persistente es el signo de alarma más sensible y el más ignorado: casi nunca es “solo ansiedad”.',
          ],
        },
        {
          subtitulo: 'C — Circulación y perfusión',
          puntos: [
            'Evaluar perfusión antes que la cifra de presión: llenado capilar, moteado (escala de Mottling), temperatura distal, estado mental, diuresis.',
            'Medir FC, PA/PAM; obtener dos accesos periféricos gruesos y extraer lactato y estudios basales.',
            'Controlar la hemorragia externa por compresión; en shock hemorrágico, la hemostasia precede a la reposición.',
            'Iniciar reanimación guiada por respuesta a volumen; no retrasar el vasopresor por “terminar de llenar el tanque”.',
          ],
        },
        {
          subtitulo: 'D — Déficit neurológico',
          puntos: [
            'Escala de Glasgow (o AVDN), tamaño y reactividad pupilar, focalidad, y glucemia capilar en todo paciente con alteración del estado mental.',
            'Corregir de inmediato las causas reversibles: hipoglucemia, hipoxemia, hipercapnia, hipoperfusión, tóxicos (naloxona si opioides).',
            'La alteración del estado mental es una de las tres ventanas de hipoperfusión: puede ser el primer signo de shock, no un problema neurológico primario.',
          ],
        },
        {
          subtitulo: 'E — Exposición y entorno',
          puntos: [
            'Exponer para examinar (piel, dorso, periné) buscando exantemas, púrpura, heridas, sitios de infección o hemorragia oculta; luego cubrir para evitar hipotermia.',
            'Medir temperatura; la hipotermia agrava coagulopatía y vasoplejía.',
            'Integrar el contexto: antecedentes, fármacos (betabloqueo, anticoagulantes, inmunosupresión), alergias y la última vía de ingesta.',
          ],
        },
      ],
      clave:
        'ABCDE no es una lista para recitar sino un bucle: cada intervención obliga a reiniciar el recorrido desde A.',
    },
    {
      id: 'evaluacion-inicial',
      titulo: 'Evaluación inicial del paciente crítico',
      intro:
        'El deterioro fisiológico casi siempre precede al colapso por horas. Reconocerlo temprano —y estabilizar de forma simultánea al diagnóstico— separa la reanimación oportuna del rescate tardío.',
      bloques: [
        {
          subtitulo: 'Las tres ventanas de la perfusión',
          puntos: [
            'Piel: llenado capilar >3 s, moteado peripatelar, extremidades frías y húmedas.',
            'Riñón: oliguria (<0,5 mL/kg/h) como marcador de flujo esplácnico y renal comprometido.',
            'Cerebro: agitación, confusión o somnolencia nuevas como expresión de bajo gasto.',
          ],
        },
        {
          subtitulo: 'Shock oculto (críptico) y fenotipos',
          puntos: [
            'Hipoperfusión con presión arterial aún normal: la vasoconstricción compensadora mantiene la PA a costa del flujo.',
            'Lactato >2 mmol/L con normotensión obliga a buscar activamente la causa; no esperar a la hipotensión para actuar.',
            'Fenotipos a pie de cama: distributivo (caliente, VCI variable), hipovolémico (frío, VCI colapsable), cardiogénico (congestión, VCI distendida) y obstructivo (taponamiento, TEP, neumotórax a tensión).',
          ],
        },
        {
          subtitulo: 'Estabilización simultánea',
          puntos: [
            'Oxigenación y vía aérea primero; dos accesos periféricos gruesos; lactato, gasometría y cultivos sin retrasar el tratamiento.',
            'Cristaloides balanceados en bolos de 250–500 mL reevaluando respuesta con índices dinámicos; evitar bolos ciegos y la sobrecarga hídrica.',
            'Noradrenalina de primera línea para PAM ≥65 mmHg, iniciándola por vía periférica gruesa si el acceso central se demora.',
            'Control de foco y reevaluación a las 2 h: aclaramiento de lactato, llenado capilar y estado mental orientan si escalar o desescalar.',
          ],
        },
        {
          subtitulo: 'Escalas y criterios de ingreso',
          puntos: [
            'NEWS2 para detectar deterioro en piso; qSOFA (≥2) como tamizaje de mal pronóstico, no como diagnóstico de sepsis.',
            'SOFA para cuantificar disfunción orgánica y pronóstico; APACHE II para estratificación al ingreso.',
            'Criterios de UCI: necesidad de soporte orgánico, monitorización invasiva o trayectoria de deterioro pese al tratamiento inicial.',
          ],
        },
      ],
      clave:
        'Cree en la hipoperfusión aunque la presión sea normal: el lactato y el llenado capilar delatan el shock antes de que caiga la PA.',
    },
    {
      id: 'priorizacion',
      titulo: 'Priorización de problemas',
      intro:
        'El paciente crítico presenta múltiples problemas simultáneos. Priorizar es identificar qué amenaza la vida primero y ordenar las intervenciones sin perder de vista el resto.',
      bloques: [
        {
          subtitulo: 'Marco de priorización',
          puntos: [
            'Amenaza vital primero: ABCDE ya impone el orden inicial (una vía aérea comprometida precede a cualquier otra cosa).',
            'Construir una lista de problemas por sistemas e identificar el problema dominante que gobierna la fisiología actual.',
            'Matriz urgencia–gravedad: “lo que mata primero” antes que “lo más aparatoso”.',
          ],
        },
        {
          subtitulo: 'Ejecución bajo carga',
          puntos: [
            'Delegar y usar roles paralelos: mientras un miembro asegura la vía aérea, otro obtiene accesos y otro prepara fármacos.',
            'Reevaluar prioridades dinámicamente: lo urgente hace cinco minutos puede haber cambiado tras la primera intervención.',
            'Evitar la saturación de tareas (task saturation): verbalizar el plan y las contingencias mantiene al equipo orientado.',
          ],
        },
      ],
      clave:
        'Ordena por lo que mata primero, no por lo que llama más la atención; y reordena tras cada intervención.',
    },
    {
      id: 'pase-visita',
      titulo: 'Pase de visita',
      intro:
        'El pase de visita traduce el estado del paciente en un plan de acción compartido. Un recorrido por sistemas, conciso y orientado a metas, es una competencia clínica en sí misma.',
      bloques: [
        {
          subtitulo: 'Estructura por sistemas',
          puntos: [
            'Encabezado: identificación, día de estancia en UCI y un enunciado de síntesis (one-liner) que capture el problema dominante.',
            'Eventos de las últimas 24 h y luego recorrido sistema por sistema: neurológico, respiratorio, cardiovascular, renal/metabólico, gastrointestinal/nutrición, infectología/hematología, endocrino, piel/accesos y social/familia.',
            'Por cada sistema: datos objetivos relevantes → evaluación → plan, no una lectura cruda de números.',
          ],
        },
        {
          subtitulo: 'Plan orientado a metas',
          puntos: [
            'Definir metas del día por sistema y criterios de progreso o desescalamiento (retirar vasopresor, avanzar destete, retirar catéter innecesario).',
            'Usar checklists diarios (FAST HUG / bundle ABCDEF) para no omitir profilaxis, sedación, delirium y movilización.',
            'Comunicación cerrada (closed-loop): verbalizar el plan, confirmar responsables y contingencias.',
          ],
        },
      ],
      clave:
        'Cierra cada sistema con un plan orientado a metas del día y criterios de desescalamiento, no con una lista de números.',
    },
    {
      id: 'presentar-paciente',
      titulo: 'Cómo presentar un paciente crítico',
      intro:
        'Una presentación efectiva no es un volcado de datos: es una historia clínica comprimida que lleva al equipo a un plan. La forma importa tanto como el contenido.',
      bloques: [
        {
          subtitulo: 'El enunciado de síntesis (one-liner)',
          puntos: [
            'Una sola frase: edad, antecedente relevante, día de UCI y problema dominante. Ejemplo: “Varón de 62 años, DM2, día 1 de UCI por shock séptico de foco pulmonar”.',
            'El one-liner orienta a todo el equipo antes de cualquier dato; si está bien construido, ya sugiere el plan.',
          ],
        },
        {
          subtitulo: 'Qué datos incluir',
          puntos: [
            'Parámetros ventilatorios (modo, Vt, PEEP, driving pressure, FiO₂), vasopresores con dosis, balances y diuresis.',
            'Cultivos y antibióticos con día de tratamiento; catéteres y dispositivos con indicación y fecha.',
            'Profilaxis (tromboembólica y de úlcera de estrés), analgosedación y cribado de delirium.',
          ],
        },
        {
          subtitulo: 'Comunicación efectiva',
          puntos: [
            'Concisión: presenta lo relevante y omite el ruido; el objetivo es una decisión, no una transcripción.',
            'Cierra con el plan por sistema y verbaliza las contingencias (“si X, entonces Y”).',
            'Comunicación cerrada: confirma que el receptor entendió y quién ejecuta cada acción.',
          ],
        },
      ],
      clave:
        'Un buen pase convierte datos en un plan de acción compartido: empieza por un one-liner potente y termina por metas y responsables.',
    },
    {
      id: 'monitorizacion-basica',
      titulo: 'Monitorización básica',
      intro:
        'La monitorización debe escalar con la gravedad y responder a una pregunta clínica concreta. Ningún número sustituye la exploración de la perfusión; el objetivo es tratar al paciente, no al monitor.',
      bloques: [
        {
          subtitulo: 'Monitorización estándar',
          puntos: [
            'ECG continuo, SpO₂, presión arterial (no invasiva vs. línea arterial), temperatura y diuresis horaria.',
            'Capnografía: confirma la posición del tubo, detecta hipoventilación y refleja gasto cardíaco durante la reanimación.',
            'Indicaciones de línea arterial: inestabilidad hemodinámica, uso de vasopresores o gasometrías frecuentes.',
          ],
        },
        {
          subtitulo: 'Parámetros de perfusión',
          puntos: [
            'Lactato inicial y su aclaramiento a las 2 h como marcador dinámico de reanimación.',
            'ScvO₂ y gap venoarterial de CO₂ (>6 mmHg sugiere flujo insuficiente respecto a la demanda).',
            'Llenado capilar como diana de reanimación: en shock séptico es tan válido como el lactato y responde más rápido (ANDROMEDA-SHOCK).',
          ],
        },
        {
          subtitulo: 'POCUS orientado y límites',
          puntos: [
            'Protocolo RUSH: bomba (contractilidad, derrame), tanque (VCI, líneas B, líquido libre) y tuberías (aorta, TVP).',
            'La PVC no predice respuesta a volumen; útil solo como tendencia y en contexto, nunca como meta única.',
            'La respuesta a volumen se demuestra con índices dinámicos (elevación pasiva de piernas, VPP/VVS con sus condiciones), no con una cifra estática.',
          ],
        },
      ],
      clave:
        'Cada monitor debe responder una pregunta; si no cambia tu conducta, no lo interpretes de forma aislada. Trata al paciente, no al número.',
    },
    {
      id: 'objetivos-rotacion',
      titulo: 'Objetivos de la rotación',
      intro:
        'La rotación de UCI busca que el residente adquiera un método de trabajo transferible a cualquier paciente crítico, sobre el cual se construyen los módulos clínicos temáticos.',
      bloques: [
        {
          subtitulo: 'Competencias esperadas',
          puntos: [
            'Reconocer y estabilizar al paciente crítico con un abordaje ABCDE sistemático y guiado por perfusión.',
            'Razonar fisiológicamente y manejar la incertidumbre reconociendo los sesgos propios.',
            'Comunicar con eficacia en el pase de visita y presentar por sistemas con un plan orientado a metas.',
            'Integrarse al equipo con seguridad del paciente, profilaxis por defecto y escalada oportuna.',
          ],
        },
        {
          subtitulo: 'Estructura del currículo',
          puntos: [
            'Este onboarding sienta los fundamentos comunes; después comienzan los módulos clínicos temáticos.',
            'Módulos clínicos: Neuromonitoreo, Sepsis, Ventilación (bases y programación), Retiro de la ventilación, Choque y monitoreo hemodinámico, Ácido-base, Protocolo ECO (VExUS/BLUE/FAST) y Poliurias.',
            'Cada módulo reutiliza el mismo formato: introducción, lecciones, perlas, errores, habilidades, caso interactivo, autoevaluación y referencias.',
          ],
        },
        {
          subtitulo: 'Público objetivo',
          puntos: [
            'Diseñada para Medicina Interna R3, Urgencias R3 y Anestesiología R2 que rotan por la unidad.',
            'Demuestra las habilidades a pie de cama; el conocimiento se consolida en la práctica supervisada, no solo en la lectura.',
          ],
        },
      ],
      clave:
        'Completa el onboarding, avanza por los módulos clínicos y demuestra cada habilidad a pie de cama.',
    },
  ],

  // ICU Pearls
  pearls: [
    'Lactato >2 mmol/L con hipotensión es hipoperfusión hasta demostrar lo contrario. Repite a 2–4 h: el aclaramiento manda sobre el valor absoluto.',
    'El llenado capilar >3 s predice desenlace tan bien como el lactato y responde más rápido a la reanimación (ANDROMEDA-SHOCK).',
    'La elevación pasiva de piernas es un bolo reversible de ~300 mL: predice respuesta a volumen sin administrar líquido.',
    'Inicia noradrenalina por vía periférica gruesa si el acceso central se retrasa. No esperes.',
    'PAM 65 es el objetivo inicial por defecto; súbelo solo con justificación fisiológica individual, no por reflejo.',
    'La taquipnea es el signo vital más sensible de deterioro y el más frecuentemente ignorado.',
    'Resucita antes de intubar: la inducción puede colapsar al paciente hipovolémico o vasopléjico. Optimiza la hemodinámica primero.',
    'Neumotórax a tensión es diagnóstico clínico: descomprime, no esperes la radiografía.',
    'La PVC no predice respuesta a volumen; úsala como tendencia, nunca como meta de reanimación.',
    'En todo paciente con alteración del estado mental, mide glucemia capilar de inmediato: la hipoglucemia imita cualquier catástrofe.',
    'El shock puede existir con presión normal: vasoconstricción compensadora mantiene la PA a costa del flujo (shock críptico).',
    'El control de foco no controlado anula cualquier reanimación: el mejor antibiótico no drena un absceso.',
  ],

  // Errores frecuentes
  errores: [
    'Perseguir la PVC como meta de reanimación: no predice respuesta a volumen.',
    'Bolos de líquido repetidos sin reevaluar respuesta → sobrecarga hídrica, edema tisular y peor desenlace.',
    'Retrasar el vasopresor con la lógica de “primero llenar el tanque”.',
    'Normalizar la presión arterial sin evaluar perfusión: presión no es flujo.',
    'No repetir el lactato ni valorar su aclaramiento a las 2 h.',
    'Confundir qSOFA (tamizaje) con diagnóstico de sepsis o de choque.',
    'Anclarse en el primer diagnóstico y no buscar datos que lo refuten (cierre prematuro).',
    'Intubar a un paciente en shock sin optimizar antes la hemodinámica (colapso post-inducción).',
    'Atribuir la taquipnea a “ansiedad” sin descartar hipoxemia, acidosis o shock.',
    'Tratar la alarma del monitor en lugar de verificar al paciente (artefactos y falsos positivos).',
    'Omitir la glucemia capilar y el examen neurológico básico en la alteración del estado mental.',
    'Iniciar antimicrobiano sin plantear el control de foco ni tomar cultivos previos cuando es posible.',
  ],

  // Checklist de habilidades prácticas
  skills: [
    { texto: 'Realizar un abordaje ABCDE completo y verbalizado en un paciente inestable.' },
    {
      texto: 'Evaluar la perfusión a pie de cama',
      detalle: 'Llenado capilar, moteado, temperatura distal y estado mental.',
    },
    { texto: 'Obtener dos accesos periféricos gruesos y extraer lactato y gasometría basales.' },
    {
      texto: 'Interpretar una gasometría arterial inicial',
      detalle: 'Oxigenación, ventilación y estado ácido-base con brecha aniónica.',
    },
    { texto: 'Ejecutar una elevación pasiva de piernas e interpretar la respuesta a volumen.' },
    {
      texto: 'Titular noradrenalina hacia una PAM objetivo',
      detalle: 'Incluye la opción de inicio periférico si el acceso central se demora.',
    },
    {
      texto: 'Realizar un POCUS básico orientado (protocolo RUSH)',
      detalle: 'Contractilidad, VCI, líneas B, líquido libre y derrame.',
    },
    { texto: 'Calcular e interpretar qSOFA y SOFA en el contexto correcto.' },
    { texto: 'Formular una lista de problemas priorizada por amenaza vital.' },
    {
      texto: 'Definir metas de reanimación y reevaluar a las 2 h',
      detalle: 'Aclaramiento de lactato, llenado capilar y estado mental.',
    },
    { texto: 'Reconocer indicaciones de vía aérea avanzada y preparar una intubación segura.' },
    { texto: 'Presentar al paciente por sistemas en el pase de visita con plan orientado a metas.' },
  ],

  // Caso clínico interactivo
  caso: {
    titulo: 'Choque en el paciente febril',
    contexto:
      'Hombre de 62 años con diabetes tipo 2, traído a urgencias por fiebre y disnea de 48 h. Trabajarás el caso por fases: en cada una, formula tu conducta antes de revelar el análisis experto.',
    fases: [
      {
        titulo: 'Fase 1 — Evaluación inicial',
        vineta:
          'A su llegada está taquipneico, con extremidades frías y moteado en rodillas. Somnoliento pero orientado a preguntas simples. Refiere tos con expectoración.',
        datos: [
          { k: 'PA', v: '78/44 mmHg' },
          { k: 'PAM', v: '55 mmHg' },
          { k: 'FC', v: '122 lpm' },
          { k: 'FR', v: '28 rpm' },
          { k: 'SpO₂', v: '89% aire' },
          { k: 'Temp', v: '38,9 °C' },
          { k: 'Llenado capilar', v: '4 s' },
          { k: 'Glucemia', v: '184 mg/dL' },
        ],
        pregunta: '¿Cuáles son tus primeras tres intervenciones y en qué orden?',
        pista:
          'Piensa en ABCDE y en las tres ventanas de perfusión. ¿Qué amenaza la vida más rápido aquí?',
        analisis: [
          'A/B: oxígeno para SpO₂ objetivo ≥92%; la hipoxemia y la taquipnea son la amenaza inmediata. Vigilar trabajo respiratorio.',
          'C: dos accesos periféricos gruesos, extraer lactato y hemocultivos, e iniciar cristaloide balanceado 500 mL evaluando respuesta.',
          'Reconocimiento: qSOFA 3/3 (hipotensión, taquipnea, alteración del estado mental) → alta sospecha de shock séptico con foco pulmonar probable.',
          'Antimicrobiano empírico de amplio espectro en <1 h; no retrasarlo por completar estudios.',
        ],
        aprendizaje:
          'La secuencia es simultánea: oxígeno, accesos, cultivos, líquido y antibiótico ocurren casi a la vez con roles repartidos, no uno tras otro.',
      },
      {
        titulo: 'Fase 2 — Respuesta al primer bolo',
        vineta:
          'Tras 500 mL de cristaloide, la PAM sube transitoriamente a 60 mmHg y vuelve a 56. Persisten el moteado y el llenado capilar prolongado. El lactato inicial resultó en 4,8 mmol/L.',
        datos: [
          { k: 'PAM', v: '56 mmHg' },
          { k: 'Lactato', v: '4,8 mmol/L' },
          { k: 'FC', v: '118 lpm' },
          { k: 'Diuresis', v: '10 mL/h' },
        ],
        pregunta:
          '¿Administrarías otro bolo, iniciarías vasopresor, o ambos? Justifica cómo decides.',
        pista: '¿Tienes evidencia de que este paciente responderá a más volumen? ¿Cómo la obtienes?',
        analisis: [
          'Evaluar respuesta a volumen con un índice dinámico antes de repetir bolos: elevación pasiva de piernas o variación por POCUS de VCI.',
          'Dada la hipotensión persistente con PAM <65 pese al primer bolo, iniciar noradrenalina ya, sin esperar múltiples cargas de volumen.',
          'Iniciar noradrenalina por vía periférica gruesa si el acceso central se demora; el objetivo es PAM ≥65 mmHg.',
          'La oliguria y el lactato elevado confirman hipoperfusión activa: la reanimación no ha logrado restaurar el flujo.',
        ],
        aprendizaje:
          'La respuesta transitoria a un bolo no es indicación de seguir con bolos: es señal para evaluar respuesta a volumen de forma objetiva e iniciar vasopresor temprano.',
      },
      {
        titulo: 'Fase 3 — POCUS a pie de cama',
        vineta:
          'Con noradrenalina a dosis creciente, realizas un POCUS RUSH. Ventrículo izquierdo hiperdinámico, VCI pequeña con colapso >50%, líneas B focales en base derecha, sin derrame pericárdico ni líquido libre.',
        datos: [
          { k: 'VI', v: 'Hiperdinámico' },
          { k: 'VCI', v: 'Pequeña, colapsable' },
          { k: 'Pulmón', v: 'Líneas B base derecha' },
          { k: 'Noradrenalina', v: '0,3 µg/kg/min' },
        ],
        pregunta: '¿Cómo modifica este POCUS tu interpretación y tu plan de volumen?',
        pista: 'Integra el fenotipo: VI hiperdinámico + VCI colapsable + foco pulmonar. ¿Qué sugiere?',
        analisis: [
          'El patrón (VI hiperdinámico, VCI colapsable, sin congestión difusa) es compatible con shock distributivo/séptico con precarga aún dependiente de volumen.',
          'La VCI pequeña y colapsable apoya que hay margen para volumen adicional guiado por respuesta, en conjunto con el vasopresor.',
          'Las líneas B focales en la base derecha orientan al foco neumónico, no a edema pulmonar cardiogénico difuso.',
          'Plan: continuar noradrenalina para PAM ≥65 y administrar volumen adicional titulado por respuesta dinámica, reevaluando congestión pulmonar.',
        ],
        aprendizaje:
          'El POCUS convierte una decisión de volumen “a ciegas” en una guiada por fenotipo: precarga, contractilidad y congestión en menos de cinco minutos.',
      },
      {
        titulo: 'Fase 4 — Reevaluación a las 2 horas',
        vineta:
          'Con antibiótico administrado, volumen titulado y noradrenalina, reevalúas a las 2 h. La PAM se mantiene en 68 mmHg, el moteado ha disminuido y el paciente está más alerta. Repites el lactato.',
        datos: [
          { k: 'PAM', v: '68 mmHg' },
          { k: 'Lactato', v: '3,1 mmol/L' },
          { k: 'Llenado capilar', v: '3 s' },
          { k: 'Diuresis', v: '35 mL/h' },
          { k: 'Noradrenalina', v: '0,25 µg/kg/min' },
        ],
        pregunta: '¿La reanimación va por buen camino? ¿Qué metas usas para decidirlo?',
        pista: 'No mires solo la presión: ¿qué le pasó a las ventanas de perfusión y al lactato?',
        analisis: [
          'Sí: el aclaramiento de lactato (4,8 → 3,1; ~35%), la mejoría del llenado capilar, la recuperación de la diuresis y del estado mental indican restauración del flujo.',
          'El aclaramiento de lactato a las 2 h es una meta dinámica más útil que un valor absoluto aislado.',
          'La tendencia a poder bajar la noradrenalina refuerza la respuesta favorable.',
          'Plan: continuar con las mismas metas, evitar sobrerreanimación con volumen, y vigilar la aparición de congestión pulmonar.',
        ],
        aprendizaje:
          'Una reanimación exitosa se demuestra por la normalización de la perfusión (lactato, llenado capilar, diuresis, estado mental), no por alcanzar una cifra de presión.',
      },
      {
        titulo: 'Fase 5 — Disposición y pase de visita',
        vineta:
          'El paciente ingresa a UCI con diagnóstico de shock séptico de foco pulmonar en resolución inicial. Debes presentarlo en el pase de visita.',
        datos: [
          { k: 'Foco', v: 'Neumonía basal derecha' },
          { k: 'Soporte', v: 'Noradrenalina + O₂' },
          { k: 'ATB', v: 'Día 1 empírico' },
        ],
        pregunta: '¿Cómo estructuras un one-liner y el plan por sistemas para este paciente?',
        pista: 'Síntesis + eventos 24 h + recorrido por sistemas con metas del día.',
        analisis: [
          'One-liner: “Varón de 62 años, DM2, día 1 de UCI por shock séptico de foco pulmonar, con respuesta favorable a reanimación y noradrenalina en descenso.”',
          'Respiratorio: O₂ suplementario, objetivo SpO₂ 92–96%, vigilar necesidad de soporte; imagen y cultivos respiratorios pendientes.',
          'Cardiovascular: noradrenalina 0,25 µg/kg/min, PAM ≥65, plan de destete del vasopresor guiado por perfusión.',
          'Infectología: antibiótico empírico día 1, revisar cultivos a las 48 h para desescalar; control de foco no requiere intervención en este momento.',
          'Metabólico/renal: aclaramiento de lactato favorable, diuresis en recuperación; profilaxis tromboembólica y de úlcera de estrés, analgosedación y cribado de delirium.',
        ],
        aprendizaje:
          'El pase de visita cierra el círculo: convierte la reanimación en un plan por sistemas orientado a metas del día y a criterios explícitos de desescalamiento.',
      },
    ],
  },

  // Autoevaluación (10 preguntas)
  quiz: [
    {
      pregunta:
        'Paciente con sospecha de shock séptico, PAM 58 mmHg tras 30 mL/kg de cristaloide. ¿Cuál es la conducta más apropiada?',
      opciones: [
        'Administrar bolos adicionales de cristaloide hasta normalizar la PVC',
        'Iniciar noradrenalina para alcanzar PAM ≥65 mmHg',
        'Iniciar dobutamina como primer agente',
        'Esperar y reevaluar en 60 minutos sin nuevas intervenciones',
      ],
      correcta: 1,
      explicacion:
        'Ante hipotensión persistente pese a fluidos, la noradrenalina es el vasopresor de primera línea con objetivo de PAM ≥65 mmHg. La PVC no debe usarse como meta.',
    },
    {
      pregunta: 'Respecto al objetivo inicial de presión arterial media en la reanimación del shock:',
      opciones: [
        'PAM ≥55 mmHg es suficiente en todos los pacientes',
        'PAM ≥65 mmHg por defecto, individualizando más alto en hipertensión crónica',
        'Se debe apuntar a PAM ≥85 mmHg en todos los casos',
        'La PAM no es una meta útil de reanimación',
      ],
      correcta: 1,
      explicacion:
        'El objetivo por defecto es PAM ≥65 mmHg; solo se individualiza a valores más altos con justificación fisiológica, como hipertensión crónica documentada.',
    },
    {
      pregunta: '¿Cuál de los siguientes predice mejor la respuesta a volumen?',
      opciones: [
        'Presión venosa central (PVC)',
        'Elevación pasiva de piernas',
        'Presión arterial sistólica aislada',
        'Frecuencia cardíaca',
      ],
      correcta: 1,
      explicacion:
        'La elevación pasiva de piernas es un índice dinámico que actúa como un bolo reversible (~300 mL) y predice respuesta a volumen. La PVC (medida estática) no la predice.',
    },
    {
      pregunta:
        'Sobre el llenado capilar como diana de reanimación en shock séptico (ANDROMEDA-SHOCK):',
      opciones: [
        'Es inferior al lactato y no debe usarse',
        'Predice desenlace de forma comparable al lactato y responde más rápido',
        'Solo es útil en shock cardiogénico',
        'Se considera prolongado a partir de 1 segundo',
      ],
      correcta: 1,
      explicacion:
        'El llenado capilar prolongado (>3 s) predice desenlace de forma comparable al lactato y mejora más rápidamente con la reanimación, siendo una diana válida a pie de cama.',
    },
    {
      pregunta:
        'Paciente con lactato 4 mmol/L pero presión arterial normal. La interpretación correcta es:',
      opciones: [
        'No hay shock porque la presión es normal',
        'El lactato elevado es siempre artefacto si la PA es normal',
        'Puede existir shock oculto (críptico) por vasoconstricción compensadora',
        'Debe repetirse el lactato en 24 horas',
      ],
      correcta: 2,
      explicacion:
        'El shock críptico cursa con hipoperfusión y lactato elevado pese a presión normal, sostenida por vasoconstricción compensadora. La PA es una variable tardía.',
    },
    {
      pregunta: 'Sobre qSOFA en un paciente con sospecha de infección:',
      opciones: [
        'Un qSOFA ≥2 diagnostica sepsis',
        'Es una herramienta de tamizaje pronóstico, no un criterio diagnóstico de sepsis',
        'Incluye el nivel de lactato entre sus variables',
        'Sustituye al SOFA para cuantificar disfunción orgánica',
      ],
      correcta: 1,
      explicacion:
        'qSOFA (hipotensión, taquipnea, alteración del estado mental) es un tamizaje de mal pronóstico, no un criterio diagnóstico de sepsis. El SOFA cuantifica la disfunción orgánica.',
    },
    {
      pregunta:
        'Paciente hipovolémico en shock que requiere intubación urgente. La mejor estrategia es:',
      opciones: [
        'Intubar de inmediato sin optimización hemodinámica',
        'Optimizar la hemodinámica antes de inducir (resucitar antes de intubar)',
        'Evitar la preoxigenación para ganar tiempo',
        'Usar dosis altas de inductor para asegurar condiciones',
      ],
      correcta: 1,
      explicacion:
        'La inducción puede precipitar colapso hemodinámico en el paciente hipovolémico o vasopléjico. Se debe resucitar y optimizar antes de intubar, y preoxigenar siempre.',
    },
    {
      pregunta: 'En la sospecha de neumotórax a tensión con inestabilidad, la conducta es:',
      opciones: [
        'Solicitar radiografía de tórax antes de cualquier intervención',
        'Descompresión inmediata basada en el diagnóstico clínico',
        'Realizar TC de tórax urgente',
        'Iniciar ventilación no invasiva',
      ],
      correcta: 1,
      explicacion:
        'El neumotórax a tensión es un diagnóstico clínico que exige descompresión inmediata; esperar estudios de imagen retrasa una intervención que salva la vida.',
    },
    {
      pregunta: 'Sobre el aclaramiento de lactato como meta de reanimación:',
      opciones: [
        'El valor absoluto inicial es más importante que su tendencia',
        'Su descenso (aclaramiento) a las 2 h orienta mejor la eficacia de la reanimación',
        'No debe repetirse una vez obtenido el valor inicial',
        'Un lactato que no baja siempre indica hipoperfusión y nada más',
      ],
      correcta: 1,
      explicacion:
        'El aclaramiento de lactato a las 2 h es un marcador dinámico de respuesta a la reanimación, más informativo que un valor aislado. Un lactato persistente obliga a reevaluar la causa.',
    },
    {
      pregunta:
        'Durante el ABCDE, en un paciente con alteración aguda del estado mental, un paso que nunca debe omitirse es:',
      opciones: [
        'Solicitar resonancia magnética urgente',
        'Medir la glucemia capilar de inmediato',
        'Iniciar sedación profunda',
        'Administrar un bolo de manitol empírico',
      ],
      correcta: 1,
      explicacion:
        'La hipoglucemia imita cualquier catástrofe neurológica y es inmediatamente reversible; la glucemia capilar es obligatoria en toda alteración aguda del estado mental (parte de la D).',
    },
  ],

  // Referencias
  referencias: [
    {
      titulo: 'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      fuente: 'Evans L, et al. Crit Care Med / Intensive Care Med',
      anio: 2021,
      tipo: 'guia',
    },
    {
      titulo: 'The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3)',
      fuente: 'Singer M, et al. JAMA',
      anio: 2016,
      tipo: 'consenso',
    },
    {
      titulo:
        'Effect of a Resuscitation Strategy Targeting Peripheral Perfusion Status vs Serum Lactate Levels on 28-Day Mortality (ANDROMEDA-SHOCK)',
      fuente: 'Hernández G, et al. JAMA',
      anio: 2019,
      tipo: 'eca',
    },
    {
      titulo: 'Passive Leg Raising for Predicting Fluid Responsiveness: a Systematic Review and Meta-analysis',
      fuente: 'Monnet X, et al. Intensive Care Med',
      anio: 2016,
      tipo: 'revision',
    },
    {
      titulo: 'Balanced Crystalloids versus Saline in Critically Ill Adults (SMART)',
      fuente: 'Semler MW, et al. N Engl J Med',
      anio: 2018,
      tipo: 'eca',
    },
    {
      titulo: 'Assessment of Hemodynamic Status Using Point-of-Care Ultrasound (Protocolo RUSH)',
      fuente: 'Perera P, et al. Emerg Med Clin North Am',
      anio: 2010,
      tipo: 'revision',
    },
    {
      titulo: 'National Early Warning Score (NEWS2): Standardising the Assessment of Acute-Illness Severity',
      fuente: 'Royal College of Physicians',
      anio: 2017,
      tipo: 'consenso',
    },
    {
      titulo: 'Clinical Review: Reasoning in Medicine and Cognitive Bias at the Bedside',
      fuente: 'Croskerry P, et al. — literatura de razonamiento clínico',
      anio: 2013,
      tipo: 'revision',
    },
  ],

  // Repaso rápido
  quickReview: [
    'ABCDE primero: trata cada amenaza vital en el momento en que la encuentras.',
    'Presión no es perfusión: guíate por lactato, llenado capilar y moteado.',
    'Reanima por respuesta a volumen dinámica, nunca por PVC.',
    'Noradrenalina temprana; no la retrases por sobrecargar líquidos.',
    'Reevaluación a 2 h: el aclaramiento de lactato y la perfusión definen el rumbo.',
  ],
}

export default onboarding
