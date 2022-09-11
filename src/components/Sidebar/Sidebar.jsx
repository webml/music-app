import './Sidebar.css'
import SidebarPerson from '../SidebarPerson/SidebarPerson'
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarPerson name="Sergey.Ivanov" />
      <div className="sidebar__block">
        <div className="sidebar__list">
          <SidebarItem img={process.env.PUBLIC_URL + 'img/playlist01.png'} />
          <SidebarItem img={process.env.PUBLIC_URL + 'img/playlist02.png'} />
          <SidebarItem img={process.env.PUBLIC_URL + 'img/playlist03.png'} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
