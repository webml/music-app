import * as S from './Navbar.style'
import Logo from '../Logo'
import Menu from '../Menu'
import { useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)

  return (
    <nav className="nav">
      <S.NavLogo>
        <Logo />
      </S.NavLogo>
      <S.NavBurger onClick={handleClick}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && <Menu />}
    </nav>
  )
}

export default Navbar
