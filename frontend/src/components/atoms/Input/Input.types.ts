import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface IInputProps {
  id: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  type?: EInputType;
  schema?: RegisterOptions;
}

export enum EInputType {
  text = "text",
  password = "password",
  email = "email",
}
