import Icon from '../Icon.jsx'

// PITFALLS — máximo 10 errores reales de UCI, una frase cada uno.
export default function Pitfalls({ items = [] }) {
  return (
    <div className="grid gap-2.5 md:grid-cols-2">
      {items.slice(0, 10).map((p, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-xl border border-terra-400/20 bg-terra-soft p-3.5"
        >
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-terra-400/15 text-terra-300 ring-1 ring-terra-400/25">
            <Icon name="close" size={13} strokeWidth={2.2} />
          </span>
          <p className="text-[13.5px] font-medium leading-snug text-ink-100">{p}</p>
        </div>
      ))}
    </div>
  )
}
