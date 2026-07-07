import Icon from '../Icon.jsx'

// QUICK CARDS — referencias de bolsillo. Solo números y recomendaciones, sin explicaciones.
// quickCards = [{ titulo, icon, tono, filas:[{k, v, tono?}], nota? }]
const TONE = {
  steel: 'bg-steel-soft text-steel-300 ring-steel-400/20',
  pearl: 'bg-pearl-soft text-pearl-300 ring-pearl-400/20',
  terra: 'bg-terra-soft text-terra-300 ring-terra-400/20',
  mint: 'bg-mint-soft text-mint-300 ring-mint-400/20',
}
const VAL_TONE = {
  steel: 'text-steel-300',
  pearl: 'text-pearl-300',
  terra: 'text-terra-300',
  mint: 'text-mint-300',
  ink: 'text-ink-100',
}

export default function QuickCards({ cards = [] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, i) => (
        <div key={i} className="rounded-2xl border border-slate-700/60 bg-slate-800/70 p-4 shadow-card">
          <div className="mb-3 flex items-center gap-2.5">
            <span className={`grid h-7 w-7 place-items-center rounded-lg ring-1 ${TONE[card.tono] || TONE.steel}`}>
              <Icon name={card.icon || 'target'} size={15} />
            </span>
            <h3 className="text-[14px] font-semibold tracking-tight text-ink-100">{card.titulo}</h3>
          </div>
          <dl className="space-y-1">
            {card.filas.map((f, j) => (
              <div key={j} className="flex items-baseline justify-between gap-3 border-b border-slate-700/40 py-1.5 last:border-0">
                <dt className="text-[12.5px] text-ink-300">{f.k}</dt>
                <dd className={`shrink-0 text-right font-mono text-[13px] font-semibold tabular ${VAL_TONE[f.tono] || 'text-ink-100'}`}>
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
          {card.nota && <p className="mt-2.5 text-[11px] leading-relaxed text-ink-400">{card.nota}</p>}
        </div>
      ))}
    </div>
  )
}
