import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Toggle from "./index";

describe("Toggle", () => {
  test("clicking show opens the expanded menu", () => {
    render(<Toggle />);
    const show = screen.getByText(/show/i);
    fireEvent.click(show);
    const menu = screen.getByTestId("expanded-menu");
    expect(menu).toBeInTheDocument();
  });
  test("clicking hide closes the expanded menu", () => {
    render(<Toggle />);
    const show = screen.getByText(/show/i);
    fireEvent.click(show);
    const hide = screen.getByText(/hide/i);
    fireEvent.click(hide);
    const menu = screen.queryByTestId("expanded-menu");
    expect(menu).toBe(null);
  });
});
