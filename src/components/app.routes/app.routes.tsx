import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";


const RegisterPage = lazy(() => import('../pages/register.page'));
const HomePage = lazy(() => import('../pages/home/home'));
const LoginPage = lazy(() => import('../pages/login.page'));
const Details = lazy(() => import('../details/details'));
const Profile = lazy(() => import('../profile'));
const AddCar = lazy(() => import('../add.car/add.car'))
const EditCar = lazy(() => import('../edit.car'))
const ErrorPage = lazy(() => import('../pages/error.page'))

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/home/page/:page" element={<HomePage></HomePage>}></Route>
          <Route path="/" element={<Navigate to="/home/page/1" />}></Route>
          <Route path="/home" element={<Navigate to="/home/page/1" />}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route path="/addcar" element={<AddCar></AddCar>}></Route>
          <Route path="/edit/:id" element={<EditCar></EditCar>}></Route>
          <Route path="/error" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Suspense>
    </main>
  )
}

// npm install react-router-dom@latest
