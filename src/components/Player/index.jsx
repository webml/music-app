import * as S from './Player.style'
import TrackPlay from './TrackPlay'
import { useEffect, useState } from 'react'
import {
  useIsPlayingContext,
  useTrackContext,
  usePlaylistContext,
} from '../../player'

const Player = (props) => {
  const [toggleImg, setToggleImg] = useState('/img/icon/play.svg#icon-play')
  const { isPlaying, setIsPlaying } = useIsPlayingContext()
  const { playlist, setPlaylist } = usePlaylistContext()
  const { track, setCurrentTrack } = useTrackContext()
  const unShufflePlaylist = playlist
  const { isActiveShuffle, setIsActiveShuffle } = useState(false)

  const handlerTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if (isPlaying) {
      props.audioRef.current.play()
      setToggleImg('/img/icon/pause.svg#icon-pause')
    } else {
      props.audioRef.current.pause()
      setToggleImg('/img/icon/play.svg#icon-play')
    }
  })

  const playNextTrack = () => {
    const currentTrack = playlist.indexOf(track)
    const lastIndexTrack = playlist.length - 1

    if (currentTrack < lastIndexTrack) {
      setCurrentTrack(playlist[currentTrack + 1])
    } else {
      setCurrentTrack(playlist[0])
    }
  }

  const playPrevTrack = () => {
    const currentTrack = playlist.indexOf(track)
    const lastIndexTrack = playlist.length - 1

    if (currentTrack !== 0) {
      setCurrentTrack(playlist[currentTrack - 1])
    } else {
      setCurrentTrack(playlist[lastIndexTrack])
    }
  }

  const shufflePlaylist = () => {
    if (isActiveShuffle) {
      setPlaylist(unShufflePlaylist)
      setIsActiveShuffle(false)
    } else {
      const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = (Math.floor(Math.random() * (i + 1))[(array[i], array[j])] = [
            array[j],
            array[i],
          ])
        }
      }

      const shufflePlaylist = shuffle(playlist)
      setPlaylist(shufflePlaylist)
      setIsActiveShuffle(true)
    }
  }

  return (
    <S.Player>
      <S.PlayerControls>
        <S.PlayerButtonPrev>
          <S.PlayerButtonPrevSvg alt="prev" onClick={playPrevTrack}>
            <use xlinkHref="/img/icon/prev.svg#icon-prev"></use>
          </S.PlayerButtonPrevSvg>
        </S.PlayerButtonPrev>
        <S.PlayerButtonPlay>
          <S.PlayerButtonPlaySvg alt="play/pause" onClick={handlerTogglePlay}>
            <use xlinkHref={toggleImg}></use>
          </S.PlayerButtonPlaySvg>
        </S.PlayerButtonPlay>
        <S.PlayerButtonNext>
          <S.PlayerButtonNextSvg alt="next">
            <use
              xlinkHref="/img/icon/next.svg#icon-next"
              onClick={playNextTrack}
            ></use>
          </S.PlayerButtonNextSvg>
        </S.PlayerButtonNext>
        <S.PlayerButtonRepeat>
          <S.PlayerButtonRepeatSvg alt="repeat">
            <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
          </S.PlayerButtonRepeatSvg>
        </S.PlayerButtonRepeat>
        <S.PlayerButtonShuffle>
          <S.PlayerButtonShuffleSvg alt="shuffle">
            <use
              xlinkHref="/img/icon/sprite.svg#icon-shuffle"
              onClick={shufflePlaylist}
            ></use>
          </S.PlayerButtonShuffleSvg>
        </S.PlayerButtonShuffle>
      </S.PlayerControls>
      <TrackPlay />
    </S.Player>
  )
}

export default Player
