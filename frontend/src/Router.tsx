import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./components/views/Landing";

import { Login } from "./components/views/Login";
import { Register } from "./components/views/Register";

export const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Landing />,
  },
]);
