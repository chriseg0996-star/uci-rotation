import Icon from '../Icon.jsx'

// Introducción del módulo: por qué el tema importa en la UCI.
// intro = { texto: string[], claves?: string[] }
export default function Introduction({ intro }) {
  if (!intro) return null
  return (
    <section className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/50 p-5 shadow-card sm:p-6">
        <span className="absolute inset-y-0 left-0 w-[3px] bg-steel-400/60" />
        <div className="mb-3 flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-steel-soft text-steel-300 ring-1 ring-steel-400/20">
            <Icon name="compass" size={16} />
          </span>
          <h2 className="text-[15px] font-semibold tracking-tight text-ink-100">
            Por qué importa
          </h2>
        </div>

        <div className="space-y-3">
          {intro.texto.map((p, i) => (
            <p key={i} className="text-[14px] leading-relaxed text-ink-200">
              {p}
            </p>
          ))}
        </div>

        {intro.claves?.length > 0 && (
          <ul className="mt-4 grid gap-2 border-t border-slate-700/50 pt-4 sm:grid-cols-2">
            {intro.claves.map((c, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-300">
                <Icon name="arrow" size={14} className="mt-0.5 shrink-0 text-steel-400" />
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
