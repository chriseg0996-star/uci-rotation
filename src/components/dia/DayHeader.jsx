import Icon from '../Icon.jsx'
import Badge from '../Badge.jsx'

export default function DayHeader({ dia, titulo, tiempoEstimado, completo, eyebrow, icon }) {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-850 p-6 shadow-card sm:p-7">
      {/* Trazo de monitor: firma visual de la unidad */}
      <svg
        className="pointer-events-none absolute -right-4 top-1/2 h-28 w-72 -translate-y-1/2 text-steel-400/[0.09]"
        viewBox="0 0 240 80"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 40h56l8-24 12 48 10-40 7 16h20l6-12 10 24h95"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Halo superior */}
      <div className="pointer-events-none absolute -left-10 -top-16 h-40 w-40 rounded-full bg-steel-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
        <div
          className={[
            'grid h-14 w-14 shrink-0 place-items-center rounded-2xl font-mono text-2xl font-semibold shadow-lg',
            completo
              ? 'bg-mint-soft text-mint-300 ring-1 ring-mint-400/30 shadow-mint-400/10'
              : 'bg-steel-400 text-slate-900 shadow-steel-400/20',
          ].join(' ')}
        >
          {completo ? <Icon name="badge" size={26} /> : icon ? <Icon name={icon} size={26} /> : dia}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-steel-400">
            {eyebrow ?? `Módulo ${dia}`}
          </p>
          <h1 className="mt-1.5 text-[24px] font-semibold leading-[1.12] tracking-tightest text-ink-100 sm:text-[28px]">
            {titulo}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge tone="neutral" icon="clock">
              {tiempoEstimado} de estudio
            </Badge>
            {completo ? (
              <Badge tone="mint" icon="badge">
                Completado
              </Badge>
            ) : (
              <Badge tone="neutral" dot>
                En progreso
              </Badge>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
