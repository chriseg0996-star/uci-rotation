import Icon from './Icon.jsx'

// ICU Pearl — perla clínica de alto rendimiento. Ámbar/oro (insight), gema como sello.
// `label` opcional para contexto; por defecto sin cabecera para reducir ruido.
export default function Pearl({ children, label }) {
  return (
    <div className="group relative flex gap-3.5 overflow-hidden rounded-xl border border-pearl-400/20 bg-pearl-soft p-4">
      <span className="absolute inset-y-0 left-0 w-[3px] bg-pearl-400/70" />
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-pearl-400/15 text-pearl-300 ring-1 ring-pearl-400/25 transition-transform duration-200 group-hover:scale-105">
        <Icon name="gem" size={15} />
      </span>
      <div className="min-w-0">
        {label && (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-pearl-400">
            {label}
          </p>
        )}
        <p className="text-[13.5px] leading-relaxed text-ink-100">{children}</p>
      </div>
    </div>
  )
}
