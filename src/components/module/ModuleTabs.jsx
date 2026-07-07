import Icon from '../Icon.jsx'

// Navegación por secciones tipo segmentos, pegajosa y desplazable en móvil.
// Presentacional: el estado activo lo gobierna la página (vía ?s= en la URL).
export default function ModuleTabs({ tabs, active, onChange }) {
  return (
    <div className="sticky top-0 z-20 -mx-4 border-b border-slate-700/50 glass px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        className="flex gap-1 overflow-x-auto py-2"
        style={{ scrollbarWidth: 'none' }}
        role="tablist"
        aria-label="Secciones del módulo"
      >
        {tabs.map((t) => {
          const isActive = active === t.id
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(t.id)}
              className={[
                'inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-[12.5px] font-medium transition-colors',
                isActive
                  ? 'bg-steel-soft text-ink-100 ring-1 ring-steel-400/25'
                  : 'text-ink-400 hover:bg-slate-800 hover:text-ink-200',
              ].join(' ')}
            >
              <Icon
                name={t.icon}
                size={15}
                className={isActive ? 'text-steel-300' : 'text-slate-500'}
              />
              {t.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
