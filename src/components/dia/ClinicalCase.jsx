import { useState } from 'react'
import Icon from '../Icon.jsx'

export default function ClinicalCase({ caso }) {
  const [open, setOpen] = useState(false)
  if (!caso) return null

  return (
    <div className="overflow-hidden rounded-2xl border border-navy-700/60 bg-navy-800/70">
      <div className="border-b border-navy-700/50 bg-navy-900/40 px-5 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-icu-400">
          Caso clínico
        </p>
        <h3 className="mt-1 text-[15px] font-semibold text-ink-100">{caso.titulo}</h3>
      </div>

      <div className="px-5 py-4">
        <p className="text-sm leading-relaxed text-ink-200">{caso.resumen}</p>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy-900 px-3.5 py-2 text-sm font-medium text-icu-400 ring-1 ring-navy-700 transition-colors hover:bg-navy-700/40"
        >
          <Icon
            name="chevron"
            size={15}
            className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
          />
          {open ? 'Ocultar discusión' : 'Ver discusión y plan'}
        </button>

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <ol className="mt-4 space-y-3 border-l border-navy-700 pl-4">
              {caso.discusion.map((d, i) => (
                <li key={i} className="relative text-sm leading-relaxed text-ink-200">
                  <span className="absolute -left-[21px] top-1 grid h-4 w-4 place-items-center rounded-full bg-navy-800 font-mono text-[9px] text-icu-400 ring-1 ring-navy-700">
                    {i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
