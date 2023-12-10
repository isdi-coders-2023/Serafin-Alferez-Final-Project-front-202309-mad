
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from "react-router-dom";
import RegisterPage from './register.page';

describe('LoginPage Component', () => {
  test('renders Register page with title and login component', () => {
    render(  
      <Router>  
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      </Router>
    );

    const titleElement = screen.getAllByText(/NEW USER/i);
    expect(titleElement.length).toBeGreaterThan(0);
    const registerComponent = screen.getByTestId('register-component');
    expect(registerComponent).toBeInTheDocument();
  });
});
