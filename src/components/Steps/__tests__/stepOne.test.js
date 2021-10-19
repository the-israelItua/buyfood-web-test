import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import StepOne from "../StepOne";

describe("Steps", () => {
  describe("Step One", () => {
    test("renders the correct header text", () => {
      render(<StepOne />);
      const headerText = screen.getByRole("heading", {
        name: /Verify Account/i,
      });
      expect(headerText).toBeInTheDocument();
    });
    test("clicking the Personal Account Number button renders the personal option", () => {
      render(<StepOne />);
      const personalBtn = screen.getByRole("button", {
        name: /Personal account number/i,
      });
      fireEvent.click(personalBtn);
      const personalOption = screen.getByTestId("personal-option");
      expect(personalOption).toBeInTheDocument();
    });
    test("clicking the BVN button renders the bvn option", () => {
      render(<StepOne />);
      const personalBtn = screen.getByRole("button", {
        name: /Personal account number/i,
      });
      fireEvent.click(personalBtn);
      const bvnBtn = screen.getByRole("button", {
        name: /BVN/i,
      });
      fireEvent.click(bvnBtn);
      const bvnOption = screen.getByTestId("bvn-option");
      expect(bvnOption).toBeInTheDocument();
    });
    test("clicking the Continue button calls updateStep function with the next step value", () => {
      const mockUpdateStep = jest.fn();
      render(<StepOne current={1} updateStep={mockUpdateStep} />);
      const continueBtn = screen.getByRole("button", { name: /Continue/i });
      fireEvent.click(continueBtn);
      expect(mockUpdateStep).toBeCalledWith(2);
    });
  });
});
