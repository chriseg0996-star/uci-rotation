import { useState } from 'react'
import Icon from '../Icon.jsx'

// Lección nuclear colapsable y numerada. Cada lección es su propia sección con
// introducción, subsecciones (bloques de puntos) y una idea-clave opcional.
// leccion = { titulo, intro?, bloques: [{ subtitulo, puntos: [] }], clave? }
export default function Lesson({ index, leccion, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  const vacia = !leccion.bloques?.some((b) => b.puntos?.length)

  return (
    <div
      className={[
        'overflow-hidden rounded-2xl border bg-slate-800/60 shadow-card transition-colors duration-200',
        open ? 'border-slate-600' : 'border-slate-700/60',
      ].join(' ')}
    >
      <button
        type="button"
        onClick={() => !vacia && setOpen((o) => !o)}
        aria-expanded={open}
        disabled={vacia}
        className="flex w-full items-center gap-3.5 px-4 py-4 text-left transition-colors hover:bg-slate-800 disabled:cursor-default disabled:opacity-70 sm:px-5"
      >
        <span
          className={[
            'grid h-8 w-8 shrink-0 place-items-center rounded-lg font-mono text-[13px] font-semibold tabular ring-1 transition-colors',
            open
              ? 'bg-steel-400 text-slate-900 ring-transparent'
              : 'bg-slate-900 text-steel-300 ring-slate-700',
          ].join(' ')}
        >
          {index}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[15px] font-semibold tracking-tight text-ink-100">
            {leccion.titulo}
          </span>
          {leccion.intro && !open && (
            <span className="mt-0.5 line-clamp-1 block text-[12.5px] text-ink-400">
              {leccion.intro}
            </span>
          )}
        </span>
        {vacia ? (
          <span className="shrink-0 font-mono text-[11px] text-ink-400">pendiente</span>
        ) : (
          <Icon
            name="chevron"
            size={17}
            className={`shrink-0 text-ink-400 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
          />
        )}
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="space-y-5 px-4 pb-5 sm:px-5">
            {leccion.intro && (
              <p className="text-[13.5px] leading-relaxed text-ink-200">{leccion.intro}</p>
            )}

            {leccion.bloques?.map((b, i) => (
              <div key={i}>
                {b.subtitulo && (
                  <h4 className="mb-2 flex items-center gap-2 text-[13px] font-semibold text-steel-300">
                    <span className="h-1.5 w-1.5 rounded-sm bg-steel-400/70" />
                    {b.subtitulo}
                  </h4>
                )}
                <ul className="space-y-2 pl-3.5">
                  {b.puntos.map((p, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-ink-200"
                    >
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {leccion.clave && (
              <div className="flex gap-3 rounded-xl border border-steel-400/20 bg-steel-soft p-3.5">
                <Icon name="target" size={16} className="mt-0.5 shrink-0 text-steel-300" />
                <p className="text-[13px] leading-relaxed text-ink-100">
                  <span className="font-semibold text-steel-300">Idea clave. </span>
                  {leccion.clave}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
