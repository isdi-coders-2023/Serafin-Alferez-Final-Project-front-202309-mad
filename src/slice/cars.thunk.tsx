import { createAsyncThunk } from '@reduxjs/toolkit';
import { CarsRepo } from '../services/api.repo.cars.ts';
import { Car } from '../entities/car.ts';

type Params = {
  repo: CarsRepo;
  newCar: FormData;
}

export const loadCarsThunk = createAsyncThunk<Car[], CarsRepo>(
  'load',
  async (repo) => {
    const cars = await repo.getCars();
    return cars;
  }
);

export const createCarThunk = createAsyncThunk<Car, Params>(
  'create',
  async ({ repo, newCar }) => {
    const addededCar = await repo.createCar(newCar);
    return addededCar;
  }
);
