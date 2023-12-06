import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";


export function AppRoutes() {
  return (
    <main>
      <Suspense>
        <Routes>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
        </Routes>
      </Suspense>
    </main>
  );
}
