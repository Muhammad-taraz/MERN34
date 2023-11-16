import{createBrowserRouter} from "react-router-dom"
import HomePage from "../Pages/HomePage"
import TrackTasks from "../Pages/TrackTasks"
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
        path: "/tracktask",
        element:<TrackTasks/>
    },
])

export default router