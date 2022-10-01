import React, { useContext } from "react";

// Import context
import AuthContext from "../context/auth-context";

// Import components
import { auth } from "../helpers/auth";
import { Form } from "../components/organism/Form/Form";

// Import interfaces
import { IRegisterBody } from "../interface/api/auth";

import "./ConnectionForm.css";

// TODO: Change path of auth function (in submitHandler)
export const Register = () => {
  const user = useContext(AuthContext);
  return (
    <section>
      <Form
        type="register"
        title="Create an Account"
        submitHandler={(data: IRegisterBody) => auth(data, "register", user)}
      />
    </section>
  );
};
