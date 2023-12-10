import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/users.slice';


export const store = configureStore({
  reducer: {
    userState: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
