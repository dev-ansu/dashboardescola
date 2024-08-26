import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

export const routes = createBrowserRouter([
    {
        path:"/",
        element: <Navigate to="/login" replace={true} />
    },
    {
        path:"/login",
        element:<Login />
    },
    {
        path:"/signup",
        element:<Register />
    }
])