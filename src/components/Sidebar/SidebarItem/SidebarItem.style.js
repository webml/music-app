import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SidebarItem = styled.div`
  max-width: 250px;
  max-height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

export const SidebarLink = styled(NavLink)`
  width: 100%;
  height: 100%;
`
export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`
