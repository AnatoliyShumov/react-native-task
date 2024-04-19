import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_UNSPLASH = 'eB4pnfP9nxRwasU-_Iw8e_yuVB7j5Wa1fpHsvQY2dgs';

type Photo = {
  id: string;
  urls: {small: string; regular: string};
  description: string;
  user: {
    name: string;
  };
};

type InitialState = {
  error: string | null | undefined;
  randomPhotos: {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    photos: Photo[];
  };
  photoDetails: {
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    photo: Photo | null;
  };
};

// Initial State
const initialState: InitialState = {
  error: null,
  randomPhotos: {
    status: 'idle',
    photos: [],
  },
  photoDetails: {
    status: 'idle',
    photo: null,
  },
};

// Async Thunks
export const fetchRandomPhotos = createAsyncThunk(
  'photos/random',
  async (count: number, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=${API_UNSPLASH}&count=${count}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchPhotoById = createAsyncThunk(
  'photos/details',
  async (photoId: string, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/${photoId}?client_id=${API_UNSPLASH}`,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Slice
const userSlice = createSlice({
  name: 'dummyNetworkSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchRandomPhotos.pending, state => {
        state.randomPhotos.status = 'loading';
      })
      .addCase(fetchRandomPhotos.fulfilled, (state, action) => {
        state.randomPhotos.status = 'succeeded';
        state.randomPhotos.photos = action.payload;
      })
      .addCase(fetchRandomPhotos.rejected, (state, action) => {
        state.randomPhotos.status = 'failed';
        state.error = action.error.message || 'Error fetching random photos';
      })
      .addCase(fetchPhotoById.pending, state => {
        state.photoDetails.status = 'loading';
      })
      .addCase(fetchPhotoById.fulfilled, (state, action) => {
        state.photoDetails.status = 'succeeded';
        state.photoDetails.photo = action.payload;
      })
      .addCase(fetchPhotoById.rejected, (state, action) => {
        state.photoDetails.status = 'failed';
        state.error = action.error.message || 'Error fetching photo details';
      });
  },
});
export const {} = userSlice.actions;
export default userSlice.reducer;
