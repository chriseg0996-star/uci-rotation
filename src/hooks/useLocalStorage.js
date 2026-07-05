import { useCallback, useEffect, useState } from 'react'

// Estado persistido en localStorage, con sincronización entre pestañas (evento `storage`).
// Base reutilizable para checklist de habilidades, resultados de quiz y progreso por día.
export function useLocalStorage(key, initial) {
  const read = useCallback(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw != null ? JSON.parse(raw) : initial
    } catch {
      return initial
    }
  }, [key, initial])

  const [value, setValue] = useState(read)

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* almacenamiento no disponible (modo privado / cuota) — degradar en silencio */
    }
  }, [key, value])

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === key) setValue(read())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [key, read])

  return [value, setValue]
}
