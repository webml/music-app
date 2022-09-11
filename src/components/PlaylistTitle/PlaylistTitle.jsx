import './PlaylistTitle.css'

const PlaylistTitle = () => {
  return (
    <div className="playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
          <use xlinkHref="../../public/img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
  )
}

export default PlaylistTitle
