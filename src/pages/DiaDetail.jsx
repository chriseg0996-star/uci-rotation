import { useParams, Link, useNavigate } from 'react-router-dom'
import { getDia, DIAS } from '../data/dias.js'
import { useCompletion } from '../hooks/useCompletion.js'
import Icon from '../components/Icon.jsx'
import Button from '../components/Button.jsx'
import EmptyState from '../components/EmptyState.jsx'
import DayHeader from '../components/dia/DayHeader.jsx'
import Section from '../components/dia/Section.jsx'
import Pearl from '../components/Pearl.jsx'
import ClinicalWarning from '../components/ClinicalWarning.jsx'
import QuickReview from '../components/dia/QuickReview.jsx'
import CompleteButton from '../components/dia/CompleteButton.jsx'
import Introduction from '../components/learn/Introduction.jsx'
import Lesson from '../components/learn/Lesson.jsx'
import SkillsChecklist from '../components/learn/SkillsChecklist.jsx'
import InteractiveCase from '../components/learn/InteractiveCase.jsx'
import Quiz from '../components/learn/Quiz.jsx'
import References from '../components/learn/References.jsx'

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
        title="Ese módulo no existe"
        action={
          <Button as={Link} to="/temario" variant="secondary" icon="back">
            Volver al temario
          </Button>
        }
      >
        El módulo que buscas no forma parte del currículo de 8 módulos de la rotación.
      </EmptyState>
    )
  }

  const completo = isComplete(data.dia)
  const prev = DIAS.find((d) => d.dia === data.dia - 1)
  const next = DIAS.find((d) => d.dia === data.dia + 1)

  const lecciones = data.lecciones || []
  const pearls = data.pearls || []
  const errores = data.errores || []
  const skills = data.skills || []
  const quiz = data.quiz || []
  const referencias = data.referencias || []
  const quickReview = data.quickReview || []

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

      {/* 1 — Introducción */}
      <Introduction intro={data.intro} />

      {/* 2 — Objetivos de aprendizaje */}
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

      {/* 3 — Lecciones nucleares */}
      {lecciones.length > 0 && (
        <Section icon="book" title="Lecciones nucleares" count={lecciones.length} tone="steel">
          <div className="space-y-3">
            {lecciones.map((l, i) => (
              <Lesson key={l.id || i} index={i + 1} leccion={l} defaultOpen={i === 0} />
            ))}
          </div>
        </Section>
      )}

      {/* 4 — ICU Pearls */}
      {pearls.length > 0 && (
        <Section icon="gem" title="ICU Pearls" count={pearls.length} tone="pearl">
          <div className="grid gap-3 md:grid-cols-2">
            {pearls.map((p, i) => (
              <Pearl key={i}>{p}</Pearl>
            ))}
          </div>
        </Section>
      )}

      {/* 5 — Errores frecuentes */}
      {errores.length > 0 && (
        <Section icon="alert" title="Errores frecuentes" count={errores.length} tone="terra">
          <div className="grid gap-3 md:grid-cols-2">
            {errores.map((e, i) => (
              <ClinicalWarning key={i}>{e}</ClinicalWarning>
            ))}
          </div>
        </Section>
      )}

      {/* 6 — Habilidades prácticas */}
      {skills.length > 0 && (
        <Section icon="check" title="Habilidades prácticas" count={skills.length} tone="mint">
          <SkillsChecklist dia={data.dia} items={skills} />
        </Section>
      )}

      {/* 7 — Caso clínico interactivo */}
      {data.caso && (
        <Section icon="stethoscope" title="Caso clínico interactivo" tone="steel">
          <InteractiveCase caso={data.caso} />
        </Section>
      )}

      {/* 8 — Autoevaluación */}
      {quiz.length > 0 && (
        <Section icon="clipboard" title="Autoevaluación" count={quiz.length} tone="pearl">
          <Quiz dia={data.dia} preguntas={quiz} />
        </Section>
      )}

      {/* Repaso rápido */}
      {quickReview.length > 0 && (
        <Section icon="badge" title="Repaso rápido" tone="mint">
          <QuickReview points={quickReview} />
        </Section>
      )}

      {/* 9 — Referencias */}
      {referencias.length > 0 && (
        <Section icon="library" title="Referencias" count={referencias.length} tone="steel">
          <References referencias={referencias} />
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
          La estructura de este módulo ya está lista para poblarse con el mismo formato del
          Módulo 1: introducción, lecciones nucleares, perlas, errores, habilidades, caso
          interactivo, autoevaluación y referencias.
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
            Módulo {data.dia - 1}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            disabled={!next}
            onClick={() => next && navigate(`/temario/${next.dia}`)}
            iconRight="arrow"
          >
            Módulo {data.dia + 1}
          </Button>
        </div>
      </div>
    </div>
  )
}
