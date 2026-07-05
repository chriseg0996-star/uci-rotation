// Cinco puntos clave para llevar. Numerados porque el orden refleja prioridad de razonamiento.
export default function QuickReview({ points = [] }) {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-800/70 p-5 shadow-card sm:p-6">
      <ol className="space-y-3.5">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3.5">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-steel-soft font-mono text-xs font-semibold tabular text-steel-300 ring-1 ring-steel-400/25">
              {i + 1}
            </span>
            <p className="pt-0.5 text-[13.5px] leading-relaxed text-ink-200">{p}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
