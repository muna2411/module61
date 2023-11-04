import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';
import AuthProvider from './components/AuthProvider';
import Login from './components/login';
import Checkout from './components/Checkout';
import Signin from './components/Signin';
import Bookings from './components/bookings';
import PrivateRoutes from './components/privateRoutes';
import Calendar from 'react-calendar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/checkout/:id",
        element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
        loader :({params}) =>  fetch(`http://localhost:5000/B/${params.id}`)
      },
      {
       path:"/signin",
       element:<Signin></Signin>
      },
      {
        path:"/bookings",
        element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
      },
      {
        path:"/calender",
        element:<Calendar></Calendar>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>
  </div>
)
