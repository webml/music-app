import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyleDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 6em;
  }

  & * {
    font-size: 24px;
  }
`

export const Reg = () => {
  return (
    <StyleDiv>
      <form>
        <h2>Регистрация</h2>
        <input type="text" placeholder="login" />
        <input type="password" name="" id="" placeholder="Придумайте пароль" />
        <input type="password" name="" id="" placeholder="Повторите пароль" />
        <button>Создать аккаунт</button>
      </form>
      <NavLink to="/login">← Войти</NavLink>
    </StyleDiv>
  )
}
