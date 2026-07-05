import { Link } from 'react-router-dom'
import Card, { CardHeader } from '../components/Card.jsx'
import ProgressCard from '../components/ProgressCard.jsx'
import Icon from '../components/Icon.jsx'
import { ROTATION, MODULES, PROGRESS, TODAY } from '../data/modules.js'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-icu-400">
          Semana {ROTATION.week} de {ROTATION.totalWeeks}
        </p>
        <h1 className="mt-1.5 text-3xl font-semibold tracking-tight text-ink-100">
          {ROTATION.title}
        </h1>
        <p className="mt-1.5 text-[15px] text-ink-200">{ROTATION.subtitle}</p>

        {/* Objetivo del día */}
        <Card className="mt-5 overflow-hidden">
          <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3 sm:w-48 sm:shrink-0">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-icu-soft ring-1 ring-icu/25">
                <Icon name="spark" size={20} className="text-icu-400" />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  Objetivo de hoy
                </p>
                <p className="font-mono text-sm font-semibold text-icu-400">Día {TODAY.dia}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ink-200">{TODAY.objetivo}</p>
          </div>
        </Card>
      </section>

      {/* Progreso */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink-400">
          Progreso de la rotación
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PROGRESS.map((p) => (
            <ProgressCard key={p.key} {...p} />
          ))}
        </div>
      </section>

      {/* Módulos por día */}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-400">
            Módulos diarios
          </h2>
          <Link
            to="/temario"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-icu-400 hover:text-icu"
          >
            Ver temario completo
            <Icon name="arrow" size={14} />
          </Link>
        </div>

        <Card>
          <ul className="divide-y divide-navy-700/50">
            {MODULES.map((m) => {
              const isToday = m.dia === TODAY.dia
              return (
                <li key={m.dia}>
                 <Link
                  to={`/temario/${m.dia}`}
                  className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-navy-800/50"
                >
                  <div
                    className={[
                      'grid h-9 w-9 shrink-0 place-items-center rounded-lg font-mono text-sm font-semibold tabular',
                      isToday
                        ? 'bg-icu-500 text-white'
                        : 'bg-navy-900 text-ink-300 ring-1 ring-navy-700',
                    ].join(' ')}
                  >
                    {m.dia}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-ink-100">
                      Día {m.dia} · {m.titulo}
                    </p>
                    <p className="truncate text-xs text-ink-400">{m.objetivo}</p>
                  </div>
                  {isToday && (
                    <span className="shrink-0 rounded-full bg-icu-soft px-2.5 py-0.5 text-[11px] font-semibold text-icu-400 ring-1 ring-icu/25">
                      Hoy
                    </span>
                  )}
                 </Link>
                </li>
              )
            })}
          </ul>
        </Card>
      </section>
    </div>
  )
}
