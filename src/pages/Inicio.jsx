import { Link } from 'react-router-dom'
import onboarding from '../data/onboarding.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import Button from '../components/Button.jsx'
import DayHeader from '../components/dia/DayHeader.jsx'
import CompleteButton from '../components/dia/CompleteButton.jsx'
import ModuleContent from '../components/learn/ModuleContent.jsx'

// Inicio de la Rotación — experiencia de onboarding. Reutiliza el mismo motor educativo
// (ModuleContent) con clave de contenido "inicio" para habilidades y autoevaluación.
export default function Inicio() {
  const [completo, setCompleto] = useLocalStorage('uci-rotation:onboarding-complete', false)

  return (
    <div className="space-y-9">
      <DayHeader
        eyebrow="Inicio de la rotación · Onboarding"
        icon="compass"
        titulo={onboarding.titulo}
        tiempoEstimado={onboarding.tiempoEstimado}
        completo={completo}
      />

      {/* Cuerpo del motor educativo (clave de contenido: "inicio") */}
      <ModuleContent data={onboarding} contentId="inicio" />

      {/* Acción + entrada al currículo clínico */}
      <div className="flex flex-col gap-4 border-t border-slate-700/50 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <CompleteButton
          completo={completo}
          onToggle={() => setCompleto((v) => !v)}
          noun="Onboarding"
        />
        <Button as={Link} to="/temario" variant="secondary" size="sm" iconRight="arrow">
          Ir a los módulos clínicos
        </Button>
      </div>
    </div>
  )
}
