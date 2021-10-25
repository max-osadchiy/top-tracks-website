import {createSlice} from '@reduxjs/toolkit';
import {fetchTracks} from '../api';

const tracksSlice = createSlice({
  name: 'tracks',
  initialState: {
    tracks: [],
    loading: true,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTracks.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.tracks = action.payload.tracks.track;
      state.loading = false;
    });
    builder.addCase(fetchTracks.rejected, state => {
      state.loading = false;
    });
  },
});

export default tracksSlice.reducer;
