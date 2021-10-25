import { configureStore } from '@reduxjs/toolkit'
import TracksReducer from './topTracks';
import ArtistReducer from './artist';

export const store = configureStore({
  reducer: {
    tracks: TracksReducer,
    artist: ArtistReducer,
  },
})