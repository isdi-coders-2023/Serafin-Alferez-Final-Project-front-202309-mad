import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import AddCar from './add.car';



jest.mock('../../hooks/use.cars');

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: () => ({ id: '1' }),
  useNavigate: () => jest.fn(),
}));

const mockedCars = [
  { id: '1', make: 'test1' },
  { id: '2', make: 'test2' },
  { id: '3', make: 'test3' },
];

const addCarMock = jest.fn();

jest.mock('../../hooks/use.cars', () => ({
  useCars: () => ({
    cars: mockedCars,
    loadCars: jest.fn(),
    createCar: addCarMock,
  }),
}));

describe('AddCarPage', () => {
  it('updates the car card on form submission', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <AddCar />
      </MemoryRouter>
    );

    const submitButton = getByRole('button', { name: /SAVE/i });

    userEvent.click(submitButton);

    const formElement = getByRole('form'); 

    fireEvent.submit(formElement);

    expect(addCarMock).toHaveBeenCalled();
  });

  describe('AddPage', () => {
    it('updates the car card on form submission', () => {
      const { getByRole } = render(
        <MemoryRouter>
          <AddCar />
        </MemoryRouter>
      );
  
      const makeInput = screen.getByTestId('select');
      userEvent.selectOptions(makeInput, 'Audi');
      const submitButton = getByRole('button', { name: /SAVE/i });
      userEvent.click(submitButton);
      expect(addCarMock).toHaveBeenCalled();
    });
  });
  
});
