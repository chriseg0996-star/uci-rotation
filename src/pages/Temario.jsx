import PageHeader from '../components/PageHeader.jsx'
import StatCard from '../components/StatCard.jsx'
import ModuleCard from '../components/ModuleCard.jsx'
import { DIAS } from '../data/dias.js'

export default function Temario() {
  const conContenido = DIAS.filter((d) => !d.pendiente).length

  return (
    <div>
      <PageHeader
        kicker="Currículo clínico"
        title="Módulos clínicos"
        description="Referencia de UCI por temas. Cada módulo abre como una app de bolsillo: overview de una pantalla, quick cards, figuras y algoritmos, high-yield, pitfalls, evidencia, herramientas y un caso interactivo."
        right={
          <div className="hidden w-48 sm:block">
            <StatCard
              label="Con contenido"
              value={conContenido}
              sub={`/${DIAS.length}`}
              icon="layers"
              tone="steel"
              hint="módulos disponibles"
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
            subtitulo={d.subtitulo}
            pendiente={d.pendiente}
          />
        ))}
      </div>
    </div>
  )
}
