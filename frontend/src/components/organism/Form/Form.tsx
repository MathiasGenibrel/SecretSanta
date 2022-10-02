import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { NavLink, To } from "react-router-dom";

// Import components
import { Button } from "../../atoms/Button/Button";
import { InputWithLabel } from "../../molecules/InputWithLabel/InputWithLabel";

// Import content
import { FormContent } from "./FormContent/FormContent";

interface IFormProps {
  type: "login" | "register";
  title: string;
  submitHandler: (data: any) => void;
}

export const Form: FunctionComponent<IFormProps> = ({
  type,
  title,
  submitHandler,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <form
      data-testid="test-form-content"
      onSubmit={handleSubmit(submitHandler)}
    >
      <h2>{title}</h2>
      {FormContent[type].fields.map((field, index) => {
        return (
          <div key={index}>
            <InputWithLabel
              key={index}
              id={field.id}
              name={field.name}
              type={field.type}
              register={register}
              schema={field.schema}
            >
              {field.label}
            </InputWithLabel>
            {errors[field.name] && (
              <span className={"inputError"}>
                {errors[field.name]?.message as string}
              </span>
            )}
          </div>
        );
      })}

      {FormContent[type].buttons.map((button, index) => {
        return (
          <Button key={index} type={button.type} onClick={button.onClick}>
            {button.children}
          </Button>
        );
      })}

      <NavLink to={FormContent[type].link?.to as To}>
        {FormContent[type].link?.text}
      </NavLink>
    </form>
  );
};
