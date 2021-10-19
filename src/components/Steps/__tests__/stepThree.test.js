import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import StepThree from "../StepThree";

describe("Steps", () => {
  describe("Step Three", () => {
    test("renders the correct header text", () => {
      render(<StepThree />);
      const headerText = screen.getByRole("heading", {
        name: /Business Category/i,
      });
      expect(headerText).toBeInTheDocument();
    });
    test("renders the POS Yes button", () => {
      render(<StepThree />);
      const yesBtn = screen.getByRole("button", {
        name: /Yes/i,
      });
      expect(yesBtn).toBeInTheDocument();
    });
    test("renders the POS No button", () => {
      render(<StepThree />);
      const noBtn = screen.getByRole("button", {
        name: /No/i,
      });
      expect(noBtn).toBeInTheDocument();
    });
    test("renders the complete button", () => {
      render(<StepThree />);
      const noBtn = screen.getByRole("button", {
        name: /Complete/i,
      });
      expect(noBtn).toBeInTheDocument();
    });
  });
});
