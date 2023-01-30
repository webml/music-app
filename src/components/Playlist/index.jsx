import * as S from './Playlist.style'
import Track from '../Track'
import TrackSkeleton from '../TrackSkeleton'
import { useGetAllTracksQuery } from '../../services/music-app'

const Playlist = () => {
  const { data, isLoading } = useGetAllTracksQuery()

  if (isLoading) {
    const renderTrackSkeleton = (count) => {
      let content = []
      for (let i = 0; i < count; i++) {
        content.push(
          <S.PlaylistItem key={i}>
            <TrackSkeleton />
          </S.PlaylistItem>
        )
      }
      return content
    }
    return <S.Playlist>{renderTrackSkeleton(10)}</S.Playlist>
  }

  const getTrackTime = (second) => {
    let min = Math.floor(second / 60)
    let sec = second - min * 60

    if (String(sec).length == 1) {
      return `${min}:0${sec}`
    } else {
      return `${min}:${sec}`
    }
  }

  return (
    <S.Playlist>
      {data.map((track) => (
        <S.PlaylistItem key={track.id}>
          <div className="playlist__track">
            <Track
              titleLink="#"
              titleName={track.name}
              authorLink="#"
              authorName={track.author}
              albumLink="#"
              albumName={track.album}
              time={getTrackTime(track.duration_in_seconds)}
            />
          </div>
        </S.PlaylistItem>
      ))}
    </S.Playlist>
  )
}

export default Playlist
