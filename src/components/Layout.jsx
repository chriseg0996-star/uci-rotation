import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import { NAV } from '../data/modules.js'

export default function Layout() {
  const { pathname } = useLocation()
  const current =
    NAV.find((n) => n.path === pathname) ||
    NAV.find((n) => n.path !== '/' && pathname.startsWith(n.path)) ||
    NAV[0]

  return (
    <div className="flex min-h-screen bg-navy-950">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Barra superior */}
        <header className="flex h-14 items-center justify-between border-b border-navy-700/50 bg-navy-900/60 px-6 backdrop-blur">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-ink-400">UCI Rotation</span>
            <span className="text-ink-400">/</span>
            <span className="font-medium text-ink-100">{current.label}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-ink-400 sm:inline">Modo residente</span>
            <div className="h-8 w-8 rounded-full bg-navy-700 ring-1 ring-navy-600" />
          </div>
        </header>

        {/* Contenido */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-6xl px-6 py-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
