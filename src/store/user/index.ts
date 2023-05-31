import axios from 'axios';
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import LoadingStatuses from '../../constants/loadingStatuses';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users?userId=${userId}`);
  return response.data;
});

interface UserState {
  id: number;
  name: string;
  username: string;
  email: string;
}

const userEntityAdapter = createEntityAdapter<UserState>();

export const userSlice = createSlice({
  name: 'user',
  initialState: userEntityAdapter.getInitialState({
    status: LoadingStatuses.idle
  }),
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = LoadingStatuses.inProgress;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        userEntityAdapter.addMany(state, payload);
        state.status = LoadingStatuses.success;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.status =
          payload === LoadingStatuses.earlyAdded ? LoadingStatuses.success : LoadingStatuses.failed;
      })
});
