import Icon from '../Icon.jsx'

// FURTHER READING — opcional, nunca obligatorio. Enlaces externos de profundización.
// items = [{ titulo, fuente, url }]
export default function FurtherReading({ items = [] }) {
  return (
    <div className="space-y-3">
      <p className="text-[12px] text-ink-400">Opcional · para profundizar fuera del punto de atención.</p>
      <div className="grid gap-2.5">
        {items.map((r, i) => {
          const Wrapper = r.url ? 'a' : 'div'
          const props = r.url ? { href: r.url, target: '_blank', rel: 'noopener noreferrer' } : {}
          return (
            <Wrapper
              key={i}
              {...props}
              className={[
                'flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/60 px-4 py-3',
                r.url ? 'group transition-colors hover:border-slate-600 hover:bg-slate-800' : '',
              ].join(' ')}
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-900 text-ink-400 ring-1 ring-slate-700">
                <Icon name="book" size={15} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13.5px] font-medium leading-snug text-ink-100">{r.titulo}</p>
                {r.fuente && <p className="text-[11.5px] text-ink-400">{r.fuente}</p>}
              </div>
              {r.url && (
                <Icon name="external" size={15} className="shrink-0 text-slate-600 transition-colors group-hover:text-steel-300" />
              )}
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}
