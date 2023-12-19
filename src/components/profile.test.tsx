
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';


import { useCars } from '../hooks/use.cars';
import Profile from './profile.tsx';

jest.mock('../hooks/use.cars.ts', () => ({
  useCars: jest.fn().mockReturnValue({
    loadCars: jest.fn(),
    cars: [{author: {id: 'test'}}],
    carUpdateState: 'test',
  }),
}));

jest.mock('../hooks/use.users', () => ({
  useUsers: jest.fn().mockReturnValue({
    loggedUser: {name: 'test', id: 'test'}
  }),
}));

describe('Given List Component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Profile />
          </Provider>
        </BrowserRouter>
      );
    });

    test('the loadCar should have been called', () => {
      expect(useCars().loadCars).toHaveBeenCalled();
    });
  

    test('Then the car card should be in the document...', () => {
      const result = screen.getByTestId('cars');
      expect(result).toBeInTheDocument();
    });
    });
  });
