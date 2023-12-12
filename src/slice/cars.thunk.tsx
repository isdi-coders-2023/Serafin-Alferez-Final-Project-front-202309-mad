import { createAsyncThunk } from '@reduxjs/toolkit';
import { CarsRepo } from '../services/api.repo.cars.ts';
import { Car } from '../entities/car.ts';

export const loadCarsThunk = createAsyncThunk<Car[], CarsRepo>(
  'load',
  async (repo) => {
    const cars = await repo.getCars();
    return cars;
  }
);
