// app.test.js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { App } from "../../App";

test("full app rendering/navigating", async () => {
  render(<App />);

  // landing page redirects to login page
  expect(screen.getByText("Connect to your Account")).toBeInTheDocument();
  expect(screen.getByText(/Connect to your Account/i)).toBeInTheDocument();

  // navigate to "register" page by clicking link
  await userEvent.click(screen.getByText(/You don't have any account ?/i));
  expect(screen.getAllByText("Create an Account")[0]).toBeInTheDocument();
  expect(screen.getByRole("button")).toBeInTheDocument();
});
