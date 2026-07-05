import PageHeader from '../components/PageHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function Checklist() {
  return (
    <div>
      <PageHeader
        kicker="Competencias"
        title="Checklist"
        description="Listas de verificación de procedimientos y competencias por módulo: valoración hemodinámica, ajuste ventilatorio, protocolo de sepsis y más."
      />
      <EmptyState icon="check" title="Checklists en construcción">
        Aquí vivirán las listas de verificación por día con seguimiento de avance. El estado se
        guardará localmente en el navegador (localStorage) en la siguiente iteración.
      </EmptyState>
    </div>
  )
}
