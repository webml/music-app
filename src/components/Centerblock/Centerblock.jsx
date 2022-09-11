import './Centerblock.css'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import Playlist from '../Playlist/Playlist'

const Centerblock = (props) => {
  return (
    <div className="centerblock">
      <div className="centerblock__search">
        <Search />
      </div>
      <h2 className="centerblock__h2">{props.name}</h2>
      <div className="centerblock__filter">
        <Filter />
      </div>
      <div className="centerblock__content">
        <div className="content__title">
          <PlaylistTitle />
        </div>
        <div className="content__playlist">
          <Playlist />
        </div>
      </div>
    </div>
  )
}

export default Centerblock
