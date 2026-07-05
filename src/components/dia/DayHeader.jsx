import Icon from '../Icon.jsx'

export default function DayHeader({ dia, titulo, tiempoEstimado, completo }) {
  return (
    <header className="relative overflow-hidden rounded-2xl border border-navy-700/60 bg-gradient-to-br from-navy-800 to-navy-900 p-6 shadow-card sm:p-7">
      {/* Trazo de vital sutil */}
      <svg
        className="pointer-events-none absolute -right-6 top-1/2 h-24 w-64 -translate-y-1/2 text-icu/10"
        viewBox="0 0 240 80"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 40h60l10-26 14 52 12-40 8 14h116"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-icu-500 font-mono text-2xl font-semibold text-white shadow-lg shadow-icu/20">
          {dia}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-icu-400">
            Día {dia} · Módulo diario
          </p>
          <h1 className="mt-1 text-2xl font-semibold leading-tight tracking-tight text-ink-100 sm:text-[28px]">
            {titulo}
          </h1>
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-900/70 px-2.5 py-1 text-xs text-ink-300 ring-1 ring-navy-700">
              <Icon name="clock" size={13} className="text-ink-400" />
              {tiempoEstimado} de estudio
            </span>
            <CompletionBadge completo={completo} />
          </div>
        </div>
      </div>
    </header>
  )
}

function CompletionBadge({ completo }) {
  if (completo) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-vital-green/15 px-2.5 py-1 text-xs font-semibold text-vital-green ring-1 ring-vital-green/30">
        <Icon name="badge" size={13} />
        Completado
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-900/70 px-2.5 py-1 text-xs text-ink-400 ring-1 ring-navy-700">
      En progreso
    </span>
  )
}
