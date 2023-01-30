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
