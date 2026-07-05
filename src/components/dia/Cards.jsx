import Icon from '../Icon.jsx'

// Tarjeta de perla clínica (azul, alto rendimiento).
export function PearlCard({ children }) {
  return (
    <div className="flex gap-3 rounded-xl border border-icu/25 bg-icu-soft p-4">
      <Icon name="bulb" size={18} className="mt-0.5 shrink-0 text-icu-400" />
      <p className="text-sm leading-relaxed text-ink-100">{children}</p>
    </div>
  )
}

// Tarjeta de error frecuente (rojo, advertencia).
export function MistakeCard({ children }) {
  return (
    <div className="flex gap-3 rounded-xl border border-vital-red/25 bg-vital-red/10 p-4">
      <Icon name="alert" size={18} className="mt-0.5 shrink-0 text-vital-red" />
      <p className="text-sm leading-relaxed text-ink-100">{children}</p>
    </div>
  )
}
