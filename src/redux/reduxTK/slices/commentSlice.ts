import { createAsyncThunk, createSlice, Slice, PayloadAction } from '@reduxjs/toolkit'
import { CommentService } from '../../../services/apiService'


export interface CommentRTK {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
  }
export interface CommentInitialStateRTK {
    comments : [] | CommentRTK[]
}
const initialState : CommentInitialStateRTK = {
    comments: []
}

export const getCommentsThunkRTK = createAsyncThunk<CommentRTK[], void>(
    'comments/getComments',
    async (_, { rejectWithValue }) => {
      try {
        const response = await CommentService.getComments();
        return response;
      } catch (err) {
        const error = err as Error;
        return rejectWithValue(error.message);
      }
    }
  );

export const commentSlice: Slice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCommentsThunkRTK.fulfilled, (state, action: PayloadAction<CommentRTK[]>) => {
          state.comments = action.payload;
        });
        builder.addCase(getCommentsThunkRTK.rejected, () => {
          console.error('Error');
        });
      },
 
})

export default commentSlice.reducer;