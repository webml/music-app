import * as S from '../components/Main/Main.style'
import Navbar from '../components/Navbar'
import Centerblock from '../components/Centerblock'
import Sidebar from '../components/Sidebar'
import { PLAYLISTS } from '../constants'

const UserTracks = () => {
  return (
    <S.Main>
      <S.Nav>
        <Navbar />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name="Мои треки" />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar playlists={PLAYLISTS} />
      </S.Sidebar>
    </S.Main>
  )
}

export default UserTracks
