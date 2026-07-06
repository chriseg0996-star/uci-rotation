import PageHeader from '../components/PageHeader.jsx'
import StatCard from '../components/StatCard.jsx'
import ModuleCard from '../components/ModuleCard.jsx'
import { DIAS } from '../data/dias.js'
import { useCompletion } from '../hooks/useCompletion.js'

export default function Temario() {
  const { isComplete, count } = useCompletion()
  const pct = DIAS.length ? Math.round((count / DIAS.length) * 100) : 0

  return (
    <div>
      <PageHeader
        kicker="Currículo clínico"
        title="Módulos clínicos"
        description="8 módulos temáticos de UCI. Completa antes el Inicio de la Rotación. Cada módulo abre su propia página con introducción, lecciones nucleares, perlas clínicas, errores frecuentes, habilidades, caso interactivo, autoevaluación y referencias."
        right={
          <div className="hidden w-48 sm:block">
            <StatCard
              label="Módulos completados"
              value={count}
              sub={`/${DIAS.length}`}
              icon={count >= DIAS.length ? 'badge' : 'layers'}
              tone={count >= DIAS.length ? 'mint' : 'steel'}
              hint={`${pct}% del currículo`}
            />
          </div>
        }
      />

      <div className="stagger grid gap-4 md:grid-cols-2">
        {DIAS.map((d) => (
          <ModuleCard
            key={d.dia}
            to={`/temario/${d.dia}`}
            dia={d.dia}
            titulo={d.titulo}
            done={isComplete(d.dia)}
            pendiente={d.pendiente}
            tiempoEstimado={d.tiempoEstimado}
            objetivosCount={d.objetivos.length}
          />
        ))}
      </div>
    </div>
  )
}
