import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import Badge from './Badge.jsx'

// Tarjeta de módulo clínico reutilizable (sin seguimiento de completado).
//   variant="card"  → tarjeta completa (rejilla de Módulos clínicos)
//   variant="row"   → fila compacta (lista del Dashboard)
export default function ModuleCard({ to, dia, titulo, subtitulo, pendiente = false, variant = 'card' }) {
  const seal = (
    <div
      className={[
        'grid shrink-0 place-items-center rounded-xl font-mono font-semibold tabular transition-colors',
        variant === 'card' ? 'h-11 w-11 text-lg' : 'h-9 w-9 text-sm',
        pendiente
          ? 'bg-slate-900 text-ink-300 ring-1 ring-slate-700 group-hover:ring-slate-600'
          : 'bg-steel-400 text-slate-900 shadow-[0_6px_18px_-8px_rgba(143,167,196,0.6)]',
      ].join(' ')}
    >
      {dia}
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
          {subtitulo && (
            <p className="mt-0.5 truncate text-xs leading-relaxed text-ink-400">{subtitulo}</p>
          )}
        </div>
        {!pendiente && (
          <Badge tone="steel" dot className="shrink-0">
            Completo
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
              <span
                className={[
                  'rounded-full px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-wide ring-1',
                  pendiente
                    ? 'bg-slate-900 text-ink-400 ring-slate-700'
                    : 'bg-steel-soft text-steel-300 ring-steel-400/25',
                ].join(' ')}
              >
                {pendiente ? 'estructura' : 'referencia'}
              </span>
            </div>
            <h3 className="mt-1 text-[15px] font-semibold leading-snug tracking-tight text-ink-100">
              {titulo}
            </h3>
            {subtitulo && (
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-400">{subtitulo}</p>
            )}
          </div>
          <Icon
            name="arrow"
            size={17}
            className="mt-1 shrink-0 text-slate-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-steel-300"
          />
        </div>
      </div>
    </Link>
  )
}
