import { useDispatch, useSelector } from "react-redux";
import { CarsRepo } from "../services/api.repo.cars";
import { useCallback, useMemo } from "react";
import { AppDispatch, RootState } from "../store/store";
import { createCarThunk, deleteCarThunk, loadCarsThunk } from "../slice/cars.thunk";
import { Car } from "../entities/car";
import { setCurrentCar } from "../slice/cars.slice";

export function useCars() {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.userState);
  
  const { cars } = useSelector((state: RootState) => state.carsState);

  const repo = useMemo(() => new CarsRepo(token || ''), [token]);

  const loadCars = useCallback(async () => {
    try {
      dispatch(loadCarsThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo, dispatch]);

  const handleDetailsPage = async (car: Car) => {
    dispatch(setCurrentCar(car));
  };

  const createCar = async (newCar: FormData) => {
      dispatch(
        createCarThunk({
          repo,
          newCar,
        })
      );
  }

  const deleteCar = async (id: Car['id']) => {
      dispatch(
        deleteCarThunk({
          id,
          repo,
        })
      );
  };



  return {
    loadCars,
    handleDetailsPage,
    createCar,
    deleteCar,
    cars,
  };
}
