import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicAppApi = createApi({
  reducerPath: 'musicAppApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/',
  }),

  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all/',
    }),

    getTrack: builder.query({
      query: (trackId) => `catalog/track/${trackId}/`,
    }),

    getTrackByName: builder.query({
      query: (trackName) => `catalog/track/${trackName}/`,
    }),

    addTrackToFavorite: builder.mutation({
      query: (trackId) => ({
        url: `catalog/track/${trackId}/favorite/`,
        method: 'POST',
      }),
    }),

    deleteTrackFromFavorite: builder.mutation({
      query: (trackId) => ({
        url: `catalog/track/${trackId}/favorite/`,
        method: 'DELETE',
      }),
    }),

    getAllPlaylists: builder.query({
      query: () => 'catalog/selection/',
    }),

    getPlaylist: builder.query({
      query: (playlistId) => `catalog/selection/${playlistId}/`,
    }),

    createUser: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
      }),
    }),

    loginUser: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body,
      }),
    }),

    getUserToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body,
      }),
    }),

    updateUserToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/refresh',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useAddTrackToFavoriteMutation,
  useGetAllPlaylistsQuery,
} = musicAppApi
