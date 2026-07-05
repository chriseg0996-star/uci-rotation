import Icon from './Icon.jsx'

// KPI compacto: valor grande monoespaciado + etiqueta + pista opcional.
// Tono semántico colorea el icono y el realce. Usar para métricas sin barra de progreso.
const TONES = {
  steel: { chip: 'bg-steel-soft text-steel-300 ring-steel-400/20', accent: 'text-steel-300' },
  pearl: { chip: 'bg-pearl-soft text-pearl-300 ring-pearl-400/20', accent: 'text-pearl-300' },
  terra: { chip: 'bg-terra-soft text-terra-300 ring-terra-400/20', accent: 'text-terra-300' },
  mint: { chip: 'bg-mint-soft text-mint-300 ring-mint-400/20', accent: 'text-mint-300' },
}

export default function StatCard({ label, value, sub, unit, icon, tone = 'steel', hint }) {
  const t = TONES[tone] || TONES.steel
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-800/70 p-5 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-[12.5px] font-medium text-ink-300">{label}</p>
        {icon && (
          <span className={`grid h-7 w-7 place-items-center rounded-lg ring-1 ${t.chip}`}>
            <Icon name={icon} size={15} />
          </span>
        )}
      </div>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-mono text-[28px] font-semibold leading-none tabular text-ink-100">
          {value}
        </span>
        {sub && <span className="font-mono text-sm tabular text-ink-400">{sub}</span>}
        {unit && <span className="ml-auto text-xs text-ink-400">{unit}</span>}
      </div>
      {hint && <p className={`mt-2 text-[11.5px] ${t.accent}`}>{hint}</p>}
    </div>
  )
}
