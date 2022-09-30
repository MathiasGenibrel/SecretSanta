// Import components
import { EButton } from "../../../atoms/Button/Button.types";
import { EInputType } from "../../../atoms/Input/Input.types";

// Import interfaces
import { IFormContentCase } from "./FormContent.types";

// Todo - add more cases => register && createEvent
// Different cases of form content (login, register, createEvent, etc.)
export const FormContent: IFormContentCase = {
  login: {
    title: "Login",
    fields: [
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
        children: "Login",
      },
      {
        type: EButton.button,
        children: "Register",
        onClick: () => {
          console.log("Register");
        },
      },
    ],
  },
};

// Fields for register form
// fields: [
//   {
//     label: "Username :",
//     id: "username",
//     name: "username",
//     type: EInputType.text,
//   },
//   {
//     label: "Email :",
//     id: "email",
//     name: "email",
//     type: EInputType.email,
//   },
//   {
//     label: "Password :",
//     id: "password",
//     name: "password",
//     type: EInputType.password,
//   },
// ],
