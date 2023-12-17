import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '../entities/user';

import { loginThunk } from './users.thunk';
import { LoginResponse } from '../types/login.response';
import { createCarThunk, deleteCarThunk } from './cars.thunk';
import { Car } from '../entities/car';


type LoginState = 'idle' | 'logging' | 'error';

  export type UsersState = {
    loggedUser: User | null;
    loginLoadState: LoginState;
    token: string | null;
  };

  export const initialState: UsersState = {
    loggedUser: null,
    loginLoadState: 'idle',
    token: '',
  };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
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

    // builder.addCase(createCarThunk.fulfilled, (state: UsersState, {payload}:PayloadAction<Car>) => ({
    //   ...state,
    //   loggedUser: {
    //     ...state.loggedUser!,
    //     cars: [...state.loggedUser!.cars, payload]
    //   }
    // }))

    builder.addCase(
      createCarThunk.fulfilled,
      (state, { payload }: PayloadAction<Car>) => {
        if (state.loggedUser) {
          state.loggedUser.cars = [...state.loggedUser.cars, payload];
        }
      }
    );

    builder.addCase(
      deleteCarThunk.fulfilled,
      (state, { payload }: { payload: Car['id'] }) => {
        if (state.loggedUser) {
          state.loggedUser.cars = state.loggedUser.cars.filter((item) => {
            return item.id !== payload;
          });
        }
      }
    );


  },
});

export default usersSlice.reducer;
export const ac = usersSlice.actions;
export const { logout } = usersSlice.actions;
