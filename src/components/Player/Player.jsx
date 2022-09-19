import './Player.css'
import TrackPlay from '../TrackPlay/TrackPlay'
import TrackPlaySkeleton from '../TrackPlaySkeleton'
import { useState } from 'react'

const Player = () => {
  const [visible, setVisible] = useState(true)

  setTimeout(() => {
    setVisible(false)
  }, 5000)

  return (
    <div className="player">
      <div className="player__controls">
        <div className="player__btn-prev">
          <svg className="player__btn-prev-svg" alt="prev">
            <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
          </svg>
        </div>
        <div className="player__btn-play _btn">
          <svg className="player__btn-play-svg" alt="play">
            <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
          </svg>
        </div>
        <div className="player__btn-next">
          <svg className="player__btn-next-svg" alt="next">
            <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
          </svg>
        </div>
        <div className="player__btn-repeat _btn-icon">
          <svg className="player__btn-repeat-svg" alt="repeat">
            <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div className="player__btn-shuffle _btn-icon">
          <svg className="player__btn-shuffle-svg" alt="shuffle">
            <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>
      {visible ? (
        <TrackPlaySkeleton />
      ) : (
        <TrackPlay name="Ты та..." author="Баста" />
      )}
    </div>
  )
}

export default Player
