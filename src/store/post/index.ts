import axios from 'axios';
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '..';
import LoadingStatuses from '../../constants/loadingStatuses';
import { selectPostIds } from './selectors';

interface PostState {
  posts: [];
  post?: [];
  id: string;
  userid: string;
  status: string;
  title: string;
  body: string;
  comments: [];
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async (_, thunkAPI) => {
  if (selectPostIds(thunkAPI.getState() as RootState).length > 0) {
    return thunkAPI.rejectWithValue(LoadingStatuses.earlyAdded);
  }

  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

const postEntityAdapter = createEntityAdapter<PostState>();

export const postSlice = createSlice({
  name: 'post',
  initialState: postEntityAdapter.getInitialState({
    status: LoadingStatuses.idle
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = LoadingStatuses.inProgress;
      })
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        postEntityAdapter.addMany(state, payload);
        state.status = LoadingStatuses.success;
      })
      .addCase(fetchPosts.rejected, (state, { payload }) => {
        state.status =
          payload === LoadingStatuses.earlyAdded ? LoadingStatuses.success : LoadingStatuses.failed;
      })
});
