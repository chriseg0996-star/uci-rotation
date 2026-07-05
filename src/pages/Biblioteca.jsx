import PageHeader from '../components/PageHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function Biblioteca() {
  return (
    <div>
      <PageHeader
        kicker="Recursos"
        title="Biblioteca"
        description="Guías, artículos clave y protocolos de referencia: Surviving Sepsis, ARDSNet, KDIGO, PROSEVA y las escalas de uso diario en la unidad."
      />
      <EmptyState icon="library" title="Biblioteca en construcción">
        Repositorio curado de evidencia y protocolos institucionales, organizado por módulo y con
        citas verificables.
      </EmptyState>
    </div>
  )
}
