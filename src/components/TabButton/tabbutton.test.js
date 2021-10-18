import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import TabButton from "./index";

describe("TabButton", () => {
  test("renders the correct text passed", () => {
    render(<TabButton tabText="Test tab" />);
    const btn = screen.getByRole("button", { name: "Test tab" });
    expect(btn).toBeInTheDocument();
  });
  test("calls the onClick function passed when clicked", () => {
    const mockClick = jest.fn();
    render(<TabButton tabText="Test tab" onClick={mockClick} />);
    const btn = screen.getByRole("button", { name: "Test tab" });
    fireEvent.click(btn);
    expect(mockClick).toBeCalled();
  });
});
