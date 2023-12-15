import { useNavigate } from "react-router-dom";
import { useCars } from "../hooks/use.cars";
import { useState } from "react";

export function editCar() {

  const { currentCar, updateCar } = useCars();
  const navigate = useNavigate();
  
  const [car, setCar] = useState(currentCar);
  



}
