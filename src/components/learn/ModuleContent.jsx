import Section from '../dia/Section.jsx'
import Pearl from '../Pearl.jsx'
import ClinicalWarning from '../ClinicalWarning.jsx'
import QuickReview from '../dia/QuickReview.jsx'
import EmptyState from '../EmptyState.jsx'
import Introduction from './Introduction.jsx'
import Lesson from './Lesson.jsx'
import SkillsChecklist from './SkillsChecklist.jsx'
import InteractiveCase from './InteractiveCase.jsx'
import Quiz from './Quiz.jsx'
import References from './References.jsx'

// Cuerpo del motor educativo. Renderiza todas las secciones desde `data` (esquema de módulo
// u onboarding). `contentId` (número de módulo o "inicio") define las claves de localStorage
// de habilidades y quiz. Compartido por los módulos clínicos y el onboarding sin variaciones.
export default function ModuleContent({ data, contentId }) {
  const objetivos = data.objetivos || []
  const lecciones = data.lecciones || []
  const pearls = data.pearls || []
  const errores = data.errores || []
  const skills = data.skills || []
  const quiz = data.quiz || []
  const referencias = data.referencias || []
  const quickReview = data.quickReview || []

  return (
    <>
      {/* Introducción */}
      <Introduction intro={data.intro} />

      {/* Objetivos de aprendizaje */}
      {objetivos.length > 0 && (
        <Section icon="target" title="Objetivos de aprendizaje" tone="steel">
          <ul className="grid gap-3 sm:grid-cols-2">
            {objetivos.map((o, i) => (
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
      )}

      {/* Lecciones nucleares */}
      {lecciones.length > 0 && (
        <Section icon="book" title="Lecciones nucleares" count={lecciones.length} tone="steel">
          <div className="space-y-3">
            {lecciones.map((l, i) => (
              <Lesson key={l.id || i} index={i + 1} leccion={l} defaultOpen={i === 0} />
            ))}
          </div>
        </Section>
      )}

      {/* ICU Pearls */}
      {pearls.length > 0 && (
        <Section icon="gem" title="ICU Pearls" count={pearls.length} tone="pearl">
          <div className="grid gap-3 md:grid-cols-2">
            {pearls.map((p, i) => (
              <Pearl key={i}>{p}</Pearl>
            ))}
          </div>
        </Section>
      )}

      {/* Errores frecuentes */}
      {errores.length > 0 && (
        <Section icon="alert" title="Errores frecuentes" count={errores.length} tone="terra">
          <div className="grid gap-3 md:grid-cols-2">
            {errores.map((e, i) => (
              <ClinicalWarning key={i}>{e}</ClinicalWarning>
            ))}
          </div>
        </Section>
      )}

      {/* Habilidades prácticas */}
      {skills.length > 0 && (
        <Section icon="check" title="Habilidades prácticas" count={skills.length} tone="mint">
          <SkillsChecklist dia={contentId} items={skills} />
        </Section>
      )}

      {/* Caso clínico interactivo */}
      {data.caso && (
        <Section icon="stethoscope" title="Caso clínico interactivo" tone="steel">
          <InteractiveCase caso={data.caso} />
        </Section>
      )}

      {/* Autoevaluación */}
      {quiz.length > 0 && (
        <Section icon="clipboard" title="Autoevaluación" count={quiz.length} tone="pearl">
          <Quiz dia={contentId} preguntas={quiz} />
        </Section>
      )}

      {/* Repaso rápido */}
      {quickReview.length > 0 && (
        <Section icon="badge" title="Repaso rápido" tone="mint">
          <QuickReview points={quickReview} />
        </Section>
      )}

      {/* Referencias */}
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
          onboarding: introducción, lecciones nucleares, perlas, errores, habilidades, caso
          interactivo, autoevaluación y referencias.
        </EmptyState>
      )}
    </>
  )
}
