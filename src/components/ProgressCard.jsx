import Card from './Card.jsx'

export default function ProgressCard({ label, done, total, unit }) {
  const pct = total ? Math.round((done / total) * 100) : 0
  return (
    <Card className="p-5">
      <p className="text-[13px] font-medium text-ink-300">{label}</p>
      <div className="mt-3 flex items-baseline gap-1.5">
        <span className="font-mono text-3xl font-semibold tabular text-ink-100">{done}</span>
        <span className="font-mono text-sm text-ink-400">/ {total}</span>
        <span className="ml-auto text-xs text-ink-400">{unit}</span>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-navy-900">
        <div
          className="h-full rounded-full bg-icu-500 transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 font-mono text-[11px] text-ink-400 tabular">{pct}% completado</p>
    </Card>
  )
}
