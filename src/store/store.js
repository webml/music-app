import { configureStore } from '@reduxjs/toolkit'
import { musicAppApi } from '../services/music-app'

export const store = configureStore({
  reducer: {
    [musicAppApi.reducerPath]: musicAppApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(musicAppApi.middleware),
})
