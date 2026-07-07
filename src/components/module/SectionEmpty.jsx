import Icon from '../Icon.jsx'

// Estado vacío por sección: para módulos que aún adoptan la estructura sin contenido.
export default function SectionEmpty({ icon = 'layers', label }) {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-slate-700/70 bg-slate-800/30 px-6 py-14 text-center">
      <span className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-steel-soft text-steel-300 ring-1 ring-steel-400/25">
        <Icon name={icon} size={20} />
      </span>
      <p className="text-[14px] font-semibold text-ink-100">{label} en desarrollo</p>
      <p className="mt-1.5 max-w-sm text-[12.5px] leading-relaxed text-ink-400">
        Este módulo adoptará la misma estructura de referencia que Neuromonitoreo. Esta sección se
        poblará con su contenido clínico.
      </p>
    </div>
  )
}
