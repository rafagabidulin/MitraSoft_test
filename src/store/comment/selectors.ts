import { RootState } from '..';

export const selectCommentModuleState = (state: RootState) => state.comment;

export const selectCommentEntities = (state: RootState) => selectCommentModuleState(state).entities;

export const selectCommentArrayEntities = (state: RootState) =>
  Object.values(selectCommentEntities(state));

export const selectCommentByPostId = (state: RootState, { postId }: { postId: number | string }) =>
  selectCommentArrayEntities(state).filter((comment) => comment?.postId === parseInt(postId, 10));
