import * as S from './Bar.styles'
import Player from '../Player'
import Volume from '../Volume'
import { useRef, useEffect, useState } from 'react'

const Bar = () => {
  const audioRef = useRef(null)

  const [playerProgress, setPlayerProgress] = useState('0%')
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (isPlaying) {
      const newProgressInterval = setInterval(() => {
        setPlayerProgress(
          `${(100 / audioRef.current.duration) * audioRef.current.currentTime}%`
        )
        if (audioRef.current.ended || audioRef.current.paused) {
          clearInterval(newProgressInterval)
          setIsPlaying(false)
        }
      }, 10)
    }
  })

  return (
    <S.Bar>
      <S.Audio src="/Bobby_Marleni_-_Dropin.mp3" ref={audioRef}></S.Audio>
      <S.BarContent>
        <S.BarPlayerProgress $width={playerProgress} />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <Player
              audioRef={audioRef}
              updateState={() => setIsPlaying(!isPlaying)}
            />
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
