import React, { FunctionComponent } from "react";
import { IInputProps } from "./Input.types";

export const Input: FunctionComponent<IInputProps> = ({
  id,
  name,
  register,
  type = "text",
  schema,
}) => {
  return <input type={type} id={id} {...register(name, schema)} />;
};
