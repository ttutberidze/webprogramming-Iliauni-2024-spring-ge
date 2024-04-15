import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/home";
import Users from "./components/users";
import UserPage from "./components/userPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/users',
                element: <Users />,
                // children: [
                //     {
                //         path: ':userId/edit/:page/:limit',
                //         element: <UserPage />
                //     }
                // ]
            },
            {
                path: '/users/:userId/edit/:page/:limit',
                element: <UserPage />
            }
        ]
    }
])