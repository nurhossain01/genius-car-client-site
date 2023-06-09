import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkOut/:id',
        loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`),
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
      },
      {
        path: '/orders',
        element: <Bookings></Bookings>
      }
    ]
  }
])