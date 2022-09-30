import React, { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavigateFunction, NavLink, To } from "react-router-dom";

// Import components
import { Button } from "../../atoms/Button/Button";
import { InputWithLabel } from "../../molecules/InputWithLabel/InputWithLabel";

// Import content
import { FormContent } from "./FormContent/FormContent";

interface IFormProps {
  type: "login" | "register";
  navigate?: NavigateFunction;
}

export const Form: FunctionComponent<IFormProps> = ({ type, navigate }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  /**
   * TODO: Implement onSubmit function
   * Get data from form and send it to the backend
   * If the form is valid and the backend returns a 200 status code, the user is logged in
   * and redirected to the dashboard
   * @param data Object contain the data from the form
   */
  const onSubmit: SubmitHandler<any> = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            {errors[field.name] && `${errors[field.name]?.message}`}
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
