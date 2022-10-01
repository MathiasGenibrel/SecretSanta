import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import components
import { Form } from "../components/organism/Form/Form";

// Import styles
import "./ConnectionForm.css";

// Import context
import AuthContext from "../context/auth-context";

// Import auth
import { auth } from "../helpers/auth";
import { ILoginBody } from "../interface/api/auth";

// TODO: Change path of auth function (in submitHandler)
export const Login = () => {
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userContext.user) navigate("/");
  }, [userContext.user, navigate]);

  return (
    <section>
      <Form
        type="login"
        title="Connect to your Account"
        submitHandler={(data: ILoginBody) => auth(data, "login", userContext)}
      />
    </section>
  );
};
