import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../login/login";
import { Register } from "../register/register";
import { Home } from "../pages/home";


export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </Suspense>
    </main>
  )
}
