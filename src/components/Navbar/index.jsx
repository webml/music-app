import * as S from './Navbar.style'
import Logo from '../Logo'
import Menu from '../Menu'
import Sidebar from '../Sidebar'
import { PLAYLISTS } from '../../constants'
import { useState } from 'react'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)

  return (
    <S.Nav>
      <S.NavLogo>
        <Logo />
      </S.NavLogo>
      <S.NavBurger onClick={handleClick}>
        <S.BurgerLine />
        <S.BurgerLine />
        <S.BurgerLine />
      </S.NavBurger>
      {visible && <Menu />}

      <Sidebar playlists={PLAYLISTS} />
    </S.Nav>
  )
}

export default Navbar
