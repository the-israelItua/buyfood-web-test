import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Stepper from "./index";

describe("Stepper", () => {
  test("renders the correct number of items passed", () => {
    render(<Stepper items={["Value 1", "Value 2", "Value 3"]} />);
    const val1 = screen.getByText("Value 1");
    const val2 = screen.getByText("Value 2");
    const val3 = screen.getByText("Value 3");
    expect(val1).toBeInTheDocument();
    expect(val2).toBeInTheDocument();
    expect(val3).toBeInTheDocument();
  });
});
