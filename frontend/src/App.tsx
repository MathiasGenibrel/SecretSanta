import React, { useState } from "react";
import { Fetcher } from "./class/Fetcher";

// Import environment variables
import { environment } from "./environment/environment";

// Import Context
import AuthContext from "./context/auth-context";
import { IAuthResponse } from "./interface/api/auth";

// Import router
import { Router } from "./Router";

export const App = () => {
  const [user, setUser] = useState<IAuthResponse | undefined>(undefined);
  const UserFetcher = new Fetcher(environment.api.url);

  return (
    <AuthContext.Provider
      value={{ setUser: setUser, user: user, fetcher: UserFetcher }}
    >
      <Router />
    </AuthContext.Provider>
  );
};
