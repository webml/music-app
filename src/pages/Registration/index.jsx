import { NavLink } from 'react-router-dom'
import * as S from './index.styles'

export const Registration = () => {
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalLogo>
              <img src="/img/logo-dark.png" alt="logo" />
            </S.ModalLogo>
            <S.ModalInput type="text" name="login" placeholder="Логин" />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnEnter>
              <NavLink to="/login">Зарегистрироваться</NavLink>
            </S.ModalBtnEnter>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
