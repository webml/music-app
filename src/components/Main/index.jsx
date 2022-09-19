import * as S from './Main.style'
import Navbar from '../Navbar'
import Centerblock from '../Centerblock'
import Sidebar from '../Sidebar'

const Main = () => {
  return (
    <S.Main>
      <S.Nav>
        <Navbar />
      </S.Nav>
      <S.Centerblock>
        <Centerblock name="Треки" />
      </S.Centerblock>
      <S.Sidebar>
        <Sidebar />
      </S.Sidebar>
    </S.Main>
  )
}

export default Main
