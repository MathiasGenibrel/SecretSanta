import React, { FunctionComponent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../atoms/Button/Button";
import { InputWithLabel } from "../../molecules/InputWithLabel/InputWithLabel";

import { FormContent } from "./FormContent/FormContent";

interface IFormProps {
  type: "login";
}

export const Form: FunctionComponent<IFormProps> = ({ type }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {FormContent[type].fields.map((field, index) => {
        return (
          <>
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
          </>
        );
      })}
      {FormContent[type].buttons.map((button, index) => {
        return (
          <Button key={index} type={button.type} onClick={button.onClick}>
            {button.children}
          </Button>
        );
      })}
    </form>
  );
};
