import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.user';
import { LoginUser } from '../entities/user';
//T import { LocalStorage } from '../services/local.storage';
import { UserRepo } from '../services/api.repo.users';
import { setToken } from './users.slice';


// T export const loginThunk = createAsyncThunk<
//   LoginResponse,
//   {
//     loginUser: LoginUser;
//     repo: UserRepo;
//     userStore: LocalStorage<{ token: string }>;
//   }
//   >('login', async ({ loginUser, repo, userStore }) => {
//     const LoginResponse = await repo.login(loginUser);
//     userStore.set({ token: LoginResponse.token });
//     return LoginResponse;
//   });

  // export const loginTokenThunk = createAsyncThunk<
  //   LoginResponse,
  //   {
  //     token: string;
  //     repo: UserRepo;
  //     userStore: LocalStorage<{ token: string }>;
  //   }
  //   >('loginWithToken', async ({ token, repo, userStore }) => {
  //     const loginResponse = await repo.loginWithToken(token);
  //     userStore.set({ token: loginResponse.token });
  //     return loginResponse;
  //   });

  // Action creators for updating the store with the token

// loginThunk
export const loginThunk = createAsyncThunk<LoginResponse, { loginUser: LoginUser; repo: UserRepo }>(
  'login',
  async ({ loginUser, repo }, { dispatch }) => {
    const loginResponse = await repo.login(loginUser);
    dispatch(setToken(loginResponse.token)); // Dispatch an action to update the token in the store
    return loginResponse;
  }
);

// loginTokenThunk
export const loginTokenThunk = createAsyncThunk<LoginResponse, { token: string; repo: UserRepo }>(
  'loginWithToken',
  async ({ token, repo }, { dispatch }) => {
    const loginResponse = await repo.loginWithToken(token);
    dispatch(setToken(loginResponse.token)); // Dispatch an action to update the token in the store
    return loginResponse;
  }
);

