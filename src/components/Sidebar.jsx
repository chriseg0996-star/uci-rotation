import { NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'
import { NAV, ROTATION } from '../data/modules.js'
import { DIAS } from '../data/dias.js'

export default function Sidebar({ open = false, onClose = () => {} }) {
  const totalModulos = DIAS.length
  const count = DIAS.filter((d) => !d.pendiente).length
  const pct = totalModulos ? Math.round((count / totalModulos) * 100) : 0

  return (
    <>
      {/* Backdrop móvil */}
      <div
        onClick={onClose}
        className={[
          'fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        aria-hidden="true"
      />

      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 flex w-[268px] shrink-0 flex-col border-r border-slate-700/50 bg-slate-850',
          'transition-transform duration-300 ease-out lg:static lg:z-auto lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
        aria-label="Navegación principal"
      >
        {/* Marca */}
        <div className="flex items-center justify-between gap-3 px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-steel-400/25 to-steel-500/10 ring-1 ring-steel-400/30">
              <Icon name="pulse" size={19} className="text-steel-300" />
            </div>
            <div className="leading-tight">
              <p className="text-[13.5px] font-semibold tracking-tight text-ink-100">
                UCI Rotation
              </p>
              <p className="text-[10.5px] uppercase tracking-[0.14em] text-ink-400">
                Terapia Intensiva
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg text-ink-400 transition-colors hover:bg-slate-800 hover:text-ink-100 lg:hidden"
            aria-label="Cerrar menú"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2">
          <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
            Navegación
          </p>
          {NAV.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              end={item.path === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  'group relative flex items-center gap-3 rounded-lg px-3 py-2 text-[13.5px] font-medium transition-colors',
                  isActive
                    ? 'bg-steel-soft text-ink-100'
                    : 'text-ink-300 hover:bg-slate-800 hover:text-ink-100',
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-steel-400" />
                  )}
                  <Icon
                    name={item.icon}
                    size={18}
                    className={
                      isActive
                        ? 'text-steel-300'
                        : 'text-ink-400 transition-colors group-hover:text-ink-200'
                    }
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Pie: progreso + contexto de rotación */}
        <div className="border-t border-slate-700/50 p-4">
          <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-3.5">
            <div className="flex items-center justify-between">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                Módulos con contenido
              </p>
              <span className="font-mono text-[11px] tabular text-steel-300">
                {count}/{totalModulos}
              </span>
            </div>
            <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-slate-900 ring-1 ring-inset ring-slate-700/50">
              <div
                className="h-full rounded-full bg-steel-400 transition-[width] duration-700 ease-out"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-2.5 text-[11px] leading-snug text-ink-400">
              {ROTATION.audiencia.join(' · ')}
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
