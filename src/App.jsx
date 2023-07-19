import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import "flowbite";
import ShopContextProvider from "./context/ShopContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <div>
      <ShopContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
