import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Features from "../pages/Features";
import GlobalSupport from "../pages/GlobalSupport";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/features",
                element:<Features/>
            },
            {
                path:"/support",
                element:<GlobalSupport/>
            }
        ]
    }
])