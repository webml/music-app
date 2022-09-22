import * as S from '../components/Main/Main.style'
import Navbar from '../components/Navbar'
import Centerblock from '../components/Centerblock'
import Sidebar from '../components/Sidebar'
import { PLAYLISTS } from '../constants'
import { useParams } from 'react-router-dom'

const PlaylistPage = () => {
  const params = useParams()

  const playlist = PLAYLISTS.find(
    (playlist) => playlist.id === Number(params.id)
  )

  return (
    <S.Main>
      <S.Nav>
        <Navbar />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name={playlist.name} />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar playlists={PLAYLISTS} />
      </S.Sidebar>
    </S.Main>
  )
}

export default PlaylistPage
