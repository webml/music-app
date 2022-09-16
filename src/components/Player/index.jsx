import * as S from './Player.style'
import TrackPlay from '../TrackPlay'
import TrackPlaySkeleton from '../TrackPlaySkeleton'
import { useState } from 'react'

const Player = () => {
  const [visible, setVisible] = useState(true)

  setTimeout(() => {
    setVisible(false)
  }, 5000)

  return (
    <S.Player>
      <S.PlayerControls>
        <S.PlayerButtonPrev>
          <S.PlayerButtonPrevSvg alt="prev">
            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
          </S.PlayerButtonPrevSvg>
        </S.PlayerButtonPrev>
        <S.PlayerButtonPlay>
          <S.PlayerButtonPlaySvg alt="play">
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          </S.PlayerButtonPlaySvg>
        </S.PlayerButtonPlay>
        <S.PlayerButtonNext>
          <S.PlayerButtonNextSvg alt="next">
            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
          </S.PlayerButtonNextSvg>
        </S.PlayerButtonNext>
        <S.PlayerButtonRepeat>
          <S.PlayerButtonRepeatSvg alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </S.PlayerButtonRepeatSvg>
        </S.PlayerButtonRepeat>
        <S.PlayerButtonShuffle>
          <S.PlayerButtonShuffleSvg alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </S.PlayerButtonShuffleSvg>
        </S.PlayerButtonShuffle>
      </S.PlayerControls>
      {visible ? (
        <TrackPlaySkeleton />
      ) : (
        <TrackPlay name="Ты та..." author="Баста" />
      )}
    </S.Player>
  )
}

export default Player
