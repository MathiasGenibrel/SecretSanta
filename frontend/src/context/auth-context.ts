import { createContext } from "react";
import { Fetcher } from "../class/Fetcher";
import { IAuthContext } from "./auth-context.types";

const User = new Fetcher("https://jsonplaceholder.typicode.com");

const AuthContext = createContext<IAuthContext>({
  fetcher: User,
  setUser: () => {},
  user: undefined,
});

export default AuthContext;
