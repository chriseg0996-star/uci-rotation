import PageHeader from '../components/PageHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function Evaluacion() {
  return (
    <div>
      <PageHeader
        kicker="Cierre de rotación"
        title="Evaluación"
        description="Examen final de la rotación con reactivos de opción múltiple, retroalimentación por tema y reporte de desempeño por sistema."
      />
      <EmptyState icon="clipboard" title="Evaluación final en construcción">
        Se habilitará al completar los módulos diarios. Generará un puntaje por dominio y
        recomendaciones de repaso dirigidas.
      </EmptyState>
    </div>
  )
}
