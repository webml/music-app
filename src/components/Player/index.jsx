import * as S from './Player.style'
import TrackPlay from '../TrackPlay'
import TrackPlaySkeleton from '../TrackPlaySkeleton'
import { loading } from '../../scripts/loading'
import { useState } from 'react'

const Player = (props) => {
  const isLoading = loading()

  const [toggleImg, setToggleImg] = useState('img/icon/play.svg#icon-play')

  const handlerTogglePlay = () => {
    props.updateState()

    if (props.audioRef.current.paused) {
      props.audioRef.current.play()
      setToggleImg('img/icon/pause.svg#icon-pause')
    } else {
      props.audioRef.current.pause()
      setToggleImg('img/icon/play.svg#icon-play')
    }
  }

  return (
    <S.Player>
      <S.PlayerControls>
        <S.PlayerButtonPrev>
          <S.PlayerButtonPrevSvg alt="prev">
            <use xlinkHref="img/icon/prev.svg#icon-prev"></use>
          </S.PlayerButtonPrevSvg>
        </S.PlayerButtonPrev>
        <S.PlayerButtonPlay>
          <S.PlayerButtonPlaySvg alt="play/pause" onClick={handlerTogglePlay}>
            <use xlinkHref={toggleImg}></use>
          </S.PlayerButtonPlaySvg>
        </S.PlayerButtonPlay>
        <S.PlayerButtonNext>
          <S.PlayerButtonNextSvg alt="next">
            <use xlinkHref="img/icon/next.svg#icon-next"></use>
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
      {isLoading ? (
        <TrackPlaySkeleton />
      ) : (
        <TrackPlay name="Ты та..." author="Баста" />
      )}
    </S.Player>
  )
}

export default Player
