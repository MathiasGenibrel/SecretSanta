import React, { FunctionComponent } from "react";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";

// Import types
import { IInputWithLabelProps } from "./InputWithLabel.types";

export const InputWithLabel: FunctionComponent<IInputWithLabelProps> = ({
  id,
  type,
  name,
  children,
  schema,
  register,
}) => {
  return (
    <Label htmlFor={id}>
      <p>{children}</p>
      <Input
        id={id}
        name={name}
        type={type}
        schema={schema}
        register={register}
      />
    </Label>
  );
};
