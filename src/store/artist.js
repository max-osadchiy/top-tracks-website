import {createSlice} from '@reduxjs/toolkit';
import {fetchArtist} from '../api';

const artistSlice = createSlice({
  name: 'artist',
  initialState: {
    artist: {},
    loading: true,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchArtist.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchArtist.fulfilled, (state, action) => {
      state.artist = action.payload.artist;
      state.loading = false;
    });
    builder.addCase(fetchArtist.rejected, state => {
      state.loading = false;
    });
  },
});

export default artistSlice.reducer;
