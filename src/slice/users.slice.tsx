import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../entities/user';

import { loginThunk, updateUserThunk } from './users.thunk';
import { LoginResponse } from '../types/login.response';

type LoginState = 'idle' | 'logging' | 'error';

export type UsersState = {
  loggedUser: User | null;
  loginLoadState: LoginState;
  token: string | null;
};

const initialState: UsersState = {
  loggedUser: null,
  loginLoadState: 'idle',
  token: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state: UsersState) => {
      state.loggedUser = null;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state: UsersState) => {
      state.loginLoadState = 'logging';
    });
    builder.addCase(
      loginThunk.fulfilled,
      (state: UsersState, { payload }: PayloadAction<LoginResponse>) => {
        state.loggedUser = payload.user;
        state.token = payload.token;
      }
    );

    builder.addCase(loginThunk.rejected, (state: UsersState) => {
      state.loginLoadState = 'error';
    });

    builder.addCase(updateUserThunk.fulfilled, (state: UsersState, {payload}: PayloadAction<User>) => {

      state.loggedUser = payload
    })

  },
});

export default usersSlice.reducer;
export const ac = usersSlice.actions;
export const { setToken, logout } = usersSlice.actions;
