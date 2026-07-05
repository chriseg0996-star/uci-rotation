import { useState } from 'react'
import Icon from '../Icon.jsx'
import Button from '../Button.jsx'

export default function ClinicalCase({ caso }) {
  const [open, setOpen] = useState(false)
  if (!caso) return null

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/70 shadow-card">
      <div className="flex items-center gap-3 border-b border-slate-700/50 bg-slate-850/60 px-5 py-4">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-steel-soft text-steel-300 ring-1 ring-steel-400/20">
          <Icon name="case" size={16} />
        </span>
        <div className="min-w-0">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-steel-400">
            Caso clínico
          </p>
          <h3 className="mt-0.5 text-[15px] font-semibold tracking-tight text-ink-100">
            {caso.titulo}
          </h3>
        </div>
      </div>

      <div className="px-5 py-5">
        <p className="text-[14px] leading-relaxed text-ink-200">{caso.resumen}</p>

        <Button
          variant="secondary"
          size="sm"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="mt-4"
        >
          <Icon
            name="chevron"
            size={15}
            className={`transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
          />
          {open ? 'Ocultar discusión' : 'Ver discusión y plan'}
        </Button>

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-out"
          style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <ol className="mt-5 space-y-3.5 border-l border-slate-700 pl-5">
              {caso.discusion.map((d, i) => (
                <li key={i} className="relative text-[13.5px] leading-relaxed text-ink-200">
                  <span className="absolute -left-[26px] top-0 grid h-5 w-5 place-items-center rounded-full bg-slate-800 font-mono text-[10px] tabular text-steel-300 ring-1 ring-slate-700">
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
