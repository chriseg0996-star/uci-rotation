import Button from '../Button.jsx'

// `noun` permite reutilizar el botón para el onboarding ("Onboarding") o los módulos ("Módulo").
export default function CompleteButton({ completo, onToggle, noun = 'Módulo' }) {
  const lower = noun.toLowerCase()
  return (
    <Button
      variant={completo ? 'success' : 'primary'}
      size="lg"
      onClick={onToggle}
      icon={completo ? 'badge' : 'check'}
      className="w-full sm:w-auto"
    >
      {completo ? `${noun} completado — deshacer` : `Marcar ${lower} completado`}
    </Button>
  )
}
