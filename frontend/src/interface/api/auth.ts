export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRegisterBody {
  username: string;
  email: string;
  password: string;
}

export interface IAuthResponse {
  id: number;
  username: string;
  token: string;
}
