
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { useUsers } from '../../hooks/use.users';
import { LogoutButton } from './logout';
import userEvent from '@testing-library/user-event';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    logout: jest.fn(),
    loggedUser: {name: 'Pepe'}  }),
}));

describe('LogoutButton component', () => {
  beforeEach(() => {
    
    render(
      <Router>
        <Provider store={store}>
          <LogoutButton />
        </Provider>
      </Router>
    );
  });

  it('renders logout button and triggers logout function on click', async () => {
    const logoutButton = screen.getByRole('button');
    expect(logoutButton).toBeInTheDocument();
    await userEvent.click(logoutButton);
    expect(useUsers().logout).toHaveBeenCalled();
  });

});
