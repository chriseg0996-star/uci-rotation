import { useParams, Link, useNavigate } from 'react-router-dom'
import { getDia, DIAS } from '../data/dias.js'
import { useCompletion } from '../hooks/useCompletion.js'
import Icon from '../components/Icon.jsx'
import Button from '../components/Button.jsx'
import EmptyState from '../components/EmptyState.jsx'
import DayHeader from '../components/dia/DayHeader.jsx'
import Section from '../components/dia/Section.jsx'
import CollapsibleTopic from '../components/dia/CollapsibleTopic.jsx'
import Pearl from '../components/Pearl.jsx'
import ClinicalWarning from '../components/ClinicalWarning.jsx'
import ClinicalCase from '../components/dia/ClinicalCase.jsx'
import QuickReview from '../components/dia/QuickReview.jsx'
import CompleteButton from '../components/dia/CompleteButton.jsx'

export default function DiaDetail() {
  const { dia } = useParams()
  const navigate = useNavigate()
  const data = getDia(dia)
  const { isComplete, toggle } = useCompletion()

  if (!data) {
    return (
      <EmptyState
        icon="compass"
        tone="terra"
        status="Sin resultados"
        title="Ese día no existe"
        action={
          <Button as={Link} to="/temario" variant="secondary" icon="back">
            Volver al temario
          </Button>
        }
      >
        El módulo que buscas no forma parte del programa de 7 días de la rotación.
      </EmptyState>
    )
  }

  const completo = isComplete(data.dia)
  const prev = DIAS.find((d) => d.dia === data.dia - 1)
  const next = DIAS.find((d) => d.dia === data.dia + 1)

  return (
    <div className="space-y-9">
      {/* Volver */}
      <Link
        to="/temario"
        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-400 transition-colors hover:text-ink-100"
      >
        <Icon name="back" size={15} />
        Temario
      </Link>

      <DayHeader
        dia={data.dia}
        titulo={data.titulo}
        tiempoEstimado={data.tiempoEstimado}
        completo={completo}
      />

      {/* Objetivos */}
      <Section icon="target" title="Objetivos de aprendizaje" tone="steel">
        <ul className="grid gap-3 sm:grid-cols-2">
          {data.objetivos.map((o, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 p-4 transition-colors hover:border-slate-600"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-steel-soft font-mono text-xs font-semibold tabular text-steel-300 ring-1 ring-steel-400/25">
                {i + 1}
              </span>
              <p className="pt-0.5 text-[13.5px] leading-relaxed text-ink-200">{o}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Temas nucleares */}
      <Section icon="list" title="Temas nucleares" count={data.temas.length} tone="steel">
        <div className="space-y-3">
          {data.temas.map((t, i) => (
            <CollapsibleTopic key={i} titulo={t.titulo} puntos={t.puntos} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      {/* Perlas */}
      {data.pearls.length > 0 && (
        <Section icon="gem" title="ICU Pearls" count={data.pearls.length} tone="pearl">
          <div className="grid gap-3 md:grid-cols-2">
            {data.pearls.map((p, i) => (
              <Pearl key={i}>{p}</Pearl>
            ))}
          </div>
        </Section>
      )}

      {/* Errores frecuentes */}
      {data.errores.length > 0 && (
        <Section icon="alert" title="Errores frecuentes" count={data.errores.length} tone="terra">
          <div className="grid gap-3 md:grid-cols-2">
            {data.errores.map((e, i) => (
              <ClinicalWarning key={i}>{e}</ClinicalWarning>
            ))}
          </div>
        </Section>
      )}

      {/* Caso clínico */}
      {data.caso && (
        <Section icon="case" title="Caso clínico" tone="steel">
          <ClinicalCase caso={data.caso} />
        </Section>
      )}

      {/* Repaso rápido */}
      {data.quickReview.length > 0 && (
        <Section icon="badge" title="Repaso rápido" tone="mint">
          <QuickReview points={data.quickReview} />
        </Section>
      )}

      {/* Contenido pendiente */}
      {data.pendiente && (
        <EmptyState
          icon="layers"
          tone="steel"
          status="En desarrollo"
          title="Contenido detallado en construcción"
        >
          La estructura de este módulo ya está lista para poblarse con el mismo formato del Día 1:
          objetivos, temas nucleares, perlas clínicas, errores frecuentes, caso y repaso rápido.
        </EmptyState>
      )}

      {/* Acción + navegación entre días */}
      <div className="flex flex-col gap-4 border-t border-slate-700/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <CompleteButton completo={completo} onToggle={() => toggle(data.dia)} />
        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            disabled={!prev}
            onClick={() => prev && navigate(`/temario/${prev.dia}`)}
            icon="back"
          >
            Día {data.dia - 1}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            disabled={!next}
            onClick={() => next && navigate(`/temario/${next.dia}`)}
            iconRight="arrow"
          >
            Día {data.dia + 1}
          </Button>
        </div>
      </div>
    </div>
  )
}
