import * as S from './Sidebar.style'
import SidebarPerson from '../SidebarPerson'
import SidebarItem from '../SidebarItem'
import { loading } from '../../scripts/loading'
import SidebarSkeleton from '../SidebarSkeleton'

const Sidebar = ({ playlists }) => {
  const isLoading = loading()

  return (
    <div className="sidebar">
      <SidebarPerson name="Sergey.Ivanov" />
      <S.SidebarBlock>
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
      </S.SidebarBlock>
    </div>
  )
}

export default Sidebar
