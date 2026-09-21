import { useState } from 'react'
import './Header.css'

const navigationItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavigation = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header__container">
        <a className="header__brand" href="#inicio">
          Anna Carolina
        </a>

        <button
          className="header__menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}
          aria-label="Navegação principal"
        >
          <ul className="header__list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="header__link"
                  href={item.href}
                  onClick={handleNavigation}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header