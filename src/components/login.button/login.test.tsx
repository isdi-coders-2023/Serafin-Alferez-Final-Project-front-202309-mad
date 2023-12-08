import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Login } from './login'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';
import { useUsers } from '../../hooks/use.users';

jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    login: jest.fn(),
  }),

}));

describe('Given login component...', () => {
  describe('When Login component is called', () => {
      render(
        <Router>
          <Provider store={store}>
            <Login></Login>
          </Provider>
        </Router>
      );  
    
    test('Then it complete the form', async () => {
      const form = screen.getByRole('form');
      const input = screen.getAllByRole('textbox');
      const cancelButton = screen.queryByText('CANCEL');
      await userEvent.type(input[0], 'test');
      await userEvent.click(screen.getAllByRole('button')[0]);
      await fireEvent.submit(form);
      expect(useUsers().login).toHaveBeenCalled();
      expect(cancelButton).toBeNull();
  });
});
});
