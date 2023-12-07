import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage } from "../pages/home";
import { RegisterPage } from "../pages/register.page";
import { LoginPage } from "../pages/login.page";


export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
        </Routes>
      </Suspense>
    </main>
  )
}
