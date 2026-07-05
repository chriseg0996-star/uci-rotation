import PageHeader from '../components/PageHeader.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function Calculadoras() {
  return (
    <div>
      <PageHeader
        kicker="Herramientas"
        title="Calculadoras"
        description="Calculadoras clínicas de cabecera: transporte de oxígeno, gasometría, driving pressure, aclaramiento de lactato, dosis de vasopresores e infusiones."
      />
      <EmptyState
        icon="calc"
        title="Calculadoras clínicas en construcción"
        preview={[
          { icon: 'pulse', text: 'Transporte de oxígeno (DO₂ / VO₂)' },
          { icon: 'compass', text: 'Interpretación de gasometría' },
          { icon: 'layers', text: 'Driving pressure y presión meseta' },
          { icon: 'calc', text: 'Dosis de vasopresores e infusiones' },
        ]}
      >
        Módulo de cálculo con validación de entradas y resultados accionables. Cada calculadora
        requerirá pulsar “Calcular” de forma explícita, según el flujo de UCI Tools.
      </EmptyState>
    </div>
  )
}
