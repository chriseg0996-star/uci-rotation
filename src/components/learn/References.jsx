import Icon from '../Icon.jsx'

// Referencias / citas de guías. Componente preparado para citación futura:
// numeración estable, etiqueta de tipo, fuente, año y enlace opcional.
// referencias = [{ titulo, fuente, anio, tipo?, url? }]
const TIPOS = {
  guia: { label: 'Guía', cls: 'bg-steel-soft text-steel-300 ring-steel-400/25' },
  eca: { label: 'ECA', cls: 'bg-pearl-soft text-pearl-300 ring-pearl-400/25' },
  revision: { label: 'Revisión', cls: 'bg-slate-800 text-ink-300 ring-slate-700' },
  consenso: { label: 'Consenso', cls: 'bg-mint-soft text-mint-300 ring-mint-400/25' },
}

export default function References({ referencias = [] }) {
  if (!referencias.length) return null
  return (
    <ol className="space-y-2">
      {referencias.map((r, i) => {
        const tipo = TIPOS[r.tipo] || TIPOS.revision
        const Wrapper = r.url ? 'a' : 'div'
        const linkProps = r.url
          ? { href: r.url, target: '_blank', rel: 'noopener noreferrer' }
          : {}
        return (
          <li key={i}>
            <Wrapper
              {...linkProps}
              className={[
                'flex items-start gap-3.5 rounded-xl border border-slate-700/60 bg-slate-800/60 p-4 transition-colors',
                r.url ? 'group hover:border-slate-600 hover:bg-slate-800' : '',
              ].join(' ')}
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-slate-900 font-mono text-[11px] font-semibold tabular text-ink-400 ring-1 ring-slate-700">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ${tipo.cls}`}
                  >
                    {tipo.label}
                  </span>
                  <span className="text-[12.5px] text-ink-400">
                    {r.fuente}
                    {r.anio ? ` · ${r.anio}` : ''}
                  </span>
                </div>
                <p className="mt-1 text-[13.5px] font-medium leading-snug text-ink-100">
                  {r.titulo}
                </p>
              </div>
              {r.url && (
                <Icon
                  name="arrow"
                  size={16}
                  className="mt-0.5 shrink-0 -rotate-45 text-slate-600 transition-colors group-hover:text-steel-300"
                />
              )}
            </Wrapper>
          </li>
        )
      })}
    </ol>
  )
}
