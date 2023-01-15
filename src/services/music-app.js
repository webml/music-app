import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const musicAppApi = createApi({
  reducerPath: 'musicAppApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://51.250.95.23:8000/',
  }),

  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all/',
    }),

    addTrackToFavorite: builder.mutation({
      query: (trackId) => ({
        url: `catalog/track/${trackId}/favorite`,
        method: 'POST',
      }),
    }),

    createUser: builder.query({}),
  }),
})

export const { useGetAllTracksQuery, useAddTrackToFavoriteMutation } =
  musicAppApi
