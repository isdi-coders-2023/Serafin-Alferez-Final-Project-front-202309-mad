
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './login.page';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

import { MemoryRouter as Router } from "react-router-dom";

describe('LoginPage Component', () => {
  test('renders login page with title and login component', () => {
    render(  
      <Router>  
        <Provider store={store}>
          <LoginPage />
        </Provider>
      </Router>
    );

    const titleElement = screen.getAllByText(/LOGIN/i);
    expect(titleElement.length).toBeGreaterThan(0);
    const loginComponent = screen.getByTestId('login-component');
    expect(loginComponent).toBeInTheDocument();
  });
});
