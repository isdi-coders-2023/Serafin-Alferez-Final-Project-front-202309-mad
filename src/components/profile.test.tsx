import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../store/store';
import { Car } from '../entities/car';
import { List } from "./list/List";
import { useCars } from '../hooks/use.cars';

jest.mock('../hooks/use.cars.ts', () => ({
  useCars: jest.fn().mockReturnValue({
    loadCars: jest.fn(),
    loadCarsByPage: jest.fn(),
    cars: [],
  }),
}));

describe('Given List Component', () => {
  describe('When we instantiate it', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <List />
          </Provider>
        </BrowserRouter>
      );
    });

    test('Then should render each car item', async () => {
      // Esperar a que la carga de autos se complete
      await waitFor(() => {
        expect(useCars().loadCarsByPage).toHaveBeenCalled();
      });

      useCars().cars.forEach((car: Car) => {
        const carElement = screen.getByText(car.make);
        expect(carElement).toBeInTheDocument();
      });
    });
  });
});
