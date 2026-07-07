import Icon from '../Icon.jsx'
import DIAGRAMS from './diagrams.jsx'
import Flowchart from './Flowchart.jsx'
import FigureTable from './FigureTable.jsx'
import ImagePlaceholder from './ImagePlaceholder.jsx'

// Renderiza el contenido de una figura según su tipo. Reutilizado por la tarjeta y el lightbox.
// figura = { id, tipo, titulo, caption, fuente, ref, doi, ...específicos-del-tipo }
export function FigureBody({ figura, expanded = false }) {
  switch (figura.tipo) {
    case 'svg': {
      const Diagram = DIAGRAMS[figura.diagram]
      return (
        <div className={expanded ? 'p-2' : 'p-4'}>
          {Diagram ? <Diagram /> : <ImagePlaceholder modality="generic" titulo={figura.titulo} />}
        </div>
      )
    }
    case 'algorithm':
      return (
        <div className={expanded ? 'px-2 py-2' : 'px-4 py-3'}>
          <Flowchart flow={figura.flow} />
        </div>
      )
    case 'table':
      return (
        <div className={expanded ? 'p-1' : 'p-2'}>
          <FigureTable table={figura.table} />
        </div>
      )
    case 'gallery':
      return (
        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3">
          {figura.imagenes?.map((img, i) => (
            <ImagePlaceholder key={i} modality={img.modality} src={img.src} alt={img.alt} titulo={img.titulo} />
          ))}
        </div>
      )
    case 'image':
    default:
      return (
        <div className={expanded ? 'p-2' : 'p-3'}>
          <ImagePlaceholder modality={figura.modality} src={figura.src} alt={figura.alt} titulo={figura.titulo} />
        </div>
      )
  }
}

// Tarjeta de figura con encabezado, cuerpo, pie (caption + fuente/referencia) y botón de expandir.
export default function Figure({ figura, index, onExpand }) {
  return (
    <figure className="group flex flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/70 shadow-card">
      <div className="flex items-center justify-between border-b border-slate-700/50 px-4 py-2.5">
        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-steel-400">
          Figura {index}
        </span>
        <button
          type="button"
          onClick={onExpand}
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] font-medium text-ink-400 transition-colors hover:bg-slate-800 hover:text-ink-100"
          aria-label="Ampliar figura"
        >
          <Icon name="expand" size={14} />
          Ampliar
        </button>
      </div>

      <button
        type="button"
        onClick={onExpand}
        className="cursor-zoom-in bg-slate-900/40 transition-colors hover:bg-slate-900/20"
        aria-label={`Ampliar: ${figura.titulo}`}
      >
        <FigureBody figura={figura} />
      </button>

      <figcaption className="flex flex-1 flex-col gap-1 border-t border-slate-700/50 px-4 py-3">
        <p className="text-[13.5px] font-semibold leading-snug text-ink-100">{figura.titulo}</p>
        {figura.caption && (
          <p className="text-[12px] leading-relaxed text-ink-300">{figura.caption}</p>
        )}
        {(figura.fuente || figura.ref || figura.doi) && (
          <p className="mt-0.5 text-[11px] text-ink-400">
            {figura.fuente}
            {figura.ref ? ` · ${figura.ref}` : ''}
            {figura.doi ? ` · doi:${figura.doi}` : ''}
          </p>
        )}
      </figcaption>
    </figure>
  )
}
