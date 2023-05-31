// eslint-disable-next-line import/no-cycle
import { RootState } from '..';

export const selectUserModuleState = (state: RootState) => state.user;

export const selectUserEntities = (state: RootState) => selectUserModuleState(state).entities;

export const selectUserById = (state: RootState, { userId }: { userId: number }) =>
  selectUserEntities(state)[userId];
