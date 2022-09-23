import { themes, useThemeContext } from '../../themes'
import * as S from './Menu.style'

const Menu = () => {
  const { theme, toggleTheme } = useThemeContext()

  const sun = '/img/icon/lightTheme.svg#light-theme'
  const moon = '/img/icon/darkTheme.svg#dark-theme'

  const toggleThemeImg = theme === themes.dark ? moon : sun

  return (
    <div className="menu">
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink to="/">Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/userTracks">Мой плейлист</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/login">Войти</S.MenuLink>
        </S.MenuItem>
        <div onClick={toggleTheme}>
          <svg alt="prev">
            <use xlinkHref={toggleThemeImg}></use>
          </svg>
        </div>
      </S.MenuList>
    </div>
  )
}

export default Menu
