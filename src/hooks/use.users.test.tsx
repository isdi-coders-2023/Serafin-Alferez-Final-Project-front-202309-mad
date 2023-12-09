import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LoginUser, User } from '../entities/user';
import { useUsers } from './use.users';
import { store } from '../store/store';
import { Provider, useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { UserRepo } from '../services/api.repo.users';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'), useDispatch: jest.fn().mockReturnValue(jest.fn()),
}))

const mockLoginUser = {} as LoginUser;
const mockNewUser = {} as Partial<User>;

describe('Given user Hook', () => {
  const TestComponents = () => {
    const { login, logout, register } = useUsers();

    return (
      <>
        <button onClick={() => logout()}></button>
        <button onClick={() => login(mockLoginUser)}></button>
        <button onClick={() => register(mockNewUser)}></button>
      </>
    );
  };

  let elements: HTMLElement[];

  beforeEach(() => {
    render(
      <Provider store={store}>
        <TestComponents></TestComponents>
      </Provider>
    );
  elements= screen.getAllByRole('button');
  });


  describe('When an user logout', () => {
    test('Then the dispatch should have been called', async () => {
      await userEvent.click(elements[0]);
      expect(useDispatch()).toHaveBeenCalled();
    })
  });

  describe('When an user login', () => {
    test('Then the dispatch should have been called', async () => {
      await userEvent.click(elements[1]);
      expect(useDispatch()).toHaveBeenCalled();
    })
  });

  describe('When an user register', () => {
    test('Then the dispatch should have been called', async () => {
      UserRepo.prototype.createUser = jest.fn()
      await userEvent.click(elements[2]);
      expect(useDispatch()).toHaveBeenCalled();
    })
  })
});

