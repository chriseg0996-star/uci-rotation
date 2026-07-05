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
        kicker="Currículo"
        title="Temario"
        description="Programa de 7 días. Cada módulo abre su propia página con objetivos, temas nucleares, perlas clínicas, errores frecuentes, un caso y repaso rápido."
        right={
          <div className="hidden w-48 sm:block">
            <StatCard
              label="Días completados"
              value={count}
              sub={`/${DIAS.length}`}
              icon={count >= DIAS.length ? 'badge' : 'layers'}
              tone={count >= DIAS.length ? 'mint' : 'steel'}
              hint={`${pct}% de la rotación`}
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
