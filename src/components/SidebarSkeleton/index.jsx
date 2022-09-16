import * as S from '../SidebarItem/SidebarItem.style'

const SidebarSkeleton = () => {
  return (
    <S.SidebarItem>
      <S.SidebarLink>
        <S.SidebarImg src="img/skeleton/playlist.svg" alt="day's playlist" />
      </S.SidebarLink>
    </S.SidebarItem>
  )
}

export default SidebarSkeleton
