import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Features from "../pages/Features";
import GlobalSupport from "../pages/GlobalSupport";
import FAQ from "../pages/FAQ";
import Products from "../pages/Products";
import CookiePolicy from "../pages/CookiePolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import GeneralCondition from "../pages/GeneralCondition";
import Contact from "../pages/Contact"

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
            },
            {
                path: "/faq",
                element :<FAQ/>
            },
            {
                path: "/products",
                element :<Products/>
            },
            {
                path: "/cookie",
                element :<CookiePolicy/>
            },
            {
                path: "/privacy",
                element :<PrivacyPolicy/>
            },
            {
                path: "/general",
                element :<GeneralCondition/>
            },
            {
                path : "/contact",
                element:<Contact/>
            }
        ]
    }
])