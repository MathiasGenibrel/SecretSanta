import React, { useContext } from "react";

// Import context
import AuthContext from "../context/auth-context";

// Import components
import { auth } from "../helpers/auth";
import { Form } from "../components/organism/Form/Form";

import "./ConnectionForm.css";

// TODO: Change path of auth function (in submitHandler)
export const Register = () => {
  const user = useContext(AuthContext);
  return (
    <section>
      <Form
        type="register"
        title="Create an Account"
        submitHandler={(data) => auth(data, "users/1", user)}
      />
    </section>
  );
};
