import { IAuthContext } from "../context/auth-context.types";
import { ILoginBody, IRegisterBody } from "../interface/api/auth";

export type TAuth = (
  data: ILoginBody | IRegisterBody,
  path: "login" | "register",
  context: IAuthContext
) => void;
