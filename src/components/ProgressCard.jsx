import Icon from './Icon.jsx'

// Métrica con barra de progreso. Cambia a menta al completarse (100%).
export default function ProgressCard({ label, done, total, unit, icon }) {
  const pct = total ? Math.round((done / total) * 100) : 0
  const complete = pct >= 100
  const bar = complete ? 'bg-mint-400' : 'bg-steel-400'
  const chip = complete
    ? 'bg-mint-soft text-mint-300 ring-mint-400/20'
    : 'bg-steel-soft text-steel-300 ring-steel-400/20'

  return (
    <div className="group rounded-2xl border border-slate-700/60 bg-slate-800/70 p-5 shadow-card transition-colors duration-200 hover:border-slate-600">
      <div className="flex items-center justify-between">
        <p className="text-[12.5px] font-medium text-ink-300">{label}</p>
        {icon && (
          <span className={`grid h-7 w-7 place-items-center rounded-lg ring-1 ${chip}`}>
            <Icon name={complete ? 'badge' : icon} size={15} />
          </span>
        )}
      </div>

      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-mono text-[28px] font-semibold leading-none tabular text-ink-100">
          {done}
        </span>
        <span className="font-mono text-sm tabular text-ink-400">/ {total}</span>
        {unit && <span className="ml-auto text-xs text-ink-400">{unit}</span>}
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-900 ring-1 ring-inset ring-slate-700/50">
        <div
          className={`h-full rounded-full ${bar} transition-[width] duration-700 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 font-mono text-[11px] tabular text-ink-400">{pct}% completado</p>
    </div>
  )
}
