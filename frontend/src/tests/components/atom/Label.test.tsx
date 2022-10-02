import React from "react";

import { render, screen } from "@testing-library/react";
import { Label } from "../../../components/atoms/Label/Label";

describe("Label", () => {
  test("renders Label Component with Input Element", () => {
    render(<Label htmlFor="input">Username</Label>);

    const childrenElement = screen.getByText(/Username/i);
    expect(childrenElement).toContainHTML("input");
  });
});
