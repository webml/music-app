import * as S from './Person.style'

const SidebarPerson = (props) => {
  return (
    <S.SidebarPersonal>
      <S.SidebarAvatar></S.SidebarAvatar>
      <S.SidebarPersonalName>{props.name}</S.SidebarPersonalName>
    </S.SidebarPersonal>
  )
}

export default SidebarPerson
