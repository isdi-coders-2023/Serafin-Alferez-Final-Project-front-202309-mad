import { useDispatch } from "react-redux";
import { CarsRepo } from "../services/api.repo.cars";
import { useCallback, useMemo } from "react";
import { AppDispatch } from "../store/store";
import { loadCarsThunk } from "../slice/cars.thunk";
import { Car } from "../entities/car";
import { setCurrentCar } from "../slice/cars.slice";

export function useCars() {
  const dispatch = useDispatch<AppDispatch>();

  const repo = useMemo(() => new CarsRepo(), []);

  const loadCars = useCallback(async () => {
    try {
      dispatch(loadCarsThunk(repo));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const handleDetailsPage = async (car: Car) => {
    dispatch(setCurrentCar(car));
  };

  return {
    loadCars,
    handleDetailsPage,
  };
}
