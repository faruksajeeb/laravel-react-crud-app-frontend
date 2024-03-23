import { createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import Register from "./components/auth/Register";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
    {
        path : '*',
        element : <NotFound/>,
    },
    {
        path : '/',
        element : <Login/>,
    },
    {
        path : '/forgot_password',
        element : <ForgotPassword/>,
    },
    {
        path : '/register',
        element : <Register/>,
    },
    
]);

export default router;