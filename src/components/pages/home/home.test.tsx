import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import  HomePage  from './home'
import { MemoryRouter as Router } from "react-router-dom";
import { store } from '../../../store/store';



describe('HomePage Component', () => {
  test('renders home page with title and list', () => {
    render(  
      <Router>  
        <Provider store={store}>
          <HomePage />
        </Provider>
      </Router>
    );

    const titleElement = screen.getByText(/ALL USERS PUBLICATIONS/i);
    expect(titleElement).toBeInTheDocument();

    const homeComponent = screen.getByTestId('home-component');
    expect(homeComponent).toBeInTheDocument();
  });
});
