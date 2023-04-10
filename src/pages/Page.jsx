import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Bar from '../components/Bar'
import { useTrackContext } from '../player'
import * as S from './Page.style'

export const Page = () => {
  const { track } = useTrackContext()
  return (
    <S.Main>
      <S.Nav>
        <Navbar />
      </S.Nav>
      <S.Centerblock>
        <Outlet />
      </S.Centerblock>
      {track && <Bar />}
    </S.Main>
  )
}
