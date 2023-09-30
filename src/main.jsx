import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Component/Home/Home.jsx';

import Main from './Component/Main/Main.jsx';
import JobDetails from './Component/JobDeatails/JobDetails';
import AppliedJob from './Component/Applied Job/AppliedJob';
import jobLoader from './Loader/jobLoader';
import Statistic from './Component/Statistic/Statistic';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
       
      },
      {
        path:'statistics',
        element: <Statistic></Statistic>
      },
      {
        path:"jobDetails/:id",
        element:<JobDetails></JobDetails>,
        loader: ({params}) => fetch(`featuredjobs.json/${params.id}`)
      },
      {
        path:"appliedjob",
        element: <AppliedJob></AppliedJob>,
        loader: jobLoader
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
