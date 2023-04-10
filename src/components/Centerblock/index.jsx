import * as S from './Centerblok.style'
import Search from '../Search'
import Playlist from '../Playlist'

const Centerblock = () => {
  return (
    <S.Centerblock>
      <S.CenterblockSearch>
        <Search />
      </S.CenterblockSearch>
      <S.CenterblockContent>
        <S.ContentPlaylist>
          <Playlist />
        </S.ContentPlaylist>
      </S.CenterblockContent>
    </S.Centerblock>
  )
}

export default Centerblock
