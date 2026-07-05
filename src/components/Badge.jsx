import Icon from './Icon.jsx'

// Etiqueta de estado compacta. Tonos semánticos consistentes con el sistema.
const TONES = {
  steel: 'bg-steel-soft text-steel-300 ring-steel-400/25',
  pearl: 'bg-pearl-soft text-pearl-300 ring-pearl-400/25',
  terra: 'bg-terra-soft text-terra-300 ring-terra-400/25',
  mint: 'bg-mint-soft text-mint-300 ring-mint-400/25',
  neutral: 'bg-slate-800 text-ink-300 ring-slate-700',
}

export default function Badge({ children, tone = 'neutral', icon, dot = false, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${TONES[tone]} ${className}`}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current opacity-90" />}
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  )
}
