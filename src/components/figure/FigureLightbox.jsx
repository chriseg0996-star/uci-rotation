import { useCallback, useEffect, useRef, useState } from 'react'
import Icon from '../Icon.jsx'
import { FigureBody } from './Figure.jsx'

// Lightbox de figura a pantalla completa: zoom (rueda, botones, doble clic), paneo,
// navegación previa/siguiente y control por teclado (Esc, ←, →, +, −).
const MIN = 1
const MAX = 4

export default function FigureLightbox({ figuras, index, onIndex, onClose }) {
  const figura = figuras[index]
  const [scale, setScale] = useState(1)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const drag = useRef(null)
  const zoomRef = useRef(null)

  const reset = useCallback(() => {
    setScale(1)
    setPos({ x: 0, y: 0 })
  }, [])

  const zoomBy = useCallback((delta) => {
    setScale((s) => {
      const next = Math.min(MAX, Math.max(MIN, +(s + delta).toFixed(2)))
      if (next === 1) setPos({ x: 0, y: 0 })
      return next
    })
  }, [])

  const go = useCallback(
    (dir) => {
      const n = figuras.length
      onIndex((index + dir + n) % n)
      reset()
    },
    [figuras.length, index, onIndex, reset],
  )

  // Teclado + bloqueo de scroll del cuerpo
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === '+' || e.key === '=') zoomBy(0.5)
      else if (e.key === '-') zoomBy(-0.5)
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [go, zoomBy, onClose])

  // Rueda para zoom (listener nativo no pasivo para poder preventDefault)
  useEffect(() => {
    const el = zoomRef.current
    if (!el) return
    const onWheel = (e) => {
      e.preventDefault()
      zoomBy(e.deltaY < 0 ? 0.3 : -0.3)
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [zoomBy])

  const onPointerDown = (e) => {
    if (scale <= 1) return
    drag.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
  }
  const onPointerMove = (e) => {
    if (!drag.current) return
    setPos({ x: e.clientX - drag.current.x, y: e.clientY - drag.current.y })
  }
  const onPointerUp = () => {
    drag.current = null
  }

  if (!figura) return null

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-slate-950/90 backdrop-blur-md" role="dialog" aria-modal="true">
      {/* Cabecera */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-700/50 px-4 py-3 sm:px-6">
        <div className="min-w-0">
          <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-steel-400">
            Figura {index + 1} / {figuras.length}
          </p>
          <p className="truncate text-[14px] font-semibold text-ink-100">{figura.titulo}</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-ink-300 transition-colors hover:bg-slate-800 hover:text-ink-100"
          aria-label="Cerrar"
        >
          <Icon name="close" size={20} />
        </button>
      </div>

      {/* Área de figura con zoom/paneo */}
      <div
        ref={zoomRef}
        onDoubleClick={() => (scale > 1 ? reset() : zoomBy(1))}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className="relative flex flex-1 items-center justify-center overflow-hidden p-4 sm:p-8"
        style={{ cursor: scale > 1 ? (drag.current ? 'grabbing' : 'grab') : 'zoom-in', touchAction: 'none' }}
      >
        {/* Navegación */}
        {figuras.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-slate-800/80 text-ink-200 ring-1 ring-slate-700 transition-colors hover:bg-slate-700 sm:left-4"
              aria-label="Anterior"
            >
              <Icon name="chevron" size={20} className="rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 z-10 grid h-11 w-11 place-items-center rounded-full bg-slate-800/80 text-ink-200 ring-1 ring-slate-700 transition-colors hover:bg-slate-700 sm:right-4"
              aria-label="Siguiente"
            >
              <Icon name="chevron" size={20} />
            </button>
          </>
        )}

        <div
          className="w-full max-w-3xl select-none rounded-xl bg-slate-800/70 ring-1 ring-slate-700/60"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transition: drag.current ? 'none' : 'transform 0.12s ease-out',
          }}
        >
          <FigureBody figura={figura} expanded />
        </div>
      </div>

      {/* Pie: caption + fuente + controles de zoom */}
      <div className="border-t border-slate-700/50 px-4 py-3 sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 max-w-2xl">
            {figura.caption && <p className="text-[12.5px] leading-relaxed text-ink-300">{figura.caption}</p>}
            {(figura.fuente || figura.ref || figura.doi) && (
              <p className="mt-1 text-[11px] text-ink-400">
                {figura.fuente}
                {figura.ref ? ` · ${figura.ref}` : ''}
                {figura.doi ? ` · doi:${figura.doi}` : ''}
              </p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <button type="button" onClick={() => zoomBy(-0.5)} disabled={scale <= MIN} className="grid h-8 w-8 place-items-center rounded-lg bg-slate-800 text-ink-300 ring-1 ring-slate-700 transition-colors hover:text-ink-100 disabled:opacity-40" aria-label="Alejar">
              <Icon name="plus" size={15} className="rotate-45" />
            </button>
            <span className="w-12 text-center font-mono text-[12px] tabular text-ink-300">{Math.round(scale * 100)}%</span>
            <button type="button" onClick={() => zoomBy(0.5)} disabled={scale >= MAX} className="grid h-8 w-8 place-items-center rounded-lg bg-slate-800 text-ink-300 ring-1 ring-slate-700 transition-colors hover:text-ink-100 disabled:opacity-40" aria-label="Acercar">
              <Icon name="plus" size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
