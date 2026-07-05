import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import Badge from './Badge.jsx'

// Tarjeta de módulo diario reutilizable.
//   variant="card"  → tarjeta completa con metadatos (rejilla del Temario)
//   variant="row"   → fila compacta (lista del Dashboard)
export default function ModuleCard({
  to,
  dia,
  titulo,
  objetivo,
  done = false,
  today = false,
  pendiente = false,
  tiempoEstimado,
  objetivosCount,
  variant = 'card',
}) {
  // — Sello numérico / de estado del día
  const seal = (
    <div
      className={[
        'grid shrink-0 place-items-center rounded-xl font-mono font-semibold tabular transition-colors',
        variant === 'card' ? 'h-11 w-11 text-lg' : 'h-9 w-9 text-sm',
        done
          ? 'bg-mint-soft text-mint-300 ring-1 ring-mint-400/30'
          : today
            ? 'bg-steel-400 text-slate-900 shadow-[0_6px_18px_-8px_rgba(143,167,196,0.6)]'
            : 'bg-slate-900 text-ink-300 ring-1 ring-slate-700 group-hover:ring-slate-600',
      ].join(' ')}
    >
      {done ? <Icon name="badge" size={variant === 'card' ? 20 : 17} /> : dia}
    </div>
  )

  if (variant === 'row') {
    return (
      <Link
        to={to}
        className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-slate-800/60"
      >
        {seal}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-ink-100">
            <span className="font-mono text-ink-400">M{dia}</span>
            <span className="mx-1.5 text-slate-600">·</span>
            {titulo}
          </p>
          {objetivo && <p className="mt-0.5 truncate text-xs leading-relaxed text-ink-400">{objetivo}</p>}
        </div>
        {today && (
          <Badge tone="steel" dot className="shrink-0">
            Actual
          </Badge>
        )}
        <Icon
          name="chevron"
          size={16}
          className="shrink-0 text-slate-600 transition-colors group-hover:text-ink-300"
        />
      </Link>
    )
  }

  return (
    <Link to={to} className="group block h-full">
      <div className="flex h-full flex-col rounded-2xl border border-slate-700/60 bg-slate-800/70 p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-800 hover:shadow-card-hover">
        <div className="flex items-start gap-4">
          {seal}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                Módulo {dia}
              </p>
              {pendiente && (
                <span className="rounded-full bg-slate-900 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide text-ink-400 ring-1 ring-slate-700">
                  esquema
                </span>
              )}
            </div>
            <h3 className="mt-1 text-[15px] font-semibold leading-snug tracking-tight text-ink-100">
              {titulo}
            </h3>
          </div>
          <Icon
            name="arrow"
            size={17}
            className="mt-1 shrink-0 text-slate-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-steel-300"
          />
        </div>

        {(tiempoEstimado || objetivosCount != null) && (
          <div className="mt-4 flex items-center gap-4 border-t border-slate-700/50 pt-3.5 text-[11.5px] text-ink-400">
            {tiempoEstimado && (
              <span className="inline-flex items-center gap-1.5">
                <Icon name="clock" size={13} className="text-slate-500" />
                {tiempoEstimado}
              </span>
            )}
            {objetivosCount != null && (
              <span className="inline-flex items-center gap-1.5">
                <Icon name="target" size={13} className="text-slate-500" />
                {objetivosCount} objetivos
              </span>
            )}
            {done && (
              <span className="ml-auto inline-flex items-center gap-1.5 font-medium text-mint-300">
                <Icon name="check" size={13} />
                Completado
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  )
}
