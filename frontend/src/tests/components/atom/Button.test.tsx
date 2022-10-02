import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../../components/atoms/Button/Button";

describe("Button", () => {
  test("renders Button Component", () => {
    const clickHandler = jest.fn();

    render(
      <Button onClick={clickHandler} data-testid="test-id">
        Login
      </Button>
    );

    fireEvent.click(screen.getByText(/Login/i));

    expect(clickHandler).toBeCalled();
  });
});
