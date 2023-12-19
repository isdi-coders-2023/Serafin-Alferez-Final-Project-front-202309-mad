
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from "react-router-dom";
import { store } from '../../../store/store';
import HomePage from './home';

describe('LoginPage Component', () => {
  test('renders Home page with title and Home component', () => {
    render(  
      <Router>  
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Router>
    );

    const titleElement = screen.getByText(/ALL USERS PUBLICATIONS/i);
    expect(titleElement).toBeInTheDocument();
    const loginComponent = screen.getByTestId('home-component');
    expect(loginComponent).toBeInTheDocument();
  });
});
