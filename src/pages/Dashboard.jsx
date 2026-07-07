import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard.jsx'
import ModuleCard from '../components/ModuleCard.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import { ROTATION, MODULES } from '../data/modules.js'
import { DIAS } from '../data/dias.js'
import onboarding from '../data/onboarding.js'

export default function Dashboard() {
  const conContenido = DIAS.filter((d) => !d.pendiente).length
  const nFiguras = DIAS.reduce((a, d) => a + (d.figuras?.length || 0), 0)
  const nTools = DIAS.reduce((a, d) => a + (d.tools?.length || 0), 0)
  const nEvidencia = DIAS.reduce((a, d) => a + (d.evidence?.length || 0), 0)

  const stats = [
    { label: 'Módulos con contenido', value: conContenido, sub: `/${DIAS.length}`, icon: 'layers', tone: 'steel' },
    { label: 'Figuras & algoritmos', value: nFiguras, icon: 'image', tone: 'pearl' },
    { label: 'Herramientas', value: nTools, icon: 'sliders', tone: 'mint' },
    { label: 'Evidencia', value: nEvidencia, icon: 'book', tone: 'steel' },
  ]

  return (
    <div className="stagger space-y-10">
      {/* Hero */}
      <section>
        <p className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-steel-400">
          <span className="inline-block h-1 w-4 rounded-full bg-steel-400/60" />
          Referencia de UCI · onboarding + {MODULES.length} módulos
        </p>
        <h1 className="mt-2.5 text-[30px] font-semibold leading-[1.08] tracking-tightest text-ink-100 sm:text-[34px]">
          {ROTATION.title}
        </h1>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-300">{ROTATION.subtitle}</p>

        {/* Empieza por aquí — onboarding antes del currículo clínico */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-850 p-5 shadow-card sm:p-6">
          <div className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full bg-steel-400/10 blur-3xl" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3.5 sm:w-52 sm:shrink-0">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-steel-soft text-steel-300 ring-1 ring-steel-400/25">
                <Icon name="compass" size={21} />
              </div>
              <div className="leading-tight">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                  Empieza por aquí
                </p>
                <p className="mt-0.5 font-mono text-sm font-semibold text-steel-300">Inicio de la Rotación</p>
              </div>
            </div>
            <p className="flex-1 text-[14px] leading-relaxed text-ink-200">{onboarding.resumen}</p>
            <Button as={Link} to="/inicio" variant="primary" iconRight="arrow" className="shrink-0">
              Abrir onboarding
            </Button>
          </div>
        </div>
      </section>

      {/* Contenido del currículo */}
      <section>
        <h2 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
          Contenido del currículo
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Módulos clínicos */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-400">
            Módulos clínicos
          </h2>
          <Button as={Link} to="/temario" variant="ghost" size="sm" iconRight="arrow">
            Ver módulos
          </Button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/70 shadow-card">
          <ul className="divide-y divide-slate-700/40">
            {DIAS.map((d) => (
              <li key={d.dia} className="group">
                <ModuleCard
                  variant="row"
                  to={`/temario/${d.dia}`}
                  dia={d.dia}
                  titulo={d.titulo}
                  subtitulo={d.subtitulo}
                  pendiente={d.pendiente}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
