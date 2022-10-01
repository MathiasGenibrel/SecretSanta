import React, { useContext } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Import Context
import AuthContext from "./context/auth-context";

// Import Views
import { Landing } from "./views/Landing";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

export const Router = () => {
  const userContext = useContext(AuthContext);

  // Create a router
  const RouterComposer = createBrowserRouter([
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
      // Redirect to login if user is not logged in
      element: userContext.user ? (
        <Landing />
      ) : (
        <Navigate replace to={"/login"} />
      ),
    },
  ]);

  return <RouterProvider router={RouterComposer} />;
};
