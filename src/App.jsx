import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Error from "./pages/Error/Error";
import { AppLayout, AuthLayout } from "./layout/AppLayout";
import Cart from "./pages/cart/Cart";
import Product from "./pages/products/Product";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
