import { Dispatch, SetStateAction } from "react";

// Import globals interfaces
import { IAuthResponse } from "../interface/api/auth";

// Import class
import { Fetcher } from "../class/Fetcher";

export interface IAuthContext {
  fetcher: Fetcher;
  setUser: Dispatch<SetStateAction<IAuthResponse | undefined>>;
  user?: IAuthResponse;
}
