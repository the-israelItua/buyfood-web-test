import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import StepTwo from "../StepTwo";

describe("Steps", () => {
  describe("Step Two", () => {
    test("renders the correct header text", () => {
      render(<StepTwo />);
      const headerText = screen.getByRole("heading", {
        name: /Social Handles/i,
      });
      expect(headerText).toBeInTheDocument();
    });
    test("renders the correct sub-header text", () => {
      render(<StepTwo />);
      const subHeaderText = screen.getByText(
        /Enter your business social media handles/i
      );
      expect(subHeaderText).toBeInTheDocument();
    });

    test("clicking the Confirm Social Handles button calls updateStep function with the next step value", () => {
      const mockUpdateStep = jest.fn();
      render(<StepTwo current={2} updateStep={mockUpdateStep} />);
      const continueBtn = screen.getByRole("button", {
        name: /Confirm Social Handles/i,
      });
      fireEvent.click(continueBtn);
      expect(mockUpdateStep).toBeCalledWith(3);
    });
  });
});
