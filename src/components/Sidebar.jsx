import { NavLink } from 'react-router-dom'
import Icon from './Icon.jsx'
import { NAV, ROTATION } from '../data/modules.js'

export default function Sidebar() {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-navy-700/50 bg-navy-850">
      {/* Marca */}
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-icu-soft ring-1 ring-icu/30">
          <Icon name="pulse" size={20} className="text-icu-400" />
        </div>
        <div className="leading-tight">
          <p className="text-sm font-semibold tracking-tight text-ink-100">UCI Rotation</p>
          <p className="text-[11px] text-ink-400">Terapia Intensiva</p>
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex-1 space-y-1 px-3">
        {NAV.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              [
                'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-icu-soft text-ink-100 ring-1 ring-icu/25'
                  : 'text-ink-300 hover:bg-navy-800 hover:text-ink-100',
              ].join(' ')
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  name={item.icon}
                  size={18}
                  className={isActive ? 'text-icu-400' : 'text-ink-400 group-hover:text-ink-200'}
                />
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Pie: contexto de rotación */}
      <div className="border-t border-navy-700/50 px-5 py-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-400">
          Semana {ROTATION.week}
        </p>
        <p className="mt-1 text-xs leading-snug text-ink-300">
          {ROTATION.audiencia.join(' · ')}
        </p>
      </div>
    </aside>
  )
}
