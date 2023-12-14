import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { createCarThunk, deleteCarThunk, loadCarsThunk } from './cars.thunk';
import { Car } from '../entities/car';

export type CarsState
 = {
  cars: Car[];
  stateOption: 'idle' | 'loading' | 'error';
  currentCar: Car | null;
};

const initialState: CarsState
 = {
  cars: [],
  stateOption: 'idle',
  currentCar: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCurrentCar: (
      state: CarsState,
      { payload }: PayloadAction<Car | null>
    ) => {
      state.currentCar = payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(loadCarsThunk.pending, (state: CarsState
      ) => {
      state.stateOption = 'loading';
      return state;
    });
    builder.addCase(
      loadCarsThunk.fulfilled,
      (state: CarsState
        , { payload }: PayloadAction<Car[]>) => {
        state.cars = payload;
        state.stateOption = 'idle';
        return state;
      }
    );
    builder.addCase(loadCarsThunk.rejected, (state: CarsState
      ) => {
      state.stateOption = 'error';
      return state;
    });

    builder.addCase(
      createCarThunk.fulfilled,
      (state: CarsState, { payload }: PayloadAction<Car>) => ({
        ...state,
        cars: [...state.cars, payload]
      })
    );

    builder.addCase(
      deleteCarThunk.fulfilled,
      (state: CarsState, { payload }: PayloadAction<Car['id']>) => {
        state.cars.splice(
          state.cars.findIndex((item) => item.id === payload),
          1
        );
        return state;
      }
    );
  },
});

export default carsSlice.reducer;
export const { setCurrentCar } = carsSlice.actions;