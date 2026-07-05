// Compatibilidad: PearlCard/MistakeCard ahora delegan en los componentes canónicos
// del sistema de diseño (ICU Pearl / Clinical Warning).
import Pearl from '../Pearl.jsx'
import ClinicalWarning from '../ClinicalWarning.jsx'

export function PearlCard({ children }) {
  return <Pearl>{children}</Pearl>
}

export function MistakeCard({ children }) {
  return <ClinicalWarning>{children}</ClinicalWarning>
}
