import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "./index";

const WrappedLayout = () => {
  return (
    <Layout>
      <p>Test child component</p>
    </Layout>
  );
};
describe("Layout", () => {
  test("renders the log out button", () => {
    render(<WrappedLayout />);
    const logoutBtn = screen.getByRole("button", { name: /Logout/i });
    expect(logoutBtn).toBeInTheDocument();
  });
  test("renders the stepper", () => {
    render(<WrappedLayout />);
    const stepper = screen.getByTestId("stepper");
    expect(stepper).toBeInTheDocument();
  });
  test("renders the children component", () => {
    render(<WrappedLayout />);
    const child = screen.getByText("Test child component");
    expect(child).toBeInTheDocument();
  });
  test("Background image has the correct alt text", () => {
    render(<WrappedLayout />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "background image");
  });
});
