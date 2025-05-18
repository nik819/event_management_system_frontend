import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import ShowEventDetails from "./pages/ShowEventDetails";
import ForgotPassword from "./pages/ForgonPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/event",
        element: <EventPage />,
      },
      {
        path: "/details",
        element: <ShowEventDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
