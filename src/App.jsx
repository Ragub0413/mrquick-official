import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { createBrowserRouter as Router,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projectpage from "./pages/Projectpage";
import AllTestimonialpage from "./pages/AllTestimonialpage";
import LoginPage from "./pages/AdminLoginpage";
import Notfoundpage from "./pages/Notfoundpage";
import AdminDashboard from "./pages/AdminPanelpage"

const router = createBrowserRouter([
  {
    path: "/mrquick-official/",
    element: <Home />,
  },
  {
    path: "/mrquick-official/projects/",   
    element: <Projectpage />,
  },
  {
    path: "/mrquick-official/testimonials/",
    element: <AllTestimonialpage />,
  },
  {
    path: "/mrquick-official/admin/login/",
    element: <LoginPage />,
  },
  {
    path: "/mrquick-official/admin/dashboard/",
    element: <AdminDashboard />,
  },
  {
    path: "*",
    element: <Notfoundpage />,
  },

]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
  // return(
  //   <Router>
  //     <Routes exact path="/" element={<AdminDashboard/>}/>
  //   </Router>
  // );
};

export default App;
