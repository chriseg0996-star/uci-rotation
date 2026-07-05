// Cinco puntos clave para llevar. Numerados porque el orden refleja prioridad de razonamiento.
export default function QuickReview({ points = [] }) {
  return (
    <div className="rounded-2xl border border-navy-700/60 bg-navy-800/70 p-5">
      <ol className="space-y-3">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-icu-soft font-mono text-xs font-semibold text-icu-400 ring-1 ring-icu/25">
              {i + 1}
            </span>
            <p className="pt-0.5 text-sm leading-relaxed text-ink-200">{p}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
