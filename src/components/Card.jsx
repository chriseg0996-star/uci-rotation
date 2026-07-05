// Superficie base reutilizable. `as` permite renderizar como section/article/etc.
export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag
      className={`rounded-xl border border-navy-700/60 bg-navy-800/70 shadow-card ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function CardHeader({ title, kicker, right, className = '' }) {
  return (
    <div className={`flex items-start justify-between gap-4 px-5 pt-4 ${className}`}>
      <div>
        {kicker && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-icu-400">
            {kicker}
          </p>
        )}
        {title && <h3 className="mt-0.5 text-[15px] font-semibold text-ink-100">{title}</h3>}
      </div>
      {right}
    </div>
  )
}
