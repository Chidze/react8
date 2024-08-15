import { createAsyncThunk, createSlice, Slice, PayloadAction } from '@reduxjs/toolkit'
import { AlbumService } from '../../../services/apiService'


export interface AlbumRTK {
    userId: number,
    id: number,
    title: string
  }
export interface AlbumInitialStateRTK {
    albums : [] | AlbumRTK[]
}
const initialState : AlbumInitialStateRTK = {
    albums: []
}

export const getAlbumsThunkRTK = createAsyncThunk<AlbumRTK[], void>(
    'albums/getAlbums',
    async (_, { rejectWithValue }) => {
      try {
        const response = await AlbumService.getAlbums();
        return response;
      } catch (err) {
        const error = err as Error;
        return rejectWithValue(error.message);
      }
    }
  );

export const albumSlice: Slice = createSlice({
    name: 'album',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAlbumsThunkRTK.fulfilled, (state, action: PayloadAction<AlbumRTK[]>) => {
          state.albums = action.payload;
        });
        builder.addCase(getAlbumsThunkRTK.rejected, () => {
          console.error('Error');
        });
      },
 
})

export default albumSlice.reducer;