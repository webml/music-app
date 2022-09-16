import * as S from './Sidebar.style'
import SidebarPerson from '../SidebarPerson'
import SidebarItem from '../SidebarItem'
import { useState } from 'react'
import SidebarSkeleton from '../SidebarSkeleton'

const Sidebar = () => {
  const [visible, setVisible] = useState(true)

  setTimeout(() => {
    setVisible(false)
  }, 5000)

  return (
    <div className="sidebar">
      <SidebarPerson name="Sergey.Ivanov" />
      <S.SidebarBlock>
        <S.SidebarList>
          {visible ? (
            <SidebarSkeleton />
          ) : (
            <SidebarItem img="img/playlist01.png" />
          )}
          {visible ? (
            <SidebarSkeleton />
          ) : (
            <SidebarItem img="img/playlist02.png" />
          )}
          {visible ? (
            <SidebarSkeleton />
          ) : (
            <SidebarItem img="img/playlist03.png" />
          )}
        </S.SidebarList>
      </S.SidebarBlock>
    </div>
  )
}

export default Sidebar
