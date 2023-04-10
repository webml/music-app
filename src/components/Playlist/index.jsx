import { useLocation, useParams } from 'react-router-dom'
import {
  useGetAllTracksQuery,
  useGetAllPlaylistsQuery,
} from '../../redux/services/music-app'
import Track from '../Track'
import Filter from '../Filter'
import PlaylistHeader from './PlaylistHeader'
import * as S from './Playlist.style'
import { PLAYLISTS } from '../../constants'
import TrackSkeleton from '../Track/TrackSkeleton'
import {
  useTrackContext,
  useIsPlayingContext,
  usePlaylistContext,
} from '../../player'
import { useEffect } from 'react'

const Playlist = () => {
  const location = useLocation()

  const { id } = useParams()
  const { setIsPlaying } = useIsPlayingContext()
  const { setPlaylist } = usePlaylistContext()
  const { track } = useTrackContext()

  let playlistName

  const getTrackTime = (second) => {
    let min = Math.floor(second / 60)
    let sec = second - min * 60

    if (String(sec).length == 1) {
      return `${min}:0${sec}`
    } else {
      return `${min}:${sec}`
    }
  }

  const playTrack = (track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const { setCurrentTrack } = useTrackContext()

  switch (location.pathname) {
    case '/': {
      const { data, isLoading } = useGetAllTracksQuery()
      playlistName = 'Треки'
      useEffect(() => {
        setPlaylist(data)
      })
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
        return (
          <S.Playlist>
            <S.PlaylistTitle>{playlistName}</S.PlaylistTitle>
            <div className="centerblock__filter">
              <Filter />
            </div>
            <S.PlaylistHeader>
              <PlaylistHeader />
            </S.PlaylistHeader>
            {renderTrackSkeleton(10)}
          </S.Playlist>
        )
      }

      return (
        <S.Playlist>
          <S.PlaylistTitle>{playlistName}</S.PlaylistTitle>
          <div className="centerblock__filter">
            <Filter />
          </div>
          <S.PlaylistHeader>
            <PlaylistHeader />
          </S.PlaylistHeader>
          <S.PlaylistItems track={track}>
            {data.map((track) => (
              <S.PlaylistItem key={track.id} onClick={() => playTrack(track)}>
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
          </S.PlaylistItems>
        </S.Playlist>
      )
    }

    case '/userTracks':
      playlistName = 'Мои треки'
      break

    default: {
      const { data, isLoading } = useGetAllPlaylistsQuery()
      playlistName = PLAYLISTS[id - 1].name
      useEffect(() => {
        setPlaylist(data[id - 1])
      })
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
        return (
          <S.Playlist>
            <S.PlaylistTitle>{playlistName}</S.PlaylistTitle>
            <div className="centerblock__filter">
              <Filter />
            </div>
            <S.PlaylistHeader>
              <PlaylistHeader />
            </S.PlaylistHeader>
            {renderTrackSkeleton(10)}
          </S.Playlist>
        )
      }

      return (
        <S.Playlist>
          <S.PlaylistTitle>{playlistName}</S.PlaylistTitle>
          <div className="centerblock__filter">
            <Filter />
          </div>
          <S.PlaylistHeader>
            <PlaylistHeader />
          </S.PlaylistHeader>
          <S.PlaylistItems>
            {data[id - 1].items.map((track) => (
              <S.PlaylistItem
                key={track.id}
                onClick={() => setCurrentTrack(track)}
              >
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
          </S.PlaylistItems>
        </S.Playlist>
      )
    }
  }
}

export default Playlist
