import { CarsRepo } from "../services/api.repo.cars";
import { store } from "../store/store";
import { createCarThunk, deleteCarThunk, loadCarsThunk, updateCarsThunk } from "./cars.thunk";


describe('Given a scenario where...', () => {
  describe('When an action is taken...', () => {
    const mockCarsRepo = {
      repo: {
        getCars: jest.fn().mockReturnValue([]),
        createCar: jest.fn().mockReturnValue({}),
        updateCar: jest.fn().mockResolvedValue({}),
        deleteCar: jest.fn().mockResolvedValue('1'),
      } as unknown as CarsRepo,
    };

    test('Then it should dispatch loadCarsThunk and update cars store', async () => {
      const data = { ...mockCarsRepo } as { repo: CarsRepo };
      await store.dispatch(loadCarsThunk(data.repo));
      expect(data.repo.getCars).toHaveBeenCalled();
    });

    test('Then it should dispatch createCarThunk and create a new clothing item', async () => {
      const data = { ...mockCarsRepo } as { repo: CarsRepo };
      const newCar = {} as FormData;
      await store.dispatch(
        createCarThunk({ repo: data.repo, newCar })
      );
      expect(data.repo.createCar).toHaveBeenCalledWith(
        newCar
      );
    });
    test('Then it should dispatch updateCarsThunk and update a car', async () => {
      const data = { ...mockCarsRepo } as { repo: CarsRepo };
      const idToUpdate = '1';
      const updateCar = {} as FormData;

      await store.dispatch(
        updateCarsThunk({
          repo: data.repo,
          id: idToUpdate,
          updateCar,
        })
      );
      expect(data.repo.updateCar).toHaveBeenCalledWith(
        idToUpdate,
        updateCar
      );
    });
    test('Then it should dispatch deleteCarsThunk and delete a car', async () => {
      const data = { ...mockCarsRepo } as { repo: CarsRepo };
      const idToDelete = '1';
      await store.dispatch(
        deleteCarThunk({ repo: data.repo, id: idToDelete })
      );

      expect(data.repo.deleteCar).toHaveBeenCalledWith(idToDelete);
    });
  });
});
