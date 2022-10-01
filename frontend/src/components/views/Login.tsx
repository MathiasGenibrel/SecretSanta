import React, { useContext } from "react";

// Import components
import { Form } from "../organism/Form/Form";

// Import styles
import "./ConnectionForm.css";

// Import context
import AuthContext from "../../context/auth-context";

// Import auth
import { auth } from "../../helpers/auth";

// TODO: Change path of auth function (in submitHandler)
export const Login = () => {
  const user = useContext(AuthContext);

  return (
    <section>
      <Form
        type="login"
        title="Connect to your Account"
        submitHandler={(data) => auth(data, "users/1", user)}
      />
    </section>
  );
};
