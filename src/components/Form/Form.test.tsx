import { render, screen, fireEvent } from "@testing-library/react";
import Form from ".";
describe("the form works", () => {
  const onSubmit = jest.fn();
  it("renders", () => {
    render(<Form onSumbit={onSubmit} />);
    const inputElement = screen.getByLabelText(
      "Type a name to login"
    ) as HTMLInputElement;
    const submitButton = screen.getByText("Log In");
    expect(submitButton).toBeDisabled();
    expect(inputElement.value).toBe("");
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");
    expect(submitButton).not.toBeDisabled();
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalled();
  });
  screen.debug();
});
