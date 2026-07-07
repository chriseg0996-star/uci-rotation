// Diagramas SVG médicos, temáticos y responsivos. Reutilizables entre módulos.
// Cada diagrama se registra en DIAGRAMS y se referencia por clave desde el archivo de datos.
// Paleta SONOCRÍTICO Slate. Trazo claro sobre fondo oscuro.

const C = {
  ink: '#E9EDF4',
  ink2: '#B9C2D0',
  ink3: '#8B95A6',
  ink4: '#5A6474',
  grid: '#2B3346',
  steel: '#8FA7C4',
  steelD: '#5C748F',
  pearl: '#D8A24C',
  terra: '#C97B6B',
  mint: '#5FB89A',
  surface: '#1B2130',
}

const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  style: { width: '100%', height: 'auto', display: 'block', fontFamily: 'Geist, system-ui, sans-serif' },
}

// — Curva presión–volumen (doctrina de Monro-Kellie)
function MonroKellie() {
  return (
    <svg viewBox="0 0 440 300" {...svgProps}>
      {/* Ejes */}
      <line x1="56" y1="30" x2="56" y2="256" stroke={C.grid} strokeWidth="1.5" />
      <line x1="56" y1="256" x2="410" y2="256" stroke={C.grid} strokeWidth="1.5" />
      <text x="16" y="150" fill={C.ink3} fontSize="12" transform="rotate(-90 16 150)" textAnchor="middle">
        PIC (mmHg)
      </text>
      <text x="233" y="288" fill={C.ink3} fontSize="12" textAnchor="middle">
        Volumen intracraneal añadido
      </text>
      {/* Zona de compensación */}
      <rect x="56" y="30" width="168" height="226" fill={C.steel} opacity="0.06" />
      <rect x="224" y="30" width="186" height="226" fill={C.terra} opacity="0.07" />
      <line x1="224" y1="30" x2="224" y2="256" stroke={C.grid} strokeWidth="1" strokeDasharray="4 4" />
      {/* Curva */}
      <path
        d="M64 236 C120 234 180 230 232 220 C296 206 340 150 388 48"
        fill="none"
        stroke={C.steel}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Punto de codo */}
      <circle cx="232" cy="220" r="4.5" fill={C.pearl} />
      <text x="232" y="205" fill={C.pearl} fontSize="11" textAnchor="middle">
        reserva agotada
      </text>
      {/* Etiquetas de zona */}
      <text x="140" y="90" fill={C.steel} fontSize="12" textAnchor="middle" fontWeight="600">
        Compensación
      </text>
      <text x="140" y="106" fill={C.ink4} fontSize="10" textAnchor="middle">
        desplaza LCR y
      </text>
      <text x="140" y="119" fill={C.ink4} fontSize="10" textAnchor="middle">
        sangre venosa
      </text>
      <text x="330" y="120" fill={C.terra} fontSize="12" textAnchor="middle" fontWeight="600">
        Descompensación
      </text>
      <text x="330" y="136" fill={C.ink4} fontSize="10" textAnchor="middle">
        pequeño ΔV →
      </text>
      <text x="330" y="149" fill={C.ink4} fontSize="10" textAnchor="middle">
        gran ΔPIC
      </text>
    </svg>
  )
}

// — Ondas de PIC: normal (P1>P2) vs distensibilidad reducida (P2>P1)
function IcpWaveform() {
  return (
    <svg viewBox="0 0 440 240" {...svgProps}>
      {[0, 1].map((col) => {
        const ox = col === 0 ? 30 : 250
        const path =
          col === 0
            ? `M${ox} 150 L${ox + 8} 60 L${ox + 22} 95 L${ox + 40} 78 L${ox + 60} 108 L${ox + 96} 150 L${ox + 104} 62 L${ox + 118} 96 L${ox + 136} 80 L${ox + 156} 110 L${ox + 180} 150`
            : `M${ox} 150 L${ox + 10} 92 L${ox + 26} 58 L${ox + 46} 88 L${ox + 66} 112 L${ox + 96} 150 L${ox + 106} 94 L${ox + 122} 60 L${ox + 142} 90 L${ox + 162} 114 L${ox + 180} 150`
        return (
          <g key={col}>
            <line x1={ox} y1="150" x2={ox + 180} y2="150" stroke={C.grid} strokeWidth="1.5" />
            <path d={path} fill="none" stroke={col === 0 ? C.steel : C.terra} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            {/* Etiquetas de picos */}
            {col === 0 ? (
              <>
                <text x={ox + 8} y="50" fill={C.ink2} fontSize="10" textAnchor="middle">P1</text>
                <text x={ox + 40} y="68" fill={C.ink3} fontSize="10" textAnchor="middle">P2</text>
                <text x={ox + 60} y="122" fill={C.ink4} fontSize="10" textAnchor="middle">P3</text>
                <text x={ox + 90} y="184" fill={C.steel} fontSize="12" textAnchor="middle" fontWeight="600">Normal · P1 &gt; P2</text>
              </>
            ) : (
              <>
                <text x={ox + 10} y="82" fill={C.ink3} fontSize="10" textAnchor="middle">P1</text>
                <text x={ox + 26} y="48" fill={C.ink2} fontSize="10" textAnchor="middle">P2</text>
                <text x={ox + 66} y="126" fill={C.ink4} fontSize="10" textAnchor="middle">P3</text>
                <text x={ox + 90} y="184" fill={C.terra} fontSize="12" textAnchor="middle" fontWeight="600">Baja distensibilidad · P2 &gt; P1</text>
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}

// — Autorregulación cerebral: FSC vs PPC
function Autoregulation() {
  return (
    <svg viewBox="0 0 440 300" {...svgProps}>
      <line x1="56" y1="30" x2="56" y2="256" stroke={C.grid} strokeWidth="1.5" />
      <line x1="56" y1="256" x2="410" y2="256" stroke={C.grid} strokeWidth="1.5" />
      <text x="16" y="150" fill={C.ink3} fontSize="12" transform="rotate(-90 16 150)" textAnchor="middle">FSC</text>
      <text x="233" y="288" fill={C.ink3} fontSize="12" textAnchor="middle">PPC (mmHg)</text>
      {/* Meseta */}
      <rect x="150" y="30" width="176" height="226" fill={C.mint} opacity="0.07" />
      <line x1="150" y1="30" x2="150" y2="256" stroke={C.grid} strokeWidth="1" strokeDasharray="4 4" />
      <line x1="326" y1="30" x2="326" y2="256" stroke={C.grid} strokeWidth="1" strokeDasharray="4 4" />
      <text x="150" y="272" fill={C.ink4} fontSize="11" textAnchor="middle">~50</text>
      <text x="326" y="272" fill={C.ink4} fontSize="11" textAnchor="middle">~150</text>
      {/* Curva: sube, meseta, sube */}
      <path d="M64 244 C110 236 130 150 150 120 L326 120 C350 120 372 70 396 48" fill="none" stroke={C.steel} strokeWidth="3" strokeLinecap="round" />
      <text x="238" y="108" fill={C.mint} fontSize="12" textAnchor="middle" fontWeight="600">Autorregulación intacta</text>
      <text x="238" y="228" fill={C.ink4} fontSize="10.5" textAnchor="middle">En la lesión la meseta se estrecha:</text>
      <text x="238" y="242" fill={C.terra} fontSize="10.5" textAnchor="middle" fontWeight="600">flujo presión-dependiente</text>
    </svg>
  )
}

// — Herniación uncal → compresión del III par → midriasis ipsilateral (esquemático)
function Herniation() {
  return (
    <svg viewBox="0 0 440 300" {...svgProps}>
      {/* Cráneo */}
      <ellipse cx="220" cy="130" rx="150" ry="105" fill={C.surface} stroke={C.grid} strokeWidth="2" />
      {/* Hemisferios y falx (desplazada) */}
      <line x1="232" y1="40" x2="240" y2="220" stroke={C.grid} strokeWidth="2" strokeDasharray="5 4" />
      <text x="256" y="52" fill={C.ink4} fontSize="10">línea media desplazada</text>
      {/* Masa (derecha del paciente = izquierda de la imagen) */}
      <path d="M95 95 q45 -30 80 5 q20 40 -20 70 q-55 20 -70 -25 q-8 -30 10 -50z" fill={C.terra} opacity="0.28" stroke={C.terra} strokeWidth="1.5" />
      <text x="130" y="135" fill={C.terra} fontSize="11" textAnchor="middle" fontWeight="600">masa /</text>
      <text x="130" y="149" fill={C.terra} fontSize="11" textAnchor="middle" fontWeight="600">edema</text>
      {/* Uncus herniando */}
      <path d="M205 175 q20 25 45 22" fill="none" stroke={C.pearl} strokeWidth="2.5" strokeLinecap="round" />
      <text x="300" y="205" fill={C.pearl} fontSize="10.5" textAnchor="middle">uncus → III par</text>
      {/* Ojos */}
      <g>
        <circle cx="175" cy="268" r="17" fill="none" stroke={C.grid} strokeWidth="2" />
        <circle cx="175" cy="268" r="5" fill={C.ink3} />
        <text x="175" y="296" fill={C.ink4} fontSize="10" textAnchor="middle">normal</text>
        <circle cx="265" cy="268" r="17" fill="none" stroke={C.grid} strokeWidth="2" />
        <circle cx="265" cy="268" r="11" fill={C.terra} />
        <text x="265" y="296" fill={C.terra} fontSize="10" textAnchor="middle" fontWeight="600">midriasis fija</text>
      </g>
    </svg>
  )
}

// — Doppler transcraneal: envolvente espectral + Lindegaard
function DtcDoppler() {
  return (
    <svg viewBox="0 0 440 260" {...svgProps}>
      <line x1="48" y1="196" x2="410" y2="196" stroke={C.grid} strokeWidth="1.5" />
      <line x1="48" y1="30" x2="48" y2="196" stroke={C.grid} strokeWidth="1.5" />
      <text x="20" y="115" fill={C.ink3} fontSize="12" transform="rotate(-90 20 115)" textAnchor="middle">velocidad</text>
      {/* Dos latidos: envolvente */}
      <path
        d="M48 196 C70 196 78 70 96 66 C112 64 120 150 150 168 C168 178 180 186 196 196 C218 196 226 70 244 66 C260 64 268 150 298 168 C316 178 328 186 344 196 Z"
        fill={C.steel}
        opacity="0.16"
        stroke={C.steel}
        strokeWidth="2"
      />
      {/* PSV / EDV / VMF */}
      <line x1="96" y1="66" x2="360" y2="66" stroke={C.pearl} strokeWidth="1" strokeDasharray="4 4" />
      <text x="392" y="70" fill={C.pearl} fontSize="10.5" textAnchor="end">PSV (sistólica)</text>
      <line x1="150" y1="168" x2="360" y2="168" stroke={C.ink4} strokeWidth="1" strokeDasharray="4 4" />
      <text x="392" y="172" fill={C.ink3} fontSize="10.5" textAnchor="end">EDV (diastólica)</text>
      <line x1="48" y1="120" x2="360" y2="120" stroke={C.mint} strokeWidth="1.5" strokeDasharray="2 3" />
      <text x="392" y="116" fill={C.mint} fontSize="10.5" textAnchor="end" fontWeight="600">VMF (media)</text>
      {/* Nota Lindegaard */}
      <text x="48" y="226" fill={C.ink2} fontSize="11">Lindegaard = VMF(ACM) / VMF(ACI extracraneal)</text>
      <text x="48" y="244" fill={C.ink4} fontSize="10.5">&gt;3 vasoespasmo · &gt;6 severo · &lt;3 con velocidades altas = hiperemia</text>
    </svg>
  )
}

// — Curva de Frank-Starling: respuesta a volumen
function FrankStarling() {
  return (
    <svg viewBox="0 0 440 300" {...svgProps}>
      <line x1="56" y1="30" x2="56" y2="256" stroke={C.grid} strokeWidth="1.5" />
      <line x1="56" y1="256" x2="410" y2="256" stroke={C.grid} strokeWidth="1.5" />
      <text x="16" y="150" fill={C.ink3} fontSize="12" transform="rotate(-90 16 150)" textAnchor="middle">
        Volumen sistólico
      </text>
      <text x="233" y="288" fill={C.ink3} fontSize="12" textAnchor="middle">Precarga</text>
      {/* Curva única: pendiente → meseta */}
      <path d="M62 246 C110 240 150 150 196 112 C248 82 320 72 400 68" fill="none" stroke={C.steel} strokeWidth="3" strokeLinecap="round" />
      {/* Punto A (respondedor, zona empinada) */}
      <line x1="150" y1="256" x2="150" y2="150" stroke={C.mint} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="188" y1="256" x2="188" y2="118" stroke={C.mint} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="150" y1="150" x2="150" y2="118" stroke={C.mint} strokeWidth="3" />
      <circle cx="150" cy="150" r="4" fill={C.mint} />
      <text x="120" y="132" fill={C.mint} fontSize="11" textAnchor="middle" fontWeight="600">respondedor</text>
      <text x="120" y="146" fill={C.ink4} fontSize="10" textAnchor="middle">ΔVS &gt;10–15%</text>
      {/* Punto B (no respondedor, meseta) */}
      <line x1="320" y1="256" x2="320" y2="72" stroke={C.terra} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="358" y1="256" x2="358" y2="69" stroke={C.terra} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="320" y1="72" x2="320" y2="69" stroke={C.terra} strokeWidth="3" />
      <circle cx="320" cy="72" r="4" fill={C.terra} />
      <text x="336" y="60" fill={C.terra} fontSize="11" textAnchor="middle" fontWeight="600">no respondedor</text>
      <text x="336" y="252" fill={C.ink4} fontSize="10" textAnchor="middle">misma ΔPrecarga</text>
    </svg>
  )
}

// — Fenotipos de shock (cuatro cuadrantes con signos de cabecera)
function ShockPhenotypes() {
  const cell = (x, y, tone, titulo, signos) => (
    <g>
      <rect x={x} y={y} width="196" height="118" rx="12" fill={C.surface} stroke={tone} strokeWidth="1.5" opacity="0.95" />
      <rect x={x} y={y} width="196" height="118" rx="12" fill={tone} opacity="0.06" />
      <text x={x + 14} y={y + 26} fill={tone} fontSize="13" fontWeight="600">{titulo}</text>
      {signos.map((s, i) => (
        <text key={i} x={x + 14} y={y + 48 + i * 18} fill={C.ink2} fontSize="11">• {s}</text>
      ))}
    </g>
  )
  return (
    <svg viewBox="0 0 440 280" {...svgProps}>
      {cell(16, 16, C.terra, 'Distributivo', ['Caliente al inicio', 'RVS baja', 'VCI variable · lactato ↑'])}
      {cell(228, 16, C.steel, 'Hipovolémico', ['Frío, colapso', 'VCI colapsable', 'Responde a volumen'])}
      {cell(16, 146, C.pearl, 'Cardiogénico', ['Congestión, IY', 'VCI distendida', 'Contractilidad ↓'])}
      {cell(228, 146, C.mint, 'Obstructivo', ['VCI distendida', 'Taponamiento / TEP', 'Neumotórax a tensión'])}
    </svg>
  )
}

// — Evaluación hemodinámica: tanque–bomba–tuberías (RUSH)
function HemodynamicTank() {
  const block = (x, tone, titulo, evalua, lever) => (
    <g>
      <rect x={x} y="40" width="112" height="96" rx="12" fill={C.surface} stroke={tone} strokeWidth="1.5" />
      <rect x={x} y="40" width="112" height="96" rx="12" fill={tone} opacity="0.07" />
      <text x={x + 56} y="66" fill={tone} fontSize="12.5" fontWeight="600" textAnchor="middle">{titulo}</text>
      <text x={x + 56} y="90" fill={C.ink3} fontSize="10" textAnchor="middle">{evalua}</text>
      <text x={x + 56} y="118" fill={C.ink2} fontSize="10.5" textAnchor="middle" fontWeight="600">{lever}</text>
    </g>
  )
  return (
    <svg viewBox="0 0 440 200" {...svgProps}>
      {block(24, C.steel, 'Tanque', 'precarga · VCI', '→ Volumen')}
      {block(164, C.pearl, 'Bomba', 'contractilidad · VI', '→ Inotrópico')}
      {block(304, C.terra, 'Tuberías', 'RVS · tono', '→ Vasopresor')}
      {/* Flechas de flujo */}
      <path d="M136 88 h28" stroke={C.ink4} strokeWidth="2" markerEnd="url(#ah)" />
      <path d="M276 88 h28" stroke={C.ink4} strokeWidth="2" markerEnd="url(#ah)" />
      <defs>
        <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0 0l6 3-6 3z" fill={C.ink4} />
        </marker>
      </defs>
      <text x="220" y="176" fill={C.ink4} fontSize="10.5" textAnchor="middle">POCUS RUSH: integra los tres para elegir la palanca correcta</text>
    </svg>
  )
}

export const DIAGRAMS = {
  'monro-kellie': MonroKellie,
  'icp-waveform': IcpWaveform,
  autoregulation: Autoregulation,
  herniation: Herniation,
  'dtc-doppler': DtcDoppler,
  'frank-starling': FrankStarling,
  'shock-phenotypes': ShockPhenotypes,
  'hemodynamic-tank': HemodynamicTank,
}

export default DIAGRAMS
