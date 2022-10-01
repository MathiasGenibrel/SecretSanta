import {
  IAuthResponse,
  ILoginBody,
  IRegisterBody,
} from "../interface/api/auth";
import { TAuth } from "./auth.types";

export const auth: TAuth = async (data, path, context) => {
  try {
    const userData = await context.fetcher.post<
      IAuthResponse,
      IRegisterBody | ILoginBody
    >(path, data);

    context.setUser(userData);
  } catch (error) {
    console.log(error);
  }
};
