export interface ILabelProps extends ILabelChildrenProps {
  htmlFor: string;
}

export interface ILabelChildrenProps {
  children: JSX.Element | string | (JSX.Element | string)[];
}
