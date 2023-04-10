import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Nav = styled.nav`
  width: 322px;
  height: 100vh;
  background-color: ${(props) => props.theme.navBackgroundColor};
  padding: 20px 0 20px 36px;
`

export const Centerblock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 40px;
`
