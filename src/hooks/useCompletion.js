import { useCallback, useEffect, useState } from 'react'

const KEY = 'uci-rotation:completed-days'

function read() {
  try {
    const raw = localStorage.getItem(KEY)
    const arr = raw ? JSON.parse(raw) : []
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

// Estado de días completados persistido en localStorage.
// Sincroniza entre pestañas vía evento `storage`.
export function useCompletion() {
  const [done, setDone] = useState(read)

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(done))
  }, [done])

  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setDone(read())
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const isComplete = useCallback((d) => done.includes(Number(d)), [done])

  const toggle = useCallback((d) => {
    const n = Number(d)
    setDone((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]))
  }, [])

  return { done, count: done.length, isComplete, toggle }
}
