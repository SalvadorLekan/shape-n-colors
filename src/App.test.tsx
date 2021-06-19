import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import StoreProvider from "./components/StoreProvider";

test("has form", () => {
  render(
    <StoreProvider>
      <App />
    </StoreProvider>
  );
  const inputElement = screen.getByLabelText(
    "Type a name to login"
  ) as HTMLInputElement;
  const buttonElement = screen.queryByText("Log Out");
  expect(buttonElement).not.toBeInTheDocument();
  const submitButton = screen.getByText("Log In");
  expect(submitButton).toBeDisabled();
  expect(inputElement.value).toBe("");
  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe("test");
  expect(submitButton).not.toBeDisabled();
  fireEvent.click(submitButton);
  expect(submitButton).not.toBeInTheDocument();
  const logoutButton = screen.getByText("Log Out");
  expect(logoutButton).toBeInTheDocument();
  fireEvent.click(logoutButton);
  const login = screen.getByText("Log In");
  expect(login).toBeInTheDocument();
  expect(login).toBeDisabled();
});
