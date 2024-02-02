import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <PrivateRoutes><Menu /></PrivateRoutes>,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path:'logIn',
        element:<LogIn/>
      },
      {
        path:'signUp',
        element:<SignUp/>
      }
    ],
  },
  {
    path:'dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'mycart',
        element:<MyCart/>
      }
    ]
  }
]);
