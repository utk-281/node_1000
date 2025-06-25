import { createBrowserRouter } from "react-router-dom";
import Layouts from "../pages/Layouts";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

export const Myrouter= createBrowserRouter([
    {
        path:"/",
        element:<Layouts/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/Signup",
                element:<Signup/>
            },
            {
                path:"/Login",
                element:<Login/>
            },

        ]
    }
])
