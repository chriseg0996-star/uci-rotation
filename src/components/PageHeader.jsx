export default function PageHeader({ kicker, title, description, right }) {
  return (
    <div className="mb-6 flex items-end justify-between gap-6">
      <div>
        {kicker && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-icu-400">
            {kicker}
          </p>
        )}
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-ink-100">{title}</h1>
        {description && (
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-300">{description}</p>
        )}
      </div>
      {right}
    </div>
  )
}
