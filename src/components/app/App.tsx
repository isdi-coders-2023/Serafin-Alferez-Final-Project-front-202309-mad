
import { AppRoutes } from '../app.routes/app.routes';

import { Header } from '../header/header';
import { Footer } from '../pages/footer';


export function App() {
 
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
