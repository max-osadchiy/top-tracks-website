import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchTracks = createAsyncThunk(
  'tracks/fetchTracks',
  async () => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=528bb1c76258e68ab0efbd94df7bbd12&format=json`,
    );
    return response.json();
  },
);

export const fetchArtist = createAsyncThunk(
  'artist/fetchArtist',
  async artist => {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=528bb1c76258e68ab0efbd94df7bbd12&format=json&artist=${artist}`,
    );
    return response.json();
  },
);