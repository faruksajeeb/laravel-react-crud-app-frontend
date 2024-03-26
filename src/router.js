import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import ProductList from "./pages/product/list";
import Dashboard from "./pages/Dashboard";
import UserList from "./pages/user/UserList";
import UserForm from "./pages/user/UserForm";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot_password",
        element: <ForgotPassword />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
    //   {
    //     path: "/",
    //     element: <Navigate to="/dashboard" />,
    //   },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <UserList />,
      },
      
      {
        path: "/users/create",
        element: <UserForm />,
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate" />
      },
      
      {
        path: "/products",
        element: <ProductList />,
      },
    ],
  },
  
]);

export default router;
