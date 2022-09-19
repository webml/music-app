import './Sidebar.css'
import SidebarPerson from '../SidebarPerson/SidebarPerson'
import SidebarItem from '../SidebarItem/SidebarItem'
import { useState } from 'react'
import SidebarSkeleton from '../SidebarSkelet'

const Sidebar = () => {
  const [visible, setVisible] = useState(true)

  setTimeout(() => {
    setVisible(false)
  }, 5000)

  return (
    <div className="sidebar">
      <SidebarPerson name="Sergey.Ivanov" />
      <div className="sidebar__block">
        <div className="sidebar__list">
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
        </div>
      </div>
    </div>
  )
}

export default Sidebar
