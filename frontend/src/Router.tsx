import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./views/Landing";

import { Login } from "./views/Login";
import { Register } from "./views/Register";

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
