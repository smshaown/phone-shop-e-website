import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../pages/Home/Home";
import { Favorites } from "../pages/Favorites/Favorites";
import { Login } from "../pages/Login/Login";


const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/phones.json')
            },
            {
                path: '/favorites',
                element: <Favorites />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])

export default myCreatedRouter;