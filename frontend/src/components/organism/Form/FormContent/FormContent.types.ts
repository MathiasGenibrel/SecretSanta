import { RegisterOptions } from "react-hook-form";
import { NavigateProps } from "react-router-dom";
import { IButtonProps } from "../../../atoms/Button/Button.types";
import { EInputType } from "../../../atoms/Input/Input.types";

interface IField {
  label: string;
  id: string;
  name: string;
  type: EInputType;
  schema: RegisterOptions;
}

interface ILink extends NavigateProps {
  text: string;
}

export interface IFormContent {
  title: string;
  fields: IField[];
  buttons: IButtonProps[];
  link?: ILink;
}

export interface IFormContentCase {
  login: IFormContent;
  register: IFormContent;
}
