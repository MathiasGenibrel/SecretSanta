import React, { FunctionComponent } from "react";

// Import interfaces
import { IButtonProps } from "./Button.types";

export const Button: FunctionComponent<IButtonProps> = ({
  onClick,
  children,
  type,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
