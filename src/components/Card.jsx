// Superficie base reutilizable. `as` permite renderizar como section/article/etc.
// `interactive` añade estado hover elevado para tarjetas clicables.
export default function Card({
  as: Tag = 'div',
  className = '',
  interactive = false,
  children,
  ...rest
}) {
  return (
    <Tag
      className={[
        'rounded-2xl border border-slate-700/60 bg-slate-800/70 shadow-card',
        interactive &&
          'transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800 hover:shadow-card-hover',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function CardHeader({ title, kicker, right, className = '' }) {
  return (
    <div className={`flex items-start justify-between gap-4 px-5 pt-5 ${className}`}>
      <div className="min-w-0">
        {kicker && (
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-steel-400">
            {kicker}
          </p>
        )}
        {title && (
          <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-ink-100">{title}</h3>
        )}
      </div>
      {right}
    </div>
  )
}
