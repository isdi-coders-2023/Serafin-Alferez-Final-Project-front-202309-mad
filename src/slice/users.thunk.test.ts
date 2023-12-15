import '@testing-library/jest-dom';
import { UserRepo } from '../services/api.repo.users';
import { loginThunk, logoutThunk } from './users.thunk';
import { LoginUser } from '../entities/user';
import { store } from '../store/store';

describe('Give user.thunk', () => {
  describe('When an action login is taken... ', () => {
    const userTest = {
      repo : {
        login: jest.fn().mockReturnValue({
          token: '',
        }),
        loginWithToken: jest.fn().mockReturnValue({
          token: '',
        }),
      } as unknown as UserRepo,
    };

    test('Then is should dispatch loginThunk and update user store', async () => {
      const userData = { ...userTest, loginUser: {} as LoginUser };
      await store.dispatch(loginThunk(userData));
      expect(userData.repo.login).toHaveBeenCalled();
    })
  })


  describe('Given user.thunk', () => {
    describe('When an action logout is taken...', () => {

      test('logoutThunk should dispatch', async () => {
        await store.dispatch(logoutThunk());
        expect(store.getState().userState.loggedUser).toBeNull(); // Verifica si el usuario está nulo después de hacer logout
      });
    });
  });
});

    
