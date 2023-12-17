
import { Car } from '../entities/car';
import carsReducer, {
  setCurrentCar,
  CarsState,
} from './cars.slice';
describe('Given cars slice', (): void => {
  describe('When cars reducer setCurrentCar', () => {
    const initialState: CarsState = {
      currentCar: null,
      cars: [],
      carUpdateState: 'idle',
      stateOption: 'idle'
    };

    test('should handle setCurrentCar', () => {
      const actual = carsReducer(
        initialState,
        setCurrentCar({ id: '1' } as unknown as Car)
      );
      expect(actual.currentCar).toEqual({ id: '1' });
    });
  });

  describe('cars actions', () => {
    it('should create an action for setCurrentCar', () => {
      const payload = { id: '1' } as unknown as Car;
      const expectedAction = {
        type: setCurrentCar.type,
        payload,
      };
      expect(setCurrentCar(payload)).toEqual(expectedAction);
    });
  });
});
