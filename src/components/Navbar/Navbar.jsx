import './Navbar.css'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import { useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Logo />
      </div>
      <div className="nav__burger" onClick={handleClick}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      {visible && (
        <div className="nav__menu">
          <Menu />
        </div>
      )}
    </nav>
  )
}

export default Navbar
