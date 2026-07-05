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
      <EmptyState
        icon="clipboard"
        title="Evaluación final en construcción"
        preview={[
          { icon: 'list', text: 'Reactivos de opción múltiple por dominio' },
          { icon: 'gem', text: 'Retroalimentación dirigida por tema' },
          { icon: 'target', text: 'Puntaje de desempeño por sistema' },
          { icon: 'badge', text: 'Se habilita al completar los módulos diarios' },
        ]}
      >
        Examen final con reporte por dominio y recomendaciones de repaso dirigidas.
      </EmptyState>
    </div>
  )
}
