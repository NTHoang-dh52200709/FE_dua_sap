import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navigation = [
  { label: 'Dừa sáp', path: '/dua-sap' },
  { label: 'Vùng đất', path: '/vung-dat' },
  { label: '100 năm', path: '/100-nam' },
  { label: 'Khoa học', path: '/khoa-hoc' },
  { label: 'Người nông dân', path: '/nguoi-nong-dan' },
  { label: 'Ẩm thực', path: '/am-thuc' },
  { label: 'Sản phẩm', path: '/san-pham' },
  { label: 'Chỉ dẫn địa lý', path: '/chi-dan-dia-ly' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState('home')
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      if (pathname !== '/') {
        setActiveTheme(pathname.replace(/^\//, '') || 'home')
        return
      }

      const marker = window.scrollY + window.innerHeight * 0.35
      let nextTheme = 'home'
      navigation.forEach((item) => {
        const section = document.getElementById(item.path.slice(1))
        if (section && section.offsetTop <= marker) nextTheme = item.path.slice(1)
      })
      setActiveTheme(nextTheme)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    const offcanvas = document.getElementById('mainNavigation')
    if (!offcanvas) return undefined
    const handleShown = () => setIsMenuOpen(true)
    const handleHidden = () => setIsMenuOpen(false)
    offcanvas.addEventListener('shown.bs.offcanvas', handleShown)
    offcanvas.addEventListener('hidden.bs.offcanvas', handleHidden)
    return () => {
      offcanvas.removeEventListener('shown.bs.offcanvas', handleShown)
      offcanvas.removeEventListener('hidden.bs.offcanvas', handleHidden)
    }
  }, [])

  const headerClassName = [
    'site-header',
    'sticky-top',
    `theme-${activeTheme}`,
    pathname === '/' ? 'is-home' : 'is-detail',
    isScrolled ? 'is-scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClassName}>
      <nav className="navbar" aria-label="Điều hướng chính">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img className="brand-logo" src="/images/logo.svg" alt="" aria-hidden="true" />
            <span className="brand-name"><strong>DỪA SÁP</strong><small>TRÀ VINH</small></span>
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-controls="mainNavigation"
            aria-expanded={isMenuOpen}
            aria-label="Mở điều hướng"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="bi bi-list" aria-hidden="true" />
          </button>
          <div
            className={`offcanvas offcanvas-end offcanvas-lg${isMenuOpen ? ' show' : ''}`}
            tabIndex="-1"
            id="mainNavigation"
            aria-labelledby="mainNavigationLabel"
            aria-hidden={!isMenuOpen}
          >
            <div className="offcanvas-header d-lg-none">
              <h2 className="offcanvas-title" id="mainNavigationLabel">Điều hướng</h2>
              <button type="button" className="btn-close" aria-label="Đóng điều hướng" onClick={() => setIsMenuOpen(false)} />
            </div>
            <ul className="navbar-nav ms-auto">
              {navigation.map((item) => {
                const sectionId = item.path.slice(1)
                const isActiveHomeSection = pathname === '/' && activeTheme === sectionId

                return (
                  <li className="nav-item" key={item.path}>
                    <NavLink
                      className={({ isActive }) => (
                        `nav-link${isActive || isActiveHomeSection ? ' active' : ''}`
                      )}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
          {isMenuOpen && (
            <div
              className="offcanvas-backdrop fade show d-lg-none"
              role="presentation"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
