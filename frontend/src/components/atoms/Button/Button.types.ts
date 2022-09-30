export interface IButtonProps {
  children: JSX.Element | string | (JSX.Element | string)[];
  onClick?: () => void;
  type?: EButton;
}

export enum EButton {
  submit = "submit",
  button = "button",
  reset = "reset",
}
