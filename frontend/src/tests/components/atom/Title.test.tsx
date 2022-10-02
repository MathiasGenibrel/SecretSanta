import React from "react";

import { render, screen } from "@testing-library/react";
import { Title } from "../../../components/atoms/Title/Title";

describe("Title", () => {
  test("renders h1 title", () => {
    render(<Title type="h1">Hello</Title>);

    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders h2 title", () => {
    render(<Title type="h2">Hello</Title>);

    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders h3 title", () => {
    render(<Title type="h3">Hello</Title>);

    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders h4 title", () => {
    render(<Title type="h4">Hello</Title>);

    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders h5 title", () => {
    render(<Title type="h5">Hello</Title>);

    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders h6 title", () => {
    render(<Title type="h6">Hello</Title>);

    const linkElement = screen.getByText(/Hello/i);
    expect(linkElement).toBeInTheDocument();
  });
});
