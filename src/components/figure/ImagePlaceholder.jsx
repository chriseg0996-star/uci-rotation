import Icon from '../Icon.jsx'

// Placeholder de imagen radiológica, elegante y por modalidad. Si se aporta `src`,
// renderiza la imagen real; reemplazar un placeholder por una imagen real requiere
// únicamente cambiar el archivo de datos (añadir `src`).
// Modalidades: ct | mri | cxr | us | doppler | ecg | angio | generic
const MODALITY = {
  ct: { label: 'TC', nombre: 'Tomografía' },
  mri: { label: 'RM', nombre: 'Resonancia' },
  cxr: { label: 'Rx', nombre: 'Radiografía' },
  us: { label: 'US', nombre: 'Ecografía' },
  doppler: { label: 'DOP', nombre: 'Doppler' },
  ecg: { label: 'ECG', nombre: 'Electrocardiograma' },
  angio: { label: 'DSA', nombre: 'Angiografía' },
  generic: { label: 'IMG', nombre: 'Imagen' },
}

// Decoración sutil que evoca la modalidad (sin representar patología real).
function Decoration({ modality }) {
  if (modality === 'us' || modality === 'doppler') {
    return (
      <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full opacity-[0.5]" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <path d="M100 12 L168 108 A80 80 0 0 1 32 108 Z" fill="none" stroke="#2B3346" strokeWidth="1.5" />
        <path d="M100 12 L150 108" stroke="#222A3B" strokeWidth="1" />
        <path d="M100 12 L50 108" stroke="#222A3B" strokeWidth="1" />
        {modality === 'doppler' && (
          <path d="M40 96 q10 -26 20 0 t20 0 t20 0 t20 0 t20 0" fill="none" stroke="#8FA7C4" strokeWidth="1.5" opacity="0.6" />
        )}
      </svg>
    )
  }
  if (modality === 'ecg') {
    return (
      <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full opacity-[0.45]" preserveAspectRatio="none" aria-hidden="true">
        {[...Array(11)].map((_, i) => (
          <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="120" stroke="#1f2734" strokeWidth="0.6" />
        ))}
        {[...Array(7)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 20} x2="200" y2={i * 20} stroke="#1f2734" strokeWidth="0.6" />
        ))}
        <path d="M0 70 h30 l6 0 l4 -34 l6 44 l5 -14 h20 l6 0 l4 -34 l6 44 l5 -14 h60" fill="none" stroke="#8FA7C4" strokeWidth="1.5" opacity="0.6" />
      </svg>
    )
  }
  // ct / mri / cxr / angio / generic: retícula radiológica
  return (
    <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full opacity-[0.4]" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <circle cx="100" cy="60" r="42" fill="none" stroke="#2B3346" strokeWidth="1" />
      <circle cx="100" cy="60" r="22" fill="none" stroke="#222A3B" strokeWidth="1" />
      <line x1="100" y1="8" x2="100" y2="112" stroke="#222A3B" strokeWidth="0.8" />
      <line x1="30" y1="60" x2="170" y2="60" stroke="#222A3B" strokeWidth="0.8" />
    </svg>
  )
}

export default function ImagePlaceholder({ modality = 'generic', src, alt, titulo, className = '' }) {
  const m = MODALITY[modality] || MODALITY.generic

  if (src) {
    return (
      <img
        src={src}
        alt={alt || titulo || m.nombre}
        className={`h-full w-full rounded-lg object-contain ${className}`}
      />
    )
  }

  return (
    <div
      className={`relative grid aspect-video w-full place-items-center overflow-hidden rounded-lg border border-slate-700/70 bg-slate-950/60 ${className}`}
    >
      <Decoration modality={modality} />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-800/80 text-ink-300 ring-1 ring-slate-700">
          <Icon name="image" size={20} />
        </span>
        <span className="rounded-full bg-slate-800 px-2 py-0.5 font-mono text-[10.5px] font-semibold tracking-wide text-steel-300 ring-1 ring-slate-700">
          {m.label}
        </span>
        <span className="text-[11px] text-ink-400">{m.nombre} · imagen de referencia pendiente</span>
      </div>
    </div>
  )
}
