import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const StyleNotFound = styled.div`
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
    color: white;
  }
`

export const NotFound = () => {
  return (
    <StyleNotFound>
      <h2>404</h2>
      <p>Страница не найдена</p>
      <NavLink to="/">На главную</NavLink>
    </StyleNotFound>
  )
}
