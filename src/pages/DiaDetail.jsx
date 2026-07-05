import { useParams, Link, useNavigate } from 'react-router-dom'
import { getDia, DIAS } from '../data/dias.js'
import { useCompletion } from '../hooks/useCompletion.js'
import Icon from '../components/Icon.jsx'
import DayHeader from '../components/dia/DayHeader.jsx'
import Section from '../components/dia/Section.jsx'
import CollapsibleTopic from '../components/dia/CollapsibleTopic.jsx'
import { PearlCard, MistakeCard } from '../components/dia/Cards.jsx'
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
      <div className="py-16 text-center">
        <p className="text-sm text-ink-300">Ese día no existe.</p>
        <Link to="/temario" className="mt-3 inline-block text-sm text-icu-400 hover:text-icu">
          Volver al temario
        </Link>
      </div>
    )
  }

  const completo = isComplete(data.dia)
  const prev = DIAS.find((d) => d.dia === data.dia - 1)
  const next = DIAS.find((d) => d.dia === data.dia + 1)

  return (
    <div className="space-y-8">
      {/* Volver */}
      <Link
        to="/temario"
        className="inline-flex items-center gap-1.5 text-sm text-ink-400 transition-colors hover:text-ink-100"
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
      <Section icon="target" title="Objetivos de aprendizaje">
        <ul className="grid gap-3 sm:grid-cols-2">
          {data.objetivos.map((o, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-navy-700/60 bg-navy-800/50 p-4"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-icu-soft font-mono text-xs font-semibold text-icu-400 ring-1 ring-icu/25">
                {i + 1}
              </span>
              <p className="pt-0.5 text-sm leading-relaxed text-ink-200">{o}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Temas nucleares */}
      <Section icon="list" title="Temas nucleares" count={data.temas.length}>
        <div className="space-y-3">
          {data.temas.map((t, i) => (
            <CollapsibleTopic
              key={i}
              titulo={t.titulo}
              puntos={t.puntos}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </Section>

      {/* Perlas */}
      {data.pearls.length > 0 && (
        <Section icon="bulb" title="ICU Pearls" count={data.pearls.length}>
          <div className="grid gap-3 md:grid-cols-2">
            {data.pearls.map((p, i) => (
              <PearlCard key={i}>{p}</PearlCard>
            ))}
          </div>
        </Section>
      )}

      {/* Errores frecuentes */}
      {data.errores.length > 0 && (
        <Section icon="alert" title="Errores frecuentes" count={data.errores.length}>
          <div className="grid gap-3 md:grid-cols-2">
            {data.errores.map((e, i) => (
              <MistakeCard key={i}>{e}</MistakeCard>
            ))}
          </div>
        </Section>
      )}

      {/* Caso clínico */}
      {data.caso && (
        <Section icon="case" title="Caso clínico">
          <ClinicalCase caso={data.caso} />
        </Section>
      )}

      {/* Repaso rápido */}
      {data.quickReview.length > 0 && (
        <Section icon="badge" title="Repaso rápido">
          <QuickReview points={data.quickReview} />
        </Section>
      )}

      {/* Contenido pendiente */}
      {data.pendiente && (
        <div className="rounded-xl border border-dashed border-navy-700/70 bg-navy-900/40 px-5 py-8 text-center text-sm text-ink-300">
          Contenido detallado de este módulo en construcción. La estructura ya está lista para
          poblarse con el mismo formato del Día 1.
        </div>
      )}

      {/* Acción + navegación entre días */}
      <div className="flex flex-col gap-4 border-t border-navy-700/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <CompleteButton completo={completo} onToggle={() => toggle(data.dia)} />
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={!prev}
            onClick={() => prev && navigate(`/temario/${prev.dia}`)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-700 px-3 py-2 text-sm text-ink-300 transition-colors hover:bg-navy-800 disabled:opacity-40"
          >
            <Icon name="back" size={14} />
            Día {data.dia - 1}
          </button>
          <button
            type="button"
            disabled={!next}
            onClick={() => next && navigate(`/temario/${next.dia}`)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-navy-700 px-3 py-2 text-sm text-ink-300 transition-colors hover:bg-navy-800 disabled:opacity-40"
          >
            Día {data.dia + 1}
            <Icon name="arrow" size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
