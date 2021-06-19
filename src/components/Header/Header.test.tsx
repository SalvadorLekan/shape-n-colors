import { fireEvent, render, screen } from "@testing-library/react";
import Header from ".";
import StoreProvider from "../StoreProvider";
import LoggedInStoreProvider from "../LoggedInStoreProvider";

describe("handles the app header", () => {
  test("renders header", () => {
    render(
      <StoreProvider>
        <Header />
      </StoreProvider>
    );
    const buttonElement = screen.queryByText("Log Out");
    expect(buttonElement).not.toBeInTheDocument();
  });

  it("has log out button when logged in", () => {
    render(
      <LoggedInStoreProvider>
        <Header />
      </LoggedInStoreProvider>
    );
    const buttonElement = screen.getByText("Log Out");
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(buttonElement).not.toBeInTheDocument();
  });
});
