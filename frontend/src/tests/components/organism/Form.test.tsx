import React from "react";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Form } from "../../../components/organism/Form/Form";
import { BrowserRouter } from "react-router-dom";

describe("Form", () => {
  test("renders Form Component", async () => {
    const submitHandler = jest.fn();

    render(
      <BrowserRouter>
        <Form
          type="register"
          title="Create an Account"
          submitHandler={submitHandler}
          data-testid="form-test-id"
        />
      </BrowserRouter>
    );

    const formElement = screen.getByTestId(
      "test-form-content"
    ) as HTMLFormElement;

    // Change value of form input
    const username = screen.getByTestId(
      "username-input-content"
    ) as HTMLInputElement;
    fireEvent.change(username, { target: { value: "Mathias" } });

    const email = screen.getByTestId("email-input-content") as HTMLInputElement;
    fireEvent.change(email, { target: { value: "mathias.geni@gmail.com" } });

    const password = screen.getByTestId(
      "password-input-content"
    ) as HTMLInputElement;
    fireEvent.change(password, { target: { value: "jeGalereA3h" } });

    //Submit form
    fireEvent.submit(formElement);

    await waitFor(() => {
      expect(submitHandler).toBeCalled();
    });

    expect(formElement).toHaveFormValues({
      username: "Mathias",
      email: "mathias.geni@gmail.com",
      password: "jeGalereA3h",
    });
  });
});
