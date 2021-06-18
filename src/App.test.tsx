import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("has form", () => {
  render(<App />);
  const inputElement = screen.getByLabelText(
    "Type a name to login"
  ) as HTMLInputElement;
  const submitButton = screen.getByText("Log In");
  expect(submitButton).toBeDisabled();
  expect(inputElement.value).toBe("");
  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe("test");
  expect(submitButton).not.toBeDisabled();
});
