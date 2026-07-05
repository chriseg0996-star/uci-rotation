import PageHeader from '../components/PageHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function CasosClinicos() {
  return (
    <div>
      <PageHeader
        kicker="Razonamiento clínico"
        title="Casos clínicos"
        description="Casos interactivos con toma de decisiones progresiva y retroalimentación basada en evidencia, uno por cada módulo de la rotación."
      />
      <EmptyState
        icon="stethoscope"
        title="Casos clínicos en construcción"
        preview={[
          { icon: 'case', text: 'Datos clínicos, estudios y puntos de decisión' },
          { icon: 'compass', text: 'Ramificación según la conducta elegida' },
          { icon: 'gem', text: 'Retroalimentación basada en evidencia' },
          { icon: 'layers', text: 'Caso integrador multisistémico (Día 7)' },
        ]}
      >
        Formato de caso ramificado con datos clínicos, estudios y puntos de decisión. Culminará en
        el caso integrador multisistémico del Día 7.
      </EmptyState>
    </div>
  )
}
