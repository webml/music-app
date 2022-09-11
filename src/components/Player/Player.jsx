import './Player.css'
import TrackPlay from '../TrackPlay/TrackPlay'

const Player = () => {
  return (
    <div className="player">
      <div className="player__controls">
        <div className="player__btn-prev">
          <svg className="player__btn-prev-svg" alt="prev">
            <use xlinkHref="../../public/img/icon/sprite.svg#icon-prev"></use>
          </svg>
        </div>
        <div className="player__btn-play _btn">
          <svg className="player__btn-play-svg" alt="play">
            <use xlinkHref="../../public/img/icon/sprite.svg#icon-play"></use>
          </svg>
        </div>
        <div className="player__btn-next">
          <svg className="player__btn-next-svg" alt="next">
            <use xlinkHref="../../public/img/icon/sprite.svg#icon-next"></use>
          </svg>
        </div>
        <div className="player__btn-repeat _btn-icon">
          <svg className="player__btn-repeat-svg" alt="repeat">
            <use xlinkHref="../../public/img/icon/sprite.svg#icon-repeat"></use>
          </svg>
        </div>
        <div className="player__btn-shuffle _btn-icon">
          <svg className="player__btn-shuffle-svg" alt="shuffle">
            <use xlinkHref="../../public/img/icon/sprite.svg#icon-shuffle"></use>
          </svg>
        </div>
      </div>
      <TrackPlay name="Ты та..." author="Баста" />
    </div>
  )
}

export default Player
