// Encabezado de página estandarizado. Kicker (eyebrow), título de altura editorial,
// descripción legible y ranura derecha para métricas o acciones.
export default function PageHeader({ kicker, title, description, right }) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b border-slate-700/50 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
      <div className="min-w-0">
        {kicker && (
          <p className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-steel-400">
            <span className="inline-block h-1 w-4 rounded-full bg-steel-400/60" />
            {kicker}
          </p>
        )}
        <h1 className="mt-2.5 text-[26px] font-semibold leading-[1.1] tracking-tightest text-ink-100 sm:text-[30px]">
          {title}
        </h1>
        {description && (
          <p className="mt-2.5 max-w-2xl text-[14.5px] leading-relaxed text-ink-300">
            {description}
          </p>
        )}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  )
}
