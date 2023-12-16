import { createAsyncThunk } from '@reduxjs/toolkit';
import { CarsRepo } from '../services/api.repo.cars.ts';
import { Car } from '../entities/car.ts';

type Params = {
  repo: CarsRepo;
  newCar: FormData;
}

type Params2 = {
  repo: CarsRepo;
  pageNumber: string;
}

export const loadCarsThunk = createAsyncThunk<Car[], CarsRepo>(
  'load',
  async (repo) => {
    const cars = await repo.getCars();
    return cars;
  }
);

export const loadCarsByPageThunk = createAsyncThunk<Car[], Params2>(
  'load',
  async ({repo, pageNumber}) => {
    const cars = await repo.getCarsByPage(pageNumber);
    return cars;
  }
)

export const createCarThunk = createAsyncThunk<Car, Params>(
  'create',
  async ({ repo, newCar }) => {
    const addededCar = await repo.createCar(newCar);
    return addededCar;
  }
);

export const deleteCarThunk = createAsyncThunk<Car['id'],
{
  repo: CarsRepo;
  id: Car['id'];
}
>('delete', async ({ repo, id }) => {
  await repo.deleteCar(id);
  return id;
});

export const updateCarsThunk = createAsyncThunk<
  Car,
  {
    repo: CarsRepo;
    id: Car['id'];
    updateCar: FormData;
  }
>('update', async ({ repo, id, updateCar }) => {
  const finalCar = await repo.updateCar(id, updateCar);
  return finalCar;
});
