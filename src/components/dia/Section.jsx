import Icon from '../Icon.jsx'

// Encabezado de sección reutilizable dentro de la página del día.
export default function Section({ icon, title, count, children, className = '' }) {
  return (
    <section className={`scroll-mt-20 ${className}`}>
      <div className="mb-4 flex items-center gap-2.5">
        {icon && (
          <span className="grid h-7 w-7 place-items-center rounded-md bg-navy-800 ring-1 ring-navy-700">
            <Icon name={icon} size={15} className="text-icu-400" />
          </span>
        )}
        <h2 className="text-lg font-semibold tracking-tight text-ink-100">{title}</h2>
        {count != null && (
          <span className="rounded-full bg-navy-800 px-2 py-0.5 font-mono text-[11px] text-ink-400 ring-1 ring-navy-700">
            {count}
          </span>
        )}
      </div>
      {children}
    </section>
  )
}
