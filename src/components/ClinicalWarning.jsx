import Icon from './Icon.jsx'

// Clinical Warning — advertencia clínica / error frecuente / patología. Terracota (precaución).
export default function ClinicalWarning({ children, label }) {
  return (
    <div className="group relative flex gap-3.5 overflow-hidden rounded-xl border border-terra-400/20 bg-terra-soft p-4">
      <span className="absolute inset-y-0 left-0 w-[3px] bg-terra-400/70" />
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-terra-400/15 text-terra-300 ring-1 ring-terra-400/25">
        <Icon name="alert" size={15} />
      </span>
      <div className="min-w-0">
        {label && (
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-terra-400">
            {label}
          </p>
        )}
        <p className="text-[13.5px] leading-relaxed text-ink-100">{children}</p>
      </div>
    </div>
  )
}
