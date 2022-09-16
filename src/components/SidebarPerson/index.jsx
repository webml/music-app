import * as S from './SidebarPerson.style'

const SidebarPerson = (props) => {
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{props.name}</S.SidebarPersonalName>
      <S.SidebarAvatar></S.SidebarAvatar>
    </S.SidebarPersonal>
  )
}

export default SidebarPerson
