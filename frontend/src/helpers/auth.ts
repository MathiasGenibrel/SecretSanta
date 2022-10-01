import { IAuthContext } from "../context/auth-context.types";
import {
  IAuthResponse,
  ILoginBody,
  IRegisterBody,
} from "../interface/api/auth";

export const auth = async (
  data: ILoginBody | IRegisterBody,
  path: string,
  context: IAuthContext
) => {
  const userData = await context.fetcher.get<IAuthResponse>(path);

  context.setUser(userData);
};
