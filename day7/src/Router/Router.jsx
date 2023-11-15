import{createBrowserRouter} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import ContactUs from "../Pages/ContactUs"
import About from "../Pages/About"
const router = createBrowserRouter ([
    {
        path: "/",
        element:<HomePage/>
    },
    {
        path: "/homepage",
        element:<HomePage/>
    },
    {
        path: "/contactus",
        element:<ContactUs/>
    },
    {
        path: "/about",
        element:<About/>
    },
])

export default router