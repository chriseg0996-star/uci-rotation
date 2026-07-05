import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Icon from './Icon.jsx'
import { NAV } from '../data/modules.js'

export default function Layout() {
  const { pathname } = useLocation()
  const [navOpen, setNavOpen] = useState(false)
  const mainRef = useRef(null)

  const current =
    NAV.find((n) => n.path === pathname) ||
    NAV.find((n) => n.path !== '/' && pathname.startsWith(n.path)) ||
    NAV[0]

  // Cerrar el drawer y volver al inicio del scroll al cambiar de ruta.
  useEffect(() => {
    setNavOpen(false)
    if (mainRef.current) mainRef.current.scrollTo({ top: 0 })
  }, [pathname])

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar open={navOpen} onClose={() => setNavOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Barra superior */}
        <header className="z-30 flex h-14 shrink-0 items-center justify-between gap-3 border-b border-slate-700/50 px-4 glass sm:px-6">
          <div className="flex min-w-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setNavOpen(true)}
              className="grid h-9 w-9 place-items-center rounded-lg text-ink-300 transition-colors hover:bg-slate-800 hover:text-ink-100 lg:hidden"
              aria-label="Abrir menú"
            >
              <Icon name="menu" size={19} />
            </button>
            <nav className="flex min-w-0 items-center gap-2 text-sm" aria-label="Ruta">
              <span className="hidden shrink-0 text-ink-400 sm:inline">UCI Rotation</span>
              <span className="hidden shrink-0 text-slate-600 sm:inline">/</span>
              <span className="truncate font-medium text-ink-100">{current.label}</span>
            </nav>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <span className="hidden items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-800/60 px-2.5 py-1 text-[11px] font-medium text-ink-300 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
              Modo residente
            </span>
            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-steel-400/30 to-steel-600/20 font-mono text-xs font-semibold text-steel-300 ring-1 ring-steel-400/25">
              R5
            </div>
          </div>
        </header>

        {/* Contenido */}
        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <div
            key={pathname}
            className="mx-auto max-w-6xl animate-fade-in px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
