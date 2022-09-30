import React from "react";
import { Form } from "../organism/Form/Form";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  return <Form type="register" navigate={navigate} />;
};
