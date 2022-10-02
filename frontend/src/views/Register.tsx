import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import context
import AuthContext from "../context/auth-context";

// Import components
import { auth } from "../helpers/auth";
import { Form } from "../components/organism/Form/Form";

// Import interfaces
import { IRegisterBody } from "../interface/api/auth";

import "./ConnectionForm.css";

export const Register = () => {
  const userContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userContext.user) navigate("/");
  }, [userContext.user, navigate]);

  return (
    <section>
      <Form
        type="register"
        title="Create an Account"
        submitHandler={(data: IRegisterBody) =>
          auth(data, "register", userContext)
        }
      />
    </section>
  );
};
