import { EButton } from "../../../../atoms/Button/Button.types";
import { EInputType } from "../../../../atoms/Input/Input.types";
import { IFormContent } from "../FormContent.types";

export const registerContent: IFormContent = {
  title: "Register",
  fields: [
    {
      label: "Username :",
      id: "username",
      name: "username",
      type: EInputType.text,

      // Schema for validation
      schema: {
        required: "Username is required",
        minLength: {
          value: 3,
          message: "Username must be at least 3 characters",
        },
      },
    },
    {
      label: "Email :",
      id: "email",
      name: "email",
      type: EInputType.email,

      // Schema for validation
      schema: {
        required: "Email is required",
        pattern: {
          value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g, // email regex from "https://regexr.com/3e48o" (edited)}
          message: "Email is not valid",
        },
      },
    },
    {
      label: "Password :",
      id: "password",
      name: "password",
      type: EInputType.password,

      // Schema for validation
      schema: {
        required: "Password is required",
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g, // password regex from "https://regexr.com/3bfsi"
          message:
            "Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number",
        },
      },
    },
  ],

  // Form Button (submit, reset, etc.)
  buttons: [
    {
      type: EButton.submit,
      children: "Create an Account",
    },
  ],
  link: {
    text: "Already have an account ?",
    to: "/login",
  },
};
