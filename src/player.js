import { createContext, useContext } from 'react'

export const TrackContext = createContext({
  track: null,
  setCurrentTrack: () => {},
})

export const useTrackContext = () => {
  const track = useContext(TrackContext)

  if (!track) return null

  return track
}

export const isPlayingContext = createContext({
  isPlaying: false,
  setIsPlaying: () => {},
})

export const useIsPlayingContext = () => {
  const isPlaying = useContext(isPlayingContext)

  if (!isPlaying) return false

  return isPlaying
}

export const PlaylistContext = createContext({
  playlist: null,
  setPlaylist: () => {},
})

export const usePlaylistContext = () => {
  const playlist = useContext(PlaylistContext)

  if (!playlist) return null

  return playlist
}
