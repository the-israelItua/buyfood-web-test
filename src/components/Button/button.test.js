import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./index";

describe("Button", () => {
  test("renders the correct text passed", () => {
    render(<Button btnText="Test button" />);
    const btn = screen.getByRole("button", { name: /Test button/i });
    expect(btn).toBeInTheDocument();
  });
  test("clicking the button calls the onClick function passed", () => {
    const mockClick = jest.fn();
    render(<Button btnText="Test button" onClick={mockClick} />);
    const btn = screen.getByRole("button", { name: /Test button/i });
    fireEvent.click(btn);
    expect(mockClick).toBeCalled();
  });
  test("has the correct background color passed", () => {
    render(<Button btnText="Test button" bgColor="#ffffff" />);
    const btn = screen.getByRole("button", { name: /Test button/i });
    expect(btn).toHaveStyle("background: #ffffff");
  });
});
