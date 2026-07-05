import Icon from './Icon.jsx'

// Estado vacío con dirección clara (qué contendrá la sección), no un simple "próximamente".
export default function EmptyState({ icon = 'spark', title, children }) {
  return (
    <div className="grid place-items-center rounded-xl border border-dashed border-navy-700/70 bg-navy-900/40 px-6 py-16 text-center">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-icu-soft ring-1 ring-icu/25">
        <Icon name={icon} size={20} className="text-icu-400" />
      </div>
      <h3 className="text-[15px] font-semibold text-ink-100">{title}</h3>
      {children && <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-300">{children}</p>}
    </div>
  )
}
