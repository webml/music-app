import { NavLink } from 'react-router-dom'
import * as S from './index.styles'

export const Login = () => {
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
            <S.ModalBtnEnter>
              <NavLink to="/">Войти</NavLink>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <NavLink to="/registration">Зарегистрироваться</NavLink>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
