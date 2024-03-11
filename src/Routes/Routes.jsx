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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "../Routes/AdminRoutes"
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

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
    element:<PrivateRoutes><Dashboard/></PrivateRoutes>,
    children:[
      //normal user
      {
        path:'userHome',
        element:<UserHome/>
      },
      {
        path:'mycart',
        element:<MyCart/>
      },
      {
        path:'payment',
        element:<Payment/>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory/>
      },
      
      //admin only
      {
        path:'adminHome',
        element:<AdminRoutes><AdminHome/></AdminRoutes>
      },
      {
        path:'addItems',
        element:<AddItems/>,

      },
      {
        path:'manageItems',
        element:<AdminRoutes><ManageItems/></AdminRoutes>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoutes><UpdateItems/></AdminRoutes>,
        loader:({params})=>fetch(`https://vistro-boss-server.vercel.app/menu/${params.id}`)
      },
      {
        path:'users',
        element:<AdminRoutes><AllUsers/></AdminRoutes> 
      },

    ]
  }
]);
