import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Input from "./index";

describe("Input", () => {
  test("renders the correct label passed", () => {
    render(<Input label="Test label" />);
    const label = screen.getByText("Test label");
    expect(label).toBeInTheDocument();
  });
  test("has the correct input type passed", () => {
    render(<Input type="text" />);
    const input = screen.getByRole("textbox");
    expect(input.type).toBe("text");
  });
  test("calls the onChange function passed with the correct input value", () => {
    const mockChange = jest.fn();
    render(<Input type="text" onChange={mockChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Test value" } });
    expect(mockChange).toBeCalledWith("Test value");
  });
  test("renders @ sign for social media inputs", () => {
    render(<Input socials />);
    const atSign = screen.getByText("@");
    expect(atSign).toBeInTheDocument();
  });
});
