import { useDispatch, useSelector } from "react-redux";
import { CarsRepo } from "../services/api.repo.cars";
import { useCallback, useMemo } from "react";
import { AppDispatch, RootState } from "../store/store";
import { createCarThunk, deleteCarThunk, loadCarsThunk, updateCarsThunk } from "../slice/cars.thunk";
import { Car } from "../entities/car";
import { setCurrentCar } from "../slice/cars.slice";

export function useCars() {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.userState);
  const { cars, currentCar } = useSelector((state: RootState) => state.carsState);
  const repo = useMemo(() => new CarsRepo(token!), [token]);

  const loadCars = useCallback(async () => {
      dispatch(loadCarsThunk(repo));
  }, [repo, dispatch]);

  const handleDetailsPage = async (car: Car) => {
    dispatch(setCurrentCar(car));
  };

  const updateCar = async (id: Car['id'], updateCar: FormData) => {
    try { 
      dispatch(updateCarsThunk({ id, repo, updateCar }));
    } catch (error) {
      // console.log((error as Error).message);
    }
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
    updateCar,
    currentCar,
    cars,
  };
}
