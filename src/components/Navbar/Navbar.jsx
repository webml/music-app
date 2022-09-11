import './Navbar.css'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Logo />
      </div>
      <div className="nav__burger">
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu">
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar
