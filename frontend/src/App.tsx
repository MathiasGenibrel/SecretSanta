import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Fetcher } from "./class/Fetcher";

// Import Context
import AuthContext from "./context/auth-context";
import { IAuthResponse } from "./interface/api/auth";

// Import router
import { Router } from "./Router";

export const App = () => {
  const [user, setUser] = useState<IAuthResponse | undefined>(undefined);
  // TODO: Change url of fetcher
  const User = new Fetcher("https://jsonplaceholder.typicode.com");

  return (
    <AuthContext.Provider
      value={{ setUser: setUser, user: user, fetcher: User }}
    >
      <RouterProvider router={Router} />
    </AuthContext.Provider>
  );
};
