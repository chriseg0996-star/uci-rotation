import Icon from '../Icon.jsx'

// HIGH-YIELD — máximo 10 perlas, una frase cada una.
export default function HighYield({ items = [] }) {
  return (
    <div className="grid gap-2.5 md:grid-cols-2">
      {items.slice(0, 10).map((p, i) => (
        <div
          key={i}
          className="flex items-start gap-3 rounded-xl border border-pearl-400/20 bg-pearl-soft p-3.5"
        >
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-pearl-400/15 text-pearl-300 ring-1 ring-pearl-400/25">
            <Icon name="gem" size={13} />
          </span>
          <p className="text-[13.5px] font-medium leading-snug text-ink-100">{p}</p>
        </div>
      ))}
    </div>
  )
}
