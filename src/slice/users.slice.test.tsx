import '@testing-library/jest-dom';
import usersReducer, { UsersState } from './users.slice';
import { loginThunk } from './users.thunk';




describe('Given userReducer', () => {
  describe('When users/logout actions is dispatch ', () => {
    test('Then the new state will be returned ', async () => {
      const action = { type: 'users/logout'};
      const state: UsersState = {loggedUser:{cars:[{id: '123'}]}} as UsersState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe(null);
      expect(result.token).toBe(null);
  });
});

  describe('When users/login/pending action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = {
        type: 'login/fulfilled',
        payload: { user: 'test', token: 'token' },
      };
      const state: UsersState = {} as UsersState;
      const result = usersReducer(state, action);
      expect(result.loggedUser).toBe('test');
      expect(result.token).toBe('token');

    })
  })
  
  describe('When users/login/pending action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = loginThunk.pending;  // Usa la acción generada por el thunk
      const state: UsersState = {} as UsersState;
      const result = usersReducer(state, action);
      expect(result.loginLoadState).toBe('logging');
    });
  });

  describe('When users/login/rejected action is dispatch', () => {
    test('Then the new state will be returned ', () => {
      const action = loginThunk.rejected;
      const state: UsersState = {} as UsersState;
      const result = usersReducer(state, action);
      expect(result.loginLoadState).toBe('error');
    });
  });


});
