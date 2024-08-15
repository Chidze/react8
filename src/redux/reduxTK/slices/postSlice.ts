import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PostService } from '../../../services/apiService'


export interface PostRTK {
    userId: number,
    id: number,
    title: string,
    body: string
  }
export interface PostInitialStateRTK {
    post: PostRTK | null;
    error: string | null; 
}
const initialState : PostInitialStateRTK = {
    post: null,
    error: null, 
}

export const getPostThunkRTK = createAsyncThunk<PostRTK, number>(
    'post/getPost',
    async (postId: number, { rejectWithValue }) => {
      try {
        const response = await PostService.getPost(postId);
        return response;
      } catch (err) {
        const error = err as Error;
        return rejectWithValue(error.message);
      }
    }
  );

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPostThunkRTK.fulfilled, (state, action: PayloadAction<PostRTK>) => {
            state.post = action.payload;
            state.error = null;
        });
        builder.addCase(getPostThunkRTK.rejected, (state, action) => {
            state.error = action.payload as string
        });
      },
 
})

export default postSlice.reducer;