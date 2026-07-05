import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Card from '../components/Card.jsx'
import Icon from '../components/Icon.jsx'
import { DIAS } from '../data/dias.js'
import { useCompletion } from '../hooks/useCompletion.js'

export default function Temario() {
  const { isComplete, count } = useCompletion()

  return (
    <div>
      <PageHeader
        kicker="Currículo"
        title="Temario"
        description="Programa de 7 días. Cada módulo abre su propia página con objetivos, temas nucleares, perlas clínicas, errores frecuentes, un caso y repaso rápido."
        right={
          <div className="hidden shrink-0 rounded-xl border border-navy-700/60 bg-navy-800/60 px-4 py-3 text-right sm:block">
            <p className="font-mono text-2xl font-semibold tabular text-ink-100">
              {count}
              <span className="text-base text-ink-400">/{DIAS.length}</span>
            </p>
            <p className="text-[11px] text-ink-400">días completados</p>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {DIAS.map((d) => {
          const done = isComplete(d.dia)
          return (
            <Link key={d.dia} to={`/temario/${d.dia}`} className="group block">
              <Card className="h-full p-5 transition-all duration-200 hover:border-icu/40 hover:bg-navy-800">
                <div className="flex items-start gap-4">
                  <div
                    className={[
                      'grid h-11 w-11 shrink-0 place-items-center rounded-xl font-mono text-lg font-semibold',
                      done
                        ? 'bg-vital-green/15 text-vital-green ring-1 ring-vital-green/30'
                        : 'bg-icu-soft text-icu-400 ring-1 ring-icu/25',
                    ].join(' ')}
                  >
                    {done ? <Icon name="badge" size={20} /> : d.dia}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                      Día {d.dia}
                      {d.pendiente && ' · esquema'}
                    </p>
                    <h3 className="mt-0.5 text-[15px] font-semibold leading-snug text-ink-100">
                      {d.titulo}
                    </h3>
                    <div className="mt-2 flex items-center gap-3 text-xs text-ink-400">
                      <span className="inline-flex items-center gap-1">
                        <Icon name="clock" size={12} />
                        {d.tiempoEstimado}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Icon name="target" size={12} />
                        {d.objetivos.length} objetivos
                      </span>
                    </div>
                  </div>
                  <Icon
                    name="arrow"
                    size={18}
                    className="mt-1 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:text-icu-400"
                  />
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
