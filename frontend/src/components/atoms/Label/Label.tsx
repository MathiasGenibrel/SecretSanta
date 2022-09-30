import React, { FunctionComponent } from "react";

import { ILabelProps } from "./Label.interface";

export const Label: FunctionComponent<ILabelProps> = ({
  children,
  htmlFor,
}) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};
