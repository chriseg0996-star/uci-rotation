import Button from '../Button.jsx'

export default function CompleteButton({ completo, onToggle }) {
  return (
    <Button
      variant={completo ? 'success' : 'primary'}
      size="lg"
      onClick={onToggle}
      icon={completo ? 'badge' : 'check'}
      className="w-full sm:w-auto"
    >
      {completo ? 'Módulo completado — deshacer' : 'Marcar módulo completado'}
    </Button>
  )
}
