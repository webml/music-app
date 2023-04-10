import styled from 'styled-components'

export const SidebarPersonal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SidebarPersonalName = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.basicTextColor};
  margin-left: 16px;
`

export const SidebarAvatar = styled.div`
  width: 43px;
  height: 43px;
  background-color: ${(props) => props.theme.elementBackgroundColor};
  border-radius: 50%;
`
