import { useEffect, useState } from 'react'

const storageKey = 'itsuki-reduce-motion'

export default function useMotion() {
  const [manualReduction, setManualReduction] = useState(() => {
    try { return localStorage.getItem(storageKey) === 'true' } catch { return false }
  })
  const [systemReduction, setSystemReduction] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const reduced = manualReduction || systemReduction

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event: MediaQueryListEvent) => setSystemReduction(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.reduceMotion = String(reduced)
    if (reduced || !('IntersectionObserver' in window)) return
    const animations = new Set<Animation>()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const animation = entry.target.animate([
          { opacity: 0.25, transform: 'translateY(20px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 650, easing: 'cubic-bezier(.2,.7,.2,1)' })
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
    }
  }, [reduced])

  const toggleReduction = () => {
    const next = !manualReduction
    setManualReduction(next)
    try { localStorage.setItem(storageKey, String(next)) } catch { /* Remains usable for this session. */ }
  }

  return { reduced, systemReduction, toggleReduction }
}
