import logoHorizontalWhite from '../../assets/brand/logo-horizontal-white.png'
import { navigationItems } from '../../content/site'
import './Footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <img src={logoHorizontalWhite} alt="El Shay" />
          <p>Soluções integradas em engenharia e construção civil.</p>
        </div>

        <nav className="site-footer__navigation" aria-label="Navegação do rodapé">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
