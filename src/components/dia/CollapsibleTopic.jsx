import { useState } from 'react'
import Icon from '../Icon.jsx'

// Tema colapsable con animación de altura (grid-template-rows 0fr→1fr).
export default function CollapsibleTopic({ titulo, puntos = [], defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const empty = puntos.length === 0

  return (
    <div className="overflow-hidden rounded-xl border border-navy-700/60 bg-navy-800/60">
      <button
        type="button"
        onClick={() => !empty && setOpen((o) => !o)}
        aria-expanded={open}
        disabled={empty}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-navy-800 disabled:cursor-default disabled:opacity-60"
      >
        <Icon
          name="chevron"
          size={16}
          className={`shrink-0 text-icu-400 transition-transform duration-300 ${
            open ? 'rotate-90' : ''
          }`}
        />
        <span className="flex-1 text-[15px] font-medium text-ink-100">{titulo}</span>
        {empty ? (
          <span className="font-mono text-[11px] text-ink-400">pendiente</span>
        ) : (
          <span className="font-mono text-[11px] text-ink-400">{puntos.length}</span>
        )}
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2.5 px-4 pb-4 pl-11">
            {puntos.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-200">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-icu-500" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
