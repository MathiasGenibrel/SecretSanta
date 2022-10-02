import React, { FunctionComponent } from "react";
import { IInputProps } from "./Input.types";

export const Input: FunctionComponent<IInputProps> = ({
  id,
  name,
  register, // Register is a function from react-hook-form, we implement name and schema as arguments
  schema, // schema is an object with the validation rules
  type = "text",
}) => {
  return (
    <input
      data-testid={`${id}-input-content`}
      type={type}
      id={id}
      {...register(name, schema)}
    />
  );
};
