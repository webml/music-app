import * as S from './Bar.styles'
import Player from '../Player'
import Volume from '../Volume'
import { useRef, useEffect, useState } from 'react'
import {
  useIsPlayingContext,
  useTrackContext,
  usePlaylistContext,
} from '../../player'

const Bar = () => {
  const audioRef = useRef(null)
  const { track, setCurrentTrack } = useTrackContext()
  const { playlist } = usePlaylistContext()
  const [playerProgress, setPlayerProgress] = useState('0%')
  const { isPlaying, setIsPlaying } = useIsPlayingContext()

  useEffect(() => {
    if (isPlaying) {
      const newProgressInterval = setInterval(() => {
        setPlayerProgress(
          `${(100 / audioRef.current.duration) * audioRef.current.currentTime}%`
        )

        if (audioRef.current.ended) {
          const currentTrack = playlist.indexOf(track)
          const lastIndexTrack = playlist.length - 1

          if (currentTrack < lastIndexTrack) {
            setCurrentTrack(playlist[currentTrack + 1])
            audioRef.current.play()
            setIsPlaying(true)
          } else {
            setIsPlaying(false)
          }
        }

        if (audioRef.current.paused) {
          clearInterval(newProgressInterval)
          setIsPlaying(false)
        }
      }, 10)
    }
  })

  return (
    <S.Bar>
      <S.Audio src={track.track_file} ref={audioRef}></S.Audio>
      <S.BarContent>
        <S.BarPlayerProgress $width={playerProgress} />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <Player audioRef={audioRef} />
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
