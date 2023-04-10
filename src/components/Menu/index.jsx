import { themes, useThemeContext } from '../../themes'
import * as S from './Menu.style'
import Person from '../Person'

const Menu = () => {
  const { theme, toggleTheme } = useThemeContext()

  const sun = '/img/icon/lightTheme.svg#light-theme'
  const moon = '/img/icon/darkTheme.svg#dark-theme'

  const toggleThemeImg = theme === themes.dark ? moon : sun

  return (
    <div className="menu">
      <S.MenuList>
        <S.MenuItem>
          <Person name="Sergey.Ivanov" />
        </S.MenuItem>
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
          <S.MenuSVGChoseTheme alt="prev">
            {' '}
            <use xlinkHref={toggleThemeImg}></use>
          </S.MenuSVGChoseTheme>
        </div>
      </S.MenuList>
    </div>
  )
}

export default Menu
