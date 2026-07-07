import { useState } from 'react'
import Figure from './Figure.jsx'
import FigureLightbox from './FigureLightbox.jsx'

// Galería de figuras responsiva con lightbox compartido (navegación previa/siguiente
// entre todas las figuras del módulo). Reutilizable en cualquier módulo.
export default function FigureGallery({ figuras = [] }) {
  const [open, setOpen] = useState(null)

  if (!figuras.length) return null

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {figuras.map((figura, i) => (
          <Figure key={figura.id || i} figura={figura} index={i + 1} onExpand={() => setOpen(i)} />
        ))}
      </div>

      {open != null && (
        <FigureLightbox figuras={figuras} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />
      )}
    </>
  )
}
