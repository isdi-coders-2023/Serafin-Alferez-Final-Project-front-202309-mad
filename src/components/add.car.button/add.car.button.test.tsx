import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { AddCarButton } from './add.car.button';
import userEvent from '@testing-library/user-event';
import { useUsers } from '../../hooks/use.users';
import { User } from '../../entities/user';

jest.mock('../../hooks/use.users');

describe('AddCarButton', () => {
  test('renders the AddCarButton and triggers the link', () => {

    (useUsers as jest.Mock).mockReturnValue({
      loggedUser: {} as User,
    });

    render(
      <Router>
        <Provider store={store}>
          <AddCarButton />
        </Provider>
      </Router>
    );

    const linkElement = screen.getByTestId('link');
    expect(linkElement).toBeInTheDocument();
    userEvent.click(linkElement);
    expect(window.location.pathname).toBe('/');
  });
});
