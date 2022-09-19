import './style.css'

const SidebarSkeleton = () => {
  return (
    <div className="sidebar__item">
      <div className="sidebar__link">
        <img
          className="sidebar__img"
          src="img/skeleton/playlist.svg"
          alt="day's playlist"
        />
      </div>
    </div>
  )
}

export default SidebarSkeleton
