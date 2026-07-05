import Icon from './Icon.jsx'

// Encabezado de sección reutilizable. Chip de icono con color semántico, título,
// contador opcional y ranura derecha (enlace/acción). Tonos: steel | pearl | terra | mint.
const TONES = {
  steel: 'bg-steel-soft text-steel-300 ring-steel-400/20',
  pearl: 'bg-pearl-soft text-pearl-300 ring-pearl-400/20',
  terra: 'bg-terra-soft text-terra-300 ring-terra-400/20',
  mint: 'bg-mint-soft text-mint-300 ring-mint-400/20',
}

export default function SectionHeader({
  icon,
  title,
  count,
  tone = 'steel',
  right,
  className = '',
}) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${className}`}>
      {icon && (
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ring-1 ${TONES[tone]}`}
        >
          <Icon name={icon} size={16} />
        </span>
      )}
      <h2 className="text-[17px] font-semibold tracking-tight text-ink-100">{title}</h2>
      {count != null && (
        <span className="grid h-5 min-w-5 place-items-center rounded-full bg-slate-800 px-1.5 font-mono text-[11px] tabular text-ink-300 ring-1 ring-slate-700">
          {count}
        </span>
      )}
      {right && <div className="ml-auto shrink-0">{right}</div>}
    </div>
  )
}
