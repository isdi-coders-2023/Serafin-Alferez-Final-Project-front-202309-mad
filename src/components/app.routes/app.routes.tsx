import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const RegisterPage = lazy(() => import('../pages/register.page'));
const HomePage = lazy(() => import('../pages/home/home'));
const LoginPage = lazy(() => import('../pages/login.page'));
const Details = lazy(() => import ('../details/details'));
const Profile = lazy(() => import ('../profile'));

export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
        </Routes>
      </Suspense>
    </main>
  )
}
