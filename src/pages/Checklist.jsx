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
      <EmptyState
        icon="check"
        title="Checklists en construcción"
        preview={[
          { icon: 'target', text: 'Valoración hemodinámica y respuesta a volumen' },
          { icon: 'pulse', text: 'Ajuste de ventilación protectora' },
          { icon: 'flame', text: 'Paquete de la primera hora en sepsis' },
          { icon: 'badge', text: 'Seguimiento de avance persistente (localStorage)' },
        ]}
      >
        Listas de verificación por día con seguimiento de avance. El estado se guardará localmente
        en el navegador en la siguiente iteración.
      </EmptyState>
    </div>
  )
}
