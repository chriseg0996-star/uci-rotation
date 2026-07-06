import { useParams, Link, useNavigate } from 'react-router-dom'
import { getDia, DIAS } from '../data/dias.js'
import { useCompletion } from '../hooks/useCompletion.js'
import Icon from '../components/Icon.jsx'
import Button from '../components/Button.jsx'
import EmptyState from '../components/EmptyState.jsx'
import DayHeader from '../components/dia/DayHeader.jsx'
import CompleteButton from '../components/dia/CompleteButton.jsx'
import ModuleContent from '../components/learn/ModuleContent.jsx'

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
            Volver a módulos clínicos
          </Button>
        }
      >
        El módulo que buscas no forma parte del currículo de 8 módulos clínicos de la rotación.
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
        Módulos clínicos
      </Link>

      <DayHeader
        dia={data.dia}
        titulo={data.titulo}
        tiempoEstimado={data.tiempoEstimado}
        completo={completo}
      />

      {/* Cuerpo del motor educativo */}
      <ModuleContent data={data} contentId={data.dia} />

      {/* Acción + navegación entre módulos */}
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
