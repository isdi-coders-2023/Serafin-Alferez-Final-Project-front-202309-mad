import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { useCars } from './use.cars';
import { Car } from '../entities/car';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn().mockReturnValue({token: 'test'})
}))


describe('Given useCars hook...', () => {
  const dispatch = jest.fn();
  (useDispatch as jest.Mock).mockReturnValue(dispatch)

  describe('When loadCars component is called', () => {
    test('Then it should dispatch', async () => {
      const { result } = renderHook(() => useCars());
      const {loadCars} = result.current;

      loadCars();
      expect(dispatch).toHaveBeenCalled();
  });
});

describe('When createCar component is called', () => {
  test('Then it should dispatch', async () => {
    const { result } = renderHook(() => useCars());
    const {createCar} = result.current;

    createCar({} as FormData);
    expect(dispatch).toHaveBeenCalled();
  });
});

describe('When deleteCar component is called', () => {
  test('Then it should dispatch', async () => {
    const { result } = renderHook(() => useCars());
    const {deleteCar} = result.current;

    deleteCar({} as Car['id']);
    expect(dispatch).toHaveBeenCalled();

  });
});

describe('When deleteCar component is called', () => {
  test('Then it should dispatch', async () => {
    const { result } = renderHook(() => useCars());
    const {handleDetailsPage} = result.current;

    await handleDetailsPage({} as Car);
    expect(dispatch).toHaveBeenCalled();

    });
  });
});
