import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.user';
import { LoginUser } from '../entities/user';
import { LocalStorage } from '../services/local.storage';
import { UserRepo } from '../services/api.repo.users';


export const loginThunk = createAsyncThunk<
  LoginResponse,
  {
    loginUser: LoginUser;
    repo: UserRepo;
    userStore: LocalStorage<{ token: string }>;
  }
  >('login', async ({ loginUser, repo, userStore }) => {
    const LoginResponse = await repo.login(loginUser);
    userStore.set({ token: LoginResponse.token });
    return LoginResponse;
  });

  export const loginTokenThunk = createAsyncThunk<
    LoginResponse,
    {
      token: string;
      repo: UserRepo;
      userStore: LocalStorage<{ token: string }>;
    }
    >('loginWithToken', async ({ token, repo, userStore }) => {
      const loginResponse = await repo.loginWithToken(token);
      userStore.set({ token: loginResponse.token });
      return loginResponse;
    });
