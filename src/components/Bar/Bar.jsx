import './Bar.css'
import Player from '../Player/Player'
import Volume from '../Volume/Volume'

const Bar = () => {
  return (
    <div className="bar">
      <div className="bar__content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player">
            <Player />
          </div>
          <div className="bar__volume-block">
            <Volume />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar
