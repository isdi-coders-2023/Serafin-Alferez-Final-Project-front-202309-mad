import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { createCarThunk, deleteCarThunk, loadCarsThunk, updateCarsThunk } from './cars.thunk';
import { Car } from '../entities/car';

export type CarsState
 = {
  cars: Car[];
  stateOption: 'idle' | 'loading' | 'error';
  currentCar: Car | null;
  carUpdateState: 'idle' | 'loading';
};

const initialState: CarsState
 = {
  cars: [],
  stateOption: 'idle',
  currentCar: null,
  carUpdateState: 'idle'
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

    
    builder.addCase(updateCarsThunk.pending, (state: CarsState) => {
      state.carUpdateState = 'loading';
      return state;
    });
    
    builder.addCase(
      updateCarsThunk.fulfilled,
      (state: CarsState, { payload }: PayloadAction<Car>) => {
        const findCar =
          state.cars[
            state.cars.findIndex((item) => item.id === payload.id)
          ];
        state.carUpdateState = 'idle';
        state.currentCar = findCar;
        
        return state;
      }
    );
    
    // builder.addCase(
    //   updateCarsThunk.fulfilled,
    //   (state: CarsState, { payload }: PayloadAction<Car>) => {
    //     state.cars[state.cars.findIndex((item) => item.id === payload.id)] =
    //       payload;
    //     return state;
    //   }
    // );
  },
});

export default carsSlice.reducer;
export const { setCurrentCar } = carsSlice.actions;
