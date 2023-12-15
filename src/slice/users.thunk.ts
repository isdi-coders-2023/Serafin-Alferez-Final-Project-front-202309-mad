import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginResponse } from '../types/login.response';
import { LoginUser, /*User*/ } from '../entities/user';
import { UserRepo } from '../services/api.repo.users';
import { logout } from './users.slice';


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

// export const updateUserThunk = createAsyncThunk<
//   User,
//   { repo: UserRepo; id: string }
// >('product/load', async ({ repo, id }) => {
//   const result = await repo.getUpdatedUserById(id);
//   return result;
// });      // quitado 15-12

