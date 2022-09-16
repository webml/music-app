import * as S from './Menu.style'

const Menu = () => {
  return (
    <div className="menu">
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink href="http://">Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink href="http://">Войти</S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </div>
  )
}

export default Menu
