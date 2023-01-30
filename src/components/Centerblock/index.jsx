import * as S from './Centerblok.style'
import Search from '../Search'
import Filter from '../Filter'
import PlaylistTitle from '../PlaylistTitle'
import Playlist from '../Playlist'

const Centerblock = (props) => {
  return (
    <S.Centerblock>
      <S.CenterblockSearch>
        <Search />
      </S.CenterblockSearch>
      <S.CenterblockH2>{props.name}</S.CenterblockH2>
      <div className="centerblock__filter">
        <Filter />
      </div>
      <S.CenterblockContent>
        <div className="content__title">
          <PlaylistTitle />
        </div>
        <div className="content__playlist">
          <Playlist />
        </div>
      </S.CenterblockContent>
    </S.Centerblock>
  )
}

export default Centerblock
