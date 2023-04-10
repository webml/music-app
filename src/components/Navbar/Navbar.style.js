import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-right: 36px;
`

export const NavLogo = styled.div`
  max-width: 113.33px;
  max-height: 43px;
  padding: 13px 0 13px 0;
  background-color: transparent;
`

export const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.basicTextColor};
`
