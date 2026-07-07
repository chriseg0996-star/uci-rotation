import Icon from '../Icon.jsx'

// ICU REASONING — sección estándar “🧠 ¿Qué haría el intensivista?”.
// Razonamiento de cabecera, no ensayo. reasoning = { worries, kills, changes, trap, reassess }
const ITEMS = [
  { key: 'worries', label: 'Qué me preocupa primero', icon: 'alert', tone: 'terra' },
  { key: 'kills', label: 'Qué puede matar al paciente', icon: 'flame', tone: 'terra' },
  { key: 'changes', label: 'Qué dato cambia el manejo', icon: 'target', tone: 'steel' },
  { key: 'trap', label: 'Trampa cognitiva frecuente', icon: 'compass', tone: 'pearl' },
  { key: 'reassess', label: 'Qué reevalúo en 15 min', icon: 'clock', tone: 'mint' },
]

const TONE = {
  steel: 'bg-steel-soft text-steel-300 ring-steel-400/25',
  pearl: 'bg-pearl-soft text-pearl-300 ring-pearl-400/25',
  terra: 'bg-terra-soft text-terra-300 ring-terra-400/25',
  mint: 'bg-mint-soft text-mint-300 ring-mint-400/25',
}

export default function IcuReasoning({ reasoning }) {
  if (!reasoning) return null
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/70 shadow-card">
      {/* Encabezado */}
      <div className="flex items-center gap-3 border-b border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-850 px-5 py-4">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-steel-soft text-steel-300 ring-1 ring-steel-400/25 text-[18px]">
          🧠
        </span>
        <div>
          <h3 className="text-[15px] font-semibold tracking-tight text-ink-100">
            ¿Qué haría el intensivista?
          </h3>
          <p className="text-[12px] text-ink-400">Razonamiento de cabecera, no protocolo.</p>
        </div>
      </div>

      {/* Puntos */}
      <ul className="divide-y divide-slate-700/40">
        {ITEMS.map((it) => {
          const texto = reasoning[it.key]
          if (!texto) return null
          return (
            <li key={it.key} className="flex items-start gap-3.5 px-5 py-3.5">
              <span className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg ring-1 ${TONE[it.tone]}`}>
                <Icon name={it.icon} size={15} />
              </span>
              <div className="min-w-0">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                  {it.label}
                </p>
                <p className="mt-0.5 text-[13.5px] leading-relaxed text-ink-100">{texto}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
