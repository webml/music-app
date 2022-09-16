import * as S from './Bar.styles'
import Player from '../Player'
import Volume from '../Volume'

const Bar = () => {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <Player />
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <Volume />
          </S.BarVolumeBlock>
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}

export default Bar
