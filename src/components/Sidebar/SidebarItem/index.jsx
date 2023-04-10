import * as S from './SidebarItem.style'

const SidebarItem = (props) => {
  return (
    <S.SidebarItem>
      <S.SidebarLink to={`/playlist/${props.id}`}>
        <S.SidebarImg src={props.img} alt="day's playlist" />
      </S.SidebarLink>
    </S.SidebarItem>
  )
}

export default SidebarItem
