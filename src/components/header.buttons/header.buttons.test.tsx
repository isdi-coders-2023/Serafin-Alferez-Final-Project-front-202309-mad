import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeaderButtons } from './header.buttons';
import { MemoryRouter as Router } from "react-router-dom";
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';



jest.mock('../../hooks/use.users', () => ({
  useUsers: jest.fn()
}))
describe('Given HeaderButtons component...', () => {
  describe('When the component is called', () => {
    render(
      <Router>
      <Provider store={store}>
        <HeaderButtons />
      </Provider>
    </Router>
    )
    test('Then its buttons must', async () => {
      const loginButton = screen.getAllByRole('button')[0];
      expect(loginButton).toBeInTheDocument();
      await userEvent.click(loginButton);
      const registerButton = screen.getAllByRole('button')[1];
      expect(registerButton).toBeInTheDocument();
      await userEvent.click(registerButton);
  });
});
});
