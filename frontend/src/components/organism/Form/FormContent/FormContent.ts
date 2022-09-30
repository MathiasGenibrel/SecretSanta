// Import components
import { loginContent } from "./Content/login";
import { registerContent } from "./Content/register";

// Import interfaces
import { IFormContentCase } from "./FormContent.types";

// Todo - add more cases => register && createEvent
// Different cases of form content (login, register, createEvent, etc.)
export const FormContent: IFormContentCase = {
  login: loginContent,
  register: registerContent,
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
