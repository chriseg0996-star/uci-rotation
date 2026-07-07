import Icon from '../Icon.jsx'

// OVERVIEW — resumen de una pantalla. Responde “¿qué necesito saber AHORA?”.
// overview = { porque, definiciones:[{termino,texto}], conceptos:[], normales:[{param,valor}],
//              redFlags:[], acciones:[], bundle:[] }
function Panel({ icon, title, tone = 'steel', children, className = '' }) {
  const chip = {
    steel: 'bg-steel-soft text-steel-300 ring-steel-400/20',
    pearl: 'bg-pearl-soft text-pearl-300 ring-pearl-400/20',
    terra: 'bg-terra-soft text-terra-300 ring-terra-400/20',
    mint: 'bg-mint-soft text-mint-300 ring-mint-400/20',
  }
  return (
    <div className={`rounded-2xl border border-slate-700/60 bg-slate-800/70 p-4 shadow-card ${className}`}>
      <div className="mb-3 flex items-center gap-2.5">
        <span className={`grid h-7 w-7 place-items-center rounded-lg ring-1 ${chip[tone]}`}>
          <Icon name={icon} size={15} />
        </span>
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-200">{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default function Overview({ overview }) {
  if (!overview) return null
  return (
    <div className="space-y-4">
      {/* Por qué importa */}
      {overview.porque && (
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-850 p-4 shadow-card sm:p-5">
          <span className="absolute inset-y-0 left-0 w-[3px] bg-steel-400/70" />
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-steel-400">
            Por qué importa
          </p>
          <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-100">{overview.porque}</p>
        </div>
      )}

      {/* Definiciones */}
      {overview.definiciones?.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {overview.definiciones.map((d, i) => (
            <Panel key={i} icon="book" title={d.termino} tone="steel">
              <p className="text-[13px] leading-relaxed text-ink-200">{d.texto}</p>
            </Panel>
          ))}
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        {/* 5 conceptos */}
        <Panel icon="gem" title="5 conceptos de alto rendimiento" tone="steel">
          <ol className="space-y-2.5">
            {overview.conceptos?.map((c, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-md bg-steel-soft font-mono text-[11px] font-semibold tabular text-steel-300 ring-1 ring-steel-400/25">
                  {i + 1}
                </span>
                <span className="text-[13.5px] leading-snug text-ink-200">{c}</span>
              </li>
            ))}
          </ol>
        </Panel>

        <div className="grid gap-4">
          {/* Valores normales */}
          {overview.normales?.length > 0 && (
            <Panel icon="target" title="Valores normales" tone="mint">
              <dl className="grid grid-cols-1 gap-x-5 gap-y-1.5 sm:grid-cols-2">
                {overview.normales.map((n, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-3 border-b border-slate-700/40 py-1 last:border-0">
                    <dt className="text-[12.5px] text-ink-300">{n.param}</dt>
                    <dd className="font-mono text-[12.5px] font-medium tabular text-ink-100">{n.valor}</dd>
                  </div>
                ))}
              </dl>
            </Panel>
          )}

          {/* Red flags */}
          {overview.redFlags?.length > 0 && (
            <Panel icon="alert" title="Red flags" tone="terra">
              <ul className="space-y-1.5">
                {overview.redFlags.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-200">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-terra-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </Panel>
          )}
        </div>
      </div>

      {/* Acciones inmediatas — franja de acción */}
      {overview.acciones?.length > 0 && (
        <Panel icon="flame" title="Acciones inmediatas" tone="pearl">
          <ol className="grid gap-2 sm:grid-cols-2">
            {overview.acciones.map((a, i) => (
              <li key={i} className="flex items-start gap-2.5 rounded-lg border border-slate-700/50 bg-slate-900/40 px-3 py-2 text-[13px] leading-snug text-ink-200">
                <Icon name="arrow" size={14} className="mt-0.5 shrink-0 text-pearl-300" />
                {a}
              </li>
            ))}
          </ol>
        </Panel>
      )}

      {/* Paquete inicial */}
      {overview.bundle?.length > 0 && (
        <Panel icon="check" title="Paquete inicial (1 h)" tone="mint">
          <ul className="grid gap-2 sm:grid-cols-2">
            {overview.bundle.map((b, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink-200">
                <Icon name="check" size={14} strokeWidth={2.2} className="mt-0.5 shrink-0 text-mint-300" />
                {b}
              </li>
            ))}
          </ul>
        </Panel>
      )}
    </div>
  )
}
