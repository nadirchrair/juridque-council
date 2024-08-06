import React from "react";
import User from "./components/User";
import Blogs from "./components/Blogs";
import BlogsId from "./components/BlogsId";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./components/Error";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { AddProduct } from "./components/Products/AddProduct";
import MenuAppBar from "./components/MenuAppBar";
import Categories from "./components/Categories/Categories";
import Register from "./components/Register";
import Principle from "./components/Principle";
import AddPhonenumber from "./components/addContent/Addphonenumber";
import Addcontent from "./components/addContent/Addcontent";
import UploadImage from "./components/addContent/UploadImage";
import Admindash from "./components/adminpanel/Admindash";
export const App = () => {
  return (
    <React.Fragment>
      <MenuAppBar />
      <Outlet />
    </React.Fragment>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/admin",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Admindash />
          </PrivateRoute>
        ),
      },
      {
        path: "phonenumber",
        element: (          <PrivateRoute>   <AddPhonenumber/>       </PrivateRoute>

          )
      },
      {
        path: "addpost",
        element:(  <PrivateRoute> <Addcontent /> </PrivateRoute>) ,
      },
      {
        path: "addpost/upload-image/:id",
        element: (
          <PrivateRoute>
            <UploadImage />
          </PrivateRoute>
        ),
      },
     ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Principle />,
  },
  
]);
