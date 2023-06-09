import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import loggerMiddleware from './middlewares/logger';
// eslint-disable-next-line import/no-cycle
import { postSlice } from './post';
import { commentSlice } from './comment';
import { userSlice } from './user';

const rootReducer = combineReducers({
  post: postSlice.reducer,
  comment: commentSlice.reducer,
  user: userSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loggerMiddleware])
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
