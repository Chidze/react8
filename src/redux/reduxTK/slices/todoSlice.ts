import { createAsyncThunk, createSlice, Slice, PayloadAction } from '@reduxjs/toolkit'
import { TodoService } from '../../../services/apiService'


export interface TodoRTK {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }
export interface TodoInitialStateRTK {
    todos : [] | TodoRTK[]
}
const initialState : TodoInitialStateRTK = {
    todos: []
}

export const getTodosThunkRTK = createAsyncThunk<TodoRTK[], void>(
    'todos/getTodos',
    async (_, { rejectWithValue }) => {
      try {
        const response = await TodoService.getTodos();
        return response;
      } catch (err) {
        const error = err as Error;
        return rejectWithValue(error.message);
      }
    }
  );

export const todoSlice: Slice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTodosThunkRTK.fulfilled, (state, action: PayloadAction<TodoRTK[]>) => {
          state.todos = action.payload;
        });
        builder.addCase(getTodosThunkRTK.rejected, () => {
          console.error('Error');
        });
      },
 
})

export default todoSlice.reducer;