import * as S from './Sidebar.style'
import SidebarItem from './SidebarItem'
import { loading } from '../../scripts/loading'
import SidebarSkeleton from './SidebarSkeleton'

const Sidebar = ({ playlists }) => {
  const isLoading = loading()

  return (
    <S.Sidebar>
      <S.SidebarList>
        {playlists.map((playlist) =>
          isLoading ? (
            <SidebarSkeleton key={playlist.id} />
          ) : (
            <SidebarItem
              key={playlist.id}
              id={playlist.id}
              img={playlist.img}
            />
          )
        )}
      </S.SidebarList>
    </S.Sidebar>
  )
}

export default Sidebar
