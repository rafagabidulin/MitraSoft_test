import axios from 'axios';
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import LoadingStatuses from '../../constants/loadingStatuses';

export const fetchComments = createAsyncThunk('comment/fetchComments', async (postId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );

  return response.data;
});

export interface CommentState {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const commentEntityAdapter = createEntityAdapter<CommentState>();

export const commentSlice = createSlice({
  name: 'comment',
  initialState: commentEntityAdapter.getInitialState({
    status: LoadingStatuses.idle
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = LoadingStatuses.inProgress;
      })
      .addCase(fetchComments.fulfilled, (state, { payload }) => {
        commentEntityAdapter.addMany(state, payload);
        state.status = LoadingStatuses.success;
      })
      .addCase(fetchComments.rejected, (state, { payload }) => {
        state.status =
          payload === LoadingStatuses.earlyAdded ? LoadingStatuses.success : LoadingStatuses.failed;
      })
});
