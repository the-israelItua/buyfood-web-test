import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders the layout", () => {
    render(<App />);
    const layout = screen.getByTestId("layout");
    expect(layout).toBeInTheDocument();
  });
});
