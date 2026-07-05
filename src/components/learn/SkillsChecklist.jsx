import Icon from '../Icon.jsx'
import { useLocalStorage } from '../../hooks/useLocalStorage.js'

// Checklist de habilidades prácticas que el residente debe demostrar durante el día.
// Estado marcado persistido por día. items = [{ texto, detalle? }]
export default function SkillsChecklist({ dia, items = [] }) {
  const [done, setDone] = useLocalStorage(`uci-rotation:skills:${dia}`, [])
  const isDone = (i) => done.includes(i)
  const toggle = (i) =>
    setDone((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]))

  const count = items.filter((_, i) => isDone(i)).length
  const pct = items.length ? Math.round((count / items.length) * 100) : 0
  const complete = count === items.length && items.length > 0

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/70 shadow-card">
      <div className="flex items-center justify-between gap-4 border-b border-slate-700/50 px-5 py-3.5">
        <p className="text-[13px] text-ink-300">
          Marca cada competencia al demostrarla a pie de cama.
        </p>
        <span
          className={`shrink-0 font-mono text-[13px] font-semibold tabular ${
            complete ? 'text-mint-300' : 'text-steel-300'
          }`}
        >
          {count}/{items.length}
        </span>
      </div>

      <div className="h-1 w-full bg-slate-900">
        <div
          className={`h-full transition-[width] duration-500 ease-out ${
            complete ? 'bg-mint-400' : 'bg-steel-400'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <ul className="divide-y divide-slate-700/40">
        {items.map((item, i) => {
          const checked = isDone(i)
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={checked}
                className="flex w-full items-start gap-3.5 px-5 py-3.5 text-left transition-colors hover:bg-slate-800/60"
              >
                <span
                  className={[
                    'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors',
                    checked
                      ? 'border-mint-400/50 bg-mint-soft text-mint-300'
                      : 'border-slate-600 text-transparent',
                  ].join(' ')}
                >
                  <Icon name="check" size={13} strokeWidth={2.4} />
                </span>
                <span className="min-w-0">
                  <span
                    className={[
                      'block text-[13.5px] leading-snug transition-colors',
                      checked ? 'text-ink-400 line-through' : 'text-ink-100',
                    ].join(' ')}
                  >
                    {item.texto}
                  </span>
                  {item.detalle && (
                    <span className="mt-0.5 block text-[12px] leading-relaxed text-ink-400">
                      {item.detalle}
                    </span>
                  )}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
