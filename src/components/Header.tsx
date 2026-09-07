import { useEffect, useRef, useState } from 'react'
import Arrow from './Arrow'

const links = [
  { id: 'du-an', label: 'Dự án' },
  { id: 'gioi-thieu', label: 'Về mình' },
  { id: 'lien-he', label: 'Liên hệ' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false)
    }
    const closeEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const wideScreen = window.matchMedia('(min-width: 701px)')
    const closeOnResize = () => setMenuOpen(false)
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeEscape)
    wideScreen.addEventListener('change', closeOnResize)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeEscape)
      wideScreen.removeEventListener('change', closeOnResize)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id === 'dau-trang' ? '' : entry.target.id)
      })
    }, { rootMargin: '-12% 0px -60% 0px' })
    document.querySelectorAll<HTMLElement>('[data-section]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="header-inner container">
        <a href="#dau-trang" className="wordmark" aria-label="Itsuki — về đầu trang" onClick={() => setMenuOpen(false)}>itsuki<span>.</span></a>
        <span className="header-note">A PERSONAL PORTFOLIO</span>
        <button ref={toggleRef} className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Đóng' : 'Menu'}<span className={menuOpen ? 'menu-symbol is-open' : 'menu-symbol'} aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="primary-navigation" className={`navigation${menuOpen ? ' is-open' : ''}`} aria-label="Điều hướng chính">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => {
              setMenuOpen(false)
              setActive(id)
              document.getElementById(id)?.focus({ preventScroll: true })
            }}>{label}{id === 'lien-he' && <Arrow diagonal />}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
