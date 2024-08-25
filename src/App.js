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
import CarouselComponent from "./components/CarouselComponent";
import Services from "./components/Services";
import Consultation from "./components/Consultation";
import CompanyServices from "./components/CompanyServices";
import ConsultationForm from "./components/ConsultationForm";
import Datafiles from "./components/AdminDashboard/Datafiles";
import AddBlog from "./components/AdminDashboard/AddBlog";
import ConsultationTable from "./components/AdminDashboard/ConsultationTable";
import JoinUs from "./components/JoinUs";
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
      //    <PrivateRoute>
            <Admindash />
        //  </PrivateRoute>
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
      {
        path: "المستندات",
        element: (
       //   <PrivateRoute>
            <Datafiles />
         // </PrivateRoute>
        ),
      },
      {
        path: "كتابة مقال",
        element: (
       //   <PrivateRoute>
            <AddBlog />
         // </PrivateRoute>
        ),
      },
      {
        path: "الاستشارات",
        element: (
       //   <PrivateRoute>
            <ConsultationTable />
         // </PrivateRoute>
        ),
      },
      {
        path: "انضم لنا",
        element: (
       //   <PrivateRoute>
            <JoinUs />
         // </PrivateRoute>
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
  {
    path: "/car",
    element: <CarouselComponent />,
  },
  {
    path: "/خدماتنا",
    element: <Services />,
  },
  {
    path: "/استشارة",
    element: <Consultation />,
  },
  {
    path: "/للشركات",
    element: <CompanyServices />,
  },
  {
    path: "/انظم الينا",
    element: <JoinUs />,
  },
  {
    path: "/form",
    element: <ConsultationForm />,
  },

]);
