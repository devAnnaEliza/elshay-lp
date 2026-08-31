import { useEffect, useState } from 'react'
import logoMarkWhite from '../../assets/brand/logo-mark-white.png'
import { navigationItems } from '../../content/site'
import './Navbar.css'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 40)

    updateScrolledState()
    window.addEventListener('scroll', updateScrolledState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrolledState)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <nav className="site-nav" aria-label="Navegação principal">
        <a className="site-nav__brand" href="#main-content" aria-label="El Shay — início">
          <img src={logoMarkWhite} alt="El Shay" />
        </a>

        <div className="site-nav__desktop-links">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <button className="site-nav__contact" type="button" disabled>
            Fale Conosco
          </button>
        </div>

        <button
          className="site-nav__menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div id="mobile-navigation" className={`site-nav__mobile-links ${isMenuOpen ? 'is-open' : ''}`}>
        {navigationItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <button className="site-nav__contact" type="button" disabled>
          Fale Conosco
        </button>
      </div>
    </header>
  )
}
