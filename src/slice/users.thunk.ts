import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.response';
import { LoginUser, User } from '../entities/user';
//T import { LocalStorage } from '../services/local.storage';
import { UserRepo } from '../services/api.repo.users';
import { logout } from './users.slice';
// Timport { LocalStorage } from '../services/local.storage';


export const loginThunk = createAsyncThunk<LoginResponse, { loginUser: LoginUser; repo: UserRepo }>(
  'login',
  async ({ loginUser, repo }) => {
    const loginResponse = await repo.login(loginUser);
    return loginResponse;
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, { dispatch }) => {
  dispatch(logout());
  return 'Logout exitoso';
});

export const updateUserThunk = createAsyncThunk<
  User,
  { repo: UserRepo; id: string }
>('product/load', async ({ repo, id }) => {
  const result = await repo.getUpdatedUserById(id);
  return result;
});




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


// export const loginTokenThunk = createAsyncThunk<LoginResponse, { token: string; repo: UserRepo }>(
//   'loginWithToken',
//   async ({ token, repo }, { dispatch }) => {
//     const loginResponse = await repo.loginWithToken(token);

//     // Dispatch para actualizar el estado en la tienda de Redux
//     dispatch(setToken(loginResponse.token));

//     // Almacenar el token en localStorage
//     localStorage.setItem('authToken', loginResponse.token);

//     return loginResponse;
//   }
