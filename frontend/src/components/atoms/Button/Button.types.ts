export interface IButtonProps {
  onClick?: () => void;
  children: JSX.Element | string | (JSX.Element | string)[];
  type?: EButton;
}

export enum EButton {
  submit = "submit",
  button = "button",
  reset = "reset",
}
