import * as S from './Menu.style'

const Menu = () => {
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
      </S.MenuList>
    </div>
  )
}

export default Menu
