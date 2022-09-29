import { RegisterOptions } from "react-hook-form";
import { IButtonProps } from "../../../atoms/Button/Button.types";
import { EInputType } from "../../../atoms/Input/Input.types";

interface IField {
  label: string;
  id: string;
  name: string;
  type: EInputType;
  schema: RegisterOptions;
}

interface IFormContent {
  title: string;
  fields: IField[];
  buttons: IButtonProps[];
}

export interface IFormContentCase {
  login: IFormContent;
}
