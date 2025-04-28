import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            // {
            //     index: true,
            //     element: <HomePage />,
            // },
            {
                path: "/login",
                element: <Login />,
            },
            {
              path: "/registration",
              element: <Registration />,
          },
            
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;

